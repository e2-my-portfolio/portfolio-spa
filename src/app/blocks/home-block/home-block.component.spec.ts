import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeviceDetectorService } from 'src/app/services/device-detector.service';
import { of } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';
import { HomeBlockComponent } from './home-block.component';
import { SessionStorageService } from 'src/app/services/session-storage.service';

describe('HomeBlockComponent', () => {
  let component: HomeBlockComponent;
  let fixture: ComponentFixture<HomeBlockComponent>;
  let storage: SessionStorageService;
  let firestorageService: FirestorageService;
  let firestorageSpy: jest.SpyInstance;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeBlockComponent
      ],
      imports: [
        BrowserAnimationsModule,
        MockModule,
      ],
      providers: [
        SessionStorageService,
        { provide: FirestoreService, useValue: MockModule.firestoreService },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { provide: FirestorageService, useValue: MockModule.firestorageService },
        { provide: DeviceDetectorService, useValue: MockModule.deviceDetector }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBlockComponent);
    component = fixture.componentInstance;
    storage = TestBed.inject(SessionStorageService);
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem')
                    .mockReturnValue(of(Mock.basics));
    firestorageService = TestBed.inject(FirestorageService);
    firestorageSpy = jest.spyOn(firestorageService, 'getCvFileUrl')
                    .mockReturnValue(of('https://www.orimi.com/pdf-test.pdf'));
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loading).toBeTruthy();
    expect(component.deviceDetector).toBeDefined();
  });

  test('should init home tab data', () => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();

    expect(firestoreSpy).toHaveBeenCalledWith(Collection.BASICS);

    expect(component.title).toEqual(`Hello. I'm `);
    expect(component.name).toEqual('Jack Sparrow');
    expect(component.info).toEqual(`I'm a captain living in Port Royal, Caribbean. Currently I'm working in `);
    expect(component.company).toEqual({ name: Mock.basics.companyName, url: Mock.basics.companyUrl });
    expect(component.description).toEqual(Mock.basics.description);

    expect(component.loading).toBeFalsy();
  });

  test('should disable loading after init', () => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(component.loading).toBeFalsy();
  });

  test('should download CV', () => {
    component.downloadCV();
    expect(firestorageSpy).toHaveBeenCalledTimes(1);
  });
});
