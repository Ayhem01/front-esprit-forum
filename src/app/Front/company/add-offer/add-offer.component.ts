import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferServiceService } from 'src/app/Service/offer-service.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css', '../../../../assets/assetsf/css/stylecd4e.css']
})
export class AddOfferComponent {
  
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private offerService: OfferServiceService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      duration: ['', Validators.required],
      espirationDate: ['', Validators.required],
      offerType: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.offerService.addoffer(this.form.value).subscribe(
        (res: any) => {
          alert("Offer added successfully'")
         // this.toastr.success('Offer added successfully', 'Success');
          this.form.reset();
          this.router.navigate(['/home-company']);
        },
        (error:any) => {
          console.log(error);
         
        //  this.toastr.error('Error occurred while adding offer', 'Error');
        }
      );
    } else {
     // this.toastr.warning('Please fill in all required fields', 'Warning');
    }


  }

}
