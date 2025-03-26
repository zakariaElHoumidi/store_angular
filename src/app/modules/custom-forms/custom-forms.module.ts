import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';


@NgModule({
  imports: [ProgressSpinnerModule, ToastModule, MessagesModule, ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ReactiveFormsModule, AutoFocusModule],
  exports: [ProgressSpinnerModule, ToastModule, MessagesModule, ButtonModule, FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, ReactiveFormsModule, AutoFocusModule],
  providers: [MessageService]
})

export class CustomFormsModule { }
