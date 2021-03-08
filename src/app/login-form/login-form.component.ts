import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  username: string | undefined
  password: string | undefined
  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
 
  }
 loginUser(event: any){
   event.preventDefault()
   const username = event.target.querySelector('#username').value;
   const password = event.target.querySelector('#password').value;
   this.auth.loginUser(username, password).subscribe(res=>{
     if(res.success){
       console.log('logged')
       this.auth.setloggedIn(true) 
       this.router.navigate(['items']);
     }else{
       console.log("Invalid credentials")
     }
   }, (err=> {
     console.log("Something went wrong!")
   }))
   }
  
}
