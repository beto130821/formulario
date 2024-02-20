import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
    {
      path: '',
      component: AuthenticationComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule
    ],
    declarations: [
      AuthenticationComponent,
    ],
    exports: [RouterModule],
  })
export class AuthenticationModule {}


