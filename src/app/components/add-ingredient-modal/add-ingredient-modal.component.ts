import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/models/category.model.';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients.service';

@Component({
  selector: 'app-add-ingredient-modal',
  templateUrl: './add-ingredient-modal.component.html',
  styleUrls: ['./add-ingredient-modal.component.scss'],
  standalone: false
})
export class AddIngredientModalComponent  implements OnInit {

  ngOnInit() {}

  @Input() categories!: Category[];
  selectedCategory: Category | null = null;
  ingredientName: string = '';


  constructor(private modalController: ModalController,
    private ingredientsService: IngredientsService
  ) {}

  close() {
    this.modalController.dismiss();
  }


  addIngredient(newIngredient: Ingredient) {
    this.ingredientsService.createIngredient(newIngredient).subscribe({
      next: res => {
        console.log('Created:', res);
      }
    });
  }

  submit() {
    console.log('New Ingredient:', this.ingredientName, 'Category:', this.selectedCategory);

    this.selectedCategory?.ingredients.push(this.ingredientName)

    this.modalController.dismiss({ category: this.selectedCategory });
  }

}
