import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndusspayFrontPageComponent } from './indusspay-front-page/indusspay-front-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

 const routes: Routes = [
  { path: 'indusspay', component: IndusspayFrontPageComponent },
  { path: 'contact-us', component: ContactFormComponent },
  { path: '', redirectTo: '/indusspay', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
