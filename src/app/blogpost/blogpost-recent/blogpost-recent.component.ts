import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  title = 'Blog';
  constructor(private titleService: Title, private newservices: BlogpostService) { }
  rblogs: Observable<Blogpost[]>;
  ngOnInit() {
    this.loadAllRecentBlog();
  }
loadAllRecentBlog() {
  this.rblogs = this.newservices.getRecentBlog();
}
}
