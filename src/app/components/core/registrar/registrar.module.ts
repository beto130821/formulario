import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './registrar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
    {
      path: '',
      component: RegistrarComponent,
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes),
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule
    ],
    declarations: [
      RegistrarComponent,
    ],
    exports: [RouterModule],
  })
export class RegistrarModule {}


