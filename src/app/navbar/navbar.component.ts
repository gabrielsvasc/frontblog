import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  boolSearchOverlay = false;

  constructor() { }

  ngOnInit(): void {
  }

  // Controla o estadp da tela de busca
  ViewOverlay(open: boolean) {
    this.boolSearchOverlay = open;
  }
}
