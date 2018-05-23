import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { packagelistComponent } from './packagelist.component'
import { packagelistRoutingModule } from './packagelist-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, packagelistRoutingModule],
    declarations: [packagelistComponent]
})
export class packagelistModule { }
