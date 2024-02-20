import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gc-login',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})

export class AuthenticationComponent implements OnInit {
  title = 'gestion-conocimiento';

  constructor(
    private router: Router,
    private http: HttpClient,
    ) {

    }

  ngOnInit() { 


  }

  login() {
    this.router.navigate(['home']);
  }

  registrar() {
    this.router.navigate(['registrar']);
  }

}
