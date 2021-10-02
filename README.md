## 日期文案配置指南

<code>
// 配置日期的文案函数
// 如果要配置新的文案样式, 则添加新的getPattern函数到getTexts对象中
// 再将得到的文案列表push到textsList中即可
function setDateTexts() {
  var textsList = [];
  var date = $("#datePicker").val(); //'2021-09-30'
  [year, month, day] = date.split("-"); //'2021' '09' '30'

var numberToMonth = {
"01": "January",
"02": "February",
"03": "March",
"04": "April",
"05": "May",
"06": "June",
"07": "july",
"08": "August",
"09": "September",
10: "October",
11: "November",
12: "December",
};

//- 普通文本转为特殊字体文本 t 为普通文本, e 是特殊字体
function u(t, e) {
if (!t) return "";
var test = Number(t);
if (isNaN(test)) {
var a = Array.from(
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
);
} else {
var a = Array.from("0123456789");
}
for (var n = Array.from(e), r = t, i = 0; i < a.length; i++) {
var o = a[i],
s = n[i];
r = r.split(o).join(s);
}
return r;
}

// 生成特殊格式文本函数
// font1 列表为英文特殊字体, font2 列表为数字特殊字体
// getTexts 函数将普通字体转为特殊字体并转为特定的格式
// 以 getPattern4 为例,注释在函数中
var getTexts = {
getPattern1() {
var font = [
"𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
"𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
];
function func(v) {
return "/" + v + "./";
}
function getTexts(font, month, func) {
var z = [];

        for (var r = 0; r < font.length; r++) {
          var i = font[r],
            x = u(month, i),
            v = func.call(this, x);
          z.push(v);
        }
        return z;
      }
      return getTexts(font, numberToMonth[month].slice(0, 3), func);
    },
    getPattern2() {
      var font1 = [
        "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
        "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
      ];
      var font2 = ["⓿➊➋➌➍➎➏➐➑➒", "⓪①②③④⑤⑥⑦⑧⑨"];

      function getTexts2(font1, font2, month, day) {
        var z = [];

        for (var r = 0; r < font1.length; r++) {
          var i = font1[r],
            x = u(month, i) + u(day, font2[r]);
          z.push(x);
        }
        return z;
      }
      return getTexts2(font1, font2, numberToMonth[month].slice(0, 3), day);
    },
    getPattern3() {
      var font1 = [
        "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
        "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
      ];
      var font2 = ["𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿", "0123456789"];

      function getTexts(font1, font2, month, day) {
        var z = [];

        for (var r = 0; r < font1.length; r++) {
          var i = font1[r],
            x = u(month, i) + "." + u(day, font2[r]);
          z.push(x);
        }
        return z;
      }
      return getTexts(font1, font2, numberToMonth[month], day);
    },
    getPattern4() {
      //  目标效果为𝟙𝟘/𝟚 𝕊𝕒𝕥𝕦𝕣𝕕𝕒𝕪, 只不过字体有三种

      //  font1是特殊的英文字体,分别为字体1 字体2 字体3
      var font1 = [
        "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
        "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
        "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
      ];
      //  font2是特殊的数字字体,也分别为字体1 字体2 字体3
      var font2 = [
        ["𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡", "𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"],
        ["0123456789", "0123456789"],
        ["⁰¹²³⁴⁵⁶⁷⁸⁹", "₀₁₂₃₄₅₆₇₈₉"],
      ];
      //  首先要获取对应的星期几, 所以设置了weekStr列表,
      var weekStr = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      // 用Date(date).getDay()得到星期几(数字),再用weekStr转为英文
      var week = weekStr[new Date(date).getDay() - 1];

      //  将普通文案生成特定格式的文案
      function getTexts(font1, font2, month, day, week) {
        var z = [];
        for (var r = 0; r < font1.length; r++) {
          if (day[0] === "0") {
            // 去掉开头的0
            day = day.slice(1);
          }
          //  用u(t, e) 函数将普通文本字符串生成为特殊文本字符串,再将所有的文案拼接到一起
          var x =
            u(month, font2[r][0]) +
            "/" +
            u(day, font2[r][1]) +
            " " +
            u(week, font1[r]);
          z.push(x);
        }
        // 返回特殊文案
        return z;
      }
      return getTexts(font1, font2, month, day, week);
    },
    getPattern5() {
      var font1 = ["𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫", "₀₁₂₃₄₅₆₇₈₉"];

      function getTexts(font1, year, month, day) {
        var z = [];

        for (var r = 0; r < font1.length; r++) {
          var x =
            u(year, font1[r]) +
            "." +
            u(month, font1[r]) +
            "." +
            u(day, font1[r]);
          z.push(x);
        }
        return z;
      }
      return getTexts(font1, year, month, day);
    },

};

// 清空 dates 里面的文本内容
$("#dates-content .copy-area").empty();

// 将生成的文案列表添加到 textsList 中
textsList.push(...getTexts.getPattern1());
textsList.push(...getTexts.getPattern2());
textsList.push(...getTexts.getPattern3());
textsList.push(...getTexts.getPattern4());
textsList.push(...getTexts.getPattern5());

// 将生成的所有的文案都添加到 HTML 中
setTexts(textsList, "#dates-content .copy-area");
}

</code>

## 进度文案配置指南

<code>
// 配置进度文案函数
setProgressTxts() {

// 将生成的所有的文案都添加到 HTML 中
this.setTexts(getProgressTxts(), "#progress-content .copy-area");

// 生成特殊文案列表
function getProgressTxts() {
var progressList = [],
day = new Date();

      // 将生成的文案列表添加到progressList中
    progressList.push(todayProgress(day));
    progressList.push(weekProgress(day));
    progressList.push(monthProgress(day));
    progressList.push(yearProgress(day));

    // 生成今天的进度文案
    function todayProgress (day) {
      var hours = day.getHours(),
        minuts = day.getMinutes() / 60,
        progressToday = (hours + minuts) / 24; // 计算出今天已经度过了的百分比

      return ("𝐓𝐨𝐝𝐚𝐲 " + getDatas(progressToday) + "%");
    }
    // 生成这周的进度文案
    function weekProgress(day) {
      var d = day.getDay(),
        progressWeek = d / 7; // 计算出这周已经度过了的百分比
      return ("𝐓𝐡𝐢𝐬 𝐖𝐞𝐞𝐤 " + getDatas(progressWeek) + "%");
    }
    // 生成这个月的进度文案
    function monthProgress(day) {
      var dayCount =
        32 - new Date(day.getYear(), day.getMonth(), 32).getDate() + 1, // 得出这个月有多少天
        datetoday = day.getDate(),
        progressMonth = datetoday / dayCount; // 计算出这个月已经度过了的百分比
      return ("𝐓𝐡𝐢𝐬 𝐌𝐨𝐧𝐭𝐡 " + getDatas(progressMonth) + "%");
    }
    // 生成今年的进度文案
    function yearProgress(day) {
      var month = day.getMonth(),
        progressYear = month / 12; // 计算出今年已经度过了的百分比
      return ("𝐓𝐡𝐢𝐬 𝐘𝐞𝐚𝐫 " + getDatas(progressYear) + "%");
    }

    // 将百分比生成为 ▓▓▓▓▓▓▓▓░░░░░ 格式
    function getDatas(a) {
      var list = ["▓▓", "░░"],
        n = "𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗", //数字列表
        percent = (a * 100).toFixed(1),  // 百分比留一位小数 如 80.2%
        number = Math.round(a * 10);  // 将百分比*10再四舍五入生成为个位数

      // 将百分比成为▓▓▓▓▓▓▓▓░░░░░ 格式, 一共十个格子
      // 最终的格式为 ▓▓▓▓▓▓▓▓░░░░░ 80.0%
      return (
        repeat(list[0], number) + repeat(list[1], 10 - number) + " " + percent
      );
    }
    // 生成重复格子,如▓▓▓▓▓▓▓▓
    function repeat(str, n) {
      return new Array(n + 1).join(str);
    }

    return progressList;

}
},

</code>
