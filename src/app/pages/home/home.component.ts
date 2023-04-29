import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	tweets: string[] = [];

	constructor(private messagesService: MessagesService) {
	}

	ngOnInit() {
		this.tweets = this.messagesService.getMessages();
	}
}
