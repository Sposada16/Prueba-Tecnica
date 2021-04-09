import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../model/post";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  displayComments: boolean = false;
  postId: number;
  constructor() {}

  ngOnInit() {}

  public comments(id) {
    this.postId = id;
    if (this.displayComments === false) {
      this.displayComments = true;
    } else {
      this.displayComments = false;
    }
  }
}
