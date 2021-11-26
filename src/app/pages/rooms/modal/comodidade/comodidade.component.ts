import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ComodidadeService } from 'src/app/services/http/comodidade.service';
import { ComodidadeCriarComponent } from './comodidade-criar/comodidade-criar.component';

@Component({
  selector: 'app-comodidade',
  templateUrl: './comodidade.component.html',
  styleUrls: ['./comodidade.component.sass']
})
export class ComodidadeComponent implements OnInit {

  rows: any[] = []

  constructor(
    private comodidadeService: ComodidadeService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {

    this.rows = (await this.comodidadeService.list().pipe(take(1)).toPromise()).payload;

  }

  handleCreate() {
    let dialogRef = this.dialog.open(ComodidadeCriarComponent, {
      height: '310px',
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result?.idComodidade) {
        this.rows.push(result);
      }

    });

  }

  handleEdit(row: any) {
    const dialogRef = this.dialog.open(ComodidadeCriarComponent, {
      height: '310px',
      width: '300px',
      data: row,
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {
        this.rows[this.rows.findIndex((r) => r.idComodidade === result.idComodidade)] = result;
      }

    });

  }

  handleDelete(id: number) {

    this.comodidadeService.delete(id).subscribe(
      () => { this.rows = this.rows.filter((c) => c.idComodidade !== id) },
      () => { },
      () => { }
    )

  }

}
