import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    public headerService: HeaderService
  ) { }

  ngOnInit(): void {
  }

}
