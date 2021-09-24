import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { PostsServiceService } from '../../services/posts-service.service';
import { IPost } from '../../../types';

// We use the gql tag to parse our query string into a query document

@Component({
  styleUrls: ['posts.component.css'],
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
})
export class PostsComponent implements OnInit, OnDestroy {
  loading?: boolean;
  posts: any = [];
  error?: any;
  post?: any;

  constructor(
    private apollo: Apollo,
    private postService: PostsServiceService
  ) {}

  ngOnInit() {
    this.getPosts();
    // this.postService.getCurrency().subscribe((currencies)=>{
    //   console.log("currencies:",currencies);
    // })
  }
  createPost(post: IPost) {
    this.postService.newPost(post).subscribe(({ data }) => {
      console.log('data posted:', data);
      console.log('this posts:', this.posts);
      console.log('creatPost:', data.createPost);
      this.posts = [...this.posts, { ...data.createPost }];
    });
  }
  removePost(postId: string) {
    console.log(postId);
    this.postService.deletePost(postId).subscribe(({ data }) => {
      const { deletePost } = data;
      console.log('deleted post:', deletePost);
      this.posts = this.posts.filter(
        (post: IPost) => post.id !== deletePost.id
      );
    });
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data.data.getPosts;
      },
      (error) => {
        this.error = error;
        throw new Error(error);
      }
    );
  }

  ngOnDestroy() {
    // this.querySubscription!.unsubscribe();
  }
}
