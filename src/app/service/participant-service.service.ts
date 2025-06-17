import { Injectable } from '@angular/core';
import { Team } from './team-service.service';
import { Hackathon } from './hackathon-service.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Participant{
  team : Team | {
     hackathon : Hackathon | {
        hackathonId ?: number;
        hackathonName : string;
        date : string
      }
      teamId ?: number;
      teamName : string
  }
  participantId ?: number;
  email : string;
  participantName : string
}

@Injectable({
  providedIn: 'root'
})
export class ParticipantServiceService {

  constructor(private http :HttpClient) { }

   private baseUrl = 'http://localhost:1101/participant'
  
    addParticipant(participant :Participant) : Observable<Participant>{
      return this.http.post<Participant>(`${this.baseUrl}/save`, participant)
    }
  
    getParticipantById(id: number): Observable<Participant>{
      return this.http.get<Participant>(`${this.baseUrl}/get/${id}`);
    }
  
    getAllParticipants(): Observable<Participant[]>{
      return this.http.get<Participant[]>(`${this.baseUrl}/all`);
    }
}
