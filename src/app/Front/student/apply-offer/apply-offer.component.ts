import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';

@Component({
  selector: 'app-apply-offer',
  templateUrl: './apply-offer.component.html',
  styleUrls: ['./apply-offer.component.css','../../../../assets/assetsf/css/stylecd4e.css']
})
export class ApplyOfferComponent implements OnInit {
  form!: FormGroup;
  coverLetterFile: File | null = null;
  cvFile: File | null = null;
  offerId!: number; 

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationServiceService,
    private route: ActivatedRoute ,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      coverLetter: [null, Validators.required],
      cv: [null, Validators.required]
    });

    this.route.params.subscribe(params => {
      this.offerId = +params['offerId'];
    });
  }

  onChangeCoverLetter(event: any) {
    this.coverLetterFile = event.target.files[0];
  }

  onChangeCV(event: any) {
    this.cvFile = event.target.files[0];
  }

  onSubmit() {
    if (this.form.valid && this.coverLetterFile && this.cvFile) {
      const formData = new FormData();
      formData.append('coverLetter', this.coverLetterFile);
      formData.append('cv', this.cvFile);

      this.applicationService.addApplication(this.offerId, formData).subscribe(
        (res: any) => {
          alert("Application submitted successfully");
          this.form.reset();
          this.router.navigate(['/home-student']);
        },
        (error:any) => {
          alert("You have already applied");
        }
      );
    } else {
      alert("Error: Form is invalid or files are missing");
    }
  }
}
