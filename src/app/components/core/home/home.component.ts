import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  monto: number;
  Criterio1: string;
  Criterio2: string;
  Criterio3: string;
  acciones: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Proyecto 1', monto: 1.0079, Criterio1: 'X', Criterio2: 'X', Criterio3: 'X', acciones: "",},
  {position: 2, name: 'Proyecto 1', monto: 4.0026, Criterio1: '', Criterio2: 'X', Criterio3: 'X', acciones: "",},
  {position: 3, name: 'Proyecto 1', monto: 6.941, Criterio1: 'X', Criterio2: '', Criterio3: 'X', acciones: "",},
  {position: 4, name: 'Proyecto 1', monto: 9.0122, Criterio1: 'X', Criterio2: '', Criterio3: 'X', acciones: "",},
  {position: 5, name: 'Proyecto 1', monto: 10.811, Criterio1: 'X', Criterio2: 'X', Criterio3: 'X', acciones: "",},
  {position: 6, name: 'Proyecto 1', monto: 12.0107, Criterio1: 'X', Criterio2: 'X', Criterio3: 'X', acciones: "",},
];


@Component({
  selector: 'gc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'monto', 'Criterio1', 'Criterio2', 'Criterio3', 'acciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  

  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
  ) {

  }

  


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

    this.paginator._intl.itemsPerPageLabel = 'proyectos por página';
  }

  nuevoProyecto = () => {
    this.router.navigate(['form']);
  }

  misProcesos = () => {
    this.router.navigate(['proceso']);
  }

  continuar = () => {
    this.router.navigate(['preliminar']);
  }

  misPostulaciones = () => {
    this.router.navigate(['convocatoria']);
  }

  logOut = () => {
    this.router.navigate(['login']);
  }

  regresar = () => {
    this.router.navigate(['home']);
  }


}
