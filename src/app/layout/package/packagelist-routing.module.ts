import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { packagelistComponent } from './packagelist.component';

const routes: Routes = [
    {
        path: '',
        component: packagelistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class packagelistRoutingModule { }
