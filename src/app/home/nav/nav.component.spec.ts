import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { provideRouter, RouterModule } from '@angular/router';
import { MockHomeComponent } from '../../mocks/mock-home.component';
import { mockRoutes } from '../../mocks/mock-routes';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavComponent],
      providers: [provideRouter(mockRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit clicked menu', () => {
    const spy = spyOn(component.nav, 'emit')
    component.onClick('testing');

    expect(spy).toHaveBeenCalledWith('testing')

  })
});
