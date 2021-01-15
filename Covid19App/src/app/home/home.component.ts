import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(public data:ApiService) { }
  public data_=[]

  public select_data=[]
  
  ngOnInit() {

    this.data.getRequestApi().subscribe((data: any[])=>{
      //console.log(data);
      this.data_ = data;
      this.returngetlastid(this.data_)
    })  
    
  }

  public returngetlastid(data_){
    let last_=data_[data_.length-1]
    //return last_.id
    this.select_data=last_
    return this.select_data
  }

}
