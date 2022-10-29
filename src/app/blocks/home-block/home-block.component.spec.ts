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

describe('HomeBlockComponent', () => {
  let component: HomeBlockComponent;
  let fixture: ComponentFixture<HomeBlockComponent>;
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
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem')
                        .mockReturnValue(of(Mock.homeTabData ));
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should init home tab data', () => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(firestoreSpy).toHaveBeenCalledWith(Collection.HOME_TAB_DATA);
    expect(component.title).toEqual(`Hello. I'm `);
    expect(component.name).toEqual(Mock.homeTabData.fullName);
    expect(component.info).toEqual(`I'm a ${Mock.homeTabData.position.toLowerCase()} living in ${Mock.homeTabData.address}. Currently I'm working in `);
    expect(component.company).toEqual(Mock.homeTabData.company);
    expect(component.description).toEqual(Mock.homeTabData.description);
    expect(component.loading).toBeFalsy();
  });

  test('should disable loading after init', () => {
    expect(component.loading).toBeTruthy();
    component.ngOnInit();
    expect(component.loading).toBeFalsy();
  });
});
