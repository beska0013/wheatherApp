import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  title = 'wheatherApp';
  dayTime = true;
  constructor() {}
  dayTimeHours:  number = 8;
  nightTimeHours:number = 20;
  currentHourse = new Date();
  time: any = new Date()


  dayNightTime(){
    const body = document.body;
    if(this.currentHourse.getHours() >= this.nightTimeHours || this.currentHourse.getHours() < this.dayTimeHours){
      this.dayTime = false
      body.className = 'night'
    }
      else body.className = 'day';

  }

  getTime = () => this.time = new Date();


  ngOnInit(): void {
    this.dayNightTime();
    setInterval(this.getTime, 1000)

    // console.log(this.currentHourse.getMilliseconds());
  }
}
