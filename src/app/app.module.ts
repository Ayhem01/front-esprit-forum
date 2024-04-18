import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { SidebarComponent } from './Back/sidebar/sidebar.component';
import { DashboredComponent } from './Back/dashbored/dashbored.component';
import { HeaderBackComponent } from './Back/header-back/header-back.component';
import { HomeComponent } from './Front/home/home.component';
import { HomeCompanyComponent } from './Front/company/home-company/home-company.component';
import { AddOfferComponent } from './Front/company/add-offer/add-offer.component';
import { ModifyOfferComponent } from './Front/company/modify-offer/modify-offer.component';
import { HomeStudentComponent } from './Front/student/home-student/home-student.component';
import { ApplyOfferComponent } from './Front/student/apply-offer/apply-offer.component';
import { ModifyApplicationComponent } from './Front/student/modify-application/modify-application.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyApplicationsComponent } from './Front/student/my-applications/my-applications.component';
import { ApplicationsByIdComponent } from './Front/company/applications-by-id/applications-by-id.component';
import { GestionsStatusComponent } from './Front/company/gestions-status/gestions-status.component';
import { AddSalleComponent } from './Back/Salle/add-salle/add-salle.component';
import { DetailsSalleComponent } from './Back/Salle/details-salle/details-salle.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AfficherInterviewComponent } from './Front/Interview/afficher-interview/afficher-interview.component';
import { InterviewsStudentIdComponent } from './Front/student/interviews-student-id/interviews-student-id.component';
import { EchartComponent } from './Back/chart/echart/echart.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    FooterComponent, FrontLayoutComponent, BackLayoutComponent, SidebarComponent, DashboredComponent, HeaderBackComponent, HomeComponent, HomeCompanyComponent, AddOfferComponent, ModifyOfferComponent, HomeStudentComponent, ApplyOfferComponent, ModifyApplicationComponent, MyApplicationsComponent, ApplicationsByIdComponent, GestionsStatusComponent, AddSalleComponent, DetailsSalleComponent, AfficherInterviewComponent, InterviewsStudentIdComponent, EchartComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
