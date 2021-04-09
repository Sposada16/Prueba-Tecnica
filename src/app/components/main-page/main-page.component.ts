import { Component, OnInit } from "@angular/core";
import { Post } from "../../model/post";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"]
})
export class MainPageComponent implements OnInit {
  showPosts: boolean = false;
  postsNumber: number;
  posts: Post[];
  displayedPosts: Post[] = [];
  actualPost: number = 0;
  divisions: number;
  actualDivision: number = 1;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  public getPosts() {
    this.postService.getPosts().subscribe(response => {
      this.posts = <Post[]>response;
      this.postsNumber = this.posts.length;
      this.getDivisions();
      this.displayPosts();
      this.showPosts = true;
    });
  }

  getDivisions() {
    this.divisions = Math.round(this.postsNumber / 20);
  }

  displayPosts() {
    for (let i = 0; i < 20; i++) {
      if (this.actualPost < this.postsNumber) {
        this.displayedPosts.push(this.posts[i + this.actualPost]);
      }
    }
    this.actualPost += 20;
    this.actualDivision++;
  }

  onScroll() {
    if (this.actualDivision <= this.divisions) {
      this.displayPosts();
    }
  }
}
