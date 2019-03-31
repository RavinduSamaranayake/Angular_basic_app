import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.css']
})
export class RegformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form_data:NgForm){
    console.log(form_data); //get all data of the form
    console.log(form_data.value); //get input value  form the form... (we use the ngModel for this)
  }

}
