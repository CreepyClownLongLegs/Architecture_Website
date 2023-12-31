import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {

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
