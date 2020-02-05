import {Pipe,PipeTransform} from '@angular/core';
import { ICustomer } from './businessinterface';

@Pipe({name:"defaultSorter"})

export class DefaultSorterPipe implements PipeTransform
{
    transform(value:any,sortProp:string,isAsc:string):any
    {
        let cust : ICustomer[]=value;
        if(isAsc=="yes")
        {
            cust.sort((a,b)=>{
                return a[sortProp]<b[sortProp] ? -1:1;
            });
        }
        else
        {
            cust.sort((a,b)=>{
                return a[sortProp]>b[sortProp] ? -1:1;
            });
        }
        return cust;
    }
}