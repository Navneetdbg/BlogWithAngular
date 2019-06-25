import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../cmspage/contact';
import { ContactService } from 'src/app/services/contact.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Contacts } from 'src/app/models/contact';

@Component({
  selector: 'app-manage-contact',
  templateUrl: './manage-contact.component.html',
  styleUrls: ['./manage-contact.component.css']
})
export class ManageContactComponent implements OnInit {
  AllCategories: Observable<Contact[]>;
  dataSaved = false;
PageForm: any;
pageIdToUpdate = null;
message = null;
constructor(private services: ContactService , private form: FormBuilder) {}
ngOnInit() {
  this.PageForm = this.form.group({
Name: ['', Validators.required],
Email: ['', Validators.required],
Message: ['', Validators.required],

Reply: ['', Validators.required]
  });
  this.getAllPages();
}
getAllPages() {
this.AllCategories = this.services.getAll();
console.log(this.AllCategories);

}
loadPageToEdit(PageId: number) {
  this.services.GetById(PageId).subscribe(person => {
    this.message = null;
  this.dataSaved = false;
  this.pageIdToUpdate = person.Id;
  this.PageForm.controls['Name'].setValue(person.Name);
  this.PageForm.controls['Email'].setValue(person.Email);
  this.PageForm.controls['Message'].setValue(person.Message);
  });
  }
  onFormSubmit(category: Contacts) {
    this.services.Reply(category).subscribe(
  data => {

  }
    );
  }

}
