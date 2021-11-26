import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { HeaderService } from 'src/app/core/service/header.service';
import { ComodidadeService } from 'src/app/services/http/comodidade.service';
import { OccupationService } from 'src/app/services/http/occupation.service';
import { RoomService } from 'src/app/services/http/room.service';

@Component({
  selector: 'app-rooms-form',
  templateUrl: './rooms-form.component.html',
  styleUrls: ['./rooms-form.component.sass']
})
export class RoomsFormComponent implements OnInit {


  loading: boolean = false;
  id?: number;

  ocupacaoOptions: any[] = []
  comodidades: any[] = []

  form: FormGroup = this.formBuilder.group({
    idQuarto: [''],
    numero: ['', [Validators.required]],
    nome: [''],
    valorDiaria: [''],
    descricao: ['', []],
    comodidades: [[]],
    created_at: [''],
    updated_at: ['']
  })

  constructor(
    private headerService: HeaderService,
    private roomService: RoomService,
    private formBuilder: FormBuilder,
    private comodidadeService: ComodidadeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    headerService.setHeader("Quartos", "Criação de Quartos")
    headerService.backTo("quarto")
  }

  async ngOnInit() {

    this.comodidades = (await this.comodidadeService.list().pipe(take(1)).toPromise()).payload
    this.ocupacaoOptions = this.comodidades.map((option) => ({ value: option.idComodidade, title: option.nome }))

    this.id = (await this.route.params.pipe(take(1)).toPromise()).id;

    if (this.id) {

      this.headerService.setHeader("Quartos", "Edição de Quartos")

      const data = (await this.roomService.get(this.id).pipe(take(1)).toPromise()).payload;

      this.form.setValue(
        data
      )

      const toFilter = data.comodidades.map((c) => c.idComodidade)
      this.ocupacaoOptions = this.ocupacaoOptions.filter((o) => !toFilter.includes(o.value))


    } else {

      this.headerService.setHeader("Quartos", "Criação de Quartos")

    }

    this.headerService.backTo('quarto');

  }

  addChip(option: any) {

    this.form.get('comodidades')?.setValue(
      [...this.form.value.comodidades, this.comodidades.find((c) => c.idComodidade === option.value)]
    );

    this.ocupacaoOptions = this.ocupacaoOptions.filter((o) => o.value !== option.value);

  }

  canSave() {

    if (this.loading) {
      return true;
    }

    return this.form.invalid

  }

  handleCreate() {

    this.loading = true;

    this.roomService.post(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/quarto']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }

  handleEdit() {

    this.loading = true;

    this.roomService.put(this.form.value).subscribe(
      (res) => { this.router.navigate(['dashboard/quarto']) },
      (err) => { this.loading = false },
      () => { this.loading = false },
    )

  }


}
