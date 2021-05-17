import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms'
/**
 * FormBuilder: Contruye el formulario
 * Validator: Valida que los campos esten llenos
 * FormGroup: Trabaja como grupo el formulario, todo el formulario se debe comportar como grupo
 */

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  createFormulario: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { this.validator()
    //En el contructor valido lo que está dentro de la clase
   }

  ngOnInit(): void {
    //Cuando necesito hacer cosultas externas, lo valido en ngOnInit
  }

  validator(){
    this.createFormulario = this.formBuilder.group({
      Nombre:["Escribe tu nombre completo",Validators.required],
      Email:["Escribe tu nombre completo", [Validators.required, Validators.email]],
      Celular:["Escribe tu nombre completo",[Validators.required, Validators.call]]
    })
  }

}
