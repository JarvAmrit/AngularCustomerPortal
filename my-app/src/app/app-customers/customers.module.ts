import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { CustomersComponent } from './customers.component';
import {CustomersListComponent} from '../customers-list/customers.list.component';
import { sharedModule } from '../sharedModules/shared.module';
import { filterTextBoxComponent } from '../customers-list/filterTextBox.component';
import {FormsModule} from '@angular/forms';
import {ServiceCoreModule} from '../services.core/services.core.module';


@NgModule({
    declarations:[CustomersComponent, CustomersListComponent,filterTextBoxComponent],
    imports:[CommonModule,sharedModule,FormsModule,ServiceCoreModule],
    exports:[CustomersComponent]
})

export class CustomersModule{


}