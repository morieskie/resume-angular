import { Component, computed, input } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType } from 'chart.js';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { DoughnutChartDataInterface } from '../../interfaces/doughnut-chart-data.interface';

@Component({
  selector: 'app-doughnut-chart',
  imports: [BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.css',
})
export class DoughnutChartComponent {
  init = false;
  data = input.required<DoughnutChartDataInterface[]>();
  labels = computed(() => (this.init ? this.data().map((i) => i.label) : []));
  units = computed(() => (this.init ? this.data().map((i) => i.unit) : []));
  colors = computed(() =>
    this.init ? this.data().map((i) => i.backgroundColor) : []
  );

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {},
  };
  public doughnutChartLabels!: string[];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend = false;
  public doughnutChartPlugins = [];

  public doughnutChartData!: ChartConfiguration<'doughnut'>['data'];

  ngOnInit() {
    const labels = this.data().map((i) => i.label);
    this.doughnutChartData = {
      labels,
      datasets: [
        {
          data: this.data().map((i) => i.unit),
          label: 'Percentage',
          backgroundColor: this.data().map((i) => i.backgroundColor),
        },
      ],
    };
    this.doughnutChartLabels = labels;
    this.init = true;
  }
}
