import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { managepackageComponent } from './managepackage.component';

const routes: Routes = [
    {
        path: '',
        component: managepackageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class managepackageRoutingModule { }
