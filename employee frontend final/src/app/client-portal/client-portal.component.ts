import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-portal',
  templateUrl: './client-portal.component.html',
  styleUrls: ['./client-portal.component.css']
})
export class ClientPortalComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Client-specific login logic
    if (this.email && this.password) {
      // Replace with actual login validation
      this.router.navigate(['/client-dashboard']);
    } else {
      alert("Please enter valid credentials");
    }
  }
}
