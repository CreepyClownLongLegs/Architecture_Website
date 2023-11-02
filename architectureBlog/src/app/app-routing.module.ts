import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'gallery', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
