import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Teams } from './models/teams';
import { IGameResults } from './models/game-results';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  public headers = new HttpHeaders({
    'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  });
  public requestOptions = { headers: this.headers };
  public today = new Date();
  public last12Days: string[] = [];
  public formatArray: string = '';
  constructor(private http: HttpClient) {
    for (var i = 0; i < 12; i++) {
      this.last12Days.push('dates[]=' + this.today.getFullYear() + '-' + (this.today.getMonth() + 1) + '-' + (this.today.getDate() - i));
    }
    this.last12Days[this.last12Days.length - 1] =
      this.formatArray = this.last12Days.join(',').replace(/,/g, '&');
  }


  getData(): Observable<Teams> {
    return this.http.get<Teams>('https://free-nba.p.rapidapi.com/teams', this.requestOptions);
  }

  getTeamResults(id: number): Observable<IGameResults> {
    return this.http.get<IGameResults>('https://free-nba.p.rapidapi.com/games?page=0&' + this.formatArray + '&per_page=12&team_ids[]=' + id, this.requestOptions)
  }
}
