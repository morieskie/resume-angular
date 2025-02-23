import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineComponent } from './timeline.component';
import { signal } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineComponent],
      providers: [provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    component.data = signal([
      {
        company: 'Test',
        description: 'QA',
        from: '2025',
        to: '2025',
      },
    ]) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
