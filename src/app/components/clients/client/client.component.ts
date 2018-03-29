import { Component, Input } from '@angular/core';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  @Input('data') client: any;

}