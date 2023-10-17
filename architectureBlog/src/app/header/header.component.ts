import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  backgroundColor = 'white'; // Initial background color
  fontColot = 'black';
  borderBottom = 'black';
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

  lastScrollTop = 0;
  headerVisible = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      // Scrolling down, hide the header
      this.headerVisible = false;
    } else {
      // Scrolling up, show the header
      this.headerVisible = true;
    }
    this.lastScrollTop = st;
  }

}
