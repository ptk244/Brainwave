import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  isNavbarOpen = false;

  // List of nav links
  navLinks = ['Demos', 'Pages', 'Support', 'Contact'];

  // Toggle function to open/close the navbar
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  contactform(){
    this.router.navigate(['/contactlist']);
  }

  

}
