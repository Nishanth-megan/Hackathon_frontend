import { Injectable, OnInit } from '@angular/core';
import { Hackathon } from './hackathon-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Team{
  hackathon : Hackathon | {
    hackathonId ?: number;
    hackathonName : string;
    date : string
  }
  teamId ?: number;
  teamName : string
}

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  constructor(private http : HttpClient) { }
 
   private baseUrl = 'http://localhost:1101/team'
 
   addTeam(team :Team) : Observable<Team>{
     return this.http.post<Team>(`${this.baseUrl}/save`, team)
   }
 
   getTeamById(id: number): Observable<Team>{
     return this.http.get<Team>(`${this.baseUrl}/get/${id}`);
   }
 
   getAllTeams(): Observable<Team[]>{
     return this.http.get<Team[]>(`${this.baseUrl}/all`);
   }
}
