import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hackathon, HackathonServiceService } from '../../service/hackathon-service.service';

@Component({
  selector: 'app-add-hackathon',
  standalone: true,
  imports: [FormsModule , HttpClientModule, CommonModule],
  templateUrl: './add-hackathon.component.html',
  styleUrl: './add-hackathon.component.css'
})
export class AddHackathonComponent implements OnInit {
  hackathons : Hackathon[] =[];
  newHackathon : Hackathon ={
    date: '',
    hackathonName: ''
  };

  constructor(private hackathonService : HackathonServiceService){}

  ngOnInit(): void {
    throw new Error('Method not Implemented')
  }

  addHackathon() : void{
    this.hackathonService.addHackathon(this.newHackathon).subscribe(data => {
      this.hackathons.push(data);
      this.newHackathon={
        hackathonName : '',
        date : ''
      }
    })
  }

}
