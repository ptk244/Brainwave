import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndusspayFrontPageComponent } from './indusspay-front-page/indusspay-front-page.component';
import { FooterComponent } from './footer/footer.component';
import { OurStoryComponent } from './src/app/indusspay-front-page/our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    IndusspayFrontPageComponent,
    FooterComponent,
    OurStoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
