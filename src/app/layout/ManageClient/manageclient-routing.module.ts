import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {manageclientComponent } from './manageclient.component';

const routes: Routes = [
    {
        path: '',
        component: manageclientComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class manageclientRoutingModule {}
