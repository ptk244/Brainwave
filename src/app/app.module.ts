import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndusspayFrontPageComponent } from './indusspay-front-page/indusspay-front-page.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: 'indusspay', component: IndusspayFrontPageComponent },
  { path: 'contact-us', component: ContactFormComponent },
  { path: '', redirectTo: '/indusspay', pathMatch: 'full' }, // Default route
  // Add other routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    IndusspayFrontPageComponent,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
