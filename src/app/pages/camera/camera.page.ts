import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
  standalone: false
})
export class CameraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  takePhoto() {
    // Logic to take a photo using the device's camera
    console.log('Taking photo...');
  }

}
