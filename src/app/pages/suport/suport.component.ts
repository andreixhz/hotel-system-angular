import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/core/service/header.service';

@Component({
  selector: 'app-suport',
  templateUrl: './suport.component.html',
  styleUrls: ['./suport.component.sass']
})
export class SuportComponent implements OnInit {

  constructor(
    private headerService: HeaderService
  ) {
    headerService.setHeader("Suporte", "Solicitar ajuda")
  }
  ngOnInit(): void {
  }

}
