import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JsonService } from '../json.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arrayForm:FormGroup;
  name1:any;
  jsondata:any;
  statusValue = [];
  typeValye = [];
  ticketValue = [];
  ticketStatus:any ={};
  tick = [];
  insertItemArr = [];
  tickLength:number;

  combinedDta:any;
  combinedObject:any;
  constructor( private fb:FormBuilder,private jsonserv:JsonService) { }

  selectList:Array<any> =[
    {id:'',"text":"Select Text"},
    {id:'1',"text":"Lorem"},
    {id:'2',"text":"Parturient"},
    {id:'3',"text":"Euismod"},
  ]

  ngOnInit(): void {

    // this.arrayForm = this.fb.group({
    //   selectTxt:[''],
    //   //female:['']
    // });

    this.jsonserv.getJsonTickets().subscribe(
      res =>{
        this.jsondata = res;
        //console.log("Fetch Json Data::-",this.jsondata);
        let Ticket =[];
        Ticket= this.jsondata['ticket'];
        //console.log("Ticket",Ticket);
        //COVERT OBJECT INTO ARRAY
          let jsonDetailsArr = Object.keys(this.jsondata).map(key =>({
            source: key, value: this.jsondata[key]
        }));
        //console.log("MOVIE DETAILS AFTER CONVERTING AS AN ARRAY",jsonDetailsArr);
        jsonDetailsArr.forEach((item) =>{
          if(item.source ==="status"){
            this.statusValue = item.value;
          }
        });
        jsonDetailsArr.forEach((item) =>{
          if(item.source ==="type"){
            this.typeValye = item.value;
          }
        });
        jsonDetailsArr.forEach((item,index) =>{
          if(item.source ==="ticket"){
            this.ticketValue = item.value;
            // if(this.ticketValue[index]['status']===1){ 
            //   alert("HIIII");
            //   var tick = item.value;
            //   console.log("INDEX",this.ticketValue[index]['status']);
            // }
            
            //console.log("Tick",tick);
          }
        });

        this.ticketValue.forEach((item,index) =>{
         //console.log("ITEM",item);
          if(item.status===this.statusValue[0]['id']){
            this.insertItemArr.push(item);
            //console.log("LENGTH OF ITEM:::---",this.insertItemArr);
            this.combinedObject = {
              id:item.id,
              assignee:item.assignee,
              description:item.description,
              status:item.status,
              type:item.type,
              name:'Completed'
            }
            //console.log("combinedobj",this.combinedObject)
            this.tick.push(this.combinedObject);
            
            this.tickLength = this.tick.length;
            //console.log("INDEX foreach",index);
            //console.log("Total Length for status 1",this.tickLength);
          }
          // if(item.status===this.statusValue[1]['id']){
          //   this.combinedObject = {
          //     id:item.id,
          //     assignee:item.assignee,
          //     description:item.description,
          //     status:item.status,
          //     type:item.type,
          //     name:'InProgress'
          //   }
          //   this.tick.push(this.combinedObject);
          //   let length2 = this.tick.length;
          //   //console.log("INDEX foreach",index);
          //   console.log("Total Length for status 2",length2);
          // }
          // if(item.status===this.statusValue[2]['id']){
          //   this.combinedObject = {
          //     id:item.id,
          //     assignee:item.assignee,
          //     description:item.description,
          //     status:item.status,
          //     type:item.type,
          //     name:'NotStarted'
          //   }
          //   this.tick.push(this.combinedObject);
          //   let length3 = this.tick.length;
          //   //console.log("INDEX foreach",index,"TOTAL TICK",this.tick);
          //   console.log("Total Length for status 3",length3);
          // }
        });
        //console.log("status Value",this.statusValue);
        // console.log("types Value",this.typeValye);
        // console.log("ticket Value",this.ticketValue);
      }
    )
    
  }

  // get selectTxt(){
  //   return this.arrayForm.get('selectTxt');
  // }
  public onOptionsSelected(event){
    console.log("Event Value",event.target.value);
    this.statusValue.forEach((item) =>{
      console.log(item);
      if(item.id == event.target.value){
         this.name1 = item.name;
      }
    })
    
    console.log(this.name1);
  }

  public onOptionsSelected1(event){
    console.log("Event Value",event.target.value);
    this.selectList.forEach((item) =>{
      console.log(item);
      if(item.id == event.target.value){
         this.name1 = item.text;
      }
    })
    
    console.log(this.name1);
  }
}
