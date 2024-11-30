import { Component } from '@angular/core';

@Component({
  selector: 'app-our-expertise',
  templateUrl: './our-expertise.component.html',
  styleUrls: ['./our-expertise.component.css']
})
export class OurExpertiseComponent {
  expertiseServices = [
    {
      iconClass: 'fas fa-building',
      title: 'Corporate Law',
      description: 'From mergers and acquisitions to regulatory compliance, we provide unparalleled expertise in corporate law.'
    },
    {
      iconClass: 'fas fa-gavel',
      title: 'Litigation',
      description: 'We dominate in the courtroom, handling complex cases with a record of winning results.'
    },
    {
      iconClass: 'fas fa-lightbulb',
      title: 'Intellectual Property',
      description: 'Protecting and enforcing your IP rights with precision and experience.'
    },
    {
      iconClass: 'fas fa-briefcase',
      title: 'Employment Law',
      description: 'Advocating for clients in employment disputes, providing legal clarity and results.'
    },
    {
      iconClass: 'fas fa-city',
      title: 'Real Estate Law',
      description: 'Specializing in property transactions, zoning, and development, ensuring your real estate deals are legally sound.'
    },
    {
      iconClass: 'fas fa-handshake',
      title: 'Pro Bono Services',
      description: 'Committed to serving our community by providing pro bono legal services for those in need.'
    },
    {
      iconClass: 'fas fa-coins',
      title: 'Tax Law',
      description: 'Offering strategic tax planning and compliance services to navigate complex regulations effectively.'
    },
    {
      iconClass: 'fas fa-leaf',
      title: 'Environmental Law',
      description: 'Providing guidance on environmental regulations, compliance, and sustainability initiatives.'
    }
  ];
}
