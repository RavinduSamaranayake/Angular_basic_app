import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  //access the parameter which is passed by url
  id:any //you can pass any type of parameter
  qparamid:any
  constructor(router:ActivatedRoute) {


    //parameter mapping
    router.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    

    //query parameter mapping
    router.queryParamMap.subscribe(params => {
      this.qparamid = params.get('item');
       
    })


   }

  ngOnInit() {
  }

}
