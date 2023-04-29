import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
	tweet: string = '';
	tweetMaxLength: number = 240;
	tweetRemaining: number = this.tweetMaxLength;

	constructor(private messagesService: MessagesService) {

	}

	sendTweet() {
		this.messagesService.addMessage(this.tweet);
		this.tweet = '';
		this.tweetRemaining = this.tweetMaxLength;
	}
	changeTweet () {
		this.tweetRemaining = this.tweetMaxLength - this.tweet.length;
	}
}
