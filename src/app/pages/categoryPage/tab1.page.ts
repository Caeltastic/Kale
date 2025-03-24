import { Component } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddCategoryModalComponent } from '../../components/add-category-modal/add-category-modal.component';
import { AddIngredientModalComponent } from '../../components/add-ingredient-modal/add-ingredient-modal.component';
import { Category } from 'src/app/models/category.model.';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  categories: Category[] = [];

  constructor(private modalController: ModalController) {}

  async openAddIngredientModal() {
    const modal = await this.modalController.create({
      component: AddIngredientModalComponent,
      componentProps: {
        categories: this.categories
      },
    });

    modal.onWillDismiss().then((result) => {
      if (result.data && result.data.category) {
        const updatedCategory = result.data.category;
        const index = this.categories.findIndex(category => category.name === updatedCategory.name);

        if (index !== -1) {
          this.categories[index] = updatedCategory;
        } else {
          this.categories.push(updatedCategory);
        }
      }
    });

    return await modal.present();
  }

  async openAddCategoryModal() {
    const modal = await this.modalController.create({
      component: AddCategoryModalComponent,
    });

    modal.onWillDismiss().then((result) => {
      if (result.data && result.data.category) {
        this.categories.push(result.data.category);
      }
    });

    return await modal.present();
  }
}
