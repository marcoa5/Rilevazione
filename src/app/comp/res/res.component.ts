import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import "firebase/analytics";
import 'firebase/auth';
import 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'ttm-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.scss']
})
export class ResComponent implements OnInit {
Uemail:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
      }
    });
  }

}
