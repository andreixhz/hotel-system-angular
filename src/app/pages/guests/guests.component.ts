import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.sass']
})
export class GuestsComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Hospedes", "Listagem de Hospedes")
  }
  ngOnInit(): void {
  }

}
