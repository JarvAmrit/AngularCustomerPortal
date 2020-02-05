import {Component, OnInit, Input} from '@angular/core';
import { ICustomer } from '../sharedModules/businessinterface';
import { filterTextBoxComponent } from './filterTextBox.component';

@Component({
    selector:"app-customers-list",
    templateUrl:"./customers.list.component.html"
})

export class CustomersListComponent implements OnInit {

    //private backing field. underscore is only used as private backing field
    private _lstCustomers: ICustomer[];

    title:string="List of Customers";

    lstCustomer: ICustomer[];
    filteredCustomers :ICustomer[];
    isVisible = true;
    customersOrderTotal: any=0.0;
    isAscendingSort = true;
    //get and set the values of the private backing field
    //now add input to get or set to open up a channel to send it to parent
    // in the html side of parent we have used property binding to attach the value from parent to child-PARENT TO CHILD SCENARIO USING @INPUT
    @Input() get lstCustomers():ICustomer[]{
        return this._lstCustomers;
    }

    set lstCustomers(value)
    {
        this._lstCustomers=value;
        //reevaluation of all the logic on the basis of filered customers
        this.filteredCustomers=this._lstCustomers;
        this.calculateCustomersOrdersTotal();
    }

    toggleVisibility()
    {
        this.isVisible=!this.isVisible;
    }
//to calculate the order total
    calculateCustomersOrdersTotal()
    {
        // this.lstCustomers.forEach((cust)=>{
        //     this.customersOrderTotal+= cust.orderTotal;
        // })
        this.filteredCustomers.forEach((cust)=>{
            this.customersOrderTotal+= cust.orderTotal;
        })
    }
//to sort the customers based on different conditions
    sortCustomers(sortProp:string)
    {
        if(this.isAscendingSort)
        {
            // this.lstCustomers.sort((a,b)=>{
            //     return a[sortProp] < b[sortProp] ? -1:1;
            // });
            this.filteredCustomers.sort((a,b)=>{
                return a[sortProp] < b[sortProp] ? -1:1;
            });
        }
        else
        {
            // this.lstCustomers.sort((a,b)=>{
            //     return a[sortProp] > b[sortProp] ? -1:1;
            // });
            this.filteredCustomers.sort((a,b)=>{
                return a[sortProp] > b[sortProp] ? -1:1;
            });
        
        }
        //toggle the sort order
        this.isAscendingSort = !this.isAscendingSort;

    }
    
    filterCustomers(filterText:string)
    {
        console.log("Received Filter text:"+filterText);
        //arrow finction is inline method
        if(filterText!=null)
        {
            this.filteredCustomers= this.lstCustomers.filter((cust:ICustomer)=>{
                return cust.id.toString().indexOf(filterText.toString())>-1||
                cust.name.toString().toLowerCase().indexOf(filterText.toLowerCase().toString())>-1||
                cust.orderTotal.toString().toLowerCase().indexOf(filterText.toLowerCase().toString())>-1||
                cust.city.toString().toLowerCase().indexOf(filterText.toLowerCase().toString())>-1||
                cust.customerSince.toString().indexOf(filterText.toLowerCase().toString())>-1
            });
        }
        else{
            this.filteredCustomers=this.lstCustomers;
        }

        //calculate the orders again
        this.calculateCustomersOrdersTotal();
    }

    constructor(){

    }

    ngOnInit(){
        //this.calculateCustomersOrdersTotal();
        
    }
}