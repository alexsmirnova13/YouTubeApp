import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardStyleDirective } from './directives/card.style.directive';
import { CardComponent } from './pages/all-items/item/item.component';
import { AllCardsComponent } from './pages/all-items/items-list.component';
import { OneItemInfoComponent } from './pages/one-item-info/one-item-info.component';
import { FilterPipe } from './pipes/filter.pipes';
import { SortPipe } from './pipes/sort.pipes';
import { CreateItemComponent } from './pages/create-item/create-item.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [];
@NgModule({
  declarations: [
    AllCardsComponent,
    CardComponent,
    CardStyleDirective,
    OneItemInfoComponent,
    FilterPipe,
    SortPipe,
    CreateItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [AllCardsComponent],
})
export class YoutubeModule {}
