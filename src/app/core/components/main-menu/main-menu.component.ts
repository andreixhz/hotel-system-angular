import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuListService } from '../../service/menu-list.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {

  constructor(
    public menuListService: MenuListService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  handleGoTo(path: string) {
    this.router.navigate(['dashboard/' + path])
  }

  listenerHasSelected(path: string) {
    const route = document.URL.split('/')[4];

    if (!route && path == "") {
      return 'selected'
    }

    if (path === route)
      return 'selected'
  }

}
