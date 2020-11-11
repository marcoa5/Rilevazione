import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

@Component({
  selector: 'ttm-but',
  templateUrl: './but.component.html',
  styleUrls: ['./but.component.scss']
})
export class ButComponent implements OnInit {
Uemail:string;
UId: string;
ver=0;
@Output() newE=new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
      }
    })
  }

  

 
  registra(a){
    var data = moment(new Date()).format("YYYY-MM-DD - HH:mm:ss");
    var datashort =  moment(new Date()).format("YYYYMMDD")
    var db = firebase.database();
    db.ref("presenze/rec/" +  this.Uemail + "/" + data).set({ris: a})
    .then(()=>{
      this.newE.emit(a)
    })
    .catch(err=>{
      console.log(err)
    })
    db.ref("presenze/ch/"  + datashort + "/" + this.Uemail).set({ris: a})
  }

  getO(){
    var orientation = window.innerWidth > window.innerHeight ? false : true;
    return orientation;
  }


}
