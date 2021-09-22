function aloadJS(t, e) {
  var a = document;
  window,
    (function () {
      var n = a.createElement("script");
      (e = e || function () {}), (n.onload = e), (n.src = t);
      try {
        a.head.appendChild(n);
      } catch (t) {
        document.documentElement.appendChild(n);
      }
    })();
}
function _m() {
  var t = [
    "𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ",
    "𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅",
    "𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩",
    "𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵",
    "𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ",
    "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ",
    "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘϙʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘϙʀsᴛᴜᴠᴡxʏᴢ",
    "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙",
    "𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡",
    "𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕",
    "𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉",
    "ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ",
    "Z⅄XMΛ∩⊥SᴚΌԀONW˥⋊ſIH⅁ℲƎᗡƆᙠ∀zʎxʍʌnʇsɹbdouɯlʞɾıɥɓɟǝpɔqɐ",
    "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ",
    "ąҍçժҽƒցհìʝҟӀʍղօքզɾʂէմѵա×վՀȺβ↻ᎠƐƑƓǶįلҠꝈⱮហටφҨའϚͲԱỼచჯӋɀ",
    "🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉",
    "ค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊค๖¢໓ēfງhiวkl๓ຖ໐p๑rŞtนงຟxฯຊ",
    "ąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑąცƈɖɛʄɠɧıʝƙƖɱŋơ℘զཞʂɬų۷ῳҳყʑ",
    "🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉",
    "ค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչค๒ς๔єŦﻮђเןкɭ๓ภ๏קợгรՇยשฬאץչ",
    "αႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥαႦƈԃҽϝɠԋιʝƙʅɱɳσρϙɾʂƚυʋɯxყȥ",
  ];
  function e() {
    $("#out").html(
      '<textarea id="demo" placeholder="𝕱𝖆𝖓𝖈𝖞 𝓣𝓮𝔁𝓽 𝕆𝕦𝕥... (click to copy)"></textarea>'
    );
  }
  $("#src").change(i).on("keyup input contextmenu", i), e();
  var a = new Date(),
    n = "",
    r = [];
  function i() {
    var t = $("#src").val();
    if ("" == t) return $("#out").empty(), e(), void s();
    t != n && (o(), new Date() - a < 599 && (s(), o()));
  }
  function o() {
    !(function () {
      if (0 == $("#renderLoading").length) {
        $("body").append(
          '<div id="renderLoading"><svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-18 40 100 100" enable-background="new 0 0 0 0" xml:space="preserve"><rect x="20" y="50" width="4" height="10" fill="#fff" transform="translate(0 13.1135)"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform></rect><rect x="30" y="50" width="4" height="10" fill="#fff" transform="translate(0 13.5532)"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform></rect><rect x="40" y="50" width="4" height="10" fill="#fff" transform="translate(0 0.219867)"><animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform></rect></svg></div>'
        );
      }
      $("#renderLoading").css("opacity", 0.2),
        $("#out textarea").addClass("working"),
        $("#out textarea").css("background-image", "none");
    })(),
      r.push(setTimeout(l, 599));
  }
  function s() {
    r.forEach(function (t) {
      clearTimeout(t);
    }),
      (r = []);
  }
  function c(t, e, a, n, r, i) {
    (r && i) || ((r = t.width()), (i = t.height()));
    var o =
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='" +
      i +
      "px' width='" +
      r +
      "px'><text x='" +
      r / 1 +
      "' y='" +
      i / 2 +
      "' alignment-baseline='middle' text-anchor='end' fill-opacity='" +
      n +
      "' fill='%23" +
      a +
      "' font-size='30' font-style='italic' font-weight='bold' font-family='Arial, Helvetica, sans-serif'>" +
      e +
      '</text></svg>")';
    t.css("background-image", o);
  }
  function l() {
    s();
    var e = $("#src").val();
    $("#out").empty();
    for (var r = 0; r < t.length; r++) {
      var i = t[r],
        o = "fancy_txt" + r,
        c = $("#" + o).length > 0,
        l = c ? $("#" + o) : $('<textarea id="' + o + '"></textarea>');
      l.val(u(e, i)), c || $("#out").append(l), d(l[0]);
    }
    [1161, 822, 818, 823, 819, 830, 846, 829].forEach(function (t, a) {
      var n = "hyper_txt" + a,
        r = $("#" + n).length > 0,
        i = r
          ? $("#" + n)
          : $('<textarea class="hyper" id="' + n + '"></textarea>');
      i.val(f(e, t)), r || $("#out").append(i), d(i[0]);
    }),
      (a = new Date()),
      (n = e),
      $("#renderLoading").css("opacity", 0),
      $("#out textarea").removeClass("working"),
      $("#out textarea").each(function () {
        p($(this));
      });
  }
  function d(t) {
    (t.style.height = "5px"), (t.style.height = t.scrollHeight + "px");
  }
  function u(t, e) {
    if (!t) return "";
    for (
      var a = Array.from(
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        ),
        n = Array.from(e),
        r = t,
        i = 0;
      i < a.length;
      i++
    ) {
      var o = a[i],
        s = n[i];
      r = r.split(o).join(s);
    }
    return r;
  }
  function f(t, e) {
    for (var a = Array.from(t), n = "", r = 0; r < a.length; r++) {
      n += a[r] + String.fromCharCode(e);
    }
    return n;
  }
  function m(e, a) {
    var n = (function (e, a) {
      return u(e, t[a]);
    })($(e).html(), a);
    $(e).html(n);
  }
  function h(t, e) {
    var a = f($(t).html(), e);
    $(t).html(a);
  }
  // click to copy
  function p(t) {
    c(t, "click to copy!", "000", ".1");
  }
  $("#src").bind("keyup input contextmenu", function () {
    d($(this)[0]);
  }),
    m("h1 a", 0),
    m("h2", 6),
    m("h3", 4),
    m("#u1", 2),
    m("#u2", 3),
    m("#u3", 4),
    h("#w1", 1161),
    h("#w2", 818),
    h("#w3", 810),
    m("title", 5),
    aloadJS(
      "https://www.googletagmanager.com/gtag/js?id=UA-25873290-7",
      function () {
        function t() {
          dataLayer.push(arguments);
        }
        (window.dataLayer = window.dataLayer || []),
          t("js", new Date()),
          t("config", "UA-25873290-7");
      }
    ),
    $("#out").on("click", "textarea", function () {
      ((t) => {
        const e = document.createElement("textarea");
        (e.value = t),
          document.body.appendChild(e),
          e.select(),
          document.execCommand("copy"),
          document.body.removeChild(e);
      })($(this).val());
      var t = $(this),
        e = $("#out textarea").not(t);
      c(t, "done :)", "000", ".1"), p(e);
    }),
    aloadJS(
      "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5d4ef23adc8f9863",
      {}
    );
}
aloadJS(
  "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
  _m
);
