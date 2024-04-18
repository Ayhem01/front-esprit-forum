import { Component, OnInit } from '@angular/core';
import { OfferServiceService } from 'src/app/Service/offer-service.service';
import * as echarts from 'echarts';


@Component({
  selector: 'app-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.css']
})
export class EchartComponent {
  
  chartOptions: any;

  constructor(private offerService: OfferServiceService) { }
 
ngOnInit(): void{
  this.offerService.getApplicationStatusStatistics().subscribe(data =>{this.renderChart(data)});
}
 
  renderChart(data: any): void {
    const chart = echarts.init(document.getElementById('application-chart'));
    const option = {
      title: {
        text: 'Statut des Applications'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Statut',
          type: 'pie',
          radius: '50%',
          data: Object.entries(data).map(([key, value]) => ({ name: key, value: value }))
        }
      ]
    };
    chart.setOption(option);
  }
}
