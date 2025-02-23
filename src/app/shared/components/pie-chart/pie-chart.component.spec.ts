import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { signal } from '@angular/core';

describe('PieChartComponent', () => {
  let component: PieChartComponent;
  let fixture: ComponentFixture<PieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PieChartComponent);
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
