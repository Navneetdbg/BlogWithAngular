import { Component, OnInit } from '@angular/core';
import {BlogpostService} from '../blogpost.service';
import {Blogpost} from '../blogpost';
import {Title} from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { PagerService } from 'src/app/pager/pager-service';
@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
title = 'Blog';
//  blogs: Blogpost;
blogs: Observable<Blogpost[]>;

error: {};

  constructor(private titleService: Title, private services: BlogpostService ) { }

  ngOnInit() {
this.loadAllBlogs();

  }
loadAllBlogs() {
  this.blogs = this.services.getBlogs();
}

}
