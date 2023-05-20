import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { SkillsGroupComponent } from './skills-group.component';

describe('SkillsGroupComponent', () => {
  let component: SkillsGroupComponent;
  let fixture: ComponentFixture<SkillsGroupComponent>;
  let deviceDetector: DeviceDetectorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsGroupComponent
      ],
      imports: [
        MockModule,
      ],
      providers: [
        {
          provide: DeviceDetectorService,
          useValue: MockModule.deviceDetector
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsGroupComponent);
    component = fixture.componentInstance;
    component.skillGroup = Mock.skillGroup;
    deviceDetector = TestBed.inject(DeviceDetectorService);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(component.skillGroup).toBeDefined();
    expect(component.visible).toBeFalsy();
    expect(component.isMobile).toBeFalsy();
  });

  test('should detect is mobile on init', () => {
    jest.spyOn(deviceDetector, 'isMobile').mockReturnValue(true);
    component.ngOnInit();
    expect(component.isMobile).toBeTruthy();
  });

  test('should detect is not mobile on init', () => {
    jest.spyOn(deviceDetector, 'isMobile').mockReturnValue(false);
    component.ngOnInit();
    expect(component.isMobile).toBeFalsy();
  });

  test('should toggle visibility', () => {
    expect(component.visible).toBeFalsy();
    component.toggle();
    expect(component.visible).toBeTruthy();
  })
});
