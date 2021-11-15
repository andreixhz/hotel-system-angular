import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Serviços", "Listagem de Serviços")
  }

  ngOnInit(): void {

  }

}
