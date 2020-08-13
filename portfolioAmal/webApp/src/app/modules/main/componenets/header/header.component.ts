import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SocialLoginService } from "src/app/services/auth/social-login.service"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  user: any;
  constructor(
    private _auth: SocialLoginService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._auth.getLoginStatus().subscribe(res => {
      console.log(res)
      if (res) {
        this.isUserLoggedIn = true;
        this.user = res;
      }
      else {
        this.isUserLoggedIn = false;
      }

    })
  }

  signIn = () => {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "500px",
    });
    dialogRef.updatePosition({ top: '150px' })
  }

  logout = () => {
    this._auth.signOut();
  }

}
