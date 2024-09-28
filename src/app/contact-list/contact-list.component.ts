import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactserviceService } from '../services/contactservice.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  userslength: any;
  constructor(private router:Router , private contactservice:ContactserviceService) {

  }
  users:any;

  ngOnInit(){
     this.getUserData();
  }

  getUserData(){
    this.contactservice.getuserList().subscribe({
      next:(result)=>{
        this.users=result;
        this.userslength=this.users.length
        console.log(this.userslength);
        
      }
    })
  }

  onAddUser(): void {
    this.router.navigate(['/add-user']); 
  }

  onEditUser(user:any){
    console.log(user.id);
    
      this.router.navigate([`/editcontact/${user.id}`])
  } 

  onDelete(user:any){
    this.contactservice.deleteRow(user.id).subscribe({
      next:(result:any)=>{
        console.log("user deleted sucessfully");
        this.getUserData();
        
      },
      error:(error)=>{
        console.log("there is error",error);
        
      }
    })
  }
}
