import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurLegalTeamComponent } from './our-legal-team.component';

describe('OurLegalTeamComponent', () => {
  let component: OurLegalTeamComponent;
  let fixture: ComponentFixture<OurLegalTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurLegalTeamComponent]
    });
    fixture = TestBed.createComponent(OurLegalTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
