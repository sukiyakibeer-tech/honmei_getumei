'use strict';

import { HonMei } from "./honmei.js";
import { GetuMei } from "./getumei.js";

const myHonmei = new HonMei();
const myGetumei = new GetuMei();

let resultHonmei = "";
let resultGetumei = "";

// DOMContentLoadedイベントは、HTMLが完全に読み込まれたときに発生します。
document.addEventListener("DOMContentLoaded", () => {
  const yearInput = document.getElementById("yearInput");
  const monthInput = document.getElementById("monthInput");
  const dayInput = document.getElementById("dayInput");
  const output = document.getElementById("output");
  const btn = document.getElementById("calcButton");

  // clickでevent稼働し、本命星、月命星のclassでそれぞれ計算した結果を表示
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    const year = parseInt(yearInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const day = parseInt(dayInput.value, 10);

    resultHonmei = myHonmei.getHonMei(year, month, day);
    resultGetumei = myGetumei.getGetuMei(year, month, day);

    output.textContent = `生年月日：${year}年${month}月${day}日のあなたの\n`;
    output.textContent += `本命星は${resultHonmei}\n月命星は${resultGetumei}です。`;
    });
});