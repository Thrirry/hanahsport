import { Component, OnInit, OnDestroy, AfterContentInit, EventEmitter } from '@angular/core';
import { ROUTES } from './assets'

declare var $:any;
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'course-detail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {

  course: any[] = ROUTES;

  constructor() { }

  public curPath: string;

  navChange($event) {
    console.log($event);
    this.changeData($event);
  }

  changeData(courses: string) {
    this.course = this.filterPro(courses);
  }

   filterPro(courses: string): any[] {
    if (!courses) {
      return ROUTES;
    }
    return ROUTES.filter(coursess => {
      return coursess.class.includes(courses);
    })
  }

  // path: string;
  // private sub: any;

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.courses = ROUTES.filter(courses => courses);

  //   this.sub = this.route.params.subscribe(params => {
  //      this.path = params['path']; // (+) converts string 'id' to a number

  //      // In a real app: dispatch action to load the details here.
  //   });
  // }
  
  //  ngOnDestroy() {
  //   this.sub.unsubscribe();
  // }

  //   ngAfterContentInit(): void {
  //     this.curPath = location.pathname;
  // }

}
