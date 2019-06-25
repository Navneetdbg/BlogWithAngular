import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { Pages } from 'src/app/pages';


@Component({
  selector: 'app-manage-pages',
  templateUrl: './manage-pages.component.html',
  styleUrls: ['./manage-pages.component.css']
})
export class ManagePagesComponent implements OnInit {
dataSaved = false;
PageForm: any;
pageIdToUpdate = null;


  constructor(private services: PagesService , private form: FormBuilder, private toastr: ToastrService) { }
AllPages: Observable<Pages[]>;
  ngOnInit() {
    this.PageForm = this.form.group({
Title: ['', Validators.required],
Description: ['' , Validators.required]
    });
    this.getAllPages();
  }
getAllPages() {
  this.AllPages = this.services.getAllPages();
}
onFormSubmit() {
  this.dataSaved = false;
  // tslint:disable-next-line:prefer-const
  let pages = this.PageForm.value;
  this.AddPages(pages);
  this.PageForm.reset();
}
AddPages(page: Pages) {
  if (this.pageIdToUpdate == null) {
    this.services.AddPages(page).subscribe(
() => {
  this.dataSaved = true;
this.successmsg();
this.getAllPages();
this.pageIdToUpdate = null;
this.PageForm.reset();
}
    );
  } else {
page.Id = this.pageIdToUpdate;
this.services.EditPages(page).subscribe(
() => {
  this.dataSaved = true;
          this.getAllPages();
          this.successmsg();
          this.pageIdToUpdate = null;
          this.PageForm.reset();
}
);
  }
}
loadPageToEdit(PageId: number) {
  this.services.getPageId(PageId).subscribe(person => {
this.dataSaved = false;
this.pageIdToUpdate = person.Id;
this.PageForm.controls['Title'].setValue(person.Title);
this.PageForm.controls['Description'].setValue(person.Description);

  });
}
loadPageToDelete(Id: number) {
  this.services.DeletePeople(Id).subscribe(() => {
    this.dataSaved = true;
            this.getAllPages();
            this.pageIdToUpdate = null;
            this.PageForm.reset();
  });
}
resetForm() {
  this.PageForm.reset();
  this.dataSaved = false;
}
successmsg() {
    this.toastr.success('Data Saved Successfully', 'Success' );
}
 errorsmsg() {
    this.toastr.error('Error.. Please try Again', 'Error');
}

}
