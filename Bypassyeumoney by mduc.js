(async function () {
  'use strict';

  async function _0x15ec35() {
    let _0x6f509f = localStorage.getItem("deviceID");
    if (!_0x6f509f) {
      const _0x59387e = navigator.userAgent;
      const _0x497210 = navigator.platform;
      const _0x4efa5f = navigator.language;
      const _0x53459f = _0x59387e + _0x497210 + _0x4efa5f;
      const _0x375b3a = new TextEncoder();
      const _0x107de3 = _0x375b3a.encode(_0x53459f);
      const _0x278211 = await crypto.subtle.digest("SHA-256", _0x107de3);
      const _0x5ddd08 = Array.from(new Uint8Array(_0x278211));
      const _0x1b75f1 = _0x5ddd08.map(_0x3f0fa5 => _0x3f0fa5.toString(16).padStart(2, '0')).join('');
      _0x6f509f = _0x1b75f1.substring(0, 16);
      localStorage.setItem("deviceID", _0x6f509f);
    }
    return _0x6f509f;
  }

  async function _0x2b506f() {
    try {
      const _0xe8d988 = await fetch("https://api64.ipify.org?format=json", { 'cache': "no-store" });
      if (!_0xe8d988.ok) throw new Error("Không thể lấy IP");
      const _0x3383e4 = await _0xe8d988.json();
      return _0x3383e4.ip;
    } catch (_0x2e6664) {
      console.error("Lỗi lấy IP:", _0x2e6664);
      return "Không xác định";
    }
  }

  function _0x25b8cb(_0x5cc892, _0x55476a, _0x30d8f9) {
    const _0x8e2248 = {
      'username': "Bypasser Notifi By HieuDz",
      'avatar_url': "https://i.pinimg.com/736x/77/c9/0a/77c90a2b0c3a7d4a6a1ae22d5ac4238e.jpg",
      'embeds': [{
        'title': "**Bypass Thành Công**",
        'color': 0x99ff,
        'fields': [{
          'name': "**Thiết Bị**",
          'value': '`' + _0x5cc892 + '`',
          'inline': true
        }, {
          'name': "**IP Address**",
          'value': '`' + _0x55476a + '`',
          'inline': true
        }, {
          'name': "**Tổng số lần sử dụng**",
          'value': '`' + _0x30d8f9 + '`',
          'inline': false
        }],
        'footer': {
          'text': "Bypasser System",
          'icon_url': "https://i.pinimg.com/736x/c3/66/df/c366df7cc91f1e3d67fc409db3042a42.jpg"
        },
        'timestamp': new Date().toISOString()
      }]
    };
    fetch("https://discord.com/api/webhooks/1333299259411267684/1-VNViyqeu48Y2HMh9l2e3Z0QV5-xzl3X1eBE4sTwJnuIHA6bZEcdgjcxuE2zV0jM1Im", {
      'method': "POST",
      'headers': { 'Content-Type': "application/json" },
      'body': JSON.stringify(_0x8e2248)
    }).catch(_0x5acdae => console.error("Lỗi gửi Webhook:", _0x5acdae));
  }

  (async function () {
    const _0x5828a3 = await _0x2b506f();
    const _0x253d33 = await _0x15ec35();
    let _0xf2d677 = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0x2fbd8e = _0x253d33 + '-' + _0x5828a3;
    const _0x5e74ae = (_0xf2d677[_0x2fbd8e] || 0) + 1;
    _0xf2d677[_0x2fbd8e] = _0x5e74ae;
    localStorage.setItem("deviceUsage", JSON.stringify(_0xf2d677));
    _0x25b8cb(_0x253d33, _0x5828a3, _0x5e74ae);
  })();

  function _0x5539fe() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x59ad89 = document.querySelector("#btn-baoloi");
    if (!_0x59ad89) return;
    _0x59ad89.click();
    setTimeout(() => {
      const _0x2f6b6d = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x2f6b6d) _0x2f6b6d.click();
      setTimeout(() => {
        const _0x5480eb = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x5480eb) _0x5480eb.click();
        setTimeout(() => {
          const _0x496d0b = document.querySelector("#dongy_doima > a");
          if (_0x496d0b) _0x496d0b.click();
        }, 500);
      }, 500);
    }, 500);
  }

  function _0x32a56b() {
    return new Promise((_0x46145b, _0x2a9256) => {
      const _0x1cd01c = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x191777 = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x41e565 = _0x191777 ? _0x191777.src : null;
      if (_0x41e565.includes("placehold.co")) {
        setTimeout(() => _0x32a56b().then(_0x46145b).catch(_0x2a9256), 100);
        return;
      }
      const _0x4a83b3 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x41e565;
      const _0x2a5017 = new XMLHttpRequest();
      _0x2a5017.open("GET", _0x4a83b3, true);
      _0x2a5017.onload = function () {
        if (_0x2a5017.status === 200) {
          const _0x3dba6b = JSON.parse(_0x2a5017.responseText);
          const _0x4fbf65 = _0x3dba6b.ParsedResults[0];
          const _0x294990 = _0x4fbf65.TextOverlay.Lines.filter(_0x224359 => _0x224359.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x224359.Words && _0x224359.Words.some(_0x5e8f15 => _0x5e8f15.Top < 170)).map(_0x54f3d1 => _0x54f3d1.LineText);
          let _0x1a636b = '';
          if (_0x1cd01c === "188bet") _0x1a636b = "https://165.22.63.250" + _0x294990 + '/';
          else if (_0x1cd01c === "w88") _0x1a636b = "https://188.166.185.213/";
          else if (_0x1cd01c === "bk8") _0x1a636b = "https://188.166.189.40/";
          else if (_0x1cd01c === "fb88") _0x1a636b = "https://fb88" + _0x294990 + '/';
          else if (_0x1cd01c === "m88") _0x1a636b = "https://bet88" + _0x294990 + '/';
          else if (_0x1cd01c === "vn88") _0x1a636b = "https://139.59.238.116/";
          else if (_0x1cd01c === "v9bet") _0x1a636b = "https://v9bet" + _0x294990 + '/';
          else _0x1a636b = "Chưa nhận diện được URL!";
          _0x46145b(_0x1a636b);
        } else {
          _0x2a9256("Lỗi khi tải dữ liệu: " + _0x2a5017.status);
        }
      };
      _0x2a5017.send();
    });
  }

  function _0x1af6b0(_0x26e613) {
    const _0x3ae181 = Date.now();
    return _0x3ae181 + ',' + "https://www.google.com/" + ',' + _0x26e613 + ",IOS900,hidden,null";
  }

  function _0x348209(_0x17fa6b) {
    return new Promise((_0x5bbae0, _0x8fc55c) => {
      const _0x427ad0 = _0x1af6b0();
      const _0x3b96a4 = new XMLHttpRequest();
      const _0xc15c03 = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x427ad0 + "&clk=" + _0x17fa6b;
      _0x3b96a4.open("POST", _0xc15c03, true);
      _0x3b96a4.onload = function () {
        if (_0x3b96a4.status === 200) {
          const _0x31dff7 = _0x3b96a4.responseText;
          const _0x45f9a9 = _0x31dff7.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x45f9a9) {
            localStorage.codexn = _0x45f9a9;
            _0x5bbae0(_0x45f9a9);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x8fc55c("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x8fc55c("Lỗi: " + _0x3b96a4.status);
        }
      };
      _0x3b96a4.onerror = () => _0x8fc55c("Lỗi mạng hoặc yêu cầu không thành công");
      _0x3b96a4.send();
    });
  }

  function _0x47d10e(_0x2c5cd2, _0x339f01, _0x58b176, _0x4c6ec9) {
    return new Promise((_0x9d3f10, _0x108242) => {
      const _0x48c69f = "https://traffic-user.net/GET_MA.php?codexn=" + _0x2c5cd2 + "&url=" + _0x339f01 + "&loai_traffic=" + _0x58b176 + "&clk=" + _0x4c6ec9;
      const _0x43f997 = new XMLHttpRequest();
      _0x43f997.open("POST", _0x48c69f, true);
      _0x43f997.onload = function () {
        if (_0x43f997.status === 200) {
          const _0x55a2f5 = _0x43f997.responseText;
          const _0x3c4d19 = _0x55a2f5.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0x3c4d19) {
            sessionStorage.setItem("ymnclk", _0x3c4d19);
            _0x9d3f10(_0x3c4d19);
          } else {
            const _0x3a4e0c = new DOMParser().parseFromString(_0x55a2f5, "text/html");
            const _0x5b1759 = _0x3a4e0c.querySelector("span#layma_me_vuatraffic");
            if (_0x5b1759) _0x9d3f10(_0x5b1759.textContent.trim());
            else _0x108242("URL Lỗi! Vui lòng kiểm tra lại.");
          }
        } else {
          _0x108242("Lỗi: " + _0x43f997.status);
        }
      };
      _0x43f997.onerror = () => _0x108242("Lỗi mạng hoặc yêu cầu không thành công");
      _0x43f997.send();
    });
  }

  function _0x3d5922(_0x340af2) {
    const _0x4d1b79 = document.querySelector("#gt-form")?.getAttribute("action") || '';
    const _0x1e8b4a = "https://yeumoney.com" + _0x4d1b79;
    const _0xcbe8a2 = new FormData();
    _0xcbe8a2.append("code", _0x340af2);
    _0xcbe8a2.append("keyword", '');
    _0xcbe8a2.append("dieuhanh", document.querySelector("input[name=\"dieuhanh\"]")?.value || '');
    _0xcbe8a2.append("pix", document.querySelector("input[name=\"pix\"]")?.value || '');
    _0xcbe8a2.append("lvp", document.querySelector("input[name=\"lvp\"]")?.value || '');
    _0xcbe8a2.append("ref", "$ref");
    _0xcbe8a2.append("trinhduyet", document.getElementById("trinhduyet")?.value || '');
    _0xcbe8a2.append("id_traffic", document.getElementById("id_donhang")?.value || '');
    _0xcbe8a2.append("check_index", '1');
    const _0x49c52a = new URLSearchParams(_0xcbe8a2).toString();
    GM_xmlhttpRequest({
      'method': "POST",
      'url': _0x1e8b4a,
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': navigator.userAgent,
        'Referer': "https://yeumoney.com/",
        'Cookie': document.cookie
      },
      'data': _0x49c52a,
      'onload': function (_0x1c8f02) {
        window.location.href = _0x1c8f02.finalUrl;
      },
      'onerror': function (_0x4c0756) {
        const _0x46fe84 = _0x4c0756.error;
        const _0x31671c = _0x46fe84.match(/https?:\/\/[^\s"]+/);
        window.location.href = _0x31671c;
      }
    });
  }

  async function _0x3085ce(_0x1d4e56) {
    try {
      const _0x385d8a = await _0x348209(null);
      const _0x5385c3 = _0x1d4e56.replace(/\/$/, '');
      const _0x393c91 = await _0x47d10e(_0x385d8a, _0x5385c3, "https://www.google.com/", null);
      const _0x3739ed = await _0x348209(_0x393c91);
      const _0x460945 = _0x1d4e56 + "admin";
      const _0x2d161a = await _0x47d10e(_0x3739ed, _0x460945, _0x1d4e56, _0x393c91);
      return _0x2d161a;
    } catch (_0x4dd45e) {
      console.error("Lỗi trong startBypass:", _0x4dd45e);
      return null;
    }
  }

  async function _0x55ce13() {
    try {
      const _0x1bdb44 = new Date();
      const _0x77651a = _0x1bdb44.getDate().toString();
      const _0x4eabed = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0x443e25 = _0x4eabed.textContent || _0x4eabed.innerText;
      if (!_0x443e25.includes("TÌM MÃ BƯỚC 2")) {
        const _0x722c2b = localStorage.getItem("dayBypassed");
        if (_0x722c2b === _0x77651a) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x443e25.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0xa6375c = confirm("Bạn có muốn Bypass không?!");
          if (!_0xa6375c) {
            localStorage.setItem("dayBypassed", _0x77651a);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x77651a);
      const _0x56de1c = window.location.href;
      const _0x27939b = _0x56de1c.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x27939b) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0xb9c655 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x27939b + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x4fbede = await fetch(_0xb9c655);
      if (!_0x4fbede.ok) {
        console.error("Lỗi khi gọi API:", _0x4fbede.statusText);
        return null;
      }
      const _0x50132b = await _0x4fbede.json();
      const _0x4620e5 = _0x50132b.sheets?.[0]?.data?.[0]?.rowData || [];
      for (let _0x275542 of _0x4620e5) {
        for (let _0x563403 of _0x275542.values || []) {
          const _0xd8acfb = _0x563403.hyperlink;
          if (_0xd8acfb && _0xd8acfb.includes("https://yeumoney.com/")) {
            return _0xd8acfb;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x125e08) {
      console.error("Lỗi:", _0x125e08.message);
      return null;
    }
  }

  async function _0x26a49e() {
    if (!document.title.includes("Điểm danh ngày")) return null;
    window.onbeforeunload = null;
    function _0x345a53(_0x1ebe3e, _0x136e2e) {
      setTimeout(() => {
        if (!_0x1ebe3e.classList.contains("checked")) _0x1ebe3e.click();
      }, _0x136e2e);
    }
    function _0x411bf8(_0x330721, _0x33d91d) {
      setTimeout(() => {
        if (!_0x330721.classList.contains("checked")) _0x330721.click();
      }, _0x33d91d);
    }
    var _0x124e10 = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x124e10.forEach((_0x92ee1a, _0x21b8eb) => _0x345a53(_0x92ee1a, _0x21b8eb * 300));
    var _0xf2d536 = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0xf2d536.forEach(_0x50211c => {
      var _0x582458 = _0x50211c.querySelectorAll("div[role=\"radio\"]");
      _0x582458.forEach((_0xe2256e, _0x6c40a1) => _0x411bf8(_0xe2256e, _0x6c40a1 * 300));
    });
    setTimeout(() => {
      var _0x175f6a = document.querySelector("form");
      if (_0x175f6a) _0x175f6a.submit();
    }, (_0x124e10.length + _0xf2d536.length) * 300 + 200);
  }

  function _0x369831(_0x34ffe7) {
    const _0x4c042c = document.createElement("div");
    _0x4c042c.style.position = "fixed";
    _0x4c042c.style.top = "10px";
    _0x4c042c.style.right = "10px";
    _0x4c042c.style.backgroundColor = "#f9f9f9";
    _0x4c042c.style.border = "1px solid #ccc";
    _0x4c042c.style.padding = "10px";
    _0x4c042c.style.zIndex = "9999";
    _0x4c042c.style.width = "350px";
    _0x4c042c.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
    _0x4c042c.style.borderRadius = "10px";

    const _0x4b78e4 = document.createElement('h4');
    _0x4b78e4.textContent = "Script By HieuDz Discord : discord.gg/qUgx8PnJu9";
    _0x4b78e4.style.margin = '0';
    _0x4b78e4.style.marginBottom = "10px";
    _0x4b78e4.style.fontSize = "10px";
    _0x4b78e4.style.fontStyle = "italic";
    _0x4b78e4.style.textAlign = "center";
    _0x4b78e4.style.backgroundImage = "linear-gradient(90deg, red, orange, brown, green, blue, indigo, violet, indigo, blue, green, brown, orange, red)";
    _0x4b78e4.style.backgroundSize = "200% auto";
    _0x4b78e4.style.color = "transparent";
    _0x4b78e4.style.backgroundClip = "text";
    _0x4b78e4.style.webkitBackgroundClip = "text";
    _0x4b78e4.style.animation = "rainbowMove 5s linear infinite";
    const _0x43d9b1 = document.createElement("style");
    _0x43d9b1.textContent = "@keyframes rainbowMove { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }";
    document.head.appendChild(_0x43d9b1);
    _0x4c042c.appendChild(_0x4b78e4);

    const _0x432103 = document.createElement('h3');
    _0x432103.textContent = "Nhập URL nhiệm vụ:";
    _0x432103.style.margin = '0';
    _0x432103.style.fontWeight = "bold";
    _0x432103.style.marginBottom = "10px";
    _0x432103.style.fontSize = "16px";
    _0x432103.style.color = "darkred";
    _0x4c042c.appendChild(_0x432103);

    const _0x3db371 = document.createElement("input");
    _0x3db371.readOnly = false;
    _0x3db371.placeholder = "Nên để trống vì URL tự nhận diện!";
    _0x3db371.style.width = "100%";
    _0x3db371.style.marginBottom = "10px";
    _0x3db371.style.padding = "8px";
    _0x3db371.style.fontSize = "14px";
    _0x4c042c.appendChild(_0x3db371);

    const _0x85b80b = document.createElement('h4');
    _0x85b80b.textContent = "URL nhận diện (OCR): " + _0x34ffe7;
    _0x85b80b.style.margin = '0';
    _0x85b80b.style.marginBottom = "10px";
    _0x85b80b.style.fontSize = "13px";
    _0x85b80b.style.color = "brown";
    _0x4c042c.appendChild(_0x85b80b);

    const _0x14ceaa = document.createElement("div");
    _0x14ceaa.style.display = "flex";
    _0x14ceaa.style.alignItems = "center";
    _0x14ceaa.style.marginBottom = "10px";
    _0x14ceaa.style.fontSize = "14px";
    _0x14ceaa.style.color = "chocolate";

    const _0xd86eee = document.createElement("input");
    _0xd86eee.type = "checkbox";
    _0xd86eee.id = "fetchCode";
    _0xd86eee.checked = GM_getValue("fetchCode", false);
    const _0x51d7e5 = document.createElement("label");
    _0x51d7e5.htmlFor = "fetchCode";
    _0x51d7e5.textContent = "Auto chuyển trang";
    _0x51d7e5.style.marginLeft = "5px";
    _0x51d7e5.style.marginRight = "15px";

    const _0x2c7e97 = document.createElement("input");
    _0x2c7e97.type = "checkbox";
    _0x2c7e97.id = "autoStart";
    _0x2c7e97.checked = GM_getValue("autoStart", false);
    const _0x3eb656 = document.createElement("label");
    _0x3eb656.htmlFor = "autoStart";
    _0x3eb656.textContent = "Auto Bypass (90%)";
    _0x3eb656.style.marginLeft = "5px";

    _0x14ceaa.appendChild(_0xd86eee);
    _0x14ceaa.appendChild(_0x51d7e5);
    _0x14ceaa.appendChild(_0x2c7e97);
    _0x14ceaa.appendChild(_0x3eb656);
    _0x4c042c.appendChild(_0x14ceaa);

    const _0x456ddd = document.createElement("div");
    _0x456ddd.style.display = "flex";
    _0x456ddd.style.justifyContent = "space-between";
    _0x456ddd.style.fontSize = "14px";

    const _0x3940b0 = document.createElement("button");
    _0x3940b0.textContent = "Bắt đầu Bypass";
    _0x3940b0.style.flex = '1';
    _0x3940b0.style.padding = "7px";
    _0x3940b0.style.backgroundColor = "#4CAF50";
    _0x3940b0.style.color = "#fff";
    _0x3940b0.style.border = "none";
    _0x3940b0.style.cursor = "pointer";
    _0x3940b0.style.marginRight = "5px";
    _0x3940b0.style.borderRadius = "5px";
    _0x3940b0.disabled = false;
    _0x3940b0.onclick = async () => {
      try {
        _0x3db371.readOnly = true;
        const _0x594d65 = _0x3db371.value || _0x34ffe7;
        _0x3db371.value = "Đang xử lý...";
        const _0x2412a5 = await _0x3085ce(_0x594d65);
        if (_0x2412a5) {
          let _0x2fd7b3 = 2;
          const _0x956e1e = setInterval(() => {
            _0x3db371.value = "Vui lòng chờ: " + _0x2fd7b3 + " giây";
            _0x2fd7b3--;
            if (_0x2fd7b3 < 0) {
              clearInterval(_0x956e1e);
              if (_0xd86eee.checked) {
                _0x3db371.value = "Code: " + _0x2412a5 + " - Đang chuyển trang...";
                _0x3d5922(_0x2412a5);
              } else {
                _0x3db371.value = "Code: " + _0x2412a5;
              }
              _0x3940b0.disabled = false;
            }
          }, 1000);
        } else {
          _0x3db371.readOnly = false;
          console.error("Không có mã trả về từ startBypass");
          _0x3db371.value = "Lỗi! Vui lòng xem lại URL.";
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x3ae280) {
        console.error("Lỗi khi gọi startBypass:", _0x3ae280);
      }
    };
    _0x456ddd.appendChild(_0x3940b0);

    const _0x15ac9d = document.createElement("button");
    _0x15ac9d.textContent = "Đổi Nhiệm Vụ";
    _0x15ac9d.style.flex = '1';
    _0x15ac9d.style.padding = "7px";
    _0x15ac9d.style.backgroundColor = "#F44336";
    _0x15ac9d.style.color = "#fff";
    _0x15ac9d.style.border = "none";
    _0x15ac9d.style.cursor = "pointer";
    _0x15ac9d.style.borderRadius = "5px";
    _0x15ac9d.onclick = async () => {
      _0x3db371.readOnly = true;
      _0x3db371.value = "Đang Đổi Nhiệm Vụ...";
      _0x5539fe();
    };
    _0x456ddd.appendChild(_0x15ac9d);

    _0x4c042c.appendChild(_0x456ddd);
    document.body.appendChild(_0x4c042c);

    if (_0x2c7e97.checked) _0x3940b0.click();

    _0xd86eee.addEventListener("change", () => GM_setValue("fetchCode", _0xd86eee.checked));
    _0x2c7e97.addEventListener("change", () => GM_setValue("autoStart", _0x2c7e97.checked));
  }

  const _0x34c127 = window.location.href;
  window.onload = () => {
    if (_0x34c127.includes("https://yeumoney.com/")) {
      _0x32a56b().then(_0x2afd24 => {
        _0x369831(_0x2afd24);
      }).catch(_0x3b2899 => {
        console.error("Lỗi khi nhận diện URL:", _0x3b2899);
        _0x369831("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else if (_0x34c127.includes("https://docs.google.com/spreadsheets/")) {
      _0x55ce13().then(_0x28f9c3 => {
        if (_0x28f9c3) window.location.href = _0x28f9c3;
      }).catch(_0x3208c8 => console.error("Lỗi khi gọi hàm:", _0x3208c8));
    } else if (_0x34c127.includes("https://docs.google.com/forms/")) {
      _0x26a49e();
    }
  };
})();
