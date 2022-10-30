import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Collection } from 'src/app/constants/collections';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Mock } from 'src/app/testing/mock-data.test';
import { MockModule } from 'src/app/testing/mock-module.test';

import { MobileBlockComponent } from './mobile-block.component';

describe('MobileBlockComponent', () => {
  let component: MobileBlockComponent;
  let fixture: ComponentFixture<MobileBlockComponent>;
  let firestoreService: FirestoreService;
  let firestoreSpy: jest.SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MobileBlockComponent
      ],
      imports: [
        MockModule
      ],
      providers: [
        { provide: FirestoreService, useValue: MockModule.firestoreService },
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        { provide: FirestorageService, useValue: MockModule.firestorageService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBlockComponent);
    component = fixture.componentInstance;
    firestoreService = TestBed.inject(FirestoreService);
    firestoreSpy = jest.spyOn(firestoreService, 'getCollectionItem')
                    .mockReturnValue(of(Mock.socialLinks));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.profilePictureSize).toStrictEqual({
      width: '10rem',
      height: '10rem'
    });
  });

  it('should get social links observable on init', () => {
    component.ngOnInit();
    expect(firestoreSpy).toBeCalledWith(Collection.SOCIAL);
  });
});
