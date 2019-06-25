import { Component, OnInit } from '@angular/core';
import { CmspageService } from '../cmspage.service';
import { Observable } from 'rxjs';
import { Page } from '../page';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

import {switchMap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(private serrvices: CmspageService,
    private title: Title ,
    private route: Router ,
    private Activated: ActivatedRoute) { }
About: Observable<Page>;
  ngOnInit() {
    this.About = this.Activated.paramMap.pipe(
      switchMap((param: ParamMap) =>
      this.serrvices.getAboutUs(param.get('slug'))
      )
          );
          this.title.setTitle('About');
        }

}
