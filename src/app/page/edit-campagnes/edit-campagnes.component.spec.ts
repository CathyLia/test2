import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCampagnesComponent } from './edit-campagnes.component';

describe('EditCampagnesComponent', () => {
  let component: EditCampagnesComponent;
  let fixture: ComponentFixture<EditCampagnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCampagnesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
