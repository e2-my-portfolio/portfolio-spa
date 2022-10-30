import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressAnimationComponent } from './progress-animation.component';

describe('ProgressAnimationComponent', () => {
  let component: ProgressAnimationComponent;
  let fixture: ComponentFixture<ProgressAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressAnimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressAnimationComponent);
    component = fixture.componentInstance;
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should set progress style class on init', () => {
    component.progress = 5;
    component.ngOnInit();
    expect(component.progressClass).toEqual('timelapse-5');
  });

  test('should change progress class', () => {
    component.progress = 1;
    component.ngOnInit();
    expect(component.progressClass).toEqual('timelapse-1');

    component.ngOnChanges({progress: new SimpleChange(1, 2, true)});
    expect(component.progressClass).toEqual('timelapse-2');
  });
});
