import {Component} from '@angular/core';

@Component({

    selector:"app-menu",
    template:   `
            <table width="100%">
            <tr height="20px">
            <td width="100%" align="center"><h2><a href="/Customers">Customers</a></h2></td>
            </tr>
            <tr height="20px">
            <td width="100%" align="center"><h2><a href="/Orders">Orders</a></h2></td>
            </tr>
            <tr height="20px">
            <td width="100%" align="center"><h2><a href="/Contactus">Contact Us</a></h2></td>
            </tr>
            <tr height="20px">
            <td width="100%" align="center"><h2><a href="/Locations">Locations</a></h2></td>
            </tr>            
            </table>

    `
})

export class MenuComponent{

}