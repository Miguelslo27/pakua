import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { SidebarComponent } from './components/commons/sidebar/sidebar.component';
import { ClientComponent } from './components/clients/client/client.component';

import { ClientService } from './services/client.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

