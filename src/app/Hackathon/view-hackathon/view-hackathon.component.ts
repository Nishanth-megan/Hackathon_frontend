import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hackathon, HackathonServiceService } from '../../service/hackathon-service.service';

@Component({
  selector: 'app-view-hackathon',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './view-hackathon.component.html',
  styleUrl: './view-hackathon.component.css'
})
export class ViewHackathonComponent implements OnInit{

  hackathons : Hackathon[] = [];
  newHackathon : Hackathon = {
    hackathonName: '',
    date: ''
  };

  hackathonById ?: Hackathon;
  searchId : number = 0;

  constructor(private hackathonService : HackathonServiceService, private cdr : ChangeDetectorRef){}  
  
  ngOnInit(): void {
    this.loadHackathons();
    this.cdr.detectChanges;
  }
  loadHackathons() : void {
    this.hackathonService.getAllHackathons().subscribe(data => {
      this.hackathons = data;
    });

    console.log(this.hackathons);
  }

  getHackathonById() : void{
    console.log(this.searchId);
    this.hackathonService.getHackathonById(this.searchId).subscribe(data=>{
      this.hackathonById = data;
    });
  }

}
