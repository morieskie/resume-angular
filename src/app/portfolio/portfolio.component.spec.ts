import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { selectProject } from '../../store/state/resume.selectors';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    const mockProjects = [
      { id: 1, name: 'Project 1', images: ['image1.jpg', 'image2.jpg'], categories: ['web'] },
      { id: 2, name: 'Project 2', images: ['image3.jpg', 'image4.jpg'], categories: ['tech']  },
    ];
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [provideRouter([]),provideAnimations(), provideMockStore({
                initialState: { resume: { projects: mockProjects } },
                selectors: [
                  {
                    selector: selectProject,
                    value: mockProjects,
                  },
                ],
              })],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
