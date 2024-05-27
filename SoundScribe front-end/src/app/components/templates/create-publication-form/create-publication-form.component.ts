import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-publication-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: './create-publication-form.component.html',
  styleUrl: './create-publication-form.component.css',
})
export class CreatePublicationFormComponent {
  publication: any = {
    title: '',
    description: '',
    image: '',
  };

  OnSubmit() {
    console.log('values:', this.publication);
  }
}
