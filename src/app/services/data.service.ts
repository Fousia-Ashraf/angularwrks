import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
currentUser:any

  UserDetails:any={
    1000:{acno:1000,username:"anu",password:"abc123",balance:0},
    1001:{acno:1001,username:"fousi",password:"abc123",balance:0},
    1002:{acno:1002,username:"shani",password:"abc123",balance:0},
    1003:{acno:1003,username:"akku",password:"abc123",balance:0},
    1004:{acno:1004,username:"sharfi",password:"abc123",balance:0}
  
  
  }
  
  register(usn:any,acno:any,psw:any){
if(acno in this.UserDetails){
  return false
}
else{
this.UserDetails[acno]={acno,username:usn,password:psw,balance:0}
return true
}

  }

login(acno:any,psw:any){
  
  var UserDetails=this.UserDetails

  if(acno in UserDetails){
    if(psw==UserDetails[acno]['password']){
     this.currentUser= UserDetails[acno]["username"]
     console.log(this.currentUser);
     

      return true
    
    
    }
    
    else{
      return false
    }
    
    
    }
    else{
      return false
     }
}

deposit(acnum:any,password:any,amount:any){
let UserDetails = this.UserDetails
//convert string amount to number

var amnt=parseInt(amount)

if(acnum in UserDetails){

  if(password==UserDetails[acnum]["password"]){
 //update bALANCE
 UserDetails[acnum]["balance"]+=amnt
 //return current balanace
 return UserDetails[acnum]["balance"]

  }
  else{
    return false
  }
}
else{
  return false
}


}



withdraw(acnum:any,password:any,amount:any){
  let UserDetails = this.UserDetails
  //convert string amount to number
  
  var amnt=parseInt(amount)
  
  if(acnum in UserDetails){
  
    if(password==UserDetails[acnum]["password"]){
   //update bALANCE
   if(amnt<UserDetails[acnum["balance"]]){
    UserDetails[acnum]["balance"]-=amnt
   //return current balanace
   return UserDetails[acnum]["balance"]


   }
   else{
    alert('insufficient balance')
    return false
   }
   
  
    }
    else{
      alert("incorrect password")
      return false
    }
  }
  else{
    alert("incorrect acno")
    return false
  }
  
  
  }

}
