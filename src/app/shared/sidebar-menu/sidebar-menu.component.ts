import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {
  public portals: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get('/api/infrastructure/getallportal').subscribe((response: any[]) => {
      this.portals = response;
    }, error =>this.dataService.handleError(error));
  }

}
