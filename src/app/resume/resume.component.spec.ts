import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent],
      providers:[provideRouter([]), provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
