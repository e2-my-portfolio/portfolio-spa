import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCollapsibleComponent } from './experience-collapsible.component';

describe('ExperienceCollapsibleComponent', () => {
  let component: ExperienceCollapsibleComponent;
  let fixture: ComponentFixture<ExperienceCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCollapsibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCollapsibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
