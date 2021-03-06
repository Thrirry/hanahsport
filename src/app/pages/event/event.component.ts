import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  start: boolean = false
  stringEvent: string = "The events we manage put us to the the test, broaden our areas of expertise and allow us to grow."

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000)
  }

}
