import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/list.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class DbzModule { }
