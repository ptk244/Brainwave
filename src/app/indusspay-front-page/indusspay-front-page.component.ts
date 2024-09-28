import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-indusspay-front-page',
  templateUrl: './indusspay-front-page.component.html',
  styleUrls: ['./indusspay-front-page.component.css']
})
export class IndusspayFrontPageComponent {

  constructor(private router: Router) {}

  contactform(){
    this.router.navigate(['/contact-us']);
  }
}
