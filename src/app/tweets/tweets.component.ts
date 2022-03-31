import { Component, OnInit } from '@angular/core';
import{Tweet} from '../tweet';
@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweets:Tweet[] = [

    {
      profilepic:"assets/img.jpeg",
      username:"user1",
      twitterhandle:"@user1",
      feed:"This is my first tweet",
      comments:100,
      retweets:10,
      likes:300
    },
    {
      profilepic:"assets/img.jpeg",
      username:"user2",
      twitterhandle:"@user2",
      feed:"This is my first tweet",
      comments:100,
      retweets:10,
      likes:300
    },
    {
      profilepic:"assets/img.jpeg",
      username:"user3",
      twitterhandle:"@user3",
      feed:"This is my first tweet",
      comments:100,
      retweets:10,
      likes:300
    }



  ]
  constructor() { }

  ngOnInit(): void {
  }

}
