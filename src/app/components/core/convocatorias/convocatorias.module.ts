import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvocatoriasComponent } from './convocatorias.component';
import { ConvocatoriasRoutingModule } from './convocatorias-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [
    CommonModule,
    ConvocatoriasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    ConvocatoriasComponent,
  ]
})
export class ConvocatoriasModule { }
