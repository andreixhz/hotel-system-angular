import { Injectable } from '@angular/core';
import { MenuItem } from '../interface/menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  private menu: MenuItem[] = menuItems;

  constructor() { }

  getMenu(): MenuItem[] {
    return this.menu;
  }

}

let menuItems: MenuItem[] = [
  {
    title: "Incio",
    icon: "fas fa-home",
    path: ""
  }, {
    title: "Hospodes",
    icon: "fas fa-suitcase-rolling",
    path: "hospede"
  }, {
    title: "Reservas",
    icon: "fas fa-calendar-day",
    path: "reserva"
  }, {
    title: "Quartos",
    icon: "fas fa-bed",
    path: "quarto"
  }, {
    title: "Produtos",
    icon: "fas fa-cocktail",
    path: "produto"
  }, {
    title: "Funcionarios",
    icon: "fas fa-user-tie",
    path: "funcionario"
  }, {
    title: "Suporte",
    icon: "fas fa-question-circle",
    path: "suporte"
  },
]