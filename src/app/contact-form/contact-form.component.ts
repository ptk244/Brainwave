import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactserviceService } from '../services/contactservice.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactservice:ContactserviceService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }


  onSubmit(): void {
   
      console.log('Form Submitted!', this.contactForm.value);
      this.contactservice.saveData(this.contactForm.value).subscribe({
        next:(result)=>{
          console.log("data submitted sucessfully");
          
        },
        error:(error)=>{
          console.log(error);
          
        }
      })
    
  }
}
