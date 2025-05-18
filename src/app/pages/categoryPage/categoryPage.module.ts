import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoryPage } from './categoryPage.page';
import { ComponentsModule } from '../../components/components.module';
import { CategoryPageRoutingModule } from './categoryPage-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPage]
})
export class Tab1PageModule {}
