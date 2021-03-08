import { Component, OnInit } from '@angular/core';
import { TestItemsService } from '../test-items.service'

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {
supplyId   :number | undefined
category   :string | undefined
brand      :string | undefined
description:string | undefined
quantity   :number | undefined
unit       :string | undefined
item = {};

  constructor(private testitemService: TestItemsService) { }

  ngOnInit(): void {
    this.supplyId = this.testitemService.supplyId
    this.editbyId(this.supplyId)
  }
  editbyId(supplyId: any){
    this.testitemService.getitemsbyId(this.supplyId).subscribe(res => {
    this.category = res.category
    this.brand = res.brand
    this.description = res.description
    this.quantity = res.quantity
    this.unit = res.unit

    })
  }
  editbtn(){
    this.item = {
      id: this.supplyId,
      category: this.category,
      brand: this.brand,
      description : this.description,
      quantity : this.quantity,
      unit : this.quantity
    }
    console.log(this.item)
  }
}
