import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  backgroundColor = '#FFEEEE'; // Initial background color
  fontColot = 'black';
  lastBackgroundColor = this.backgroundColor; // Store the last color

  onMouseEnter() {
    this.lastBackgroundColor = this.backgroundColor;
    this.backgroundColor = 'black'; // New background color when hovering
    this.fontColot = '#FFFFFF';
  }

  onMouseLeave() {
    this.backgroundColor = this.lastBackgroundColor;
    this.fontColot = 'black';
  }

}
