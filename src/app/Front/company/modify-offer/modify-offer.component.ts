import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfferServiceService } from 'src/app/Service/offer-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modify-offer',
  templateUrl: './modify-offer.component.html',
  styleUrls: ['./modify-offer.component.css','../../../../assets/assetsf/css/stylecd4e.css']
})
export class ModifyOfferComponent {
  offerId!: number;
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder , private router: Router, private route: ActivatedRoute , private offerService: OfferServiceService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      duration: ['', Validators.required],
      espirationDate: ['', Validators.required],
      offerType: ['', Validators.required]
    });
    this.route.params.subscribe(params => {
      this.offerId = +params['offerId'];
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.offerService.modifyOffer(this.offerId,this.form.value).subscribe(
        ( response: any) => {
           
         
           alert('Offer modified successfully');
           this.router.navigate(['/home-company']);
         },
         (error:any) => {
           console.log('Error modifying offer:', error);
           
         }
       );
  }
  
}
}