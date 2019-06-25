import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { ManageCategoriesComponent } from './manage-categories/manage-categories.component';
import { ManagePagesComponent } from './manage-pages/manage-pages.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { ManageBannerComponent } from './manage-banner/manage-banner.component';
import { ManageContactComponent } from './manage-contact/manage-contact.component';

@NgModule({
  declarations: [
    AdminComponent,
     AdminDashboardComponent,
       ManageCategoriesComponent,
        ManagePagesComponent,
        ManageBlogsComponent,
        ManageBannerComponent,
        ManageContactComponent,

    ],
  imports: [
    CommonModule, ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: []
})
export class AdminModule { }
