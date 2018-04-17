import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
   }

   goToCourese(){
      this.router.navigateByUrl('/courses/all');
      location.reload()
   }
  ngOnInit() {

  }
}
