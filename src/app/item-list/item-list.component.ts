import { Component, Input, OnInit } from '@angular/core';
import { TestItemsService } from '../test-items.service'
import { Subject } from 'rxjs';



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items :any [] | undefined
  supplyId : any | undefined;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private testService: TestItemsService) { }
  
  getId(supplyId: any){
    this.testService.setId(supplyId)
  }
  
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
 
    };
    this.testService.getItems().subscribe(data => {
      this.items = data
      this.dtTrigger.next();
      }
    )}
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
   
  }

