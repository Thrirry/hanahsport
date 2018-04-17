import { Component, OnInit } from '@angular/core';
import { ROUTES } from './assets';
declare var $:any;

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  traineritems: any[];

  constructor() { }

  goToTrainer(){
    
  }

  ngOnInit() {
     $.getScript('../../../../assets/js/function_home.min.js');
     this.traineritems = ROUTES.filter(traineritems => traineritems);
  }

}
