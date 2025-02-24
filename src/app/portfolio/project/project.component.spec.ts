import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
      providers: [
        provideMockStore(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map().set('id', 23),
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
});
