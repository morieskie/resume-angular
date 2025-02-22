import { Component, computed, input } from '@angular/core';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { PieChartDataInterface } from '../../interfaces/pie-chart-data.interface';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  init = false;
  data = input.required<PieChartDataInterface[]>();
  labels = computed(() => (this.init ? this.data().map((i) => i.label) : []));
  units = computed(() => (this.init ? this.data().map((i) => i.unit) : []));
  colors = computed(() =>
    this.init ? this.data().map((i) => i.backgroundColor) : []
  );

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {},
  };
  public pieChartLabels!: string[];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public pieChartData!: ChartConfiguration<'pie'>['data'];

  ngOnInit() {
    const labels = this.data().map((i) => i.label);
    this.pieChartData = {
      labels,
      datasets: [
        {
          data: this.data().map((i) => i.unit),
          label: 'Percentage',
          backgroundColor: this.data().map((i) => i.backgroundColor),
        },
      ],
    };
    this.pieChartLabels = labels;
    this.init = true;
  }
}
