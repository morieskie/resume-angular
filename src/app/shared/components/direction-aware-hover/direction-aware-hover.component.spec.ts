import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionAwareHoverComponent } from './direction-aware-hover.component';

describe('DirectionAwareHoverComponent', () => {
  let component: DirectionAwareHoverComponent;
  let fixture: ComponentFixture<DirectionAwareHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionAwareHoverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionAwareHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
