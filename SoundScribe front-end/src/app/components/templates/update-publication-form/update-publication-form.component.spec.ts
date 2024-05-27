import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublicationFormComponent } from './update-publication-form.component';

describe('UpdatePublicationFormComponent', () => {
  let component: UpdatePublicationFormComponent;
  let fixture: ComponentFixture<UpdatePublicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePublicationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePublicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
