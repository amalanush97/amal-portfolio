import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-blogs',
  templateUrl: './available-blogs.component.html',
  styleUrls: ['./available-blogs.component.css']
})
export class AvailableBlogsComponent implements OnInit {

  blogs:any = [1,2 ,3,4,5,6]
  constructor() { }

  ngOnInit(): void {
  }

}
