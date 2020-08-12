import { Component, OnInit } from '@angular/core';
import {FirestoreServiceService} from "../../service/firestore-service.service"
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-blogs-home',
  templateUrl: './blogs-home.component.html',
  styleUrls: ['./blogs-home.component.css'],
})
export class BlogsHomeComponent implements OnInit {
  data:any;
 
  constructor(
    private $fireStore:FirestoreServiceService,
    private authService: SocialAuthService
  ) {}  

  ngOnInit(): void {
   this.$fireStore.getDocumentsOfACollection('amal_portfolio').subscribe(res =>{
    this.data = res;
   },err =>{
     console.error(err);
   })
   
  }


login = () =>{
this.signInWithGoogle();
}

signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => console.log(x));
}

}
