import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Team, TeamServiceService } from '../../service/team-service.service';

@Component({
  selector: 'app-view-team',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './view-team.component.html',
  styleUrl: './view-team.component.css'
})
export class ViewTeamComponent implements OnInit {

  teams : Team[] =[];
  newTeam : Team ={
    hackathon: {
      hackathonId : 0,
    hackathonName : '',
    date : ''
    },
    teamName: ''
  };

  teamById ?: Team;
  searchId : number =0;

  constructor(private teamService : TeamServiceService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadTeams();
    this.cdr.detectChanges;
  }
  loadTeams() : void{
    this.teamService.getAllTeams().subscribe(data =>{
      this.teams = data;
    });

    console.log(this.teams);
  }

  getTeamById() : void{
    console.log(this.searchId);
    this.teamService.getTeamById(this.searchId).subscribe(data=>{
      this.teamById = data;
    });
  }
}
