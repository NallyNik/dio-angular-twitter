import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
	tweet: string = '';
	tweetMaxLength: number = 240;
	tweetRemaining: number = this.tweetMaxLength;

	sendTweet() {

	}
	changeTweet () {
		this.tweetRemaining = this.tweetMaxLength - this.tweet.length;
	}
}
