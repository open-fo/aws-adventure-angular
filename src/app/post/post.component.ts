import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

    public post: object;

    constructor(private _route: ActivatedRoute,
                private _postService: PostService) { }

    ngOnInit() {
        const id = +this._route.snapshot.paramMap.get('id');
        this.getPost(id);
    }

    getPost(id: number): void {
        this._postService.getPost(id)
        .subscribe(
            data => { this.post = data },
            error => { console.error('Error fetching post: ' + error) },
            () => {console.log('Post fetched.')}
        );
    }
}
