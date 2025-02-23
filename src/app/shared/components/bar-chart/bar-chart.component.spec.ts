import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartComponent } from './bar-chart.component';
import { signal } from '@angular/core';

describe('BarChartComponent', () => {
  let component: BarChartComponent;
  let fixture: ComponentFixture<BarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartComponent);
    component = fixture.componentInstance;
    component.data = signal([{label: 'Angular', unit: 95, color:'#fff'}]) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
