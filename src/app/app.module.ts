import { BrowserModule , Title} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BlogpostModule } from './blogpost/blogpost.module';
import { CmspageModule } from './cmspage/cmspage.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogpostService } from './blogpost/blogpost.service';
import { CmspageService } from './cmspage/cmspage.service';
import { AdminModule } from './admin/admin.module';
import { ToastrModule } from 'ngx-toastr';
import { PagerService } from './pager/pager-service';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   BrowserAnimationsModule,
  ToastrModule.forRoot(),
    BlogpostModule,
    CmspageModule,
   AdminModule,
    AppRoutingModule,
  ],
  providers: [Title, BlogpostService, CmspageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
