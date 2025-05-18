import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCategoryModalComponent } from '../../components/add-category-modal/add-category-modal.component';
import { AddIngredientModalComponent } from '../../components/add-ingredient-modal/add-ingredient-modal.component';
import { Category } from 'src/app/models/category.model.';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-CategoryPage',
  templateUrl: 'categoryPage.page.html',
  styleUrls: ['categoryPage.page.scss'],
  standalone: false,
})
export class CategoryPage {
  categories: Category[] = [];

  constructor(
    private modalController: ModalController,
    private authService: AuthService,
    private router: Router) {}

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', {replaceUrl: true})

  }

  async changeImage(){

  }

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
