import { Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'src/app/testing/mock-module.test';
import { NavigationButtonsComponent } from './navigation-buttons.component';

interface TestCase {
  name: string;
  button: { nativeElement: string };
  method: string;
}

describe('NavigationButtonsComponent', () => {
  let component: NavigationButtonsComponent;
  let fixture: ComponentFixture<NavigationButtonsComponent>;
  let router: Router;
  let routerNavigateSpy: jest.SpyInstance;
  let renderer: Renderer2;
  let rendererAddClassSpy: jest.SpyInstance;

  const homeButton = { nativeElement: `<button class="">Home</button>` };
  const aboutButton = { nativeElement: `<button class="">About</button>` };
  const skillsButton = { nativeElement: `<button class="">Skills</button>` };
  const experienceButton = { nativeElement: `<button class="">Experience</button>` };
  const contactsButton = { nativeElement: `<button class="">Contacts</button>` };

  const TEST_SUITS: TestCase[] = [
    {
      name: 'home',
      button: homeButton,
      method: 'toHomePage'
    },
    {
      name: 'about',
      button: aboutButton,
      method: 'toAboutPage'
    },
    {
      name: 'skills',
      button: skillsButton,
      method: 'toSkillsPage'
    },
    {
      name: 'experience',
      button: experienceButton,
      method: 'toExperiencePage'
    },
    {
      name: 'contacts',
      button: contactsButton,
      method: 'toContactsPage'
    }
  ];

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
    component.homeButton = homeButton;
    component.aboutButton = aboutButton;
    component.skillsButton = skillsButton;
    component.experienceButton = experienceButton;
    component.contactsButton = contactsButton;
    router = TestBed.inject(Router);
    routerNavigateSpy = jest.spyOn(router, 'navigate').mockResolvedValue(true);
    renderer = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    rendererAddClassSpy = jest.spyOn(renderer, 'addClass').mockImplementation();
    jest.spyOn(renderer, 'removeClass').mockImplementation();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should navigate to url on init', () => {
    router.routerState.snapshot.url = '/home';
    component.ngOnInit();
    expect(routerNavigateSpy).toHaveBeenCalledWith(['/home']);
  });

  TEST_SUITS.forEach((testCase: TestCase) => {
    test(`should change style class for ${testCase.name} button`, () => {
      router.routerState.snapshot.url = `/${testCase.name}`;
      component.ngAfterViewChecked();
      expect(rendererAddClassSpy).toHaveBeenCalledWith(testCase.button.nativeElement, 'active-nav-link');
    });
  });

  TEST_SUITS.forEach((testCase: TestCase) => {
    test(`should navigate to ${testCase.name} page`, () => {
      component[testCase.method]();
      expect(routerNavigateSpy).toHaveBeenCalledWith([`/${testCase.name}`]);
      expect(rendererAddClassSpy).toHaveBeenCalledWith(testCase.button.nativeElement, 'active-nav-link');
    });
  });

});
