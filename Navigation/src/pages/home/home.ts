import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtherPage } from './../other/other';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public minhaString : string = 'Exemplo 1 - isso é só uma string';
  public meuJSON : any = { text: ''};
  otherPage : any = OtherPage;

  constructor(public navCtrl: NavController) {
    
  }

  goToOtherPage() {
    this.navCtrl.push(OtherPage, {text : 'Exemplo 3 - isso é um objeto'});
  }

}
