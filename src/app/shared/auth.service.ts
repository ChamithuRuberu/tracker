import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import { GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  fireauth:AngularFireAuth,private router:Router) { }

  //login
  login(email:string,password:string){
    this.fireauth.signInWithEmailAndPassword(email,password).then(res=>{
      localStorage.setItem('token','true');

      if (res.user?.emailVerified==true){
        this.router.navigate(['/dashboard']);
        alert('You Successfully Log Into the System ');
      }else {
        this.router.navigate(['security/verifyemail'])
      }

    },error=>{
      alert('somthing went wrong');
      this.router.navigate(['security/login'])
    })
  }

  //signup
  signup(email:string,password:string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then(res=>{
      alert("done");
      this.router.navigate(['/security/login']);
      this.sendEmailForVerification(res.user);
    },error=>{
      alert(error.message);
      this.router.navigate(['/security/signup']);
    })
  }
  //signout

  signout(){
    this.fireauth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['security/login']);
    },error=>{
      alert(error.message);
    })
  }

  //forgotPassword
  forgotPassword(email:string){
    this.fireauth.sendPasswordResetEmail(email).then(()=>{
      this.router.navigate(['/security/login']);
      alert("Please Check Your Inbox")
    },error=>{
      alert('something went wrong');
    })
  }

  //verification Email

  sendEmailForVerification(user:any){
    user.sendEmailVerification().then((res:any)=>{
      this.router.navigate(['/security/verifyemail']);
    },(error:any)=>{
      alert('Something Went wrong ! Not able to send mail to your inbox');
    })
  }

  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }

}
