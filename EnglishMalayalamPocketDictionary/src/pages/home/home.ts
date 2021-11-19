import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  currentList:any = []
  items = [];
  constructor(public navCtrl: NavController, public http:HttpClient) {
    this.http.get('assets/dictionary/a-h/a.json').subscribe(data => {
      this.currentList = data["results"];
        for (var i = 0; i < 50; i++) {
          this.items.push( this.currentList[i]);
        }
    });

  }

  listA = ['a ','aa','ab','ac','ad',"ae",'af','ag','ah','ai','aj','ak'
    ,'al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az',
    'A ','Aa','Ab','Ac','Ad',"Ae",'Af','Ag','Ah','Ai','Aj','Ak'
    ,'Al','Am','An','Ao','Ap','Aq','Ar','As','At','Au','Av','Aw','Ax','Ay','Az']
  listB = ['b ','ba','bb','bc','bd',"be",'bf','bg','bh','bi','bj','bk'
    ,'bl','bm','bn','bo','bp','bq','br','bs','bt','bu','bv','bw','bx','by','bz',
    'B ','Ba','Bb','Bc','Bd',"Be",'Bf','Bg','Bh','Bi','Bj','Bk'
    ,'Bl','Bm','Bn','Bo','Bp','Bq','Br','Bs','Bt','Bu','Bv','Bw','Bx','By','Bz']
  listC = ['c ','ca','cb','cc','cd',"ce",'cf','cg','ch','ci','cj','ck'
    ,'cl','cm','cn','co','cp','cq','cr','cs','ct','cu','cv','cw','cx','cy','cz',
    'C ','Ca','Cb','Cc','Cd',"Ce",'Cf','Cg','Ch','Ci','Cj','Ck'
    ,'Cl','Cm','Cn','Co','Cp','Cq','Cr','Cs','Ct','Cu','Cv','Cw','Cx','Cy','Cz']
  listD = ['d ','da','db','dc','dd',"de",'df','dg','dh','di','dj','dk'
    ,'dl','dm','dn','do','dp','dq','dr','ds','dt','du','dv','dw','dx','dy','dz',
    'D ','Da','Db','Dc','Dd',"De",'Df','Dg','Dh','Di','Dj','Dk'
    ,'Dl','Dm','Dn','Do','Dp','Dq','Dr','Ds','Dt','Du','Dv','Dw','Dx','Dy','Dz']
  listE = ['e ','ea','eb','ec','ed',"ee",'ef','eg','eh','ei','ej','ek'
   ,'el','em','en','eo','ep','eq','er','es','et','eu','ev','ew','ex','ey','ez',
    'E ','Ea','Eb','Ec','Ed',"Ee",'Ef','Eg','Eh','Ei','Ej','Ek'
    ,'El','Em','En','Eo','Ep','Eq','Er','Es','Et','Eu','Ev','Ew','Ex','Ey','Ez']
  listF = ['f ','fa','fb','fc','fd',"fe",'ff','fg','fh','fi','fj','fk'
    ,'fl','fm','fn','fo','fp','fq','fr','fs','ft','fu','fv','fw','fx','fy','fz',
    'F ','Fa','Fb','Fc','Fd',"Fe",'Ff','Fg','Fh','Fi','Fj','Fk'
    ,'Fl','Fm','Fn','Fo','Fp','Fq','Fr','Fs','Ft','Fu','Fv','Fw','Fx','Fy','Fz']
    listG = ['g ','ga','gb','gc','gd',"ge",'gf','gg','gh','gi','gj','gk'
    ,'gl','gm','gn','go','gp','gq','gr','gs','gt','gu','gv','gw','gx','gy','gz',
    'G ','Ga','Gb','Gc','Gd',"Ge",'Gf','Gg','Gh','Gi','Gj','Gk'
    ,'Gl','Gm','Gn','Go','Gp','Gq','Gr','Gs','Gt','Gu','Gv','Gw','Gx','Gy','Gz']
listH = ['h ','ha','hb','hc','hd',"he",'hf','hg','hh','hi','hj','hk'
  ,'hl','hm','hn','ho','hp','hq','hr','hs','ht','hu','hv','hw','hx','hy','hz',
  'H ','Ha','Hb','Hc','Hd',"He",'Hf','Hg','Hh','Hi','Hj','Hk'
  ,'Hl','Hm','Hn','Ho','Hp','Hq','Hr','Hs','Ht','Hu','Hv','Hw','Hx','Hy','Gz']
  makeObjectAndSave(){
  let letterObj ={}
    this.listH.forEach(data=>{
        let letterObjArr = []
      this.currentList.forEach(data2=>{
        if(data ==  data2.english_word.substring(0,2)){
          letterObjArr.push({engWord:data2.english_word,malWord:data2.malayalam_definition,pos:data2.part_of_speech})
        }
      })
      if(letterObjArr.length !=0){
        letterObj[data]  = letterObjArr;
      }

    })

  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {

        for (var i = 0; i < 50; i++) {
          if(this.items.length <= this.currentList.length-1){
            if(this.currentList[this.items.length+i] != undefined){
              this.items.push( this.currentList[this.items.length+i]);
            }
          }

        }
        resolve();
      }, 500);
    })
  }

  searchValue(event){
    this.reloadDataOnSearch(event.target.value)
  }

  reloadDataOnSearch(value){
    if(value == undefined){
      return;
    }
     let folderPath = ''
    if(value.substring(0,1).toUpperCase() =='A'||
      value.substring(0,1).toUpperCase() =='B'||
      value.substring(0,1).toUpperCase() =='C'||
      value.substring(0,1).toUpperCase() =='D'||
      value.substring(0,1).toUpperCase() =='E'||
      value.substring(0,1).toUpperCase() =='F'||
      value.substring(0,1).toUpperCase() =='G'||
      value.substring(0,1).toUpperCase() =='H'){
      folderPath = 'a-h'
    }
    else if(
      value.substring(0,1).toUpperCase() =='I'||
      value.substring(0,1).toUpperCase() =='J'||
      value.substring(0,1).toUpperCase() =='K'||
      value.substring(0,1).toUpperCase() =='L'||
      value.substring(0,1).toUpperCase() =='M'){
      folderPath = 'i-m'
    } else if(
      value.substring(0,1).toUpperCase() =='N'||
      value.substring(0,1).toUpperCase() =='O'||
      value.substring(0,1).toUpperCase() =='P'||
      value.substring(0,1).toUpperCase() =='Q'||
      value.substring(0,1).toUpperCase() =='R'){
      folderPath = 'n-r'
    }
    else if(
      value.substring(0,1).toUpperCase() =='S'||
      value.substring(0,1).toUpperCase() =='T'||
      value.substring(0,1).toUpperCase() =='U'||
      value.substring(0,1).toUpperCase() =='V'||
      value.substring(0,1).toUpperCase() =='W'||
      value.substring(0,1).toUpperCase() =='X'||
      value.substring(0,1).toUpperCase() =='Y'||
      value.substring(0,1).toUpperCase() =='Z'){
      folderPath = 's-z'
    }else{
        return
    }
    this.http.get('/android_asset/www/assets/dictionary/'+folderPath+'/'+value.substring(0,1).toLowerCase()+'.json').subscribe(data => {
      this.currentList = data["results"];//["results"]
      if(value.length == 1) {
        this.items = [];
        for (var i = 0; i < 50; i++) {
          this.items.push(this.currentList[i]);
        }
     }

      // this.makeObjectAndSave()
    });
    if(value.length >= 3){
      this.currentList = this.currentList.filter(data=>{
        if(data["english_word"].includes(value)){
          return true;
        }
        return false;
      })
      if(this.currentList.length > 50){
        this.items = [];
        for (var i = 0; i < 50; i++) {
          this.items.push( this.currentList[i]);
        }
      }else{
        this.items = [];
        for (var i1 = 0; i1 < this.currentList.length; i1++) {
          this.items.push( this.currentList[i1]);
        }
      }
      console.log(this.items )
    }
  }
}
