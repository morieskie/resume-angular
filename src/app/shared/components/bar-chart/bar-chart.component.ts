import { Component, computed, input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import {
  provideCharts,
  BaseChartDirective,
  withDefaultRegisterables,
} from 'ng2-charts';
import { BarChartDataInterface } from '../../interfaces/bar-chart-data.interface';

@Component({
  selector: 'app-bar-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent {
  init = false;
  data = input.required<BarChartDataInterface[]>();
  labels = computed(() => (this.init ? this.data().map((i) => i.label) : []));
  units = computed(() => (this.init ? this.data().map((i) => i.unit) : []));
  colors = computed(() =>
    this.init ? this.data().map((i) => i.backgroundColor) : []
  );

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      y: {
        suggestedMax: 100,
      },
    },
    plugins: {
      title: {
        display: false,
      },
    },
  };
  public barChartLabels!: string[];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData!: ChartConfiguration<'bar'>['data'];

  ngOnInit() {
    const labels = this.data().map((i) => i.label);
    this.barChartData = {
      labels,
      datasets: [
        {
          data: this.data().map((i) => i.unit),
          backgroundColor: this.data().map((i) => i.backgroundColor),
        },
      ],
    };
    this.barChartLabels = labels;
    this.init = true;
  }
}
