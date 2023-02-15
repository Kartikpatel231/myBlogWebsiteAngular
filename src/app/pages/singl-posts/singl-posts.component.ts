import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singl-posts',
  templateUrl: './singl-posts.component.html',
  styleUrls: ['./singl-posts.component.css']
})
export class SinglPostsComponent implements OnInit {
postData:any;
similarPostArray:any[] = [];
  constructor(private postService:PostService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(val=>{
      this.postService.countViews(val.id);
      this.postService.loadOnePost(val.id).subscribe(post=>{
     this.postData=post;
     this.loadSimilarPost(this.postData.category.categoryId);
    })
    })

  }
  loadSimilarPost(catId){
    this.postService.loadSimilar(catId).subscribe(val=>{
      this.similarPostArray=val;
    })
  }

}
