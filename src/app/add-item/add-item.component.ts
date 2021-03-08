
import { Component, OnInit, Input } from '@angular/core';
import { AddItemService } from '../add-item.service'; 
import { TestItemsService } from '../test-items.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  brand : string | undefined
  category : string | undefined
  description: string | undefined
  quantity : number | undefined
  unit: string | undefined 
  supplyId : number | undefined

 
  
  constructor(private additemService: AddItemService, private testitemService: TestItemsService) { }
  ngOnInit(): void {
  }
  addItem(){
    const item = { 
      brand: this.brand,
      category: this.category,
      description: this.description,
      quantity: this.quantity,
      unit: this.unit
    } 
    console.log(item)
    this.additemService.add(item).subscribe(res => {
      console.log(res)
    },
    (err)=>{
      console.log("Something went wrong!")
    })

  }
  
}
