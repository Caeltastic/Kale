import { Component, OnInit, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Category } from '../../models/category.model.';
import { Ingredient } from 'src/app/models/ingredient.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: false,
})
export class CategoryListComponent  implements OnInit {
  @Input() ingredientsByCategory!: Record<string, Ingredient[]>;

  constructor() { }

  ngOnInit() {}

  getCategoryNames(): string[] {
    return Object.keys(this.ingredientsByCategory);
  }
}


