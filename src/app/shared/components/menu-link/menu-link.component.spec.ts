import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLinkComponent } from './menu-link.component';
import { provideRouter } from '@angular/router';
import { mockRoutes } from '../../../mocks/mock-routes';
import { signal } from '@angular/core';

describe('MenuLinkComponent', () => {
  let component: MenuLinkComponent;
  let fixture: ComponentFixture<MenuLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLinkComponent],
      providers: [provideRouter(mockRoutes)],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuLinkComponent);
    component = fixture.componentInstance;

    component.icon = signal('user') as any;
    component.label = signal('home') as any;
    component.path = signal('/home') as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
