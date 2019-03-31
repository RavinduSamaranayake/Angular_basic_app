import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SetmycolorDirective } from './directives/setmycolor.directive';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RegformComponent } from './components/regform/regform.component';


const appRoutes: Routes = [  //route paths
  { path: 'dashboard', component: DashboardComponent },
  { path: 'activities/:id', component: ActivitiesComponent },
  { path: 'items', component: ActivitiesComponent },
  { path: 'register', component: RegformComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SetmycolorDirective,
    DashboardComponent,
    ActivitiesComponent,
    RegformComponent,
   
  ],
  
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
