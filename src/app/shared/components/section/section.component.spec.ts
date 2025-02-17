import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { signal } from '@angular/core';
import { mockRoutes } from '../../../mocks/mock-routes';
import { provideRouter } from '@angular/router';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionComponent],
      providers: [provideAnimations(), provideRouter(mockRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    component.icon = signal('user') as any;
    component.label = signal('about') as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set state to exit when back button is clicked and navigate', fakeAsync(() => {
    component.ngOnInit();
    const backBtn = fixture.debugElement.nativeElement.querySelector(
      '[data-testid="backBtn"]'
    );
    backBtn.click();
    tick();
    expect(component.classes()).toEqual('icon user');
    expect(component.state()).toEqual('exit');
  }));
});
