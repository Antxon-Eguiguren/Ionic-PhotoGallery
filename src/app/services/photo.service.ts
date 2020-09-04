import { Injectable } from '@angular/core';

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: any[] = [];

  constructor() { }

  // Usar la cámara de Capacitor para sacar la foto
  public async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift(photo);
  }

  public async deletePicture(photoPosition: number) {
    this.photos.splice(photoPosition, 1);
  }
}
