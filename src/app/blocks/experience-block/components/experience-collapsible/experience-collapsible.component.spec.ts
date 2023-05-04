import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCollapsibleComponent } from './experience-collapsible.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { Mock } from 'src/app/testing/mock-data.test';

describe('ExperienceCollapsibleComponent', () => {
  let component: ExperienceCollapsibleComponent;
  let fixture: ComponentFixture<ExperienceCollapsibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceCollapsibleComponent
      ],
      imports: [
        NoopAnimationsModule,
        MockModule,
      ],
      providers: [
        { provide: DeviceDetectorService, useValue: MockModule.deviceDetector }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceCollapsibleComponent);
    component = fixture.componentInstance;
    component.experience = Mock.experience;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.deviceDetector).toBeDefined();
  });

  test('should toggle visibility', () => {
    expect(component.visible).toBeFalsy();
    component.toggle();
    expect(component.visible).toBeTruthy();
    component.toggle();
    expect(component.visible).toBeFalsy();
  });
});
