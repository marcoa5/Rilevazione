import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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

UId: string;
ver=0; _Uemail; _osp;
@Input()
get osp(){
  return this._osp;
}
set osp(osp:string){
  this._osp=osp;
}
@Input() 
get Uemail(){
  return this._Uemail;
}
set Uemail(Uemail:string){
  this._Uemail=Uemail;
}
@Output() newE=new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  

 
  registra(a){
    var data = moment(new Date()).format("YYYY-MM-DD - HH:mm:ss");
    var datashort =  moment(new Date()).format("YYYYMMDD")
    var db = firebase.database();
    db.ref("presenze/rec/" +  this._Uemail + "/" + data).set({ris: a, data:datashort})
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

a(b){
  if(!this.Uemail){this.Uemail = b}
}
}
