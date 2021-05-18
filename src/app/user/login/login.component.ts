import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertyfyService } from 'src/app/services/alertyfy.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alertyfy:AlertyfyService,private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  login(loginForm){
    //console.log(loginForm.value);
    let token=this.auth.authUser(loginForm.value);
    if(token){
      localStorage.setItem('token',token.userName);
      loginForm.reset();
      this.alertyfy.success("Congrats!! Login successfully");
      this.router.navigate(['/']);
    }
    else
    this.alertyfy.error("Invalid details.Try again");
  }

}
