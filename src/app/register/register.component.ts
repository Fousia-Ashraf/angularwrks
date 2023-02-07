import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder){

  }
  //CREATE REACTIVE FORM of register form //07/03/23
  registerForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]+')]], //string ayt data vannale validate cheyyan patolu //[^a-zA-Z0-9]=for special characters
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
  })//after this we dont need ngModel([])
  ngOnInit(): void{}

  

register(){
  // alert("registration done")
let UserDetails=this.ds.UserDetails
var acno=this.registerForm.value.acno //take from register form//07/02/23
var psw=this.registerForm.value.psw
var usn=this.registerForm.value.uname
console.log(acno);
console.log(psw);
console.log(usn);
if(this.registerForm.valid){
  const result=this.ds.register(usn,acno,psw)                    //cube=function
if(result){
  alert("registered")
  this.router.navigateByUrl("")
}
else{
  alert("already registered user")
}

}
else{
  alert('invalid form')
}



}

}
