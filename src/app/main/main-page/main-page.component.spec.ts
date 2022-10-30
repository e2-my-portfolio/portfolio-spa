import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { MainPageComponent } from './main-page.component';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  let deviceDetector: DeviceDetectorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainPageComponent
      ],
      imports: [
        RouterTestingModule,
        MockModule
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
        { provide: DeviceDetectorService, useValue: MockModule.deviceDetector }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    deviceDetector = TestBed.inject(DeviceDetectorService);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
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
});
