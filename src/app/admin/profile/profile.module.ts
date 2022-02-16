import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileService } from './profile.service';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
