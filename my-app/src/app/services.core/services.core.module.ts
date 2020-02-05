import {NgModule, Component} from '@angular/core';
import { CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CustomerDataService} from './customers.data.service';

@NgModule({

    //declarations:[CustomerDataService]: to import dependencies
    //exports: expose this component
    //providers: to provide the services
    //import: modules are imported
    providers:[CustomerDataService],
    imports:[CommonModule,HttpClientModule],    
})

export class ServiceCoreModule{}

