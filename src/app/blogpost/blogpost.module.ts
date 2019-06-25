import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeatureComponent } from './blogpost-feature/blogpost-feature.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostDetailsComponent } from './blogpost-details/blogpost-details.component';
import { BlogpostRecentComponent } from './blogpost-recent/blogpost-recent.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [BlogpostFeatureComponent, BlogpostListComponent, BlogpostDetailsComponent, BlogpostRecentComponent, CategoryComponent],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports: [
    BlogpostFeatureComponent
  ]
})
export class BlogpostModule { }
