import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/database';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';
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
  ver;
  inizio;
  d1; d2;
  fine; osp; us; tod;
  constructor(fb : FormBuilder, private router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    firebase.initializeApp(firebaseConfig);
   }

  ngOnInit() {
    this.tod=new Date();
    this.cont_rec()
    var i =  new Date(moment(new Date()).add(-7,'days').format('LL'));
    var f = new Date();
    this.d2 = new FormControl(f);
    this.d1 = new FormControl(i);
    this.inizio=i;
    this.fine=f;
  }

  logina(){
    let provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'consent',
      tenant: '896ecbea-bd27-4a3c-a131-34aa0b46a086'
    });
    firebase.auth().signInWithRedirect(provider);
  }

  logout(){
    firebase.auth().signOut();
    this.Uemail = '0'
  }

  home(){
    this.ver=0;
    this.us=this.Uemail;
    this.cont_rec()
  }
  
  rile(){
    this.ver=3;
  }
  
  getOrientation(){
    var orientation = window.innerWidth > window.innerHeight ? "Landscape" : "Portrait";
    return orientation;
  }
  guest(){
    this.us="";
    this.ver=2;
    this.osp='1';
  }

  cont_rec(){
    firebase.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
        this.us=user.displayName;
        this.UId = user.uid;
        var ref = firebase.database().ref('presenze/ch/' + moment(new Date()).format('YYYYMMDD') + '/');
        ref.once('value', (a)=>{
          a.forEach(b=>{
            if(b.key==this.Uemail){this.ver=1;}
          })
        }).finally(()=>{if(this.ver!=1){this.ver=2}}
        )
      } else {
        this.logina();
      }
    })
  }

  cambiaVer(e){
    this.ver=4;
  }
}
 