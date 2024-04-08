import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PostServiceService} from "../service/post-service.service";
import {CommentServiceService} from "../service/comment-service.service";
import * as echarts from 'echarts';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css','../../assets/assetsf/css/stylecd4e.css']
})
export class BlogComponent implements OnInit {
  posts: any;
  postForm!: FormGroup;
  postStatusForms: { [key: string]: FormGroup } = {};
  message!:string;
  createCommentForm!: FormGroup;
  postId!:number;

  constructor(private fb: FormBuilder, private postService: PostServiceService , private commentService: CommentServiceService) {}

  ngOnInit(): void {
    this.initForm();
    this.loadPosts();
    console.log("test");
    this.postService.getPostStatusCounts().subscribe(data => {
      this.renderChart(data);
    });
  }
  initForm(): void {
    this.postForm = this.fb.group({
      content: ['', Validators.required]
    });
    this.createCommentForm= this.fb.group({
      comment: ['', Validators.required]
    })


  }
  renderChart(data: any): void {
    const chart = echarts.init(document.getElementById('post-chart'));
    const option = {
      title: {
        text: 'Statut des Posts'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          name: 'Statut',
          type: 'pie',
          radius: '50%',
          data: Object.entries(data).map(([key, value]) => ({ name: key, value: value }))
        }
      ]
    };
    chart.setOption(option);
  }

  loadPosts(): void {
    this.postService.getAllPost().subscribe(posts => {
      this.posts = posts;
      this.posts.forEach((post:any) => {
        this.postStatusForms[ post.id] = this.fb.group({
          postStatus: [post.postStatus, Validators.required]
        });
      });
      console.log(this.posts);
    });
  }
  updatePostStatus(post : any)  {
    debugger;
    if (this.postStatusForms[post.id].valid) {

      post.postStatus = this.postStatusForms[post.id].value.postStatus

      this.postService.updatePost(post.id,post).subscribe(
          (response: any) => {
            alert('Post modified successfully');
          },
          (error: any) => {
            console.log('Error modifying Post:', error);

          }
      );
    }
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
