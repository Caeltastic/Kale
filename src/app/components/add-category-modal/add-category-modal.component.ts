import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from '../../models/category.model.';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss'],
  standalone: false
})
export class AddCategoryModalComponent  implements OnInit {

  categoryName: string = '';
  category: Category = {
    id: Date.now().toString(),
    name: '',
    ingredients: []
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  submit() {
    console.log('New Category:', this.categoryName)
    
    this.category.name = this.categoryName

    this.modalController.dismiss({ category: this.category });
  }
}
