import { Component, OnInit } from '@angular/core';
import {BlogpostService} from '../blogpost.service';
import {Blogpost} from '../blogpost';
import {Title} from '@angular/platform-browser';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-blogpost-feature',
  templateUrl: './blogpost-feature.component.html',
  styleUrls: ['./blogpost-feature.component.css']
})
export class BlogpostFeatureComponent implements OnInit {
  title = 'Blog';
  constructor(private titleService: Title, private newservices: BlogpostService) { }
  fblogs: Observable<Blogpost[]>;
  ngOnInit() {
  this.loadAllFeatureBlogs();
  }

  loadAllFeatureBlogs() {
    this.fblogs = this.newservices.getFeaturedBlog();

  }
}
