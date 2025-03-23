import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container/explore-container.component';

import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { AddIngredientModalComponent } from './add-ingredient-modal/add-ingredient-modal.component';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [ExploreContainerComponent, CategoryListComponent, AddCategoryModalComponent, AddIngredientModalComponent],
  exports: [ExploreContainerComponent, CategoryListComponent, AddCategoryModalComponent, AddIngredientModalComponent]
})
export class ComponentsModule {}
