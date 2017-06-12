import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListRoutingModule } from './shopping-list.routes';
@NgModule({
  declarations: [        
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [    
    FormsModule,    
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule { }

