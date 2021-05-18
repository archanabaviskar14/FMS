import { Component, OnInit } from '@angular/core';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedInUser:string;

  constructor(public alertyfy:AlertyfyService) { }

  ngOnInit(): void {
  }

  loggedIn()
  {
    this.loggedInUser=localStorage.getItem('token');
    return this.loggedInUser;
  }
  logOut()
  {
    localStorage.removeItem('token');
    this.alertyfy.success("You are logged out Successully");
  }

}
