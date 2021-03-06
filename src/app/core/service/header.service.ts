import { Injectable } from '@angular/core';
import { Header } from '../interface/header';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private header?: Header;

  constructor() { }

  setHeader(title: string, subtitle?: string, description?: string, locations?: string[]) {
    this.header = {
      title,
      description,
      locations,
      subtitle,
      backTo: undefined
    }
  }

  getHeader() {
    return this.header;
  }

  backTo(backTo?: string) {
    this.header = {
      ...this.header,
      backTo
    }
  }

}
