import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  createTweet(tweet: string){
    //const headers =  new HttpHeaders({'Content-type': 'application/json'});
    let body = {"tweet": tweet}
    return this.http.post('http://localhost:8080/api/message/postTweet', body);
  }

  getTweets(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:8080/api/message/userTweets');
  }

  deleteTweet(id: any){
    //const headers =  new HttpHeaders({'Content-type': 'application/json'});
    let params = new HttpParams().set('tweetId', id)
    return this.http.post('http://localhost:8080/api/message/deleteTweet', params);
  }
}
