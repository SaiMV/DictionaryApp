import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
// import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import { PapaParseService } from 'ngx-papaparse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  navItems: any;
  items: any;
  csvData: any[] = [];
  headerRow: any[] = [];
  // constructor(public navCtrl: NavController, private http: Http) {
  constructor(public navCtrl: NavController,private http: Http,private papa: PapaParseService) {
   //this.items =  this.dictionary.DictionaryData;
   //  const csvData = '"Hello","World!"';
   //  const options = {
   //    complete: (results, file) => {
   //      console.log('Parsed: ', results, file);
   //    }
   //    // Add your options here
   //  };

    // this.papa.parse(csvData,options);

  }

  private readCsvData() {
    this.http.get('../assets/json/dictionary.csv')
      .subscribe(
        data => this.extractData(data),
        err => this.handleError(err)
      );
  }


  trackByFn(index: any, item: any) {
    return index;
  }

  private extractData(res) {
    let csvData = res['_body'] || '';


    let parsedData = this.papa.parse(csvData).data;

    this.headerRow = parsedData[0];

    parsedData.splice(0, 1);
    this.csvData = parsedData;
  }

  private handleError(err) {
    console.log('something went wrong: ', err);
  }
  loadDictionaryItems() {
    // this.navItems = this.http.get("../assets/json/dictionary.json");
     // .map(data => data.json())
     //  .subscribe(data => {
     //    this.items = data;
     //  //  console.log(data);
     //  });
    // this.navItems = this.items;
    // this.items =  this.navItems ;
    // this.items =  this.navItems;
    //console.log(this.navItems);

    //
    // const csvData = '"Hello","World!"';
    // const options = {
    //   complete: (results, file) => {
    //     console.log('Parsed: ', results, file);
    //   }
    //   // Add your options here
    // };
    //
    // this.papa.parse(csvData,options);


    this.readCsvData();
  }

  doInfinite(): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        for (var i = 0; i < 30; i++) {
          console.log(this.csvData);
          this.csvData.push( this.csvData.length );
        }

        console.log('Async operation has ended');
        resolve();
      }, 500);
    })
  }
}
