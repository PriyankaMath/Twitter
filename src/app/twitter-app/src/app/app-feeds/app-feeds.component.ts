import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { TwitterService } from 'src/app/twitter.service';

@Component({
  selector: 'app-app-feeds',
  templateUrl: './app-feeds.component.html',
  styleUrls: ['./app-feeds.component.css']
})
export class AppFeedsComponent implements OnInit {
  tweets = <any>[];

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.gettweets();
  }
  
  gettweets(){
    this.twitterService.getTweets()
    .subscribe(
      (response) => {
        console.log(response);
        this.tweets = response;
      },
      (error) => console.log(error)
    );
  }

  ngOnChanges(changes: SimpleChange){
    // this.gettweets();
  }

  postTweet(tweet: string) {
    console.log(tweet);
    this.twitterService.createTweet(tweet)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  deletetwittermsg(id: string){
    this.twitterService.deleteTweet(id)
    .subscribe(
      (response) => {
        console.log(response)
        this.gettweets();
      },
      (error) => console.log(error)
    );
  }

}
