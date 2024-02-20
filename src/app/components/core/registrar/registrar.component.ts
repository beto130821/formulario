import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gc-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    ) {

    }

  ngOnInit() { 


  }

  login = ()=> {
    this.router.navigate(['registrar']);
  }

  regresar = ()=> {
    this.router.navigate(['login']);
  }
}
