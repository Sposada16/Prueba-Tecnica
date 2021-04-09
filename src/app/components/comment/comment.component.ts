import { Component, Input, OnInit } from "@angular/core";
import { PostService } from "../../services/post.service";
import { Comment } from "../../model/comment";

@Component({
  selector: "app-comment",
  templateUrl: "./comment.component.html",
  styleUrls: ["./comment.component.css"]
})
export class CommentComponent implements OnInit {
  @Input() postId: number;
  comments: Comment[];

  displayComments: boolean = false;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getComments();
  }

  public getComments() {
    this.postService.getPostComments(this.postId).subscribe(response => {
      this.comments = <Comment[]>response;
      this.displayComments = true;
    });
  }
}
