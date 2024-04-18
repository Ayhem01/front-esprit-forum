import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applications-by-id',
  templateUrl: './applications-by-id.component.html',
  styleUrls: ['./applications-by-id.component.css']
})
export class ApplicationsByIdComponent {
  applications!: any;
  application!: any;

  appid!: number;
  id: any;

  constructor(private applicationService: ApplicationServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = this.route.snapshot.params['id'];
    });
    this.loadApplicationsByOfferId(this.id);
    this.getApplication(this.id);


  }


  getApplication(id:any) {
    this.applicationService.getApplication(id).subscribe(
      (res: any) => {
        this.application = res;
        console.log('tessst :', this.application);
        
      }
    );
  }


  loadApplicationsByOfferId(id: number) {
    this.applicationService.getApplicationsByOfferId(id).subscribe(
      (applications: any) => {

        this.applications = applications;
        console.log(this.applications);
      },
      (error: any) => {
        console.log('Error fetching offers:', error);
      }
    );
  }
}
