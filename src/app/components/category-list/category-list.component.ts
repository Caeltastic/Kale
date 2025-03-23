import { Component, OnInit, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: false,
})
export class CategoryListComponent  implements OnInit {
  @Input() ingredient?: string;
  @Input() category?: string;

  constructor() { }

  ngOnInit() {}

  ingredients: string[] = []; 


  addIngredient(inputElement: IonInput) {
    const ingredient = (inputElement.value || "").toString().trim(); 
    if (ingredient !== "") {
      this.ingredients.push(ingredient);
      inputElement.value = '';
    }
  }
}


