import { Component, OnInit } from '@angular/core';
import { Banner } from './banner';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  allBanner: Observable<Banner[]>;
  constructor( private service: BannerService) { }

  ngOnInit() {
    this.GetAll();

  }
  GetAll() {
    this.allBanner = this.service.GetOneBanner();
  }
}
