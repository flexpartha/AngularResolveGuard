import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movieDetails:any;

  ratingsValue =[];
  ratingSource:any;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieDetails = this.route.snapshot.data['movie'];
    console.log("Movie Details",this.movieDetails);
    let Rating = [];
    this.ratingsValue = this.movieDetails['Ratings'];
    console.log("RATING",this.ratingsValue);
    let actor = this.movieDetails.Actors;
    console.log("Actor",actor);

  //COVERT OBJECT INTO ARRAY
   let movieDetailsArr = Object.keys(this.movieDetails).map(key =>({
      type: key, value: this.movieDetails[key]
   }));

   console.log("MOVIE DETAILS AFTER CONVERTING AS AN ARRAY",movieDetailsArr);

   
  //  movieDetailsArr.forEach((item) =>{
  //    if(item.type ==="Ratings"){
  //      this.ratingsValue = item.value;
  //    }
  //  });
  //  this.ratingsValue.forEach((itemSource) =>{
  //    this.ratingSource = itemSource.Source;
  //    console.log("Ratings Source",this.ratingSource);
  //  })
  //  console.log("Ratings Value",this.ratingsValue);
   //console.log("Ratings Source",ratingSource);

    // this.movieDetails.forEach((item) =>{
    //   console.log(item);
    // });
  }

}