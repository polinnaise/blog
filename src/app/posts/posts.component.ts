import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  model!: Array<Post>;

  constructor(private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(data => {
      this.model = data;
    })
  }
  public onClick(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }
}
