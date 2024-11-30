import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pearson Specter Litt';
  isClientLoggedIn = false; // Set initial value; later, this can depend on actual authentication status.
  isAdminLoggedIn = false;
  // Method to simulate toggling login status
  toggleClientLoginStatus() {
    this.isClientLoggedIn = !this.isClientLoggedIn;
  }

  toggleAdminLoginStatus() {
    this.isAdminLoggedIn = !this.isAdminLoggedIn;
  }
}
