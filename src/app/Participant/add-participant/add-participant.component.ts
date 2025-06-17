import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Participant, ParticipantServiceService } from '../../service/participant-service.service';
import { Team, TeamServiceService } from '../../service/team-service.service';

@Component({
  selector: 'app-add-participant',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './add-participant.component.html',
  styleUrl: './add-participant.component.css'
})
export class AddParticipantComponent implements OnInit{
  participants : Participant[] =[];
  teams : Team[] =[];
  newParticipant : Participant ={
    team: {
      hackathon: {
        hackathonId: 0,
        hackathonName: '',
        date: ''
      },
      teamId: 0,
      teamName: ''
    },
    email: '',
    participantName: ''
  }

  constructor(private participantService :ParticipantServiceService, private teamService: TeamServiceService){}

  ngOnInit(): void {
    this.loadAllTeams();
  }
  loadAllTeams() :void{
    this.teamService.getAllTeams().subscribe(data =>{
      this.teams= data;
    });
  }

  addParticipant() : void{
    this.participantService.addParticipant(this.newParticipant).subscribe(data =>{
      this.participants.push(data);

      this.newParticipant={
        team: {
          hackathon: {
            hackathonId: 0,
            hackathonName: '',
            date: ''
          },
          teamId: 0,
          teamName: ''
        },
        email: '',
        participantName: ''
      }
    })
  }
}