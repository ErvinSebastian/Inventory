import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { AddItemComponent } from './add-item/add-item.component'; 
import { UpdateItemComponent } from './update-item/update-item.component';
const routes: Routes = [
  {
    path:  '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {path: 'login', 
  component: LoginFormComponent},
  {
    path: 'add',
    component: AddItemComponent
  },
  {
    path: 'update',
    component: UpdateItemComponent
  },
  {path: 'items', 
  component: ItemListComponent
  }
 

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const  routingComponents = [ItemListComponent, LoginFormComponent, AddItemComponent, UpdateItemComponent]
