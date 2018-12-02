import { Component, OnInit } from '@angular/core';
mport { DataSource } from '@angular/cdk/collections';
import { FsService } from '../fs.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {

  displayedColumns = ['name', 'description', 'quantity', 'visibility'];
  dataSource = new ShoesDataSource(this.fs);
  
  constructor(private fs: FsService) { }

  ngOnInit() {
  }

}
