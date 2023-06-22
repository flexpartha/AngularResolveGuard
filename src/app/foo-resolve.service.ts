import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { delay, tap } from 'rxjs/operators';
const APIKEY = "e8067b53";

@Injectable({
  providedIn: 'root'
})
export class FooResolveService implements Resolve<any> {

  constructor(private http:HttpClient) { }

  resolve(route:ActivatedRouteSnapshot){
    let imbdid = route.paramMap.get('imbdid');
    return this.http.get('http://www.omdbapi.com/?i='+imbdid+'&apikey='+APIKEY).pipe(
      delay(3000), // Simulate backend latency
      tap(x => alert("Movie Information has been arrived"))
    );
  } 
}
