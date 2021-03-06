import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { manageclientComponent } from './manageclient.component'
import { manageclientRoutingModule } from './manageclient-routing.module'
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, FormsModule, manageclientRoutingModule, PageHeaderModule],
    declarations: [manageclientComponent]
})
export class manageclientModule { }
