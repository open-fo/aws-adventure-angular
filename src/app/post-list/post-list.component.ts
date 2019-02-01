import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    public posts;

    constructor(private _postService: PostService) { }

    ngOnInit() {
        this.getPosts();
    }

    private getPosts(): void {
        this._postService.getPosts().subscribe(
            data => {
                this.posts = data;
            },
            error => {
                console.error(error);
            },
            () => {
                console.log("Loaded posts.");
            }
        )
    }
}
