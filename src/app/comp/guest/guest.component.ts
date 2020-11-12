import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ttm-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  
  @Output() rrr= new EventEmitter();
  
  constructor() { }
  
  ngOnInit(): void {
  }
  nomeFC = new FormControl('',[
      Validators.required,
    ])

  c(a){
    this.rrr.emit(a.target.value)
  }
}
