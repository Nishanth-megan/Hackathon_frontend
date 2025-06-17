import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HackathonHomeComponent } from './Hackathon/hackathon-home/hackathon-home.component';
import { AddHackathonComponent } from './Hackathon/add-hackathon/add-hackathon.component';
import { ViewHackathonComponent } from './Hackathon/view-hackathon/view-hackathon.component';
import { TeamHomeComponent } from './Team/team-home/team-home.component';
import { AddTeamComponent } from './Team/add-team/add-team.component';
import { ViewTeamComponent } from './Team/view-team/view-team.component';
import { ParticipantHomeComponent } from './Participant/participant-home/participant-home.component';
import { AddParticipantComponent } from './Participant/add-participant/add-participant.component';
import { ViewParticipantComponent } from './Participant/view-participant/view-participant.component';

export const routes: Routes = [
    {path:'', component : HomeComponent},
    {path:'hackathon-home', component: HackathonHomeComponent},
    {path:'add-hackathon' , component:AddHackathonComponent},
    {path:'view-hackathon' , component:ViewHackathonComponent},
    {path:'team-home' , component:TeamHomeComponent},
    {path:'add-team' , component:AddTeamComponent},
    {path:'view-team' , component:ViewTeamComponent},
    {path:'participant-home' , component:ParticipantHomeComponent},
    {path:'add-participant' , component: AddParticipantComponent},
    {path:'view-participant' , component:ViewParticipantComponent},

];
