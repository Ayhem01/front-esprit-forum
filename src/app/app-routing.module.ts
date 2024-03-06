import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontLayoutComponent } from './front-layout/front-layout.component';
import { BackLayoutComponent } from './back-layout/back-layout.component';
import { BlogComponent } from './blog/blog.component'
import {ModifyPostComponent} from "./modify-post/modify-post.component";



const routes: Routes = [
{ path: 'front', component: FrontLayoutComponent },
 { path: 'back', component: BackLayoutComponent },
  { path: 'blog', component: BlogComponent},
    {path: 'modify/:postId', component:ModifyPostComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
