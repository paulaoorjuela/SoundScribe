import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { UpdatePublicationFormComponent } from '../update-publication-form/update-publication-form.component';

@Component({
  selector: 'app-publication-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css'
})
export class PublicationCardComponent {

  constructor(public modal: MatDialog){

  }

  openEditPublicationForm(){
    this.modal.open(UpdatePublicationFormComponent)
  }
}
