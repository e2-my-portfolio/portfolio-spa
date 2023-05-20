import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceCollapsibleContentComponent } from './experience-collapsible-content.component';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { MockModule } from 'src/app/testing/mock-module.test';

describe('ExperienceCollapsibleContentComponent', () => {
  let component: ExperienceCollapsibleContentComponent;
  let fixture: ComponentFixture<ExperienceCollapsibleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceCollapsibleContentComponent
      ],
      providers: [
        { provide: DeviceDetectorService, useValue: MockModule.deviceDetector }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceCollapsibleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.deviceDetector).toBeDefined();
  });
});
