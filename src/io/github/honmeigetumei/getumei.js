'use strict';

import { ninestarsLineup } from "./ninestars_lineup.js";

export class GetuMei extends ninestarsLineup {
    constructor() {
        super();
    };

    // 月命星の取得（生年月日をy年m月d日で受け取り、対応する月命星を返す）
    getGetuMei(y, m, d) {
        // 1月の場合、前年の13月として扱う
        if (m == 1) {
            m = 13;
            y = y - 1;
        }

        // カレンダーデータの存在確認
        if (!this.CALENDER[y]) {
            return "データ未登録の年です"; //暦データは1912年～(calenderdata.js参照）
        }

        // 配列は0始まりで2月から格納のため、2月が0,3月が1,...,1月(13月)が11となるのでm-2でアクセス
        let firstDayOfKigakuMonth = this.CALENDER[y][m-2];

        if(d < firstDayOfKigakuMonth){ // 月替わり日より以前の日は前月扱い
            m -= 1;
        }
        
        //基準年の基準月からの経過月数を計算して、九星気学の月命星を導く
        const diff = y - this.BASE_YEAR;
        
        let monthId = 9 - ( ( diff * 12 ) + m + this.BASE_MONTH )% 9; 
        if(monthId == 0){ //9で割り切れた場合は九紫火星
            monthId = 9; 
        }

        const getumeiName = this.nsLineup[monthId - 1]; // 配列は0始まりのため-1

        return getumeiName;
    }
}