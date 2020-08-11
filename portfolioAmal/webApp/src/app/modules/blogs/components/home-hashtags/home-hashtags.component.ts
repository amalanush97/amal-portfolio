import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-hashtags',
  templateUrl: './home-hashtags.component.html',
  styleUrls: ['./home-hashtags.component.css']
})
export class HomeHashtagsComponent implements OnInit {
  recentChips : any =[
    "Technology", "Music", "Angular", "Node",
    "Travel", "Food", "Sports", "Django",
    "Technology", "Music", "Angular", "Node",
  ]
  following:any = [
    "Travel", "Food", "Sports", "Django",
    "Technology", "Music", "Angular", "Node",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
