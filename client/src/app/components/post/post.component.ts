import {Component, OnInit, Input, EventEmitter,Output} from '@angular/core';
import {IPost} from "../../../types";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PostsServiceService} from "../../services/posts-service.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post?:IPost;
  @Output() onPostDelete = new EventEmitter();
  @Output() onPostClick= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clickHandler(){
    this.onPostDelete.emit()
  }
  postClickHandler(){
    this.onPostClick.emit();
  }


}
