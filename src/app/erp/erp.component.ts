import { Component, OnInit,ViewChild } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {
  @ViewChild('sidebar', null) _sidebar: SidebarComponent;

  constructor() {     
  }
  ngOnInit(): void {
  }

}
