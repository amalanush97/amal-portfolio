import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


@Injectable({
  providedIn: 'root'
})
export class SocialLoginService {

  constructor(
    private authService: SocialAuthService
  ) { }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
  }

  getLoginStatus() {
    return this.authService.authState;
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
