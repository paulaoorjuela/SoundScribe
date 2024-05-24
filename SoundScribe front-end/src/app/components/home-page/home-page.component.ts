import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule} from '@angular/material/icon';
import { PublicationCardComponent } from '../templates/publication-card/publication-card.component';
import { MatButtonModule } from '@angular/material/button';
import { CreatePublicationFormComponent } from '../templates/create-publication-form/create-publication-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, PublicationCardComponent, MatIconModule, MatButtonModule, MatCardModule,],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  publications = [1,1,1,1,1,1]

  constructor(public modal: MatDialog) {

  }

  openCreatePublicationModal(){
    this.modal.open(CreatePublicationFormComponent)
  }

}
