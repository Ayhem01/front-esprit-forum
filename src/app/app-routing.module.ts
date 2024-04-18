import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { AddOfferComponent } from './Front/company/add-offer/add-offer.component';
import { ModifyOfferComponent } from './Front/company/modify-offer/modify-offer.component';
import { ApplyOfferComponent } from './Front/student/apply-offer/apply-offer.component';
import { HomeStudentComponent } from './Front/student/home-student/home-student.component';
import { ModifyApplicationComponent } from './Front/student/modify-application/modify-application.component';
import { HomeCompanyComponent } from './Front/company/home-company/home-company.component';
import { MyApplicationsComponent } from './Front/student/my-applications/my-applications.component';
import { ApplicationsByIdComponent } from './Front/company/applications-by-id/applications-by-id.component';
import { GestionsStatusComponent } from './Front/company/gestions-status/gestions-status.component';
import { AddSalleComponent } from './Back/Salle/add-salle/add-salle.component';
import { DetailsSalleComponent } from './Back/Salle/details-salle/details-salle.component';
import { AfficherInterviewComponent } from './Front/Interview/afficher-interview/afficher-interview.component';
import { InterviewsStudentIdComponent } from './Front/student/interviews-student-id/interviews-student-id.component';
import { EchartComponent } from './Back/chart/echart/echart.component';



const routes: Routes = [
{ path: 'front', component: FrontLayoutComponent },
 { path: 'back', component: BackLayoutComponent },
 { path: 'add-offre', component: AddOfferComponent },
 { path: 'modify-offre/:offerId', component: ModifyOfferComponent },
 { path: 'apply-offre/:offerId', component: ApplyOfferComponent },  
 { path: 'home-student', component:HomeStudentComponent },
 { path: 'modify-application/:Id', component: ModifyApplicationComponent },
 { path: 'home-company', component: HomeCompanyComponent },
 { path: 'my-applications', component: MyApplicationsComponent },
 { path: 'app-applications-by-id/:id', component: ApplicationsByIdComponent },
 { path: 'app-gestions-status/:id', component: GestionsStatusComponent },
 { path: 'app-add-salle', component: AddSalleComponent },
 { path: 'app-details-salle/:id', component: DetailsSalleComponent },
 { path: 'app-afficher-interview', component: AfficherInterviewComponent },
 { path: 'app-interviews-student-id', component: InterviewsStudentIdComponent },
 { path: 'echart', component: EchartComponent },



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
