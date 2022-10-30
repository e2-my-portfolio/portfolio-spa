import { ElementRef, Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FirestoreService } from 'src/app/services/firestore.service';
import { MockModule } from 'src/app/testing/mock-module.test';
import { NavigationButtonsComponent } from './navigation-buttons.component';

describe('NavigationButtonsComponent', () => {
  let component: NavigationButtonsComponent;
  let fixture: ComponentFixture<NavigationButtonsComponent>;
  let router: Router;
  let routerNavigateSpy: jest.SpyInstance;
  let renderer: Renderer2;
  let rendererAddClassSpy: jest.SpyInstance;
  let rendererRemoveClassSpy: jest.SpyInstance;

  const buttonElement = { nativeElement: `<button class="">Click here</button>` };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NavigationButtonsComponent
      ],
      imports: [
        MockModule,
        RouterTestingModule.withRoutes(MockModule.routes),
      ],
      providers: [
        Renderer2
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationButtonsComponent);
    component = fixture.componentInstance;
    component.homeButton = { nativeElement: `<button class="">Homer</button>` };;
    component.aboutButton = { nativeElement: `<button class="">About</button>` };;
    component.skillsButton = { nativeElement: `<button class="">Skills</button>` };;
    component.experienceButton = { nativeElement: `<button class="">Experience</button>` };;
    component.contactsButton = { nativeElement: `<button class="">Contacts</button>` };;
    router = TestBed.inject(Router);
    routerNavigateSpy = jest.spyOn(router, 'navigate').mockResolvedValue(true);
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    rendererAddClassSpy = jest.spyOn(renderer, 'addClass').mockImplementation();
    rendererRemoveClassSpy = jest.spyOn(renderer, 'removeClass').mockImplementation();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate to url on init', () => {
    router.routerState.snapshot.url = '/home';
    component.ngOnInit();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/home']);
  });

  test('should change style class for about button', () => {
    router.routerState.snapshot.url = '/about';
    component.ngAfterViewChecked();
    expect(rendererAddClassSpy).toHaveBeenCalledWith(component.aboutButton.nativeElement, 'active-nav-link');
  });

  test('should change style class for skills button', () => {
    router.routerState.snapshot.url = '/skills';
    component.ngAfterViewChecked();
    expect(rendererAddClassSpy).toHaveBeenCalledWith(component.skillsButton.nativeElement, 'active-nav-link');
  });

  test('should change style class for experiance button', () => {
    router.routerState.snapshot.url = '/experience';
    component.ngAfterViewChecked();
    expect(rendererAddClassSpy).toHaveBeenCalledWith(component.experienceButton.nativeElement, 'active-nav-link');
  });

  test('should change style class for contacts button', () => {
    router.routerState.snapshot.url = '/contacts';
    component.ngAfterViewChecked();
    expect(rendererAddClassSpy).toHaveBeenCalledWith(component.contactsButton.nativeElement, 'active-nav-link');
  });

  test('should change style class for home button', () => {
    router.routerState.snapshot.url = '/';
    component.ngAfterViewChecked();
    expect(rendererAddClassSpy).toHaveBeenCalledWith(component.homeButton.nativeElement, 'active-nav-link');
  });
});
