import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectCardComponent } from './projectComponents/project-card/project-card.component';
import { ProjectsListComponent } from './projectComponents/projects-list/projects-list.component';
import { ProjectSiteComponent } from './projectComponents/project-site/project-site.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GalleryLinksComponent } from './gallery-links/gallery-links.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCardComponent,
    ProjectsListComponent,
    ProjectSiteComponent,
    HeaderComponent,
    FooterComponent,
    GalleryLinksComponent,
    AboutMeComponent,
    GalleryComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

