import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.component.html',
  styleUrls: ['./barcode-scanner.component.scss'],
  standalone: false
})
export class BarcodeScannerComponent {

  constructor() {}

  formatsEnabled = [BarcodeFormat.EAN_13, BarcodeFormat.UPC_A];

  onCodeResult(result: string): void {
    console.log('Scanned result:', result);
  }

}
