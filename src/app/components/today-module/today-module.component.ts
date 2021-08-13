import {Component,OnInit} from '@angular/core';
import {ServiceService} from "../../service.service";

@Component({
  selector: 'app-today-module [data]',
  templateUrl: './today-module.component.html',
  styleUrls: ['./today-module.component.scss']
})
export class TodayModuleComponent implements OnInit {

  constructor( private weatherService: ServiceService) { }

  rain = false;
  snow = false;
  clear = false;
  clouds = false;

  dayTimeHours:  number = 8;
  nightTimeHours:number = 20;

  currentTemp:number = 0;
  currentHumidity:number = 0;
  currentRainVolume:number = 0;
  currentWindSpeed:number = 0;
  currentWeatherStatus:string = '';

  currentForecast:any;
  currentTime = new Date();
  curentLocation:string = '';

  getData = () => this.weatherService.getWeatherInfo()
    .subscribe( data => {
      this.getTodayForecast(data)
    })

    timeRange:any = this.weatherService.timeRange();



  getTodayForecast(data:any){
    this.curentLocation = data.city.name + ',' + data.city.country;
    for(const forecast of data.list.slice(0, 8)){
      const apiDate = new Date(forecast.dt_txt).getTime();
      if(this.timeRange.start.getTime() <= apiDate && this.timeRange.end.getTime() >= apiDate){
        this.currentForecast = forecast;
      }
    }
    this.getWeatherStatus(this.currentForecast)
    this.getCurrentForecastValues(this.currentForecast)
  }

  getWeatherStatus(currentForecast: any){
   if (currentForecast.weather[0].main.toLowerCase() === 'clear')  this.clear = true;
   if (currentForecast.weather[0].main.toLowerCase() === 'rain')   this.rain = true;
   if (currentForecast.weather[0].main.toLowerCase() === 'clouds') this.clouds = true;
   if (currentForecast.weather[0].main.toLowerCase() === 'snow')   this.snow = true;
  }

  getCurrentForecastValues(currentForecast: any){
    this.currentTemp = Math.floor(currentForecast.main.temp);
    this.currentWeatherStatus = currentForecast.weather[0].main;
    this.currentHumidity = currentForecast.main.humidity;
    currentForecast.rain != undefined ?
      this.currentRainVolume = currentForecast.rain.map( (num:number) => num):
      this.currentRainVolume = 0;

    this.currentWindSpeed = currentForecast.wind.speed
  }

 checkWeather(){
   this.currentTime.getHours() >= this.dayTimeHours &&
   this.currentTime.getHours() < this.nightTimeHours &&
   this.rain || this.clouds ? document.body.classList.add("cloudy"):
     document.body.classList.remove("cloudy")
 }




  ngOnInit(): void {
    this.getData()
    this.checkWeather()
  }

}
