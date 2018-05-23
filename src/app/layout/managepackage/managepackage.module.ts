import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { managepackageComponent } from './managepackage.component'
import { managepackageRoutingModule } from './managepackage-routing.module'
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule, managepackageRoutingModule],
    declarations: [managepackageComponent]
})
export class managepackageModule { }
