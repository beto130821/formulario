import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  Criterio1: string;
  //Editar: string;s
  // eliminar: string;
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, Criterio1: 'X'},
  {position: 2, name: 'Helium', weight: 4.0026, Criterio1: 'X'},
  {position: 3, name: 'Lithium', weight: 6.941, Criterio1: 'X'},
  {position: 4, name: 'Beryllium', weight: 9.0122, Criterio1: 'X'},
  {position: 5, name: 'Boron', weight: 10.811, Criterio1: 'X'},
  {position: 6, name: 'Carbon', weight: 12.0107, Criterio1: 'X'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, Criterio1: 'X'},
  {position: 8, name: 'Oxygen', weight: 15.9994, Criterio1: 'X'},
];

@Component({
  selector: 'gc-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css'],
})
export class FirmaComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'Criterio1'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  constructor(
    private toastr: ToastrService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {

  }

  openDialog() {
    debugger
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(`${result}`){
        this.router.navigate(['home']);
      }
    });
  }


  nuevoProyecto() {
    this.router.navigate(['form']);
  }

  logOut = () => {
    this.router.navigate(['login']);
  }

  confirmar = () => {


  }

  regresar = () => {
    this.router.navigate(['home']);

  }

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}