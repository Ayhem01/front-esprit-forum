import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';

@Component({
  selector: 'app-modify-application',
  templateUrl: './modify-application.component.html',
  styleUrls: ['./modify-application.component.css','../../../../assets/assetsf/css/stylecd4e.css']
})
export class ModifyApplicationComponent {

  form!: FormGroup;
  coverLetterFile: File | null = null;
  cvFile: File | null = null;
  Id!: number; 

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationServiceService,
    private route: ActivatedRoute ,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      coverLetter: [null, Validators.required],
      cv: [null, Validators.required]
    });

    this.route.params.subscribe(params => {
      this.Id = +params['Id'];
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

      this.applicationService.modyfyApplication(this.Id, formData).subscribe(
        (res: any) => {
          alert("Application updated successfully");
          this.form.reset();
          this.router.navigate(['/my-applications']);
        },
        (error:any) => {
          console.log(error);
        }
      );
    } else {
      alert("Error: Form is invalid or files are missing");
    }
  }
}
