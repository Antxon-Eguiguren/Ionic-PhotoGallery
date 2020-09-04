import { Component } from '@angular/core';

import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  photos = this.photoSrv.photos;

  constructor(public photoSrv: PhotoService, public actionSheetCtrl: ActionSheetController) { }

  takeNewPhoto() {
    this.photoSrv.takePhoto();
  }

  public async showActionSheet(photoPosition) {
    const actionSheet = this.actionSheetCtrl.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoSrv.deletePicture(photoPosition);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        icon: 'close'
      }]
    });

    (await actionSheet).present();
  }
}
