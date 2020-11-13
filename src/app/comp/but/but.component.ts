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
ver=0; _Uemail; _osp; _er; ch=0;
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
@Input()
get er(){
  return this._er;
}
set er(er){
  er=this._er;
}
@Output() newE=new EventEmitter<string>();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  

 
  registra(a){
    var data = moment(new Date()).format("YYYY-MM-DD - HH:mm:ss");
    var datashort =  moment(new Date()).format("YYYYMMDD");
    var db = firebase.database();
    db.ref("presenze/rec/" +  this._Uemail + "/" + data).set({ris: a, data:parseInt(datashort)})
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

b(c){
  if(c==1){
    this.ch=c;} else {
      this.ch=0
    }
}
}
