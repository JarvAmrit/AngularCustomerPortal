import {Component, OnInit } from '@angular/core';
import { ICustomer } from '../sharedModules/businessinterface';
import { CustomerDataService } from '../services.core/customers.data.service';

@Component({
    selector:"app-customers",
    templateUrl:"./customers.component.html",
})

export class CustomersComponent implements OnInit {

    title="Customers";
   


    customers :ICustomer[];

    constructor(private custDataService: CustomerDataService){
        

    }


    //Lifecycle Hook to initiate the component
    //this is a stage after object constrution
    //this is from the code now we also try to get it from a json file.
    //now the communications is decoupled with the communications just to obey single responsibility principle and dependency inversion that means
    //we provide components through injectables which we can call third party services
    //Angular provides us with DI container.
    //Angular injectables are servies. any Service is injected as a singleton. (only one event can be fired at any point of time: once instance created)
    // the browser implements it as a queued communication
    //now here the service will be imported.
    //data services are injectables
    //so here the observable is like a blanket to any type(here Icustomer) which says angular that this is going to get modified so keep a watch on it.
    
    ngOnInit()
    {
        //uncomment code for data from  memory
//     this.customers =[
//     {"id":201,"name":"Amrit Pandey","city":"Manhattan","orderTotal":134.34,"customerSince":new Date(2010,1,12)},
//     {"id":202,"name":"Rajnit Verma","city":"Jaipur","orderTotal":124.34,"customerSince":new Date(2009,2,13)},
//     {"id":203,"name":"Rahul Dravid","city":"Bangalore","orderTotal":121.00,"customerSince":new Date(2009,3,18)},
//     {"id":204,"name":"Mahendra Dhoni","city":"Ranchi","orderTotal":126.14,"customerSince":new Date(2009,1,11)},
//     {"id":205,"name":"Virat Kohli","city":"Delhi","orderTotal":104.64,"customerSince":new Date(2009,5,25)},
//     {"id":206,"name":"Rohit Sharma","city":"Mumbai","orderTotal":174.94,"customerSince":new Date(2009,7,22)},
// ];

this.custDataService.getAllCustomers()
.subscribe((custs:ICustomer[])=>{//subscribe to the service
this.customers=custs;
})

    }
}

