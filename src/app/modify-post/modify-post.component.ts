import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {PostServiceService} from "../service/post-service.service";

@Component({
  selector: 'app-modify-post',
  templateUrl: './modify-post.component.html',
  styleUrls: ['./modify-post.component.css']
})
export class ModifyPostComponent implements OnInit{
  postForm!: FormGroup;
  postId!:number;
  constructor(private formBuilder: FormBuilder , private route: ActivatedRoute , private postservice:PostServiceService)  {
  }
  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      content: ['', Validators.required]
    });
    this.route.params.subscribe(params => {
      this.postId= +params['postId'];
    });
  }
  onSubmit()  {
    if (this.postForm.valid) {
      this.postservice.updatePost(this.postId,this.postForm.value).subscribe(
          (response: any) => {
            alert('Post modified successfully');
          },
          (error: any) => {
            console.log('Error modifying Post:', error);

          }
      );
    }
  }

}
