import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth';
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
    firebase.auth().onAuthStateChanged(user=>{
      if(user!=null){
        this.Uemail = user.displayName;
      }
    });
  }

}
