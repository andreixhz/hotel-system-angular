import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComodidadeService } from 'src/app/services/http/comodidade.service';

@Component({
  selector: 'app-comodidade-criar',
  templateUrl: './comodidade-criar.component.html',
  styleUrls: ['./comodidade-criar.component.sass']
})
export class ComodidadeCriarComponent implements OnInit {

  form: FormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    descricao: ['', []],
    idComodidade: [''],
    created_at: [''],
    updated_at: [''],
  });

  constructor(
    private comodidadeServico: ComodidadeService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ComodidadeCriarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

    if (this.data) {
      this.form.setValue(this.data)
    }

  }

  create() {

    if (this.data) {

      this.comodidadeServico.put(this.form.value).subscribe(
        (res) => {
          this.dialogRef.close(res.payload)
        },
        (err) => { },
        () => { },
      )

    } else {
      this.comodidadeServico.post(this.form.value).subscribe(
        (res) => {
          this.dialogRef.close(res.payload)
        },
        (err) => { },
        () => { },
      )
    }
  }


}
