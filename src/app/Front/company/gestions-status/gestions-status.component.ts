import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestions-status',
  templateUrl: './gestions-status.component.html',
  styleUrls: ['./gestions-status.component.css']
})
export class GestionsStatusComponent implements OnInit {
  id!: number; 
  application!: any;
  form!: FormGroup;
  coverLetterDownloadUrl: string | null = null;
  cvDownloadUrl: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private applicationService: ApplicationServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      statusApplication: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];
    });
    this.getApplication(this.id);
  }

  getApplication(id: any): void {
    this.applicationService.getApplication(this.id).subscribe(
      (res: any) => {
        this.application = res;
        console.log('tekhhdeeeeem:', this.application);
        
        // Generate download URLs for cover letter and CV
        this.applicationService.getFileDownloadUrl(this.application.coverLetter).subscribe(
          (url: string) => {
            this.coverLetterDownloadUrl = url;
          }
        );

        this.applicationService.getFileDownloadUrl(this.application.cv).subscribe(
          (url: string) => {
            this.cvDownloadUrl = url;
          }
        );
      }
    );
  }

  onSubmit(): void {
    this.applicationService.GestionStatus(this.id, this.form.value).subscribe(
      (response: any) => {
        alert('Status modified successfully');
        this.router.navigate(['/home-company']);
      },
      (error: any) => {
        console.log('Error modifying status:', error); 
      }
    );
  }
// Method to handle cover letter file change event
onCoverLetterChange(event: any): void {
  // Handle cover letter file change if needed
}

// Method to handle CV file change event
onCVChange(event: any): void {
  // Handle CV file change if needed
}
}