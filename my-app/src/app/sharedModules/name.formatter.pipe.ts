//cross cuts are core level dependencies which can be used in all the modules: cross cutting concepts
// in angular cross cuts are implemented as pipes
//use pipe and pipetransform in implements as well
//class cannot be used because how will we invoke it in a component
//now this is common to the angular template- visual formatting level
// cross cuts are there for visual transformation
//pipes are resuable angular artifacts that are attached to angular components
import {Pipe, PipeTransform} from '@angular/core';
//for pipes the it is always camelcase
@Pipe({name:"nameFormatter"})

export class NameFormatterPipe implements PipeTransform
{
    transform(value:any)
    {
        let fullName=value;
        if(value)
        {
            const firstName:string=fullName.split(' ')[0];
            const lastName :string= fullName.split(' ')[1];

            fullName= lastName.charAt(0).toUpperCase()+
            lastName.slice(1)+","+
            firstName.charAt(0).toUpperCase()+
            firstName.slice(1);
        }
        return fullName;
    }
}