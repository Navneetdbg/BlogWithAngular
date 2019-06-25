import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators} from '@angular/forms';
import { CmspageService } from '../cmspage.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
dataSaved = false;
ContactForm: any;
message = null;
  constructor(private form: FormBuilder , private services: CmspageService) { }

  ngOnInit() {
    this.ContactForm = this.form.group({
      Name: ['', Validators.required],
      Email: ['' , [Validators.required, Validators.email]],
      Mobile: ['' , [Validators.required , Validators.minLength(10), Validators.maxLength(10)]],
      Message: ['' , Validators.required]
    });
  }
  onFormSubmit() {
    // tslint:disable-next-line:prefer-const
    let person = this.ContactForm.value;
    console.log(person) ;
    this.create(person);

    this.ContactForm.reset();
  }

  create(contact: Contact) {
    this.services.AddContact(contact).subscribe(
      () => {
this.dataSaved = true;
this.message = 'data saved sucessfully';
this.ContactForm.reset();
      }
    );
  }

}
