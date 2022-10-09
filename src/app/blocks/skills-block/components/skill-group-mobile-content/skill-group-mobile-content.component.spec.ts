import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGroupMobileContentComponent } from './skill-group-mobile-content.component';

describe('SkillGroupMobileContentComponent', () => {
  let component: SkillGroupMobileContentComponent;
  let fixture: ComponentFixture<SkillGroupMobileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillGroupMobileContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillGroupMobileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
