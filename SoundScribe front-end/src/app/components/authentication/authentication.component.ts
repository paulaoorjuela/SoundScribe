import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css',
})
export class AuthenticationComponent {
  isRegistered = false;

  registrationForm = new FormGroup({
    name : new FormControl("", [Validators.required]),
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  loginForm = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email]),
    password : new FormControl("", [Validators.required])
  })

  handleRegistration(){
    console.log("Register:", this.registrationForm.value)
  }

  handleLogin(){
    console.log("Login:", this.loginForm.value)
  }

  togglePanel(){
    this.isRegistered =!this.isRegistered;
  }
}
