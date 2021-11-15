import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Quartos", "Listagem de Quartos")
  }

  ngOnInit(): void {

  }

}
