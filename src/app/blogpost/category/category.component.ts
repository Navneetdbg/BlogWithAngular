import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';
import { Observable } from 'rxjs';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category: Observable<Category[]>;
  constructor(private title: Title , private services: BlogpostService) { }

  ngOnInit() {
    this.onloasdCategory();
  }
onloasdCategory() {
  this.category = this.services.getCategories();
}
}
