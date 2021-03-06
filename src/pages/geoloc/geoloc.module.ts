import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocPage } from './geoloc';

import { Geolocation } from '@ionic-native/Geolocation';

@NgModule({
  declarations: [
    GeolocPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocPage),
  ],
  providers: [
  Geolocation,
],
})
export class GeolocPageModule {}
