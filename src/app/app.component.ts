import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedClient: any;

  public showClient(client: any) {
    this.selectedClient = client;
    console.log(this.selectedClient);
  }

  public unselectClient() {
    this.selectedClient = undefined;
  }
}
