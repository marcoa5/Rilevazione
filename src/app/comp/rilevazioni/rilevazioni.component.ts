import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as moment from 'moment';

@Component({
  selector: 'ttm-rilevazioni',
  templateUrl: './rilevazioni.component.html',
  styleUrls: ['./rilevazioni.component.scss']
})
export class RilevazioniComponent implements OnInit {
elenco=[];
day:string;
visual:boolean;
@Input() email:string; 
  constructor() { }

  ngOnInit(): void {
    this.visual=false;
    var ref = firebase.default.database().ref('presenze/rec/' + this.email +'/')
    ref.once('value').then((a)=>{
      a.forEach(b=>{
        this.elenco.push({Data: moment(b.key.substring(0,11)).locale('IT').format('LL'), Nome: a.key, Ris:b.val().ris});
      })
    })
    setTimeout(()=>{
      this.elenco.reverse();
      this.visual=true;
    },2000)
  }

}
