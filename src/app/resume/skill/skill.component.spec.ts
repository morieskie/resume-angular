import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { SkillComponent } from './skill.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('SkillsComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponent],
      providers:[provideMockStore(), provideAnimations()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
