import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserLayoutComponent } from './layout/user-layout.component';
import { UserDashboardComponent } from './dashboard/user-dashboard.component';

const routes: Routes = [
    {
        path: '', component: UserLayoutComponent, children: [
            { path: '', component: UserDashboardComponent }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}

export const routedComponents = [
    UserLayoutComponent,
    UserDashboardComponent, ];
