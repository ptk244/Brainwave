import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContactserviceService } from '../services/contactservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contactForm: any;
  routeSub: any;
  userId: number | any;


  constructor(private fb:FormBuilder,private contactservice:ContactserviceService, private route:ActivatedRoute, private router:Router){
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

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.userId = params.get('id'); 
      if (this.userId) {
        console.log('User ID:', this.userId);
        this.patchData(this.userId);
      }
    });
  }

  patchData(id:any):void{
     this.contactservice.getUserById(id).subscribe({
      next:(result)=>{
        console.log(result);
        this.contactForm.patchValue(result)
        
      },
      error:(error)=>{
        console.log(error);
        
      }
     })
  }


  onEdit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted!', this.contactForm.value);
      this.contactservice.EditData(this.contactForm.value,this.userId).subscribe({
        next: (result) => {
          console.log('Data submitted successfully', result);
          this.router.navigate(['/indusspay']);

        },
        error: (error) => {
          console.log('Submission error:', error);
        }
      });
    } else {
      console.log(this.contactForm);
      
      console.log('Form is invalid, please review the errors.');
    }
  }

}
