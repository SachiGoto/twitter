import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'retweet',
  templateUrl: './retweet.component.html',
  styleUrls: ['./retweet.component.scss']
})
export class RetweetComponent implements OnInit {


isTweeted = false;

tweeted(){

  this.isTweeted = !this.isTweeted ;

}

  constructor() { }

  ngOnInit(): void {
  }

}
