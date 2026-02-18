'use strict';

import { ninestarsLineup } from "./ninestars_lineup.js";

export class HonMei extends ninestarsLineup {
  constructor() {
    super();
  }

  // 本命星の取得（生年月日をy年m月d日で受け取り、対応する本命星を返す）
  getHonMei(y,m,d) {
    let result = "";

    // 九星気学は2月始まりのため、立春より前の日は前年の13月とみなす
    // 配列先頭を2月としたため、各年の立春日は配列this.CALENDER[y][0]に格納
    if ((m == 1) || (m == 2 && d < this.CALENDER[y][0])) { 
        m = 13;
        y = y - 1;
    }
    
    /*calenderdataは1912以降しかないが、下記計算式をシンプルにするため計算のための基準年を1910とした
      基準年の1910年は九紫火星で基準年から9年ごとに九紫火星が回ってくる
      星回りは九紫火星 → 八白土星 → 七赤金星 → ･･･ → 二黒土星 → 一白水星 → 九紫火星　の順となるため
      誕生年と基準年の差を9で割って、その余りを9から引く　
    */
    const diff = y - this.BASE_YEAR;
    const yearId = 9 - (diff % 9) ; //九星に対応した数字が求まる（1＝一白水星、･･･、9＝九紫火星）
    const honmeiName = this.nsLineup[yearId - 1]; // 配列は0始まりのため1を引く

    return honmeiName;
  }
}