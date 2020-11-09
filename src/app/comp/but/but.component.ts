import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import * as firebase from 'firebase/app';
import "firebase/analytics";
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
  constructor(private router: Router) { }

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
        this.UId = user.uid;
        var ref = firebase.default.database().ref('presenze/ch/' + moment(new Date()).format('YYYYMMDD') + '/');
        ref.once('value', (a)=>{
          a.forEach(b=>{
            if(b.key == this.Uemail){
              this.ver=1;
            }
          })
        })
        .then(a=>{
          if(this.ver==1){
            this.router.navigate(['exist'])
          } else {
            this.ver=2;
          }
        })
      } else {};
      
    });
  }

  registra(a){
    var data = moment(new Date()).format("YYYY-MM-DD - HH:mm:ss");
    var datashort =  moment(new Date()).format("YYYYMMDD")
    var db = firebase.default.database();
    db.ref("presenze/rec/" +  this.Uemail + "/" + data).set({ris: a})
    .then(a=>{
      this.router.navigate(['res']);
    })
    .catch(err=>{
      console.log(err)
    })
    db.ref("presenze/ch/"  + datashort + "/" + this.Uemail).set({ris: a})
  }

}
