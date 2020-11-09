import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'ttm-exist',
  templateUrl: './exist.component.html',
  styleUrls: ['./exist.component.scss']
})
export class ExistComponent implements OnInit {
oggi;
  constructor() { }

  ngOnInit(): void {
    this.oggi = moment(new Date()).locale('IT').format('dddd LL')
  }

}
