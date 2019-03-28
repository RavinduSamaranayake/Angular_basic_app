import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-app';
  fcolor = "brown";
  lcolor = "green";
  result = 2; //pass the data from component to view (one way data binding)

  users = [{fname : "kushan" , lname : "ravindu"},
           {fname : "mahesh" , lname : "perera"},
           {fname : "malith" , lname : "ravindu"},
           {fname : "janith" , lname : "ravindu"},
           {fname : "shaveen" , lname : "ravindu"},
          ]
}
