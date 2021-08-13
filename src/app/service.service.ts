import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) {}

  timeRange(){
    const start = new Date();
    const end = new Date(start);
    end.setHours(end.getHours() + 2,end.getMinutes() + 59, end.getSeconds() + 59);
    return {start, end}
  }



   getWeatherInfo = () => new Observable(observer => {
     navigator.geolocation.getCurrentPosition(
       currentPosition => {
         observer.next(currentPosition)
       },
       error => observer.next(error)
     )
   }).pipe(
      map((value: any) => new HttpParams()
        .set('lon',value.coords.longitude)
        .set('lat',value.coords.latitude)
        .set('units','metric')
        .set('appid','3e30c90cd7025d31502e112bd0af5592')
      ),
     switchMap(values => this.http.get('https://api.openweathermap.org/data/2.5/forecast',{params: values}))

   )
}

