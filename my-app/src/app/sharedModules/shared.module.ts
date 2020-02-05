import {NgModule} from '@angular/core';
import { NameFormatterPipe } from './name.formatter.pipe';
import { CommonModule } from '@angular/common';
import { DefaultSorterPipe } from './defaultSorter.pipe';

@NgModule({
    declarations:[NameFormatterPipe,DefaultSorterPipe],
    imports:[CommonModule],
    exports:[NameFormatterPipe,DefaultSorterPipe]
})

export class sharedModule{

}