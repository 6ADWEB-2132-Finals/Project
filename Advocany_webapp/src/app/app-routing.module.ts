import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { OurreachComponent } from './ourreach/ourreach.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'about',component:AboutComponent},
  {path: 'news',component:NewsComponent},
  {path: 'donate',component:DonateComponent},
  {path: 'ourreach',component:OurreachComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
