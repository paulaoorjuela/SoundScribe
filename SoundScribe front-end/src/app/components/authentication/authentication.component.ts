import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  publication: any = {
    title: '',
    description: '',
    image: '',
  };

  OnSubmit() {
    console.log('values:', this.publication);
  }
}
