import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-ingredient-modal',
  templateUrl: './add-ingredient-modal.component.html',
  styleUrls: ['./add-ingredient-modal.component.scss'],
  standalone: false
})
export class AddIngredientModalComponent  implements OnInit {

  ngOnInit() {}

  ingredientName: string = '';
  selectedCategory: string = '';
  categories: string[] = ['Dairy', 'Fruits', 'Vegetables', 'Spices'];

  constructor(private modalController: ModalController) {}

  close() {
    this.modalController.dismiss();
  }

  submit() {
    console.log('New Ingredient:', this.ingredientName, 'Category:', this.selectedCategory);
    this.modalController.dismiss({ ingredient: this.ingredientName, category: this.selectedCategory });
  }

}
