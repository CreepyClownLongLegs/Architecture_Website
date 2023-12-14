import { Component } from '@angular/core';

interface Image {
  url: string;
  isZoomed: boolean; 
}

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent {

  images: Image[] = [
    { url: '../../assets/imgs/homophobic_dog.png', isZoomed: false }
    // Add more images as needed
  ];

  onMouseOver(image: Image): void {
    image.isZoomed = true;
  }

  onMouseOut(image: Image): void {
    image.isZoomed = false;
  }

}
