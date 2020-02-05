import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './rootComponents/banner.component';
import {FooterComponent} from './rootComponents/footer.component';
import { MenuComponent } from "./rootComponents/menu.component";

//import {CustomersComponent} from "./app-customers/customers.component";
import {CustomersModule} from "./app-customers/customers.module";

@NgModule({
  declarations: [
    AppComponent,BannerComponent,FooterComponent,MenuComponent
  ],
  imports: [
    BrowserModule,CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
