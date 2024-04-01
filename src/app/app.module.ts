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
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from "@angular/material/icon";
import { ModifyPostComponent } from './modify-post/modify-post.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzCommentModule} from "ng-zorro-antd/comment";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzFormModule} from "ng-zorro-antd/form";
import { TransactionComponent } from './transaction/transaction.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, FrontLayoutComponent, BackLayoutComponent, SidebarComponent, DashboredComponent, HeaderBackComponent, HomeComponent, BlogComponent, ModifyPostComponent, TransactionComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule,
        MatButtonModule,
        BrowserAnimationsModule,
        MatIconModule, NzListModule, NzCommentModule, NzAvatarModule, NzFormModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
