import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChartData, ChartEvent, ChartOptions } from 'chart.js';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { HardwareComponent } from '../../../utils/hardware/hardware.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor(private openDialogService: OpenDialogService) { }

  ngOnInit(): void {
  }

  openDialogEdit(event: MouseEvent) {
    this.openDialogService.openDialog(HardwareComponent);
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  salesData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Juin','July'],
    datasets: [
      { label: '200 Response', data: [1000, 1200, 1050, 2000, 500], tension: 0.5 },
      { label: '400 Response', data: [200, 100, 400, 50, 90], tension: 0.5 },
      { label: '500 Response', data: [500, 400, 350, 450, 650], tension: 0.5 },
    ],
  };

  salesDataPie: ChartData<'pie'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      { label: 'on line', data: [1000, 1200, 1050, 2000, 500]},
    ],
  };

  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        align:'center',
        text: 'Http Response',
      },
    },
  };

 

}
