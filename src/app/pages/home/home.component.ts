import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Inicio", "Pagina inicial")
  }

  ngOnInit(): void {

  }

}
