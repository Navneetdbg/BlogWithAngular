import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable, from} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import { BlogpostService } from '../blogpost.service';
import { Blogpost } from '../blogpost';
@Component({
  selector: 'app-blogpost-details',
  templateUrl: './blogpost-details.component.html',
  styleUrls: ['./blogpost-details.component.css']
})
export class BlogpostDetailsComponent implements OnInit {

  blog: Observable<Blogpost>;
  constructor(private title: Title ,
    private services: BlogpostService ,
    private route: Router ,
    private Activated: ActivatedRoute) { }

  ngOnInit() {
    this.blog = this.Activated.paramMap.pipe(
switchMap((param: ParamMap) =>
this.services.getBlog(+param.get('id'))
)
    );
    this.title.setTitle('Blog Detail');
  }

}
