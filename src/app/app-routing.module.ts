import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndusspayFrontPageComponent } from './indusspay-front-page/indusspay-front-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';

 const routes: Routes = [
  { path: 'indusspay', component: IndusspayFrontPageComponent },
  { path: 'add-user', component: ContactFormComponent },
  { path: '', redirectTo: '/indusspay', pathMatch: 'full' },
  {path:'contactlist', component:ContactListComponent},
  {path:'editcontact/:id',component:EditContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
