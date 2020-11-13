import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ttm-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {
  
  @Output() rrr= new EventEmitter();
  @Output() er = new EventEmitter();
  constructor() { }
  
  ngOnInit(): void {
  }
  nomeFC = new FormControl('',[
      Validators.required, Validators.pattern('[a-zA-Z_ ]{2,}')
    ])

  c(a){
    this.rrr.emit(a.target.value);
    if(this.nomeFC.hasError('pattern') ||this.nomeFC.hasError('required')){
      this.er.emit(1)
    } else {
      this.er.emit(0)
    }
  }
}
