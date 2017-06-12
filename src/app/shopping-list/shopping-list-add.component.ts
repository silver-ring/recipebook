import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../ingredient';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
 @Input() item:Ingredient; 
 @Output() cleared = new EventEmitter;
 isAdd:boolean = true;

  constructor(private sls:ShoppingListService) { }

  ngOnChanges(change) {
    if (change.item.currentValue === null) {
        this.isAdd = true;
        this.item = {'name':null,'amount':null};
    } else {
        this.isAdd = false;
    }
  }
  
  onSubmit(newItem:Ingredient) {        
    if (!this.isAdd) {
        this.sls.editItem(this.item, newItem);
        this.onClear();
    } else {        
        this.item = newItem;
        this.sls.addItem(newItem);        
    }
  }
  
  onDelete() {
    this.sls.deleteItem(this.item);
    this.onClear();  
  }
  
  onClear() {
       this.isAdd = true;
       this.cleared.emit(null);
  }

}
