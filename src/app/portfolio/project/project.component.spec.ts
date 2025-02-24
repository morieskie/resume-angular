import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { selectProject } from '../../../store/state/resume.selectors';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    const mockProjects = [
      { id: 1, name: 'Project 1', images: ['image1.jpg', 'image2.jpg'] },
      { id: 2, name: 'Project 2', images: ['image3.jpg', 'image4.jpg'] },
    ];
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
      providers: [
        provideAnimations(),
        provideMockStore({
          initialState: { resume: { projects: mockProjects } },
          selectors: [
            {
              selector: selectProject,
              value: mockProjects,
            },
          ],
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: jasmine.createSpy().and.returnValue('1'),
              },
            },
            params: of({
              id: '23',
            }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set project, currentIndx & images signals on init', fakeAsync(() => {
    component.ngOnInit();
    tick();
    expect(component.projects.length).toEqual(2);
  }));

  it('should travese the projects list when clicking next link', fakeAsync(() => {
    const index = component.currentIndex();
    const a: HTMLLinkElement = fixture.nativeElement.querySelector(
      '[data-testid="nextProject"]'
    );
    a.click();
    expect(component.currentIndex()).toEqual(index + 1);
  }));

  it('should travese the projects list when clicking prev link', fakeAsync(() => {
    const index = component.currentIndex();
    const a: HTMLLinkElement = fixture.nativeElement.querySelector(
      '[data-testid="prevProject"]'
    );
    a.click();
    expect(component.currentIndex()).toEqual(
      index - 1 < 0 ? component.projects.length - 1 : index - 1
    );
  }));
});
