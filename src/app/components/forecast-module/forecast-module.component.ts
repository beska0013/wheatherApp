import {Component,OnInit} from '@angular/core';
import {ServiceService} from "../../service.service";


@Component({
  selector: 'app-forecast-module',
  templateUrl: './forecast-module.component.html',
  styleUrls: ['./forecast-module.component.scss']
})
export class ForecastModuleComponent implements OnInit {

  constructor(private weatherService: ServiceService) { }
  rain = false;
  clouds = false;
  clear = false;
  snow =  false;

  dayList:any = [];
  dayListCopy:any =[]
  date = new Date();

  selected:any;
  title:string = '';
  newDayForecast: any = [];



  getData = () => this.weatherService.getWeatherInfo()
    .subscribe( data => this.getForecastList(data))

  getDataList = (title:any)=> this.weatherService.getWeatherInfo()
   .subscribe( data => this.getChosendayForecast(data,title))

  getForecastList = (data:any)=> {
    this.getDays(data.list)

  }

  getChosendayForecast(data:any,title:string){
    this.newDayForecast = []
    data.list.forEach((item: any) => {
      if(new Date(item.dt_txt).toLocaleString('en-us', {  weekday: 'long' }) === title){

        item.weather[0].main === "Clouds"? item.clouds =  true : item.clouds = false;
        item.weather[0].main === "Rain"  ? item.rain   =  true : item.rain   = false;
        item.weather[0].main === "Clear" ? item.clearSky  =  true : item.clearSky  = false;
        item.weather[0].main === "Snow"  ? item.snow   =  true : item.snow   = false;
        this.newDayForecast.push(item)
      }
    })
    this.getStatus(this.newDayForecast)
  }


 getDays(list: any){
   list.forEach( (time:any) => {
      this.date = new Date(time.dt_txt);
      this.dayList.push(this.date.toLocaleString('en-us', {  weekday: 'long' }))
      this.dayListCopy.push(this.date.toLocaleString('en-us', {  weekday: 'short' }))
      this.dayList = [... new Set(this.dayList)]
      this.dayListCopy = [... new Set(this.dayListCopy)]
    })
   this.dayListCopy.splice(0, 1,'Today');
   this.title = this.dayList[0];
   this.getTodayForeCast(this.title,list)


 }

  getTodayForeCast(title:string,list:any){

    list.forEach((item:any)=> {
      if(new Date(item.dt_txt).toLocaleString('en-us', {  weekday: 'long' }) === title){

        item.weather[0].main === "Clouds"? item.clouds =  true : item.clouds = false;
        item.weather[0].main === "Rain"  ? item.rain   =  true : item.rain   = false;
        item.weather[0].main === "Clear" ? item.clearSky  =  true : item.clearSky  = false;
        item.weather[0].main === "Snow"  ? item.snow   =  true : item.snow   = false;
        this.newDayForecast.push(item)
      }
    })
  }

  getStatus(list: any){

    for (let i = 0; i < list.length; i++) {

      this.clouds = list[i].weather[0].main.toLowerCase() === "clouds";
      this.clear = list[i].weather[0].main.toLowerCase() === "clear";
    }
  }


 select = (item:any) => {
  this.selected = this.selected = (this.selected === item ? this.selected = "Today" : item);
   if(this.selected === "Today") this.title = this.dayList[0]
   this.dayListCopy.forEach((day:any,index:number)=> {
     if(day === this.selected) this.title = this.dayList[index];
   })
   this.getDataList(this.title)
 }


 isActive = (item: any) => this.selected === item;




  ngOnInit(): void {
    this. getData();

  }


}
