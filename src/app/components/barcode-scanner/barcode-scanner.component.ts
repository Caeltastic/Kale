import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
  standalone: false
})
export class BarcodeScannerComponent {

  constructor() {}

  onCodeResult(result: string): void {
    console.log('Scanned result:', result);
  }

}
