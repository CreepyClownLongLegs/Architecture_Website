import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'architectureBlog';

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    
    const targets = document.querySelectorAll('img');

    targets.forEach((img: HTMLImageElement) => {
      console.log('💩');
      const rect = img.getBoundingClientRect().top;
      if (rect <= window.innerHeight) {
        const src = img.getAttribute('data-lazy');
        if (src) { // Check if src is not null
          img.setAttribute('src', src);
          img.classList.add('fade');
        }
      }
    });
  }
}
