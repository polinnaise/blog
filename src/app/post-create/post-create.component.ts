import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: '',
      body: '',
      userId: 1
    });

    this.form.valueChanges.subscribe(console.log);
  }

  submitForm(): void {
    const values = this.form.value;
    this.postService.addPost(values).subscribe(console.log);
  }

}
