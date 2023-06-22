import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class JsonService {

  pagenum:number = 1;
  public apiUrl = 'https://reqres.in/api/users?page='+this.pagenum;
  public globalResult:any
  constructor(private httpClient:HttpClient) { }

  getJsonTickets(){
    return this.httpClient.get("assets/db.json").pipe(
      // map((res) =>{
      //   console.log("GlobalRes",res);
      //   this.globalResult = res;
      // })
    )
  }

  loadJsonData():Observable<any>{
    return this.httpClient.get(this.apiUrl)
    .pipe(map(data =>{
      console.log("DATA FROM SERVICE",data);
      return data;
    }))
   }

   getNextPage(){
    this.pagenum +=1;
    this.apiUrl ='https://reqres.in/api/users?page='+this.pagenum;
    return this.httpClient.get(this.apiUrl).pipe(

      )
 }
 getPreviousPage(){
    this.pagenum -=1;
    this.apiUrl ='https://reqres.in/api/users?page='+this.pagenum;
    return this.httpClient.get(this.apiUrl).pipe(

      )
 }

//  PROMISE CODE STARTS HERE

    loadApiData(){
      let promise = new Promise((resolve, reject) =>{
        this.httpClient.get(this.apiUrl)
            .toPromise()
            .then(
              res =>{
                console.log(res["support"]);
                //success part
                console.log("DATA FROM SERVICE VIA PROMISE",res["data"]);
                resolve(res); 
              },
              msg => { // Error
                reject(msg);
              }
            );
      });
      return promise;
    }
//  PROMISE CODE ENDS HERE

//ANGULAR 4 5 LAZYLOADING CODING
//  {'path': 'lazy',
//     loadChildren:'./absolutepath/modulename#LazyModule'
//    }
}
