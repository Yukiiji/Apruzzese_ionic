import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope';

/**
 * Generated class for the ApplicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applications',
  templateUrl: 'applications.html',
})
export class ApplicationsPage {
  X:number;
  Y:number;
  Z:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private gyroscope: Gyroscope) {

    let options: GyroscopeOptions = {
   frequency: 1000
};

this.gyroscope.getCurrent(options)
  .then((orientation: GyroscopeOrientation) => {
     console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   })
  .catch()


this.gyroscope.watch()
   .subscribe((orientation: GyroscopeOrientation) => {
      console.log(orientation.x, orientation.y, orientation.z, orientation.timestamp);
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationsPage');
  }

}
