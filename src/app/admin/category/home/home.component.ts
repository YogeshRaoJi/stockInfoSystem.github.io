import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private titleService: Title,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(':: Stock Management :: Categories ::')

  }
  openDialog() {
  const dialogRef = this.dialog.open(AddCategoryComponent,
      // {
      //   width: '30%'
      // }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
