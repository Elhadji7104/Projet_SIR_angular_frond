import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSondageComponent } from './participant-sondage.component';

describe('ParticipantSondageComponent', () => {
  let component: ParticipantSondageComponent;
  let fixture: ComponentFixture<ParticipantSondageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantSondageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantSondageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
