import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../posts/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  model: Post = {} as Post;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const id= Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (id) {
      this.postService.getPost(id).subscribe(data => {
        this.model = data;
      });
    }   
}
}
