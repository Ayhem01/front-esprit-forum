import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';
import { OfferServiceService } from 'src/app/Service/offer-service.service';


@Component({
  selector: 'app-home-company',
  templateUrl: './home-company.component.html',
  styleUrls: ['./home-company.component.css','../../../../assets/assetsf/css/stylecd4e.css']
})
export class HomeCompanyComponent implements OnInit  {
  offers!: any;
  offer!: any;
  test:Boolean=true;
  applications!:any;
  

  constructor(private offerService:OfferServiceService , private applicationService: ApplicationServiceService, private route: ActivatedRoute ) { }
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

  deleteOffer(offerId:any){
    this.offerService.deleteOffer(offerId).subscribe(
      (res: any) => {
        alert("Offer deleted successfully")
        this.loadOffers();
      },
      (error: any)=> {
        alert("you can delete this offre : you have application")
      }
    
    );
    
  }



}
