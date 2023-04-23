import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCollapsibleContentComponent } from './experience-collapsible-content.component';

describe('ExperienceCollapsibleContentComponent', () => {
  let component: ExperienceCollapsibleContentComponent;
  let fixture: ComponentFixture<ExperienceCollapsibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceCollapsibleContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCollapsibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
