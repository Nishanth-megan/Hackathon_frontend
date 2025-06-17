import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Participant, ParticipantServiceService } from '../../service/participant-service.service';

@Component({
  selector: 'app-view-participant',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './view-participant.component.html',
  styleUrl: './view-participant.component.css'
})
export class ViewParticipantComponent implements OnInit{
  participants : Participant[] =[];
  newParticipant : Participant={
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

  participantById ?: Participant;
  searchId : number =0;

  constructor(private participantService : ParticipantServiceService, private cdr :ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadParticipants();
    this.cdr.detectChanges;

  }
  loadParticipants() : void{
    this.participantService.getAllParticipants().subscribe(data =>{
      this.participants = data;
    });

    console.log(this.participants);
  }

  getParticipantById() : void{
    console.log(this.searchId);
    this.participantService.getParticipantById(this.searchId).subscribe(data=>{
      this.participantById = data;
    });
  }



}
