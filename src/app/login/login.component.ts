import { Component } from '@angular/core';

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
// acno:any
// pass:any


UserDetails:any={
  1000:{acno:1000,username:"anu",password:"abc123",balance:0},
  1001:{acno:1001,username:"fousi",password:"abc123",balance:0},
  1002:{acno:1002,username:"shani",password:"abc123",balance:0},
  1003:{acno:1003,username:"akku",password:"abc123",balance:0},
  1004:{acno:1004,username:"sharfi",password:"abc123",balance:0}


}

  constructor() {}

ngOnInit(): void{

}
// login(){
//   // alert('login clicked')
// var acnum=this.acno
// var psw=this.pass
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

login(a:any,b:any){
  console.log(a.value);

  
  // alert('login clicked')
var acnum=a.value
var psw=b.value
var UserDetails=this.UserDetails
if(acnum in UserDetails){
if(psw==UserDetails[acnum]['password']){
alert('login success')
}
else{
  alert('incorrect password')
}
}
else{
  alert("acnum incorrect or not registered yet")
}


}
// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
  
// }
// PassChange(event:any){
//   this.pass=event.target.value
// // console.log(this.pass);


// }
  } 




//first work chyynath-constructor
//pne work chyynath-ngOnInit():void{

//}
