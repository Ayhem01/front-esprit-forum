import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationServiceService } from 'src/app/Service/application-service.service';

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.css']
})
export class MyApplicationsComponent  implements OnInit {
  applications!:any;
  id!:number;
  constructor( private applicationService: ApplicationServiceService ){
}
ngOnInit(): void { 
  this.loadApplications();
 

}
loadApplications(){
  this.applicationService.getApplications().subscribe(
    (applications: any )=> {

      this.applications = applications;
      console.log(this.applications);
    },
   ( error :any )=> {
      console.log('Error fetching offers:', error);
    }
  );
}

deleteApplication(Id:any){
  this.applicationService.deleteApplication(Id).subscribe(
    (res: any) => {
      alert("Offer deleted successfully")
      this.loadApplications();
    },
  
  );
  
}
}
