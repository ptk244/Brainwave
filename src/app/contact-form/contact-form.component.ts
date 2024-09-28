import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactserviceService } from '../services/contactservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder,private router:Router , private contactservice:ContactserviceService) {
    this.contactForm = this.fb.group({
      createdAt: [new Date(), Validators.required],
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      emailId: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      pan_no: ['', [Validators.required, Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')]],
      adhaar_no: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
      status: [false, Validators.requiredTrue]
    });
  }


  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.contactservice.saveData(this.contactForm.value).subscribe({
        next: (result) => {
          console.log('Data submitted successfully', result);
          this.router.navigate(['/indusspay']);

        },
        error: (error) => {
          console.log('Submission error:', error);
        }
      });
    } else {
      console.log('Form is invalid, please review the errors.');
    }
  }
}