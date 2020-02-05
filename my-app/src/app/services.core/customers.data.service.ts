// this is also a convern and is translated into a module.
//getallcustomers is called on init of customer component
//this is an async call
//rxjs provides the feature of observables. this means I am 
//promise means async method can return 2 states: success or failure
//observables is subscribed by customers
import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http';
import {throwError, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import { ICustomer } from '../sharedModules/businessinterface';

@Injectable()

export class CustomerDataService {
//this comms http is injeted into the service
//this is automatically injected
//so whenever this is initialized the angular provides a httpclient object which is used to call the api
    constructor(private mycommSoket:HttpClient){}

    customerApiUrl = "./assets/jsonfiles/customers.json";

    //this method returns in the form of an observable.
    
    getAllCustomers(): Observable<ICustomer[]>{

        return this.mycommSoket.get<ICustomer[]>(this.customerApiUrl)
        .pipe(// pipe means if there is an error then you pipe it to another method
            catchError(this.handleError)
        )

    }
    handleError(error:any)
    {
        return throwError(error||"Error from API");
    }
}

