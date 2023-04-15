import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TakeEveryPipe } from 'src/app/pipes/take-every.pipe';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { AboutBlockComponent } from './about-block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { of } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { StorageKey } from 'src/app/constants/storage-keys';

describe('AboutBlockComponent', () => {
  let component: AboutBlockComponent;
  let fixture: ComponentFixture<AboutBlockComponent>;
  let deviceDetector: DeviceDetectorService;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutBlockComponent,
        TakeEveryPipe
      ],
      imports: [
        BrowserAnimationsModule,
        MockModule
      ],
      providers: [
        SessionStorageService,
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
    firestoreService = TestBed.inject(FirestoreService);
    
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItems')
                    .mockReturnValue(of(Mock.stories));

    const sessionStorage = new SessionStorageService();
    sessionStorage.remove(StorageKey.STORIES);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(component.isMobile).toBeFalsy();
    expect(component.dataList).toBeNull();
  });

  test('should detect is mobile on init', () => {
    const detectorSpy = jest.spyOn(deviceDetector, 'isMobile').mockReturnValue(true);
    expect(component.isMobile).toBeFalsy();
    component.ngOnInit();
    expect(detectorSpy).toBeCalledTimes(1);
    expect(component.isMobile).toBeTruthy();
  });

  test('should init about tab data', () => {
    component.ngOnInit();
    expect(firestoreSpy).toHaveBeenLastCalledWith(Collection.STORIES);
    expect(component.dataList.length).toBe(2);
  });

  test('should disable loading after init', () => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(component.loading).toBeFalsy();
  });
});
