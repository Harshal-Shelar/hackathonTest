import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-order-placed',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-placed.component.html',
  styleUrl: './order-placed.component.scss'
})
export class OrderPlacedComponent {
  newUUID !: any;

  constructor(private sharedService : SharedService){}
  ngOnInit(){
    this.newUUID = this.sharedService.generateUUID();
  }

}
