import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isLiked = false;


  like(){

    this.isLiked = !this.isLiked ;

    // if(this.isLiked === false){
    //   this.isLiked = true;
    // }else{
    //   this.isLiked = false;
    // }

  }
  constructor() { }

  ngOnInit(): void {
  }

}
