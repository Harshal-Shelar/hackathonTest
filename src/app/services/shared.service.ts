import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  
  private sharedDaat = new BehaviorSubject([]);
  sendData = this.sharedDaat.asObservable();

  constructor() {}

  sendToCart(item:any){
    this.sharedDaat.next(item)
  }

  generateUUID() {
    return uuid.v4();
  }
}
