import { Inject, Injectable,PLATFORM_ID } from '@angular/core';
import { SharedService } from './shared.service';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sharedService : SharedService,@Inject(PLATFORM_ID) private platformId: Object) { }

  geAuthToken():any{
    let token : any = this.getItem('token');
    this.setItem("token",token)
    return token
  }

  setItem(key: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(key);
    }
    return null;
  }

  removeToken(key:any){
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.removeItem(key);
    }
    return null;
  }
}
