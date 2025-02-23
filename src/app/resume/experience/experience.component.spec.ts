import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ExperienceComponent } from './experience.component';
import { ExperienceService } from '../../shared/service/experience.service';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [
        provideMockStore(),
        provideAnimations(),
        {
          provide: ExperienceService,
          useValue: {
            getData() {
              return [
                {
                  company: 'Test',
                  role: 'QA',
                  description:
                    'Testing Angular 19 standalone component with Ngrx',
                  from: 2025,
                  to: 2025,
                },
              ];
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
