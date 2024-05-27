import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-publication-form',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatIconModule, MatDividerModule, MatButtonModule],
  templateUrl: './update-publication-form.component.html',
  styleUrl: './update-publication-form.component.css'
})
export class UpdatePublicationFormComponent {
  publication:any = {
    title:"",
    description:"",
    image:""
  }

  OnSubmit(){
    console.log("values:", this.publication)
  }
}
