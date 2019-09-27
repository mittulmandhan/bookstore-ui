import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard.component';
import { CategoryCreateComponent } from './category/category-create.component';
import { ProductCreateComponent } from './product/product-create.component';
import { ProductListComponent } from './product/product-list.component';
import { CategoryListComponent } from './category/category-list.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent, children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'category', component: CategoryListComponent },
            { path: 'product', component: ProductListComponent }]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AdminRoutingModule { }

export const routedComponents = [
    AdminLayoutComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductCreateComponent,
    AdminDashboardComponent];
