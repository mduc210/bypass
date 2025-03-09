(async function () {
  'use strict';

  async function _0x38de08() {
    let _0x3ce2e4 = localStorage.getItem("deviceID");
    if (!_0x3ce2e4) {
      const _0x66a460 = navigator.userAgent;
      const _0x17a778 = navigator.platform;
      const _0x1722e0 = navigator.language;
      const _0x199d91 = _0x66a460 + _0x17a778 + _0x1722e0;
      const _0x2cbeac = new TextEncoder();
      const _0x3c8638 = _0x2cbeac.encode(_0x199d91);
      const _0x1f085e = await crypto.subtle.digest("SHA-256", _0x3c8638);
      const _0x4132cd = Array.from(new Uint8Array(_0x1f085e));
      const _0x22d034 = _0x4132cd.map(_0xc79ee7 => _0xc79ee7.toString(0x10).padStart(0x2, '0')).join('');
      _0x3ce2e4 = _0x22d034.substring(0x0, 0x10);
      localStorage.setItem("deviceID", _0x3ce2e4);
    }
    return _0x3ce2e4;
  }
  async function _0x3df69f() {
    try {
      const _0x105c92 = await fetch("https://api64.ipify.org?format=json", {
        'cache': "no-store"
      });
      if (!_0x105c92.ok) {
        throw new Error("Không thể lấy IP");
      }
      const _0x49acf0 = await _0x105c92.json();
      return _0x49acf0.ip;
    } catch (_0x415644) {
      console.error("Lỗi lấy IP:", _0x415644);
      return "Không xác định";
    }
  }
  function _0x6c668e(_0x5adad6, _0x1c1094, _0x105f4d) {
    const _0x444b53 = {
      'username': "Bypasser Notifi By HieuDz",
      'avatar_url': "https://i.pinimg.com/736x/77/c9/0a/77c90a2b0c3a7d4a6a1ae22d5ac4238e.jpg",
      'embeds': [{
        'title': "**Bypass Thành Công**",
        'color': 0x99ff,
        'fields': [{
          'name': "**Thiết Bị**",
          'value': '`' + _0x5adad6 + '`',
          'inline': true
        }, {
          'name': "**IP Address**",
          'value': '`' + _0x1c1094 + '`',
          'inline': true
        }, {
          'name': "**Tổng số lần sử dụng**",
          'value': '`' + _0x105f4d + '`',
          'inline': false
        }],
        'footer': {
          'text': "Bypasser System",
          'icon_url': "https://i.pinimg.com/736x/c3/66/df/c366df7cc91f1e3d67fc409db3042a42.jpg"
        },
        'timestamp': new Date().toISOString()
      }]
    };
    fetch("https://discord.com/api/webhooks/1347797256207601684/6nNAI6TpPeuH6eh3B2XpNCbOus-8qvG8D0Idtw4-jLRo1_60AlgXpk8eR8mHlK0W_wp8", {
      'method': "POST",
      'headers': {
        'Content-Type': "application/json"
      },
      'body': JSON.stringify(_0x444b53)
    })["catch"](_0x52492b => console.error("Lỗi gửi Webhook:", _0x52492b));
  }
  (async function () {
    const _0x3d48b6 = await _0x3df69f();
    const _0x4cccde = await _0x38de08();
    let _0x2ba05c = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0x2beaac = _0x4cccde + '-' + _0x3d48b6;
    const _0x1ae28c = (_0x2ba05c[_0x2beaac] || 0x0) + 0x1;
    _0x2ba05c[_0x2beaac] = _0x1ae28c;
    localStorage.setItem("deviceUsage", JSON.stringify(_0x2ba05c));
    _0x6c668e(_0x4cccde, _0x3d48b6, _0x1ae28c);
  })();
  function _0x13205e() {
    console.log("Đang đổi nhiệm vụ...");
    const _0x47d55f = document.querySelector("#btn-baoloi");
    if (!_0x47d55f) {
      return false;
    }
    _0x47d55f.click();
    setTimeout(() => {
      const _0x49f076 = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x49f076) {
        _0x49f076.click();
      }
      setTimeout(() => {
        const _0x23d90f = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x23d90f) {
          _0x23d90f.click();
        }
        setTimeout(() => {
          const _0x1d90d4 = document.querySelector("#dongy_doima > a");
          if (_0x1d90d4) {
            _0x1d90d4.click();
            return true;
          }
          return false;
        }, 0x1f4);
      }, 0x1f4);
    }, 0x1f4);
    return true;
  }
  function _0x33aed1() {
    return new Promise((_0x43dc82, _0x2e10cc) => {
      const _0x5d69ce = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x73663c = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x274367 = _0x73663c ? _0x73663c.src : null;
      if (_0x274367.includes("placehold.co")) {
        setTimeout(() => _0x33aed1().then(_0x43dc82)["catch"](_0x2e10cc), 0x64);
        return;
      }
      const _0x706b04 = "https://api.ocr.space/parse/imageurl?apikey=K81664733488957&isOverlayRequired=true&OCREngine=2&url=" + _0x274367;
      const _0x425700 = new XMLHttpRequest();
      _0x425700.open("GET", _0x706b04, true);
      _0x425700.onload = function () {
        if (_0x425700.status === 0xc8) {
          const _0x30c29f = JSON.parse(_0x425700.responseText);
          const _0x102aa5 = _0x30c29f.ParsedResults[0x0];
          const _0x3ae258 = _0x102aa5.TextOverlay.Lines.filter(_0x4cf95a => _0x4cf95a.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x4cf95a.Words && _0x4cf95a.Words.some(_0x33c171 => _0x33c171.Top < 0xaa)).map(_0xf460d6 => _0xf460d6.LineText);
          let _0x59ca62 = '';
          if (_0x5d69ce === "188bet") {
            _0x59ca62 = "https://165.22.63.250" + _0x3ae258 + '/';
          } else {
            if (_0x5d69ce === "w88") {
              _0x59ca62 = "https://188.166.185.213/";
            } else {
              if (_0x5d69ce === "bk8") {
                _0x59ca62 = "https://188.166.189.40/";
              } else {
                if (_0x5d69ce === "fb88") {
                  _0x59ca62 = "https://fb88" + _0x3ae258 + '/';
                } else {
                  if (_0x5d69ce === "m88") {
                    _0x59ca62 = "https://bet88" + _0x3ae258 + '/';
                  } else {
                    if (_0x5d69ce === "vn88") {
                      _0x59ca62 = "https://139.59.238.116/";
                    } else {
                      if (_0x5d69ce === "v9bet") {
                        _0x59ca62 = "https://v9bet" + _0x3ae258 + '/';
                      } else {
                        _0x59ca62 = "Chưa nhận diện được URL!";
                      }
                    }
                  }
                }
              }
            }
          }
          _0x43dc82(_0x59ca62);
        } else {
          _0x2e10cc("Lỗi khi tải dữ liệu: " + _0x425700.status);
        }
      };
      _0x425700.send();
    });
  }
  function _0x445f8c(_0x18a123) {
    const _0x4cf7f6 = Date.now();
    return _0x4cf7f6 + ',' + "https://www.google.com/" + ',' + _0x18a123 + ",IOS900,hidden,null";
  }
  async function _0x32dabd(_0xa17583 = null) {
    try {
      let _0x5efcdb = "https://api.proxyscrape.com/v3/free-proxy-list/get?request=displayproxies&proxytype=http&timeout=5000&anonymity=elite";
      if (_0xa17583) {
        _0x5efcdb += "&country=" + _0xa17583;
      }
      const _0x152486 = await fetch(_0x5efcdb, {
        'cache': "no-store"
      });
      if (!_0x152486.ok) {
        throw new Error("Không thể lấy proxy từ API");
      }
      const _0x52c6f0 = await _0x152486.text();
      const _0x460cf8 = _0x52c6f0.trim().split("\n");
      if (_0x460cf8.length === 0x0) {
        throw new Error("Không có proxy khả dụng");
      }
      const _0x55ab7d = _0x460cf8[Math.floor(Math.random() * _0x460cf8.length)];
      const [_0x302258, _0x1506b4] = _0x55ab7d.split(':');
      const _0x518dc3 = await _0x212df2({
        'ip': _0x302258,
        'port': _0x1506b4
      });
      if (_0x518dc3) {
        return {
          'ip': _0x302258,
          'port': parseInt(_0x1506b4)
        };
      }
      return _0x32dabd(_0xa17583);
    } catch (_0x242f4e) {
      console.error("Lỗi khi lấy proxy:", _0x242f4e);
      return null;
    }
  }
  async function _0x212df2(_0x24596f) {
    return new Promise(_0x3759e2 => {
      GM_xmlhttpRequest({
        'method': "GET",
        'url': "https://api.ipify.org?format=json",
        'proxy': {
          'host': _0x24596f.ip,
          'port': _0x24596f.port
        },
        'timeout': 0x1388,
        'onload': () => _0x3759e2(true),
        'onerror': () => _0x3759e2(false),
        'ontimeout': () => _0x3759e2(false)
      });
    });
  }
  function _0x1c6672() {
    const _0x50979f = [{
      'name': "Windows NT 10.0; Win64; x64",
      'platform': "Win32"
    }, {
      'name': "Macintosh; Intel Mac OS X 10_15_7",
      'platform': "MacIntel"
    }, {
      'name': "X11; Linux x86_64",
      'platform': "Linux x86_64"
    }, {
      'name': "iPhone; CPU iPhone OS 16_0 like Mac OS X",
      'platform': "iPhone"
    }];
    const _0x437a88 = [{
      'name': "Chrome",
      'version': "Chrome/" + (Math.floor(Math.random() * 0x14) + 0x64) + ".0." + Math.floor(Math.random() * 0x1388) + '.' + Math.floor(Math.random() * 0xc8)
    }, {
      'name': "Firefox",
      'version': "Firefox/" + (Math.floor(Math.random() * 0x14) + 0x64) + '.0'
    }, {
      'name': "Safari",
      'version': "Version/" + (Math.floor(Math.random() * 0x5) + 0xe) + ".0 Safari/605.1.15"
    }];
    const _0x355280 = _0x50979f[Math.floor(Math.random() * _0x50979f.length)];
    const _0x3668d2 = _0x437a88[Math.floor(Math.random() * _0x437a88.length)];
    const _0x5359e1 = "Mozilla/5.0 (" + _0x355280.name + ") AppleWebKit/537.36 (KHTML, like Gecko) " + _0x3668d2.version;
    const _0x25ab99 = ["1920x1080", "1366x768", "1440x900", "1280x720"];
    const _0x12f861 = _0x25ab99[Math.floor(Math.random() * _0x25ab99.length)];
    Object.defineProperty(window, "screen", {
      'value': {
        'width': parseInt(_0x12f861.split('x')[0x0]),
        'height': parseInt(_0x12f861.split('x')[0x1]),
        'availWidth': parseInt(_0x12f861.split('x')[0x0]),
        'availHeight': parseInt(_0x12f861.split('x')[0x1]) - 0x32
      },
      'writable': false,
      'configurable': true
    });
    const _0x55fb9d = ["Intel Inc.", "NVIDIA Corporation", "AMD"];
    const _0x3069c9 = ["Intel Iris OpenGL Engine", "GeForce GTX 970/PCIe/SSE2", "Radeon RX 580"];
    const _0x87ee9c = document.createElement("canvas");
    const _0x20b870 = _0x87ee9c.getContext("webgl");
    if (_0x20b870) {
      Object.defineProperty(_0x20b870, "getParameter", {
        'value': _0x41c48e => {
          if (_0x41c48e === _0x20b870.VENDOR) {
            return _0x55fb9d[Math.floor(Math.random() * _0x55fb9d.length)];
          }
          if (_0x41c48e === _0x20b870.RENDERER) {
            return _0x3069c9[Math.floor(Math.random() * _0x3069c9.length)];
          }
          return _0x20b870.getParameter(_0x41c48e);
        },
        'writable': false
      });
    }
    return {
      'userAgent': _0x5359e1,
      'platform': _0x355280.platform
    };
  }
  let _0x1f8f06 = GM_getValue("isFakeIPEnabled", false);
  let _0x5021b2 = GM_getValue("isFakeBrowserEnabled", false);
  let _0x3976a5 = GM_getValue("currentProxy", null);
  let _0x6dbe9 = GM_getValue('currentUserAgent', navigator.userAgent);
  let _0x3ec533 = GM_getValue("currentPlatform", navigator.platform);
  if (_0x1f8f06 && _0x3976a5) {
    _0x22c4df(_0x3976a5);
  }
  if (_0x5021b2 && _0x6dbe9 !== navigator.userAgent) {
    _0x5cc27b({
      'userAgent': _0x6dbe9,
      'platform': _0x3ec533
    });
  }
  async function _0x22c4df(_0x35bb2c) {
    console.log("Đã bật Fake IP: " + _0x35bb2c.ip + ':' + _0x35bb2c.port);
    _0x3976a5 = _0x35bb2c;
    GM_setValue("currentProxy", _0x35bb2c);
    GM_setValue("isFakeIPEnabled", true);
  }
  function _0x48778c() {
    console.log("Đã tắt Fake IP");
    _0x3976a5 = null;
    GM_setValue("currentProxy", null);
    GM_setValue("isFakeIPEnabled", false);
  }
  function _0x5cc27b({
    userAgent: _0x3472c3,
    platform: _0x51645b
  }) {
    console.log("Đã bật Fake Browser: " + _0x3472c3);
    Object.defineProperty(navigator, 'userAgent', {
      'value': _0x3472c3,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': _0x51645b,
      'writable': false,
      'configurable': true
    });
    _0x6dbe9 = _0x3472c3;
    _0x3ec533 = _0x51645b;
    GM_setValue("currentUserAgent", _0x3472c3);
    GM_setValue("currentPlatform", _0x51645b);
    GM_setValue("isFakeBrowserEnabled", true);
  }
  function _0x518a4c() {
    console.log("Đã tắt Fake Browser");
    Object.defineProperty(navigator, "userAgent", {
      'value': navigator.userAgent,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': navigator.platform,
      'writable': false,
      'configurable': true
    });
    _0x6dbe9 = navigator.userAgent;
    _0x3ec533 = navigator.platform;
    GM_setValue("currentUserAgent", navigator.userAgent);
    GM_setValue("currentPlatform", navigator.platform);
    GM_setValue("isFakeBrowserEnabled", false);
  }
  function _0x4ecfc8(_0x226cd5) {
    return new Promise((_0x363fd9, _0x26acf1) => {
      const _0x3b8142 = _0x445f8c();
      const _0x48aa3e = new XMLHttpRequest();
      const _0x1d9f08 = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x3b8142 + "&clk=" + _0x226cd5;
      _0x48aa3e.open("POST", _0x1d9f08, true);
      _0x48aa3e.onload = function () {
        if (_0x48aa3e.status === 0xc8) {
          const _0x44d9a2 = _0x48aa3e.responseText;
          const _0x243b26 = _0x44d9a2.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[0x1];
          if (_0x243b26) {
            localStorage.codexn = _0x243b26;
            _0x363fd9(_0x243b26);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x26acf1("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x26acf1("Lỗi: " + _0x48aa3e.status);
        }
      };
      _0x48aa3e.onerror = () => _0x26acf1("Lỗi mạng hoặc yêu cầu không thành công");
      _0x48aa3e.send();
    });
  }
  function _0x3bf693(_0x3fcd7d, _0x126376, _0xf5080d, _0x259f81) {
    return new Promise((_0xa28c97, _0xef7eee) => {
      const _0x7b1728 = "https://traffic-user.net/GET_MA.php?codexn=" + _0x3fcd7d + "&url=" + _0x126376 + "&loai_traffic=" + _0xf5080d + "&clk=" + _0x259f81;
      const _0xff70f5 = new XMLHttpRequest();
      _0xff70f5.open("POST", _0x7b1728, true);
      _0xff70f5.onload = function () {
        if (_0xff70f5.status === 0xc8) {
          const _0x560c65 = _0xff70f5.responseText;
          const _0x2a8732 = _0x560c65.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[0x1];
          if (_0x2a8732) {
            sessionStorage.setItem("ymnclk", _0x2a8732);
            _0xa28c97(_0x2a8732);
          } else {
            const _0x1c824c = new DOMParser().parseFromString(_0x560c65, "text/html");
            const _0x2dc629 = _0x1c824c.querySelector("span#layma_me_vuatraffic");
            if (_0x2dc629) {
              _0xa28c97(_0x2dc629.textContent.trim());
            } else {
              _0xef7eee("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0xef7eee("Lỗi: " + _0xff70f5.status);
        }
      };
      _0xff70f5.onerror = () => _0xef7eee("Lỗi mạng hoặc yêu cầu không thành công");
      _0xff70f5.send();
    });
  }
  function _0x1a47c6(_0x243bfd) {
    const _0x122410 = document.querySelector("#gt-form")?.["getAttribute"]("action") || '';
    const _0x40539b = "https://yeumoney.com" + _0x122410;
    const _0x5b1606 = new FormData();
    _0x5b1606.append("code", _0x243bfd);
    _0x5b1606.append("keyword", '');
    _0x5b1606.append("dieuhanh", document.querySelector("input[name=\"dieuhanh\"]")?.["value"] || '');
    _0x5b1606.append("pix", document.querySelector("input[name=\"pix\"]")?.["value"] || '');
    _0x5b1606.append("lvp", document.querySelector("input[name=\"lvp\"]")?.["value"] || '');
    _0x5b1606.append("ref", "$ref");
    _0x5b1606.append("trinhduyet", document.getElementById("trinhduyet")?.["value"] || '');
    _0x5b1606.append("id_traffic", document.getElementById("id_donhang")?.["value"] || '');
    _0x5b1606.append("check_index", '1');
    const _0xf5ef08 = new URLSearchParams(_0x5b1606).toString();
    const _0x2d7288 = {
      'method': "POST",
      'url': _0x40539b,
      'headers': {
        'Content-Type': "application/x-www-form-urlencoded",
        'User-Agent': _0x5021b2 ? _0x6dbe9 : navigator.userAgent,
        'Referer': "https://yeumoney.com/",
        'Cookie': document.cookie
      },
      'data': _0xf5ef08,
      'onload': function (_0x30b13d) {
        window.location.href = _0x30b13d.finalUrl;
      },
      'onerror': function (_0x1a9218) {
        const _0x3cb131 = _0x1a9218.error;
        const _0x34b096 = _0x3cb131.match(/https?:\/\/[^\s"]+/);
        window.location.href = _0x34b096;
      }
    };
    if (_0x1f8f06 && _0x3976a5) {
      _0x2d7288.proxy = {
        'host': _0x3976a5.ip,
        'port': _0x3976a5.port
      };
    }
    GM_xmlhttpRequest(_0x2d7288);
  }
  async function _0x2fccce(_0x467514) {
    try {
      const _0x1c3771 = await _0x4ecfc8(null);
      const _0x3df44e = _0x467514.replace(/\/$/, '');
      const _0x47e556 = await _0x3bf693(_0x1c3771, _0x3df44e, "https://www.google.com/", null);
      const _0x1fab8f = await _0x4ecfc8(_0x47e556);
      const _0x5a2ace = _0x467514 + "admin";
      const _0x55e6e6 = await _0x3bf693(_0x1fab8f, _0x5a2ace, _0x467514, _0x47e556);
      return _0x55e6e6;
    } catch (_0x1d11b2) {
      console.error("Lỗi trong startBypass:", _0x1d11b2);
      return null;
    }
  }
  async function _0x329642() {
    try {
      const _0x216bca = new Date();
      const _0x1550b2 = _0x216bca.getDate().toString();
      const _0x43de72 = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0x8363a = _0x43de72.textContent || _0x43de72.innerText;
      if (!_0x8363a.includes("TÌM MÃ BƯỚC 2")) {
        const _0x41ce68 = localStorage.getItem("dayBypassed");
        if (_0x41ce68 === _0x1550b2) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x8363a.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0x241bf9 = confirm("Bạn có muốn Bypass không?!");
          if (!_0x241bf9) {
            localStorage.setItem("dayBypassed", _0x1550b2);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x1550b2);
      const _0x3c9422 = window.location.href;
      const _0x5ef98e = _0x3c9422.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[0x1];
      if (!_0x5ef98e) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0x4c8379 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x5ef98e + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x4fc447 = await fetch(_0x4c8379);
      if (!_0x4fc447.ok) {
        console.error("Lỗi khi gọi API:", _0x4fc447.statusText);
        return null;
      }
      const _0x54290a = await _0x4fc447.json();
      const _0x578d58 = _0x54290a.sheets?.[0x0]?.["data"]?.[0x0]?.["rowData"] || [];
      for (let _0x113a41 of _0x578d58) {
        for (let _0x8e46f0 of _0x113a41.values || []) {
          const _0x4e0015 = _0x8e46f0.hyperlink;
          if (_0x4e0015 && _0x4e0015.includes("https://yeumoney.com/")) {
            return _0x4e0015;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x68ead8) {
      console.error("Lỗi:", _0x68ead8.message);
      return null;
    }
  }
  async function _0x417346() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0x5c3174(_0x2a3b87, _0x1a402c) {
      setTimeout(() => {
        if (!_0x2a3b87.classList.contains("checked")) {
          _0x2a3b87.click();
        }
      }, _0x1a402c);
    }
    function _0x297d11(_0x21e156, _0x1be699) {
      setTimeout(() => {
        if (!_0x21e156.classList.contains("checked")) {
          _0x21e156.click();
        }
      }, _0x1be699);
    }
    var _0x408eec = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x408eec.forEach((_0x5394ee, _0x458429) => _0x5c3174(_0x5394ee, _0x458429 * 0x12c));
    var _0x4b70d4 = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x4b70d4.forEach(_0x37e334 => {
      var _0x263f3f = _0x37e334.querySelectorAll("div[role=\"radio\"]");
      _0x263f3f.forEach((_0x17d7c3, _0x1e31b9) => _0x297d11(_0x17d7c3, _0x1e31b9 * 0x12c));
    });
    setTimeout(() => {
      var _0x4d2690 = document.querySelector("form");
      if (_0x4d2690) {
        _0x4d2690.submit();
      }
    }, (_0x408eec.length + _0x4b70d4.length) * 0x12c + 0xc8);
  }
  function _0x4161eb(_0xcaa287) {
    const _0x4e46ab = document.createElement("div");
    _0x4e46ab.id = "bypass-panel";
    _0x4e46ab.style.position = "fixed";
    _0x4e46ab.style.top = "20px";
    _0x4e46ab.style.right = "20px";
    _0x4e46ab.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
    _0x4e46ab.style.backdropFilter = "blur(15px)";
    _0x4e46ab.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    _0x4e46ab.style.borderRadius = "20px";
    _0x4e46ab.style.padding = '0';
    _0x4e46ab.style.zIndex = "9999";
    _0x4e46ab.style.width = "360px";
    _0x4e46ab.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
    _0x4e46ab.style.color = "#ffffff";
    _0x4e46ab.style.fontFamily = "'Roboto', sans-serif";
    _0x4e46ab.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    _0x4e46ab.style.overflow = "hidden";
    let _0x494fbf = false;
    let _0x4cc24c;
    let _0xd3fd02;
    _0x4e46ab.style.cursor = "move";
    _0x4e46ab.onmousedown = _0x6e84c1 => {
      if (_0x6e84c1.target.className.includes("btn") || _0x6e84c1.target.tagName === "INPUT") {
        return;
      }
      _0x494fbf = true;
      _0x4cc24c = _0x6e84c1.clientX - parseInt(_0x4e46ab.style.left || '0');
      _0xd3fd02 = _0x6e84c1.clientY - parseInt(_0x4e46ab.style.top || '20');
      _0x4e46ab.style.right = "auto";
    };
    document.onmousemove = _0x18e325 => {
      if (!_0x494fbf) {
        return;
      }
      _0x4e46ab.style.left = _0x18e325.clientX - _0x4cc24c + 'px';
      _0x4e46ab.style.top = _0x18e325.clientY - _0xd3fd02 + 'px';
      _0x4e46ab.style.left = Math.max(0x0, Math.min(window.innerWidth - _0x4e46ab.offsetWidth, parseInt(_0x4e46ab.style.left))) + 'px';
      _0x4e46ab.style.top = Math.max(0x0, Math.min(window.innerHeight - _0x4e46ab.offsetHeight, parseInt(_0x4e46ab.style.top))) + 'px';
    };
    document.onmouseup = () => {
      _0x494fbf = false;
    };
    const _0x5825ef = document.createElement("link");
    _0x5825ef.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
    _0x5825ef.rel = "stylesheet";
    document.head.appendChild(_0x5825ef);
    const _0x82e547 = document.createElement("style");
    _0x82e547.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-radius: 20px 20px 0 0;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .toggle-btn {\n            width: 24px;\n            height: 24px;\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border: none;\n            border-radius: 50%;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .toggle-btn:hover {\n            transform: scale(1.1);\n            box-shadow: 0 4px 10px rgba(0, 204, 255, 0.5);\n        }\n        .toggle-btn.minimized {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n        }\n        .toggle-btn::before {\n            content: '−';\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n        }\n        .toggle-btn.minimized::before {\n            content: '+';\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease, max-height 0.5s ease;\n            max-height: 500px;\n        }\n        #bypass-panel.minimized .bypass-content {\n            max-height: 0;\n            padding: 0 18px;\n            opacity: 0;\n            overflow: hidden;\n        }\n        #bypass-panel.minimized {\n            width: 200px;\n            border-radius: 20px;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .slider-container {\n            margin: 16px 0;\n        }\n        .slider-label {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #e0e0e0;\n            margin-bottom: 8px;\n        }\n        .delay-slider {\n            width: 100%;\n            -webkit-appearance: none;\n            height: 8px;\n            background: linear-gradient(90deg, #00ccff, #ff00ff);\n            border-radius: 10px;\n            outline: none;\n            transition: opacity 0.3s ease;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);\n        }\n        .delay-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n            transition: transform 0.3s ease;\n        }\n        .delay-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n        }\n        .delay-slider::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            margin-top: 20px;\n        }\n        .extra-buttons {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 10px;\n            margin-top: 10px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .btn-fakeip {\n            background: linear-gradient(45deg, #33cc33, #66ff66);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakeip.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakeip.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-fakebrowser {\n            background: linear-gradient(45deg, #9933ff, #cc66ff);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakebrowser.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakebrowser.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n    ";
    document.head.appendChild(_0x82e547);
    const _0x348e2d = document.createElement("div");
    _0x348e2d.className = "bypass-header";
    const _0x5d3b73 = document.createElement('h3');
    _0x5d3b73.className = "bypass-title";
    _0x5d3b73.textContent = "Bypasser Yeumoney Tool V10";
    _0x348e2d.appendChild(_0x5d3b73);
    const _0x24cd4b = document.createElement("button");
    _0x24cd4b.className = "toggle-btn";
    _0x24cd4b.onclick = () => {
      _0x4e46ab.classList.toggle("minimized");
      _0x24cd4b.classList.toggle("minimized");
    };
    _0x348e2d.appendChild(_0x24cd4b);
    _0x4e46ab.appendChild(_0x348e2d);
    const _0xca8580 = document.createElement("div");
    _0xca8580.className = "bypass-content";
    const _0x174189 = document.createElement("input");
    _0x174189.type = "text";
    _0x174189.placeholder = "Enter URL (Nếu Không Thể Nhân Diện!)";
    _0xca8580.appendChild(_0x174189);
    const _0x11d5d3 = document.createElement("div");
    _0x11d5d3.className = "url-info";
    _0x11d5d3.textContent = "OCR URL: " + _0xcaa287;
    _0xca8580.appendChild(_0x11d5d3);
    const _0x4d22ec = document.createElement("div");
    _0x4d22ec.className = "checkbox-group";
    const _0x462a9b = document.createElement("input");
    _0x462a9b.type = "checkbox";
    _0x462a9b.id = 'fetchCode';
    _0x462a9b.checked = GM_getValue("fetchCode", false);
    const _0x40c935 = document.createElement("label");
    _0x40c935.className = "checkbox-label";
    _0x40c935.htmlFor = "fetchCode";
    _0x40c935.textContent = "Auto Chuyển Trang";
    _0x4d22ec.appendChild(_0x462a9b);
    _0x4d22ec.appendChild(_0x40c935);
    const _0xf29da8 = document.createElement("input");
    _0xf29da8.type = "checkbox";
    _0xf29da8.id = "autoStart";
    _0xf29da8.checked = GM_getValue("autoStart", false);
    const _0x47a2d4 = document.createElement("label");
    _0x47a2d4.className = "checkbox-label";
    _0x47a2d4.htmlFor = "autoStart";
    _0x47a2d4.textContent = "Auto Bypass";
    _0x4d22ec.appendChild(_0xf29da8);
    _0x4d22ec.appendChild(_0x47a2d4);
    _0xca8580.appendChild(_0x4d22ec);
    const _0x2591ae = document.createElement("div");
    _0x2591ae.className = "slider-container";
    const _0x1407cc = document.createElement("label");
    _0x1407cc.className = "slider-label";
    _0x1407cc.textContent = "Thời Gian Bypass: ";
    const _0x474da2 = document.createElement("span");
    _0x474da2.id = "delay-value";
    _0x474da2.textContent = '2s';
    _0x1407cc.appendChild(_0x474da2);
    const _0xe545b2 = document.createElement("input");
    _0xe545b2.type = "range";
    _0xe545b2.min = '2';
    _0xe545b2.max = "125";
    _0xe545b2.value = '2';
    _0xe545b2.className = "delay-slider";
    _0xe545b2.oninput = function () {
      _0x474da2.textContent = this.value + 's';
    };
    _0x2591ae.appendChild(_0x1407cc);
    _0x2591ae.appendChild(_0xe545b2);
    _0xca8580.appendChild(_0x2591ae);
    const _0x4ddd38 = document.createElement("div");
    _0x4ddd38.className = "button-group";
    const _0x57610d = document.createElement("button");
    _0x57610d.textContent = "Bypass Now";
    _0x57610d.className = "btn-bypass";
    _0x57610d.onclick = async function _0x289eb2() {
      try {
        _0x174189.readOnly = true;
        const _0x39b747 = _0x174189.value || _0xcaa287;
        _0x174189.value = "Chờ Xíu Nhe Ní...";
        if (_0x1f8f06 && _0x3976a5) {
          _0x174189.value = "Đang Bypass với IP: " + _0x3976a5.ip + ':' + _0x3976a5.port;
        }
        if (_0x5021b2) {
          _0x174189.value += " | Browser: " + _0x6dbe9.substring(0x0, 0x14) + "...";
        }
        const _0x4615a6 = await _0x2fccce(_0x39b747);
        if (_0x4615a6) {
          let _0x2af0fc = parseInt(_0xe545b2.value);
          const _0x4463cb = setInterval(() => {
            _0x174189.value = "Chờ Đợi Là Hạnh Phúc Sau: " + _0x2af0fc + "s Thôi!";
            _0x2af0fc--;
            if (_0x2af0fc < 0x0) {
              clearInterval(_0x4463cb);
              if (_0x462a9b.checked) {
                _0x174189.value = "Code: " + _0x4615a6 + " - Đang Chuyển Trang...";
                _0x1a47c6(_0x4615a6);
              } else {
                _0x174189.value = "Code: " + _0x4615a6;
              }
              _0x57610d.disabled = false;
              _0x174189.readOnly = false;
            }
          }, 0x3e8);
        } else {
          _0x174189.readOnly = false;
          _0x174189.value = "Error! Xem Lại URL Or Đổi Nhiệm Vụ";
          setTimeout(() => {
            _0x174189.value = "Đang tự động đổi nhiệm vụ...";
            const _0x2f26cc = _0x13205e();
            if (_0x2f26cc) {
              setTimeout(() => {
                _0x33aed1().then(_0x1b78a7 => {
                  _0xcaa287 = _0x1b78a7;
                  _0x11d5d3.textContent = "OCR URL: " + _0x1b78a7;
                  _0x174189.value = "Đã đổi nhiệm vụ, thử lại...";
                  setTimeout(() => _0x289eb2(), 0x3e8);
                })["catch"](() => {
                  _0x174189.value = "Lỗi nhận diện URL mới!";
                });
              }, 0x7d0);
            } else {
              _0x174189.value = "Không thể đổi nhiệm vụ!";
            }
          }, 0x3e8);
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x5792a5) {
        console.error("Bypass Lỗi:", _0x5792a5);
        _0x174189.value = "Lỗi không xác định!";
        _0x174189.readOnly = false;
      }
    };
    _0x4ddd38.appendChild(_0x57610d);
    const _0x1913ac = document.createElement("button");
    _0x1913ac.textContent = "Đổi Nhiệm Vụ";
    _0x1913ac.className = "btn-change";
    _0x1913ac.onclick = async () => {
      _0x174189.readOnly = true;
      _0x174189.value = "Đang Đổi Nhiệm Vụ...";
      const _0x203eb5 = _0x13205e();
      if (_0x203eb5) {
        setTimeout(() => {
          _0x33aed1().then(_0x41cc0c => {
            _0xcaa287 = _0x41cc0c;
            _0x11d5d3.textContent = "OCR URL: " + _0x41cc0c;
            _0x174189.value = "Đã đổi nhiệm vụ thành công!";
            _0x174189.readOnly = false;
          })["catch"](() => {
            _0x174189.value = "Lỗi nhận diện URL mới!";
            _0x174189.readOnly = false;
          });
        }, 0x7d0);
      } else {
        _0x174189.value = "Không thể đổi nhiệm vụ!";
        _0x174189.readOnly = false;
      }
    };
    _0x4ddd38.appendChild(_0x1913ac);
    _0xca8580.appendChild(_0x4ddd38);
    const _0x398c6f = document.createElement("div");
    _0x398c6f.className = "extra-buttons";
    const _0x12363f = document.createElement("button");
    _0x12363f.textContent = "Fake IP";
    _0x12363f.className = "btn-fakeip";
    if (_0x1f8f06) {
      _0x12363f.classList.add("active");
    }
    _0x12363f.onclick = async () => {
      if (!_0x1f8f06) {
        _0x174189.value = "Đang tìm proxy sống...";
        const _0x51d7c0 = await _0x32dabd('US');
        if (_0x51d7c0) {
          await _0x22c4df(_0x51d7c0);
          _0x1f8f06 = true;
          _0x12363f.classList.add("active");
          _0x174189.value = "Fake IP ON: " + _0x51d7c0.ip + ':' + _0x51d7c0.port;
        } else {
          _0x174189.value = "Không tìm được proxy sống!";
        }
      } else {
        _0x48778c();
        _0x1f8f06 = false;
        _0x12363f.classList.remove("active");
        _0x174189.value = "Fake IP OFF";
      }
    };
    _0x398c6f.appendChild(_0x12363f);
    const _0x18de4d = document.createElement("button");
    _0x18de4d.textContent = "Fake Browser";
    _0x18de4d.className = "btn-fakebrowser";
    if (_0x5021b2) {
      _0x18de4d.classList.add("active");
    }
    _0x18de4d.onclick = () => {
      if (!_0x5021b2) {
        const _0x275373 = _0x1c6672();
        _0x5cc27b(_0x275373);
        _0x5021b2 = true;
        _0x18de4d.classList.add("active");
        _0x174189.value = "Fake Browser ON: " + _0x275373.userAgent.substring(0x0, 0x14) + "...";
      } else {
        _0x518a4c();
        _0x5021b2 = false;
        _0x18de4d.classList.remove("active");
        _0x174189.value = "Fake Browser OFF";
      }
    };
    _0x398c6f.appendChild(_0x18de4d);
    _0xca8580.appendChild(_0x398c6f);


    const buttonRow2 = document.createElement("div");
    buttonRow2.className = "button-row";
    buttonRow2.style.marginTop = "10px";
    
    const _0x182216 = document.createElement("div");
        _0x182216.className = "telegram-button-container";
        const _0x1b6ced = document.createElement("button");
        _0x1b6ced.textContent = "Liên hệ Telegram";
        _0x1b6ced.className = "btn-telegram";
        _0x1b6ced.onclick = () => window.open('https://t.me/sakunocheat', '_blank');
        _0x182216.appendChild(_0x1b6ced);
        _0xca8580.appendChild(_0x182216);


    const _0x1b5b4d = document.createElement("div");
    _0x1b5b4d.className = "author-text";
    _0x1b5b4d.textContent = "Code By Nopermc";
    _0x4e46ab.appendChild(_0xca8580);
    _0x4e46ab.appendChild(_0x1b5b4d);
    document.body.appendChild(_0x4e46ab);
    if (_0xf29da8.checked) {
      _0x57610d.click();
    }
    _0x462a9b.addEventListener("change", () => GM_setValue("fetchCode", _0x462a9b.checked));
    _0xf29da8.addEventListener("change", () => GM_setValue("autoStart", _0xf29da8.checked));
  }
  const _0x218c62 = window.location.href;
  window.onload = () => {
    if (_0x218c62.includes("https://yeumoney.com/")) {
      _0x33aed1().then(_0x33a62c => {
        _0x4161eb(_0x33a62c);
      })["catch"](_0x5f2f7f => {
        console.error("Lỗi khi nhận diện URL:", _0x5f2f7f);
        _0x4161eb("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x218c62.includes("https://docs.google.com/spreadsheets/")) {
        _0x329642().then(_0x3cd9c3 => {
          if (_0x3cd9c3) {
            window.location.href = _0x3cd9c3;
          }
        })["catch"](_0x4688af => console.error("Lỗi khi gọi hàm:", _0x4688af));
      } else if (_0x218c62.includes("https://docs.google.com/forms/")) {
        _0x417346();
      }
    }
  };
})();
