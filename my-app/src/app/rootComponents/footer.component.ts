import {Component} from '@angular/core';

@Component({

    selector:"app-footer",
    template:`
        <table>
        <tr><td>Contact us:</td></tr>
        <tr><td>Amrit Kumar Pandey</td></tr>
        <tr><td>&copy;{{CopyRight}}</td></tr>
        </table>
    `
})


export class FooterComponent {

    CopyRight:string="Test CopyRight Laws";

} 
