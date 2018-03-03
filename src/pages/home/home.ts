import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { List } from 'ionic-angular/components/list/list';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  countries:any;

  constructor(private navCtrl: NavController,
    private rest: RestProvider) {
      this.getCountry();
      
  }

  getCountry(){
    return this.rest.getAllCountry().subscribe(countries => {
      this.countries = countries;
      console.log('country', countries);
    })
  }
  showCountry(c){
    this.navCtrl.push(ListPage, c);
  }
}
