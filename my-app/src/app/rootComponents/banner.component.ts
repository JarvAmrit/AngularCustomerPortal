import {  Component } from '@angular/core';
// this is coz we need to import the component feature


//Component Directive /Decorator

@Component({

    selector:"app-banner",
    template:`
        <table width="100%">
        <tr>
            <td width="100px"><img src="https://cdn.clipart.email/6e42d9d70dd9e2444516a13a30443dc8_banyan-tree-clipart-peepal-tree-pencil-and-in-color-banyan-tree-_450-294.jpeg" width="80" height="40"/></td>
            <td valign="center" align="center"><h1>My First Angular 8 Application</h1></td>
        </tr>
        </table>
    `
})

export class BannerComponent
{
    
}







