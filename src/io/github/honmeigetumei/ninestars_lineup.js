'use strict';

import { CalenderData } from "./calenderdata.js";

export class ninestarsLineup extends CalenderData {
    constructor() {
        super();
        this.nsLineup = [
            "一白水星", "二黒土星", "三碧木星", "四緑木星", "五黄土星",
            "六白金星", "七赤金星", "八白土星", "九紫火星"
        ];
        
        // 基準年・基準月の設定
        this.BASE_YEAR = 1910; // calenderdataが1912年以降のため、計算式のキリがよい1910を基準年とした
        this.BASE_MONTH = 2;   // 2月を基準月として設定

        // カレンダーデータの読み込み(24節気の月替わり日を取得するため)
        const calenderData = new CalenderData();
        this.CALENDER = calenderData.CALENDER;
    }
}