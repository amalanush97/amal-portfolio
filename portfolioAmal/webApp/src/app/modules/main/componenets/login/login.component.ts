import { Component, OnInit } from '@angular/core';
import {SocialLoginService} from "src/app/services/auth/social-login.service"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth:SocialLoginService,
    public dialogRef: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit(): void {
  }

  signInWithGoogle = () =>{
    this.auth.signInWithGoogle().then(res =>{
      this.dialogRef.close();
    })
  }
}
