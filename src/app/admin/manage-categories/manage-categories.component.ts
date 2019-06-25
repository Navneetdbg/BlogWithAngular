import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Categories } from 'src/app/categories';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {
  AllCategories: Observable<Categories[]>;
  dataSaved = false;
PageForm: any;
pageIdToUpdate = null;
message = null;
constructor(private services: CategoriesService , private form: FormBuilder) {}
ngOnInit() {
  this.PageForm = this.form.group({
Name: ['', Validators.required],

  });
  this.getAllPages();
}
getAllPages() {
this.AllCategories = this.services.getAll();
}
onFormSubmit() {
this.dataSaved = false;
// tslint:disable-next-line:prefer-const
let pages = this.PageForm.value;
this.AddPages(pages);
this.PageForm.reset();
}
AddPages(page: Categories) {
if (this.pageIdToUpdate == null) {
  this.services.Add(page).subscribe(
() => {
this.dataSaved = true;
this.message = 'Data Saved Successfully';
this.getAllPages();
this.pageIdToUpdate = null;
this.PageForm.reset();
}
  );
} else {
page.Id = this.pageIdToUpdate;
this.services.Edit(page).subscribe(
() => {
this.dataSaved = true;
        this.message = 'Data Updated Successfully';
        this.getAllPages();
        this.pageIdToUpdate = null;
        this.PageForm.reset();
}
);
}
}
loadPageToEdit(PageId: number) {
this.services.getbyId(PageId).subscribe(person => {
  this.message = null;
this.dataSaved = false;
this.pageIdToUpdate = person.Id;
this.PageForm.controls['Name'].setValue(person.Name);


});
}
loadPageToDelete(Id: number) {
this.services.Delete(Id).subscribe(() => {
  this.dataSaved = true;
          this.message = 'Data Deleted Successfully';
          this.getAllPages();
          this.pageIdToUpdate = null;
          this.PageForm.reset();
});
}
resetForm() {
this.PageForm.reset();
this.dataSaved = false;
this.message = null;
}
}
