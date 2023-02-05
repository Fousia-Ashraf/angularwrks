import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

data="your perfect banking partner"
pholder="Account number"

//store cheyyan initialise chyth  vekuka annat this vachat call chyyuka

// acno=''       =initialising method
//or
acno:any
pass:any



  constructor(private router:Router,private ds:DataService) {}

ngOnInit(): void{

}
///////////////////ngModel////////////////////////////////
login(){
  // alert('login clicked')
var acnum=this.acno
var psw=this.pass
const result=this.ds.login(acnum,psw)
if(result){
  alert("login success")
  this.router.navigateByUrl('dashboard')
}
else{
  alert("incorrect acno or password")
}
// var UserDetails=this.ds.UserDetails
// if(acnum in UserDetails){
// if(psw==UserDetails[acnum]['password']){
// alert('login success')
// this.router.navigateByUrl("dashboard")
// }
// else{
//   alert('incorrect password')
// }
// }
// else{
//   alert("acnum incorrect or not registered yet")
// }


}
////////////////////////////////////////////////////

// login(a:any,b:any){
//   console.log(a.value);

  
//   // alert('login clicked')
// var acnum=a.value
// var psw=b.value
// var UserDetails=this.UserDetails
// if(acnum in UserDetails){
// if(psw==UserDetails[acnum]['password']){
// alert('login success')
// }
// else{
//   alert('incorrect password')
// }
// }
// else{
//   alert("acnum incorrect or not registered yet")
// }


// }
// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
// }
// PassChange(event:any){
//   this.pass=event.target.value
// // console.log(this.pass);


// }
/////////////////////////////////////
  } 




//first work chyynath-constructor
//pne work chyynath-ngOnInit():void{

//}
