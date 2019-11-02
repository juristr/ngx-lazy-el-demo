import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  declarations: [PeopleListComponent],
  imports: [CommonModule],
  exports: [PeopleListComponent]
})
export class PeopleModule {
  customElementComponent: Type<any> = PeopleListComponent;
}
