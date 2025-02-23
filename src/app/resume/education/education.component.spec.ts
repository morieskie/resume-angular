import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationComponent],
      providers: [provideMockStore(), provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
