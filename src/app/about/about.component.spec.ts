import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { SectionComponent } from '../shared/components/section/section.component';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { ProfileInterface } from '../shared/interfaces/profile.interface';
import { ProfileService } from '../shared/service/profile.service';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideNoopAnimations(),
        {
          provide: ProfileService,
          useValue: {
            getDetails: () => of({ name: 'Test' } as ProfileInterface),
          },
        },
      ],
    })
      .overrideComponent(SectionComponent, {
        set: {
          selector: 'app-section',
          template: '<p>Mock Section Component</p>',
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve user profile from backend and update model value', fakeAsync(() => {
    tick();
    component.ngOnInit();
    tick();
    expect((component.model as any).name).toEqual('Test');
  }));
});
