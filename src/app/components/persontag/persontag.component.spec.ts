import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersontagComponent } from './persontag.component';

describe('PersontagComponent', () => {
  let component: PersontagComponent;
  let fixture: ComponentFixture<PersontagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersontagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersontagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
