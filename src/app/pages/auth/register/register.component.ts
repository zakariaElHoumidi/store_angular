import { Component, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { IRegister } from '../../../interfaces/iuser';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CustomFormsModule } from '../../../modules/custom-forms/custom-forms.module';
import { NotificationService } from '../../../services/notification.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CustomFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _router: Router) {
    this.initControls();
    this.initGroups();
  }
  user!: FormGroup;

  name!: FormControl;
  email!: FormControl;
  password!: FormControl;
  rePassword!: FormControl;

  isLoading: boolean = false;
  initControls() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(25)
    ]);

    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);

    this.rePassword = new FormControl('', [
      Validators.required,
      this.passwordMatch(this.password)
    ]);
  }

  initGroups() {
    this.user = new FormGroup({
      name: this.name,
      email: this.email,
      password: this.password,
      rePassword: this.rePassword
    })
  }

  passwordMatch(pass: AbstractControl): ValidatorFn {
    return (rePass: AbstractControl): { [key: string]: boolean } | null => {
      if (pass.value !== rePass.value)
        return { match: true }
      else
        return null
    }
  }

  submit() {
    if (this.user.valid) {
      this.registerApi(this.user.value);
    } else {
      this.user.markAllAsTouched();
      Object.keys(this.user.controls).forEach(control => this.user.controls[control].markAsDirty())
    }
  }

  registerApi(user: IRegister): void {
    this.isLoading = true;
    this._authService.register(user).subscribe({
      next: (res) => {
        if (res._id) {
          this._notificationService.showSuccess('Success', 'User Registered Successfully');
          const {email, password} = this.user.value;

          this._authService.login({email, password}).subscribe({
            next: () => {
              this._router.navigate(['login'])
            },
          });
        }
        this.isLoading = false;
        setTimeout(() => {
          this._router.navigate(['login']);
        }, 3000);
        this.user.reset();
      },
      error: (err) => {
        console.error(err.error.error)
        this._notificationService.showError('Error', err.error.error)
        this.isLoading = false;
      }

    })
  }
}
