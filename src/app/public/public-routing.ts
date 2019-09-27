import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicLayoutComponent } from './layout/public-layout.component';
import { LoginComponent } from './account/login.component';
import { SignupComponent } from './account/signup.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
    {
        path: '', component: PublicLayoutComponent, children: [
            { path: '', component: StoreComponent },
            { path: 'login', component: LoginComponent },
            { path: 'signup', component: SignupComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}

export const routedComponents = [LoginComponent,
    SignupComponent,
    PublicLayoutComponent,
    StoreComponent ];


