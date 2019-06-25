import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesService } from '../services/pages.service';
import { Observable } from 'rxjs';
import { Pages } from '../pages';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private titleServices: Title , private myservices: PagesService) { }
pages: Observable<Pages[]> ;
  ngOnInit() {
    this.newServices();
  }
newServices() {
  this.pages = this.myservices.getAllPages();
}
setPageTitle(title: string ) {
  this.titleServices.setTitle(title);
}
}
