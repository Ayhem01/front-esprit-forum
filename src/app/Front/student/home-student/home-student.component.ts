import { Component, OnInit } from '@angular/core';
import { OfferServiceService } from 'src/app/Service/offer-service.service';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.component.html',
  styleUrls: ['./home-student.component.css','../../../../assets/assetsf/css/stylecd4e.css']
})
export class HomeStudentComponent  implements OnInit{
  offers!: any;
  offer!: any;
  test:Boolean=true;

  constructor(private offerService:OfferServiceService) { }
  ngOnInit(): void {
    this.loadOffers();
  
  }

  loadOffers() {
    this.offerService.getOffers().subscribe(
      offers => {

        this.offers = offers;
        console.log(this.offers);
      },
      error => {
        console.log('Error fetching offers:', error);
      }
    );
  }
}

