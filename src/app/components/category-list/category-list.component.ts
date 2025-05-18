import { Component, OnInit, Input } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Category } from '../../models/category.model.';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: false,
})
export class CategoryListComponent  implements OnInit {
  @Input() category!: Category;

  constructor() { }

  ngOnInit() {}
}


