import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableData = [{
    column1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
  }, {
    column1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
  }, {
    column1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
  },{
    column1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column3: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
    column5: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus.',
  }];
  constructor() { }

  ngOnInit() {
  }

}
