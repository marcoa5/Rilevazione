import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { exit } from 'process';
import { Router } from '@angular/router';

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
  UId:string;
  form;
  ch:boolean = true;
  errore;
  constructor(fb : FormBuilder, private router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    firebase.default.initializeApp(firebaseConfig);
   }

  ngOnInit() {

    firebase.default.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
        this.UId = user.uid;
      } else {
        this.logina();
      }
    });

    /*firebase.default.database().ref("rec").once('value').then(a=>{
      
      a.forEach(e=>{
        e.forEach(f=>{
          var d = moment(new Date()).format("YYYY-MM-DD");
          var c = f.key.substring(0,10);
          //if(c==d){this.router.navigate(['exist'])}
        })
      })
    })*/

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
    this.Uemail = '0'
  }

  home(){
    this.router.navigate([''])
  }
  

  rile(){
    this.router.navigate(['rile'])
  }
}
 