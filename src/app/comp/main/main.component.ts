import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


const firebaseConfig = {
  apiKey: "AIzaSyByNcKM84Xlba7MyGke7jP9B_GuCSGltV4",
  authDomain: "ttm-epi.firebaseapp.com",
  databaseURL: "https://ttm-epi.firebaseio.com",
  projectId: "ttm-epi",
  storageBucket: "ttm-epi.appspot.com",
  messagingSenderId: "361191690210",
  appId: "1:361191690210:web:1e3fd22f531f4ff2eeb3bb",
  measurementId: "G-02WRRW4YBW"
};

@Component({
  selector: 'ttm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  login:boolean=true;
  Uemail:string;
  form;
  ch:boolean = true;
  errore;
  constructor(fb : FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
    firebase.default.initializeApp(firebaseConfig);
    //firebase.default.auth().signInWithEmailAndPassword("marco.arato@epiroc.com", "marcoooo")
    firebase.default.auth().onAuthStateChanged(user=>{
      if(user){
        this.Uemail = user.email;
      } else {
        this.Uemail=""
      }
    })
  }

  logout(){
    firebase.default.auth().signOut();
  }

  signin(a: FormGroup){
    firebase.default.auth().signInWithEmailAndPassword(a.get('email').value,a.get('password').value)
    .then(()=>{
      a.setValue({email:'',password:''});
      this.errore="";
    })
    .catch(err=>{
      if(err.code=="auth/user-not-found"){
        this.errore = "Utente non trovato";
      } else if(err.code=="auth/wrong-password"){
        this.errore = "Password errata";
      }
    })
  }

  c(e){
    if(e.key=="Enter"){
      e.preventDefault();
      this.signin(this.form);
    }
  }
}
 