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
  Uemail:string='0';
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
    firebase.default.auth().getRedirectResult().then(user=>{
      if(user.user!=null){
        console.log(user);
        this.Uemail = user.user.displayName;
      } else {
        this.logina();
      }
    })
  }

  logina(){
    let provider = new firebase.default.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'consent',
      tenant: '896ecbea-bd27-4a3c-a131-34aa0b46a086'
    });
    firebase.default.auth().signInWithRedirect(provider);
  }

  logout(){
    firebase.default.auth().signOut();
  }




}
 