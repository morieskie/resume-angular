import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { signal } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarComponent],
      providers: [provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    component.percentage = signal(59) as any;
    component.color = signal('#fff') as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
