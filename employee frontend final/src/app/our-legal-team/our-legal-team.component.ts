import { Component, OnInit } from '@angular/core';

interface LegalTeamMember {
  name: string;
  position: string;
  email: string;
  description: string;
  photo: string; // if you want to display images for each member
}

@Component({
  selector: 'app-our-legal-team',
  templateUrl: './our-legal-team.component.html',
  styleUrls: ['./our-legal-team.component.css']
})
export class OurLegalTeamComponent implements OnInit {
  legalTeamMembers: LegalTeamMember[] = [
    {
      name: 'Rachel Zane',
      position: 'Junior Associate',
      email: 'rachel@pearsonspecterlitt.com',
      description: "I know who I am. And I'm proud of who I am.",
      photo: '../assets/rachel.jpg'
    },
    {
      name: 'Brian Altman',
      position: 'Junior Associate',
      email: 'brian@pearsonspecterlitt.com',
      description: "I may be junior, but I play with the big leagues.",
      photo: '../assets/brian.jpg'
    },
    {
      name: 'Gretchen Bodinski',
      position: 'Legal Secretary',
      email: 'gretchen@pearsonspecterlitt.com',
      description:"If you want it done right, don’t ask – just watch.",
      photo: '../assets/gretchen.png'
    },
    // Add more team members as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
