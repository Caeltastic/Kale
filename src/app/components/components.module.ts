import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container/explore-container.component';


import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { AddIngredientModalComponent } from './add-ingredient-modal/add-ingredient-modal.component';
import { BarcodeScannerComponent } from './barcode-scanner/barcode-scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, ZXingScannerModule],
  declarations: [ExploreContainerComponent, CategoryListComponent, AddCategoryModalComponent, AddIngredientModalComponent, BarcodeScannerComponent],
  exports: [ExploreContainerComponent, CategoryListComponent, AddCategoryModalComponent, AddIngredientModalComponent, BarcodeScannerComponent]
})
export class ComponentsModule {}
