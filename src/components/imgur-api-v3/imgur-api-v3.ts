import { Component } from '@angular/core';

/**
 * Generated class for the ImgurApiV3Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'imgur-api-v3',
  templateUrl: 'imgur-api-v3.html'
})
export class ImgurApiV3Component {

  text: string;

  constructor() {
    console.log('Hello ImgurApiV3Component Component');
    this.text = 'Hello World';
  }

}
