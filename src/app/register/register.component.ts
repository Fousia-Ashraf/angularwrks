import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private ds:DataService,private router:Router){

  }
  ngOnInit(): void{}

  usn:any
  acno:any
  psw:any

register(){
  // alert("registration done")
let UserDetails=this.ds.UserDetails
var acno=this.acno
var psw=this.psw
var usn=this.usn
console.log(acno);
console.log(psw);
console.log(usn);

const result=this.ds.register(usn,acno,psw)                    //cube=function
if(result){
  alert("registered")
  this.router.navigateByUrl("")
}
else{
  alert("already registered user")
}

}

}
