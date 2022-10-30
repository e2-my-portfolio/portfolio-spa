import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeEveryPipe } from 'src/app/pipes/take-every.pipe';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { AboutBlockComponent } from './about-block.component';

describe('AboutBlockComponent', () => {
  let component: AboutBlockComponent;
  let fixture: ComponentFixture<AboutBlockComponent>;
  let deviceDetector: DeviceDetectorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutBlockComponent,
        TakeEveryPipe
      ],
      imports: [
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
    fixture = TestBed.createComponent(AboutBlockComponent);
    component = fixture.componentInstance;
    deviceDetector = TestBed.inject(DeviceDetectorService);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isMobile).toBeFalsy();
    expect(component.dataList.length).toBe(0);
  });

  test('should detect is mobile on init', () => {
    const detectorSpy = jest.spyOn(deviceDetector, 'isMobile').mockReturnValue(true);
    expect(component.isMobile).toBeFalsy();
    component.ngOnInit();
    expect(detectorSpy).toBeCalledTimes(1);
    expect(component.isMobile).toBeTruthy();
  })
});
