import { Injectable } from '@angular/core';

/*
  Generated class for the LevelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LevelProvider {

  constructor() {
    console.log('Hello LevelProvider Provider');
  }

  get(xp: Number){
    if (xp < 83 && xp >= 0) {
      return 1;
    } else if (xp < 174) {
      return 2;
    } else if (xp < 276) {
      return 3;
    } else if (xp < 388) {
      return 4;
    } else if (xp < 512) {
      return 5;
    } else if (xp < 650) {
      return 6;
    } else if (xp < 801) {
      return 7;
    } else if (xp < 969) {
      return 8;
    } else if (xp < 1154 ){
      return 9;
    } else if (xp < 1358){
      return 10;
    } else if (xp < 1584) {
      return 11;
    } else if (xp < 1833) {
      return 12;
    } else if (xp < 2107) {
      return 13;
    } else if (xp < 2411) {
      return 14;
    } else if (xp < 2746) {
      return 15;
    } else if (xp < 3155) {
      return 16;
    } else if (xp < 3523) {
      return 17;
    } else if (xp < 3973) {
      return 18;
    } else if (xp < 4470) {
      return 19;
    } else if (xp < 5018) {
      return 20;
    } else if (xp < 5624) {
      return 21;
    } else if (xp < 6291) {
      return 22;
    } else if (xp < 7028) {
      return 23;
    } else if (xp < 7842) {
      return 24;
    } else if (xp < 8740) {
      return 25;
    } else if (xp < 9730) {
      return 26;
    } else if (xp < 10824) {
      return 27;
    } else if (xp < 12031) {
      return 28;
    } else if (xp < 13363) {
      return 29;
    } else if (xp < 14833) {
      return 30;
    } else if (xp < 16456) {
      return 31;
    } else if (xp < 18247) {
      return 32;
    } else if (xp < 20224) {
      return 33;
    } else if (xp < 22406) {
      return 34;
    } else if (xp < 24815) {
      return 35;
    } else if (xp < 27473) {
      return 36;
    } else if (xp < 30408) {
      return 37;
    } else if (xp < 33648) {
      return 38
    } else if (xp < 37224) {
      return 39;
    } else if (xp < 41171) {
      return 40;
    } else if (xp < 45529) {
      return 41;
    } else if (xp < 50339) {
      return 42;
    } else if (xp < 55649) {
      return 43;
    } else if (xp < 61512) {
      return 44;
    } else if (xp < 67983) {
      return 45;
    } else if (xp < 75127) {
      return 46;
    } else if (xp < 83014) {
      return 47;
    } else if (xp < 91721) {
      return 48
    } else if (xp < 101333) {
      return 49;
    } else if (xp < 111945) {
      return 50;
    } else if (xp < 123660) {
      return 51;
    } else if (xp < 136594) {
      return 52;
    } else if (xp < 150872) {
      return 53;
    } else if (xp < 166636) {
      return 54;
    } else if (xp < 184040) {
      return 55;
    } else if (xp < 203254) {
      return 56;
    } else if (xp < 224466) {
      return 57;
    } else if (xp < 247886) {
      return 58;
    } else if (xp < 273742) {
      return 59;
    } else if (xp < 302288) {
      return 60;
    } else if (xp < 333804) {
      return 61;
    } else if (xp < 368599) {
      return 62;
    } else if (xp < 407015) {
      return 63;
    } else if (xp < 449428) {
      return 64;
    } else if (xp < 496254) {
      return 65;
    } else if (xp < 547953) {
      return 66;
    } else if (xp < 605032) {
      return 67;
    } else if (xp < 668051) {
      return 68;
    } else if (xp < 737627) {
      return 69;
    } else if (xp < 814445) {
      return 70;
    } else if (xp < 899257) {
      return 71;
    } else if (xp < 992895) {
      return 72;
    } else if (xp < 1096278) {
      return 73;
    } else if (xp < 1210421) {
      return 74;
    } else if (xp < 1336443) {
      return 75;
    } else if (xp < 1475581) {
      return 76;
    } else if (xp < 1629200) {
      return 77;
    } else if (xp < 1798808) {
      return 78;
    } else if (xp < 1986068) {
      return 79;
    } else if (xp < 2192818) {
      return 80;
    } else if (xp < 2421087) {
      return 81;
    } else if (xp < 2673114) {
      return 82;
    } else if (xp < 2951373) {
      return 83;
    } else if (xp < 3258594) {
      return 84;
    } else if (xp < 3597792) {
      return 85;
    } else if (xp < 3972294) {
      return 86;
    } else if (xp < 4385776) {
      return 87;
    } else if (xp < 4842295) {
      return 88;
    } else if (xp < 5346332) {
      return 89;
    } else if (xp < 5902831) {
      return 90;
    } else if (xp < 6517253) {
      return 91;
    } else if (xp < 7195629) {
      return 92;
    } else if (xp < 7944614) {
      return 93;
    } else if (xp < 8771558) {
      return 94;
    } else if (xp < 9684577) {
      return 95;
    } else if (xp < 10692629) {
      return 96;
    } else if (xp < 11805606) {
      return 97;
    } else if (xp < 13034431) {
      return 98
    } else {
      return 99;
    }
  }

}
