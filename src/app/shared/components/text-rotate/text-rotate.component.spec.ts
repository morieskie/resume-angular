import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';

import { TextRotateComponent } from './text-rotate.component';
import { signal } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TestScheduler } from 'rxjs/testing';
import { Subject, takeUntil, tap } from 'rxjs';

describe('TextRotateComponent', () => {
  let component: TextRotateComponent;
  let fixture: ComponentFixture<TextRotateComponent>;
  let testScheduler: TestScheduler;
  let destroy$: Subject<void>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextRotateComponent],
      providers: [provideAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(TextRotateComponent);
    component = fixture.componentInstance;
    destroy$ = new Subject<void>();
    component.roles = signal([
      'Tester',
      'QA',
      'Authomated Tester',
      'Unit Tester',
    ]) as any;
    testScheduler = new TestScheduler((actual, expected) => {
      expected(actual).toEqual(expected);
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('Loops given String Array', () => {
  it('should iterate over given string array every x microseconds and set state to "enter"', fakeAsync(() => {
    component.activeRole = signal('');
    component.state = signal('void');
    component.roles = signal([
      'Tester',
      'QA',
      'Authomated Tester',
      'Unit Tester',
    ]) as any;
    component.ngOnInit();
    // tick();
    tick();
    expect(component.activeRole()).toEqual('Tester');
    console.log('Role', component.activeRole());
    tick(3500);
    expect(component.activeRole()).toEqual('QA');
    console.log('Role', component.activeRole());
    tick(10000);
    expect(component.activeRole()).toEqual('Unit Tester');
    flush();
  }));

  it('should set state to "leave" when animation transitions to "enter"', () => {
    const enterEvent: AnimationEvent = {
      toState: 'enter',
      phaseName: 'done',
      totalTime: 0,
    } as any;

    component.nextItem(enterEvent as any);

    expect(component.state()).toBe('leave');
  });

  it('should set state to "void" when animation transitions to "leave"', () => {
    const leaveEvent: AnimationEvent = {
      toState: 'leave',
      phaseName: 'done',
      totalTime: 0,
    } as any;

    component.nextItem(leaveEvent as any);

    expect(component.state()).toBe('void');
  });
});
