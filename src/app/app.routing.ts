import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminAuthGuard } from './service/admin.guard.service';
import { UserAuthGuard } from './service/user.guard.service';

const routes: Routes = [
    { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) , canActivate: [AdminAuthGuard]},
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) , canActivate: [UserAuthGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
