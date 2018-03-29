import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() onSelectClient = new EventEmitter();

  public loadingClientes: boolean = false;
  public clients: any;
  public selectedClient: any;

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.loadingClientes = true;

    setTimeout(() => {

      this.clientService.getClients()
      .then(res => {
        // success
        this.loadingClientes = false;
        this.clients = res;
      })
      .catch(error => {
        this.loadingClientes = false;
        alert(error);
      });

    }, 2500);
  }

  public selectClient(client: any) {
    this.selectedClient = client;
    this.onSelectClient.emit(this.selectedClient);
  }
}