import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist.component'
import { ClientlistRoutingModule } from './clientlist-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, ClientlistRoutingModule],
    declarations: [ClientlistComponent]
})
export class ClientlistModule { }
