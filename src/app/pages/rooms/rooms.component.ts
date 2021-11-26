import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/service/header.service';
import { RoomService } from 'src/app/services/http/room.service';
import { ComodidadeComponent } from './modal/comodidade/comodidade.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.sass']
})
export class RoomsComponent implements OnInit {

  filterItems = [
    {
      data: 'numero',
      title: 'Numero',
      validators: [Validators.required],
      type: 'text'
    },
    {
      data: 'comodidade',
      title: 'Comodidade',
      validators: [Validators.required],
      type: 'select'
    }
  ]

  rows: any;

  constructor(
    private headerService: HeaderService,
    private roomService: RoomService,
    public dialog: MatDialog
  ) {
    headerService.setHeader("Quartos", "Listagem de Quartos")
  }

  async ngOnInit() {

    this.rows = (await this.roomService.list().pipe(take(1)).toPromise()).payload

  }
  handleSearch

  handleComodidadePopup() {
    let dialogRef = this.dialog.open(ComodidadeComponent, {
      height: '550px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(async (result) => {

      this.rows = (await this.roomService.list().pipe(take(1)).toPromise()).payload


    });
  }

  handleDelete(id: number) {

    this.roomService.delete(id).subscribe(
      () => {
        this.rows = this.rows.filter((g) => g.idQuarto !== id)
      }
    )

  }

}
