import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'ttm-rilevazioni',
  templateUrl: './rilevazioni.component.html',
  styleUrls: ['./rilevazioni.component.scss']
})
export class RilevazioniComponent implements OnInit {
Uemail:string;
elenco=[];
day:string;
  constructor() { }

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
      }
    });
    var ref = firebase.default.database().ref('presenze/ch/');
    ref.orderByKey().once('value', a=>{
      a.forEach(b=>{
        b.forEach(c=>{
          c.forEach(d=>{
            if(c.key==this.Uemail){
              this.elenco.push({Nome: c.key, Data: moment(b.key).format("DD/MM/YYYY"), Ris: d.val()});
            }
          })
          
        })
      })
    })
  }

  giorno(a){
    this.day=moment(a).locale('IT').format("dddd") + '\t' + moment(a).locale('IT').format("LL")
    return this.day
  }
}
