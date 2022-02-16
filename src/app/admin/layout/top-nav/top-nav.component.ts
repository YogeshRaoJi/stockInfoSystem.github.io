import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Services/token.storage.service';
import { AddUserComponent } from '../../user/add-user/add-user.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<void>();
  role : string[];
  isAdminRole : boolean = false;

  constructor(private readonly router: Router,
    private tokenService : TokenStorageService,) {}

  ngOnInit() {
    this.isAdminRole = this.tokenService.getUser().roles.includes('Demo');
  }

  toggleSidebar() {
    this.sideNavToggled.emit();
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/login']);
  }

}
