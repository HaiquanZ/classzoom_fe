import { Component, Input, ViewChild } from "@angular/core";
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle
} from "ng-apexcharts";
import { PostService } from "src/app/services/post.service";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-column-home',
  templateUrl: './column-home.component.html',
  styleUrls: ['./column-home.component.scss']
})
export class ColumnHomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  listAss: any[] = [];
  valueStatus: number[] = [0,0,0,0,0];

  constructor(
    private postSrv: PostService
  ) { }

  ngOnInit() {
    this.postSrv.getTaskByPic({ type: 'all', pic: localStorage.getItem('userId') },
      (res: any) => {
        if (res) {
          this.listAss = res.data.tasks;
          //handle data to chart
          this.processData(this.listAss);
        }
      })
  }

  processData(data: any){
    console.log(data);
    for(let i=0; i < data.length; i++){
      if(data[i].status == 'doing') this.valueStatus[0]++;
      if(data[i].status == 'waiting') this.valueStatus[1]++;
      if(data[i].status == 'done') this.valueStatus[2]++;
      if(data[i].status == 'pending') this.valueStatus[3]++;
      if(data[i].status == 'cancel') this.valueStatus[4]++;
    }
    console.log(this.valueStatus);
    this.chartOptions = {
      series: [
        {
          name: "Quantity",
          data: this.valueStatus
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          // click: function (chart, w, e) {
          //   // console.log(chart, w, e)
          // }
        }
      },
      colors: [
        "#1890FF",
        "#1890FF",
        "#52C41A",
        "#FEB019",
        "#FF4D4F"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: [
          "Doing",
          "Waiting",
          "Done",
          "Pending",
          "Cancel",
        ],
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "18px"
          }
        }
      },
      title: {
        text: "Status of my tasks recently",
        align: "center",
        margin: 40,
        style: {
          color: "#000",
          fontFamily: 'Inter',
          fontWeight: '400',
          fontSize: '18px'
        }
      }
    };
  }
}
