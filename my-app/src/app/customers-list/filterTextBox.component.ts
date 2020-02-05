import {Component,OnInit, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'events';
//import { EventEmitter } from 'protractor';

@Component({
    selector:"filter-criteria-textbox",
    template:`filter on : <input type="text" [(ngModel)] = "filterCriteria"/>`
})

//[()] :  used to achieve two way binding
//whenever we use ngModel it is bundled as part of forms module
//now filter text box component is a chiild of customer list component.
//CHILD to PARENT scenario
//eventemitter,outout are someof the elements used: EventDriven Architecture implement using event bubbling
//this is the same thing which happens in event hub in cloud
//this is alll in the same ui tier
//there are two kinds of forms: reactive forms and event forms
//the lifetime of event emitter is sending to receiving.this is an efficient way since takes less memory
//other way is creating global var and store there or pipes
//eventing and event bubbling applied through the event emitter
//event tunneling: parent to child
//the subscriber of this child always connected to this and everthing is fired as sooon as we type.

export class filterTextBoxComponent implements OnInit
{
    _filterCriteria: string="";

    get filterCriteria():string{
        return this._filterCriteria;
    }
    set filterCriteria(value:string)
    {
        this._filterCriteria=value;
        console.log("filterCriteria :"+ value);
        //fire an event trigger and notify the consumer (CustomerListComponent)
        //sent through event aggregator or event emitter
        this.filterCriteriaChanged.emit(value);
    }

    @Output() filterCriteriaChanged: EventEmitter<string>= new EventEmitter<string>();

    constructor(){}

    ngOnInit(){

    }
}