import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     $.getScript('../../../assets/js/function-main.min.js'); //for slide left-bar
  }

}
