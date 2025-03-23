import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddCategoryModalComponent } from '../../components/add-category-modal/add-category-modal.component';
import { AddIngredientModalComponent } from '../../components/add-ingredient-modal/add-ingredient-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  ingredients: string[] = []; 

  constructor(private modalController: ModalController) {}

  async openAddIngredientModal() {
    const modal = await this.modalController.create({
      component: AddIngredientModalComponent,
    });
    return await modal.present();
  }

  async openAddCategoryModal() {
    const modal = await this.modalController.create({
      component: AddCategoryModalComponent,
    });
    return await modal.present();
  }
}
