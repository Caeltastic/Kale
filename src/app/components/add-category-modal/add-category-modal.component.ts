import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss'],
  standalone: false
})
export class AddCategoryModalComponent  implements OnInit {

  categoryName: string = '';

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  submit() {
    console.log('New Category:', this.categoryName);
    this.modalController.dismiss({ category: this.categoryName });
  }
}
