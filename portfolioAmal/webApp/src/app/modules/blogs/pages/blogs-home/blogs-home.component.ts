import { Component, OnInit } from '@angular/core';
import {FirestoreServiceService} from "../../service/firestore-service.service"
@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css'],
})
export class BlogsHomeComponent implements OnInit {
  data:any;
  recentChips : any =[
    "Technology", "Music", "Angular", "Node",
    "Travel", "Food", "Sports", "Django",
    "Technology", "Music", "Angular", "Node",
  ]
  following:any = [
    "Travel", "Food", "Sports", "Django",
    "Technology", "Music", "Angular", "Node",
  ]
  constructor(
    private $fireStore:FirestoreServiceService
  ) {}  

  ngOnInit(): void {
   this.$fireStore.getDocumentsOfACollection('amal_portfolio').subscribe(res =>{
    this.data = res;
   },err =>{
     console.error(err);
   })
   
  }
}
