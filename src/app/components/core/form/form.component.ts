import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

declare var $: any;

@Component({
  selector: 'gc-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit{

  selectedCriterio2: boolean = false;
  selectedCriterio3: boolean = false;

  fechaDesde: String = '';
  
  fechaHasta: String = '';

  criterioCliente1: String = "";
  criterioCliente2: String = "";
  criterioCliente3: String = "";

  criterioProyecto1: String = "";
  criterioProyecto2: String = "";
  criterioProyecto3: String = "";

  myControl = new FormControl('');

  panelOpenState = false;

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
  ) {

  }

  ngOnInit() {
    

    $('#criterio2').css('display', 'none');
    $('#criterio3').css('display', 'none');

  }

  grabarFormulario = () => {

    if(this.criterioCliente1 == ""){
      this.toastr.warning('Completar el campo "Cliente" del Criterio 1');
    }

  }

  regresar = () => {

    this.router.navigate(['home']);

  }


}
