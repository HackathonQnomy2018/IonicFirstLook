import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'app-barcodescanner-page-layer',
  templateUrl: './barcodescanner-page-layer.component.html'
})
export class BarcodescannerPageLayerComponent implements OnInit {
  qrData = null;
  createdCode = null;
  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit(): void {}

  createCode() {
    this.createdCode = this.qrData;
  }

  scanCode() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        this.scannedCode = barcodeData.text;
      },
      err => {
        console.log('Error: ', err);
      }
    );
  }
}
