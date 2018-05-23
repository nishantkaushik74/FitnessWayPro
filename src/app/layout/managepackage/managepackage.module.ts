import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { managepackageComponent } from './managepackage.component'
import { managepackageRoutingModule } from './managepackage-routing.module'
import { FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule, FormsModule, managepackageRoutingModule, PageHeaderModule],
    declarations: [managepackageComponent]
})
export class managepackageModule { }
