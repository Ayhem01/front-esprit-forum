import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PostServiceService} from "../service/post-service.service";
import {CommentServiceService} from "../service/comment-service.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css','../../assets/assetsf/css/stylecd4e.css']
})
export class BlogComponent implements OnInit {
  posts: any;
  postForm!: FormGroup;
  message!:string;
  createCommentForm!: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostServiceService , private commentService: CommentServiceService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPosts();
    console.log("test");
  }
  initForm(): void {
    this.postForm = this.fb.group({
      content: ['', Validators.required]
    });
    this.createCommentForm= this.fb.group({
      comment: ['', Validators.required]
    })
  }

  loadPosts(): void {
    this.postService.getAllPost().subscribe(posts => {
      this.posts = posts;
      console.log(this.posts);
    });
  }
  addPost(): void {
    console.log("method add post")
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value).subscribe((res) => {
        console.log('Nouveau post ajouté:', res);
        this.loadPosts();
        this.postForm.reset();

      },error => { console.log('in error');console.log(error)});
      console.log('out');
    }
  }
  deletePost(id: any): void {
    this.postService.deletePost(id).subscribe(() => {
      this.loadPosts();
    });
  }
  addComment(idPost: any ): void {
    console.log(this.createCommentForm.get("comment")?.value);
    if (this.createCommentForm.valid) {
      this.commentService.addComment(this.createCommentForm.get("comment")?.value,idPost, 1).subscribe((res) => {
        console.log('Nouveau comment ajouté:', res);
        this.loadPosts();
        this.postForm.reset();
        this.createCommentForm.reset();

      },error => { console.log('in error');console.log(error)});
      console.log('out');
    }
  }
}
