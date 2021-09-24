import {Component, EventEmitter, OnInit, Output,Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PostsServiceService, SinglePostsGQL} from "../../services/posts-service.service";
import {IPost} from "../../../types";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post?: IPost;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostsServiceService,
    private getSinglePost:SinglePostsGQL,
  ) {
  }

  ngOnInit(): void {
  this.getSinglePost.watch({id:"614ab76288ddca947d9d150c"})
    .valueChanges.subscribe((response)=>{
      this.post = response.data.getPost;
  })
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get("id") || "1";
    console.log("id :",id);
     this.postService.getPost(id).subscribe((data) => {
      this.post = data.data.getPost;
    })

  }
  goBack(){
    this.location.back();
  }



}
