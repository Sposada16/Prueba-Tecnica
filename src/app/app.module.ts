import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { PostComponent } from "./components/post/post.component";
import { CommentComponent } from "./components/comment/comment.component";
import { PostService } from "./services/post.service";
import { MainPageComponent } from "./components/main-page/main-page.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, InfiniteScrollModule],
  declarations: [
    AppComponent,
    PostComponent,
    CommentComponent,
    MainPageComponent
  ],
  bootstrap: [AppComponent],
  providers: [PostService]
})
export class AppModule {}
