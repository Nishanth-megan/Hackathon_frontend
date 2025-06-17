import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Hackathon{
  hackathonId ?: number;
  hackathonName : string;
  date : string
}

@Injectable({
  providedIn: 'root'
})
export class HackathonServiceService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'http://localhost:1101/hackathon'

  addHackathon(hackathon :Hackathon) : Observable<Hackathon>{
    return this.http.post<Hackathon>(`${this.baseUrl}/save`, hackathon)
  }

  getHackathonById(id: number): Observable<Hackathon>{
    return this.http.get<Hackathon>(`${this.baseUrl}/get/${id}`);
  }

  getAllHackathons(): Observable<Hackathon[]>{
    return this.http.get<Hackathon[]>(`${this.baseUrl}/all`);
  }
}
