import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { FocusonComponent } from './pages/focuson/focuson.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TrainerComponent } from './pages/trainer/trainer.component';
import { MapsComponent } from './pages/maps/maps.component';
import { EventComponent } from './pages/event/event.component';

const routes: Routes =[
      { path: 'home',      component: HomeComponent },
      { path: '',          redirectTo: 'home', pathMatch: 'full' },

      { path: 'focuson',      component: FocusonComponent },
      { path: 'contact',      component: ContactComponent },
      { path: 'trainer',      component: TrainerComponent },
      { path: 'maps',      component: MapsComponent },
      { path: 'event',      component: EventComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

