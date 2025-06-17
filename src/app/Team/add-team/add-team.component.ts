import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team, TeamServiceService } from '../../service/team-service.service';
import { Hackathon, HackathonServiceService } from '../../service/hackathon-service.service';

@Component({
  selector: 'app-add-team',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-team.component.html',
  styleUrl: './add-team.component.css'
})
export class AddTeamComponent implements OnInit{

  teams : Team[] = [];
  hackathons : Hackathon[] = [];
  newTeam : Team={
    hackathon: {
      hackathonId : 0,
    hackathonName : '',
    date : ''
    },
    teamName: ''
  }

  constructor(private TeamService: TeamServiceService ,private hackathonService : HackathonServiceService){}

  ngOnInit(): void {
    this.loadAllHackathons();
  }
  loadAllHackathons() : void{
    this.hackathonService.getAllHackathons().subscribe(data=>{
      this.hackathons = data;
    });
  }

  addTeam() : void {
    this.TeamService.addTeam(this.newTeam).subscribe(data => {
      this.teams.push(data);
      this.newTeam={
        hackathon : {
          hackathonId : 0,
          hackathonName : '',
          date : ''
        },
        
        teamName : ''
      }
    })
  }
}
