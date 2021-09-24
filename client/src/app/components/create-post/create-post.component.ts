import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {PostsServiceService} from "../../services/posts-service.service";
import {IPost} from "../../../types"

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})

export class CreatePostComponent implements OnInit {

  @Output() onSubmit = new EventEmitter();
  post:IPost = {
    title:"",
    content:"",
    date:""
  };
  constructor(private postService:PostsServiceService) { }

  ngOnInit(): void {
  }
  submitHandler(){
    if(this.post)
    this.onSubmit.emit(this.post);
  }


}
