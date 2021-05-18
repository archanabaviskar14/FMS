import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

import { User } from 'src/app/model/user';
import { AlertyfyService } from 'src/app/services/alertyfy.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registrationForm:FormGroup;
user:User;
userSubmitted:boolean;
  constructor(public fb:FormBuilder,private userservice:UserService,private alertyfy:AlertyfyService) { }

  ngOnInit(): void {
  /*  this.registrationForm=new FormGroup({
      userName:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(8)]),  1way
      cpassword:new FormControl(null,Validators.required),
      mobile:new FormControl(null,[Validators.required,Validators.maxLength(10)])

    },this.passwordMatchingValidator)*/
    //2nd way using formbuilder
    this.createRegidtrationForm();
  }

  createRegidtrationForm(){
    this.registrationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required,Validators.minLength(8)]],
      cpassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]
    },{validators:this.passwordMatchingValidator})
  }
 
  passwordMatchingValidator(fg:FormGroup):Validators{
    return fg.get('password').value=== fg.get('cpassword').value ? null :
    {notmatched:true};

  }
  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registrationForm.get('email') as FormControl;
  }
  get password(){
    return this.registrationForm.get('password') as FormControl;
  }
  get cpassword(){
    return this.registrationForm.get('cpassword') as FormControl;
  }
  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }

submit(){
  console.log(this.registrationForm.value);
  this.userSubmitted=true;

  if(this.registrationForm.valid)
  {
   // this.user=Object.assign(this.user,this.registrationForm.value);
    this.userservice.addUser(this.userData());
    this.registrationForm.reset();
    this.onReset();
    this.alertyfy.success("congrats!!,you are successully registered");
  }
  else
  {
    this.alertyfy.error("Please provide the required fields")
  } 
 
}
onReset() {
  this.userSubmitted = false;
  this.registrationForm.reset();
}

userData():User{
  return this.user={
    userName:this.userName.value,
    email:this.email.value,
    password:this.password.value,
    mobile:this.mobile.value

  }

}

}

