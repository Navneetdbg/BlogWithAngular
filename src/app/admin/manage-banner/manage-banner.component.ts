import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from 'src/app/banner/banner';
import { BannerService } from 'src/app/banner/banner.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-banner',
  templateUrl: './manage-banner.component.html',
  styleUrls: ['./manage-banner.component.css']
})
export class ManageBannerComponent implements OnInit {
datasaved = false;
  BannerForm: any;
  allBanner: Observable<Banner[]>;
  BlogIdToUpdate = null;
  message = null;
  imageUrl = '/assets/Img';
  fileToUpload: File = null;
  constructor( private service: BannerService , private form: FormBuilder) { }

  ngOnInit() {
    this.BannerForm = this.form.group({
      Title1: ['', Validators.required],
      Title2: ['', Validators.required],
      Image: ['', Validators.required]
    });
    this.GetAll();
  }
  GetAll() {
    this.allBanner = this.service.getBanners();
  }
handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  onFormSubmit(category: Banner , Image: any) {
    this.service.postFile(category , this. fileToUpload).subscribe(
  data => {

  }
    );
  }
  loadPageToDelete(Id: number) {
    this.service.DeleteBanner(Id).subscribe(() => {
      this.datasaved = true;
              this.GetAll();
              this.BannerForm.reset();
    });
  }
}
