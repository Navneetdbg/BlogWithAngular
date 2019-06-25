import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageBannerComponent } from './manage-banner/manage-banner.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent  ,
children: [
{path: 'blogs' , component: ManageBlogsComponent},
  {path: 'categories' , component: ManageCategoriesComponent},
  {path: 'pages' , component: ManagePagesComponent},
{path: '' , component: AdminDashboardComponent},
{path: 'banner' , component: ManageBannerComponent},
{path: 'contact' , component: ManageContactComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
