import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { CustomFormsModule } from '../../../modules/custom-forms/custom-forms.module';
import { ILogin } from '../../../interfaces/iuser';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CustomFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  constructor(
    private _authService: AuthService,
    private _messageService: MessageService,
    private _router: Router,
    private _userService: UserService) {
    this.initControls();
    this.initGroups();
  }
  user!: FormGroup;

  email!: FormControl;
  password!: FormControl;

  isLoading: boolean = false;
  initControls() {
    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  initGroups() {
    this.user = new FormGroup({
      email: this.email,
      password: this.password,
    })
  }

  submit() {
    if (this.user.valid) {
      this.loginApi(this.user.value);
    } else {
      this.user.markAllAsTouched();
      Object.keys(this.user.controls).forEach(control => this.user.controls[control].markAsDirty())
    }
  }

  loginApi(user: ILogin): void {
    this.isLoading = true;
    this._authService.login(user).subscribe({
      next: (res) => {
        if (res._id) {
          this.showToast('success', 'Success', 'User Logged In Successfully');
          localStorage.setItem('token', res._id);
          this._userService.userName.next(res.name);
        }
        this.isLoading = false;
        setTimeout(() => {
          this._router.navigate(['/home']);
        }, 3000);
        this.user.reset();
      },
      error: (err) => {
        console.error(err.error.error)
        this.showToast('error', 'Error', err.error.error)
        this.isLoading = false;
      }

    })
  }

  showToast(severity: string, summary: string, detail: string) {
    this._messageService.add({ severity: severity, summary: summary, detail: detail });
  }
}
