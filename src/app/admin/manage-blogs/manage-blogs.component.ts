import { Component, OnInit } from '@angular/core';
import {Blogs} from '../../models/blogs';
import {BlogsService} from '../../services/blogs.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  datasaved = false;
  BlogForm: any;
  allBlogs: Observable<Blogs[]>;
  BlogIdToUpdate = null;
  message = null;
  imageUrl = '/assets/Img';
  fileToUpload: File = null;

  constructor(private form: FormBuilder , private service: BlogsService) { }

  ngOnInit() {
    this.BlogForm =  this.form.group({

      title: ['', Validators.required],
      short_desc: ['', Validators.required],
      author: ['', Validators.required],
      Image: ['', Validators.required],
      created_at: ['', Validators.required],
      IsFeatured: ['', Validators.required],
      IsRecent: ['', Validators.required],
      Long_desc: ['', Validators.required]
    });
    this.loadAllBlog();
  }
loadAllBlog() {
  this.allBlogs = this.service.getBlogs();
}
handleFileInput(file: FileList) {
  this.fileToUpload = file.item(0);

  const reader = new FileReader();
  reader.onload = (event: any) => {
    this.imageUrl = event.target.result;
  };
  reader.readAsDataURL(this.fileToUpload);
}
onFormSubmit(category: Blogs , Image: any) {
  this.service.postFile(category , this. fileToUpload).subscribe(
data => {

}
  );
}
DeleteBlogs(Id: number) {
  this.service.Deletepost(Id).subscribe(() => {
    this.datasaved = true;
            this.message = 'Data Deleted Successfully';
            this.loadAllBlog();
            this.BlogForm.reset();
  });
  }
// EditBlogs(Id: number, caption: Blogs , Image: any) {
//   this.service.EditBlog(Id , caption , Image).subscribe(person => {
//     this.datasaved = false;
//     this.BlogIdToUpdate = person.Id;
//     this.BlogForm.controls['title'].setValue(person.title);
//     this.BlogForm.controls['Description'].setValue(person.Description);
//     this.BlogForm.controls['author'].setValue(person.author);
//     this.BlogForm.controls['Image'].setValue(person.Image);
//     this.BlogForm.controls['created_at'].setValue(person.created_at);
//     this.BlogForm.controls['IsFeatured'].setValue(person.IsFeatured);
//     this.BlogForm.controls['IsRecent'].setValue(person.IsRecent);
//     this.BlogForm.controls['Long_desc'].setValue(person.Long_desc);
//       });
// }
}
