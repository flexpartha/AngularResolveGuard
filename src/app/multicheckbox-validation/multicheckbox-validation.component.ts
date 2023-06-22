import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { JsonService } from '../json.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const apiUrl ='https://reqres.in/api/users?page=1';

@Component({
  selector: 'app-multicheckbox-validation',
  templateUrl: './multicheckbox-validation.component.html',
  styleUrls: ['./multicheckbox-validation.component.css']
})
export class MulticheckboxValidationComponent implements OnInit {

  apiUrl ='https://reqres.in/api/users?page=1'
  jsonData:Object;
  UserArr = [];
  form: FormGroup;
  Data: Array<any> = [
    { name: 'Pear', value: 'pear' },
    { name: 'Plum', value: 'plum' },
    { name: 'Kiwi', value: 'kiwi' },
    { name: 'Apple', value: 'apple' },
    { name: 'Lime', value: 'lime' }
  ];
  constructor(private fb: FormBuilder,private jsonServ:JsonService,
    private http:HttpClient) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      checkArray: this.fb.array([])
    });

    

    this.jsonServ.loadJsonData().subscribe(
      res =>{
        console.log(res);
        // this.UserArr = Object.keys(res).map(key =>({
        //    source: key, value: res[key]
        // }));
        // this.UserArr.forEach((item) =>{
        //   if(item.source ==="data"){
        //     this.jsonData = item.value;
        //   }
        // })
      }
    )

    this.jsonServ.loadApiData(); //PROMISE RETRIVE DATA IN ONINIT

    this.getData();
  }

  getData(){
    return this.http.get(apiUrl)
    .subscribe(res =>{
      console.log("DATA FROM SERVICE2",res["data"]);
     // this.jsonData = res["data"];
      this.UserArr = Object.keys(res).map(key =>({
          source: key, value: res[key]
        }));
        console.log("this.userArr",this.UserArr);
        this.UserArr.forEach((item) =>{
          if(item.source ==="data"){
            this.jsonData = item.value;
            console.log("JSONDATA FROM OBSERVBLE",this.jsonData);
          };
          if(item.source =="support"){
            let data = item.value;
            console.log("Data",data);
            let url = data.url;
            console.log("URL",url);
            let text = data.text;
            console.log("Text",text);
          }
        })
     // return data;
    }) 
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
  
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value)
  }

  goToNext(){
    this.jsonServ.getNextPage().subscribe(
      restData =>{
        console.log("Result",restData);
        this.UserArr = Object.keys(restData).map(key =>({
          source: key, value: restData[key]
       }));
       this.UserArr.forEach((item) =>{
         if(item.source ==="data"){
           this.jsonData = item.value;
           console.log("JSONDATA",this.jsonData);
         }
       })
      },(error =>{
          console.log("Error in api",error);
      })
    );
   }
   goToPreviousPage(){
     this.jsonServ.getPreviousPage().subscribe(
      restData =>{
        this.UserArr = Object.keys(restData).map(key =>({
          source: key, value: restData[key]
       }));
       this.UserArr.forEach((item) =>{
         if(item.source ==="data"){
           this.jsonData = item.value;
         }
       })
      }
    );
   }
}
