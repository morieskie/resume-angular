import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartComponent } from './doughnut-chart.component';
import { signal } from '@angular/core';

describe('DoughnutChartComponent', () => {
  let component: DoughnutChartComponent;
  let fixture: ComponentFixture<DoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoughnutChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DoughnutChartComponent);
    component = fixture.componentInstance;
    component.data = signal([
      { label: 'Angular', unit: 95, color: '#fff' },
    ]) as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
