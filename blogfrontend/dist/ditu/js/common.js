//公共js
//判断控制台是否打开
(function() {
  'use strict';
  var devtools = {
    open: false,
    orientation: null
  };
  var threshold = 160;
  var emitEvent = function(state, orientation) {
    window.dispatchEvent(new CustomEvent('devtoolschange', {
      detail: {
        open: state,
        orientation: orientation
      }
    }));
  };
  setInterval(function() {
      var widthThreshold = window.outerWidth - window.innerWidth > threshold;
      var heightThreshold = window.outerHeight - window.innerHeight > threshold;
      var orientation = widthThreshold ? 'vertical': 'horizontal';
      if (! (heightThreshold && widthThreshold) && ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)) {
        if (!devtools.open || devtools.orientation !== orientation) {
          emitEvent(true, orientation);
        }
        devtools.open = true;
        devtools.orientation = orientation;
      } else {
        if (devtools.open) {
          emitEvent(false, null);
        }
        devtools.open = false;
        devtools.orientation = null;
      }
    },
    500);
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = devtools;
  } else {
    window.devtools = devtools;
  }
})();
//判断session中是否存有服务器发来的token 没有就跳转到登陆界面
var client = function(){
  //渲染引擎
  var engine = {
    ie: 0,
    gecko: 0,
    webkit: 0,
    khtml: 0,

    //complete version
    ver: null
  };
  //浏览器
  var browser = {
    //browsers
    ie: 0,
    firefox: 0,
    safari: 0,
    konq: 0,
    opera: 0,
    chrome: 0,
    edge: 0,
    //specific version
    ver: null
  };

  //系统
  var system = {
    win: false,
    mac: false,
    x11: false,

    //mobile devices
    iphone: false,
    ipod: false,
    ipad: false,
    ios: false,
    android: false,
    nokiaN: false,
    winMobile: false,

    //game systems
    wii: false,
    ps: false
  };

  //detect rendering engines/browsers
  var ua = navigator.userAgent;
  if (/AppleWebKit\/(\S+)/.test(ua)){
    engine.ver = RegExp["$1"];
    engine.webkit = parseFloat(engine.ver);

    //figure out if it's Chrome or Safari or opera or edge
    if(/OPR\/(\S+)/.test(ua)){
      browser.ver = RegExp["$1"];
      browser.opera = parseFloat(browser.ver);
    }else if(/Edge\/(\S+)/.test(ua)){
      browser.ver = RegExp["$1"];
      browser.edge = parseFloat(browser.ver);
    } else if (/Chrome\/(\S+)/.test(ua)){
      browser.ver = RegExp["$1"];
      browser.chrome = parseFloat(browser.ver);
    } else if (/Version\/(\S+)/.test(ua)){
      browser.ver = RegExp["$1"];
      browser.safari = parseFloat(browser.ver);
    } else {
      //approximate version
      var safariVersion = 1;
      if (engine.webkit < 100){
        safariVersion = 1;
      } else if (engine.webkit < 312){
        safariVersion = 1.2;
      } else if (engine.webkit < 412){
        safariVersion = 1.3;
      } else {
        safariVersion = 2;
      }
      browser.safari = browser.ver = safariVersion;
    }
  } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
    engine.ver = browser.ver = RegExp["$1"];
    engine.khtml = browser.konq = parseFloat(engine.ver);
  } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
    engine.ver = RegExp["$1"];
    engine.gecko = parseFloat(engine.ver);

    //determine if it's Firefox
    if (/Firefox\/(\S+)/.test(ua)){
      browser.ver = RegExp["$1"];
      browser.firefox = parseFloat(browser.ver);
    }
  } else if (/MSIE ([^;]+)/.test(ua)){
    engine.ver = browser.ver = RegExp["$1"];
    engine.ie = browser.ie = parseFloat(engine.ver);
  }

  //detect browsers
  browser.ie = engine.ie;
//        browser.opera = engine.opera;

  //detect platform
  var p = navigator.platform;
  system.win = p.indexOf("Win") == 0;
  system.mac = p.indexOf("Mac") == 0;
  system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);

  //detect windows operating systems
  if (system.win){
    if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
      if (RegExp["$1"] == "NT"){
        switch(RegExp["$2"]){
          case "5.0":
            system.win = "2000";
            break;
          case "5.1":
            system.win = "XP";
            break;
          case "6.0":
            system.win = "Vista";
            break;
          case "6.1":
            system.win = "7";
            break;
          default:
            system.win = "NT";
            break;
        }
      } else if (RegExp["$1"] == "9x"){
        system.win = "ME";
      } else {
        system.win = RegExp["$1"];
      }
    }
  }

  //mobile devices
  system.iphone = ua.indexOf("iPhone") > -1;
  system.ipod = ua.indexOf("iPod") > -1;
  system.ipad = ua.indexOf("iPad") > -1;
  system.nokiaN = ua.indexOf("NokiaN") > -1;

  //windows mobile
  if (system.win == "CE"){
    system.winMobile = system.win;
  } else if (system.win == "Ph"){
    if(/Windows Phone OS (\d+.\d+)/.test(ua)){;
      system.win = "Phone";
      system.winMobile = parseFloat(RegExp["$1"]);
    }
  }

  //determine iOS version
  if (system.mac && ua.indexOf("Mobile") > -1){
    if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
      system.ios = parseFloat(RegExp.$1.replace("_", "."));
    } else {
      system.ios = 2;  //can't really detect - so guess
    }
  }

  //determine Android version
  if (/Android (\d+\.\d+)/.test(ua)){
    system.android = parseFloat(RegExp.$1);
  }

  //gaming systems
  system.wii = ua.indexOf("Wii") > -1;
  system.ps = /playstation/i.test(ua);

  //return it
  return {
    engine:     engine,
    browser:    browser,
    system:     system
  };
}();
//浏览器探针获取浏览器的名称
function getBrowser(){
  var browser ;
  for(var key in client.browser){
    if(client.browser[key] != 0&&key != "ver"){
      browser = key;
    }
  }
  return browser
};
//根据浏览器设置token并返回
function getToken(){
  var token;
  if(getBrowser()=="ie"||getBrowser()=="edge"||getBrowser()==undefined||getBrowser()=='undefind'||getBrowser()==null){
    token =document.cookie.split(';',4)[0].split('=',2)[1]
  }else{
    token =sessionStorage.getItem('token');
  }
  return token
};
//检测浏览器中是否存有token 验证是否登录
(function (){
  if(getToken()==""||getToken()==null||getToken()==undefined){
    window.location.href = "../index.html"
  }
})();
//获取后台传来的菜单权限
var getPermission =  (function(){
  var permission;
  if(getBrowser()=="ie"||getBrowser()=="edge"||getBrowser()==undefined||getBrowser()=='undefind'||getBrowser()==null){
    permission =document.cookie.split(';',4)[1].split('=',2)[1]
  }else{
    permission =sessionStorage.getItem('Permission');
  }
  return JSON.parse(permission);
})();
//整理菜单
var getMenu = (function () {
  var menuArray = {};
  for (var i = 0; i < getPermission.length; i++) {
    if (getPermission[i].outerSys == '0' && getPermission[i].nlevel.length == 4) {
      menuArray[JSON.stringify(getPermission[i])] = [];
      for (var j = 0; j < getPermission.length; j++) {
        var nlevel = getPermission[j].nlevel;
        if (getPermission[j].outerSys == '0' && getPermission[j].nlevel.length == 6 && nlevel.substring(0, nlevel.length - 2) == getPermission[i].nlevel) {
          menuArray[JSON.stringify(getPermission[i])].push(getPermission[j]);
        }
      }
    }
  }
  return menuArray;
})();
//渲染菜单
(function(){
  var i;
  for(key in getMenu){
    var Menu = JSON.parse(key);
    if(Menu.name=='首页'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe68e;</i><span>'+Menu.name+'</span></a>').appendTo($('#home'));
    } else if(Menu.name=='产品管理'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe632;</i><span>'+Menu.name+'</span></a>').appendTo($('#productManage'));
      $('<dl class="layui-nav-child product"></dl>').appendTo($('#productManage'));
      for(i = 0; i <getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+getMenu[key][i].name+'</span></a></dd>').appendTo($('.product'))
      }
    }else if(Menu.name=='份额查询'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe62c;</i><span>'+Menu.name+'</span></a>').appendTo($('#queryCheck'));
    }else if(Menu.name=='系统管理'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#systemManage'));
      $('<dl class="layui-nav-child system"></dl>').appendTo($('#systemManage'));
      for(i = 0; i < getMenu[key].length; i++){
        console.info(getMenu[key][i].url);
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.system'))

      }
    }else if(Menu.name=='企业年金转移'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#pensionTransfer'));
      $('<dl class="layui-nav-child transfer"></dl>').appendTo($('#pensionTransfer'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.transfer'))
      }
    }  else if(Menu.name=='年金转移（托管）'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#custodianTransfer'));
      $('<dl class="layui-nav-child custodianClass"></dl>').appendTo($('#custodianTransfer'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.custodianClass'))
      }
    }else if(Menu.name=='托管转移划款信息'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#custodianTransferInfo'));
      $('<dl class="layui-nav-child custoDianInfo"></dl>').appendTo($('#custodianTransferInfo'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.custoDianInfo'))
      }
    }else if(Menu.name=='年金转移（账管）'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#pensionTransferZg'));
      $('<dl class="layui-nav-child transferzg"></dl>').appendTo($('#pensionTransferZg'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.transferzg'))
      }
    }else if(Menu.name=='职业年金转移'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#OccupationalTransfer'));
      $('<dl class="layui-nav-child occupational"></dl>').appendTo($('#OccupationalTransfer'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.occupational'))
      }
    }else if(Menu.name=='转入申请查询'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#transferinthird'));
      $('<dl class="layui-nav-child transferIn"></dl>').appendTo($('#transferinthird'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.transferIn'))
      }
    }else if(Menu.name=='综合查询'){
      $('<a url='+ Menu.url+ '><i class="layui-icon" style="font-size: 25px; color: #FFF;position: relative;top: 4px;margin-right: 10px;">&#xe614;</i><span>'+Menu.name+'</span></a>').appendTo($('#queryall'));
      $('<dl class="layui-nav-child query"></dl>').appendTo($('#queryall'));
      for(i = 0; i < getMenu[key].length; i++){
        $('<dd><a url='+getMenu[key][i].url+'><span>'+ getMenu[key][i].name+'</span></a></dd>').appendTo($('.query'))
      }
    }
  }
})();
//路由跳转
layui.use(['element','layer'],function(){
  var element = layui.element;
  var layer = layui.layer;
  $(".layui-nav-item a").click(function(){
    var title, href;
    var menuList = $(".layui-tab-title li .layui-tab-close").parent().text();
    title = $(this).find("span").text();
    href = $(this).attr('url');
    var lay_id = href, reg = new RegExp(title);
    if(href){
      if(menuList.match(reg) == title){
        element.tabDelete('tabDemo',lay_id);
        element.tabAdd('tabDemo', {title:title, content:'<iframe width="100%"   frameborder="0" src=\'../template/'+ href+'.html\'></iframe>', id: lay_id});
        element.tabChange('tabDemo', lay_id)
      }else{
        element.tabAdd('tabDemo', {title:title, content:'<iframe width="100%"   frameborder="0" src=\'../template/'+ href +'.html\'></iframe>', id: lay_id});
        element.tabChange('tabDemo', lay_id);
      }
    }
  });
});
//整理权限
var getRightList = (function () {
  var obj = {},i,right = [];
  for (i = 0; i < getPermission.length; i++) {
    if (getPermission[i].outerSys == '1') {
      var object = {};
      var nlevel = getPermission[i].nlevel;
      object.name = nlevel.substring(0, nlevel.length - 2);
      object.right = getPermission[i].name;
      right.push(object);
    }
  }
  for (i = 0; i < right.length; i++) {
    obj[right[i].name] = [];
  }
  for (i = 0; i < right.length; i++) {
    for (key in obj) {
      if (key === right[i].name) {
        obj[key].push(right[i].right)
      }
    }
  }
  for (key in obj) {
    for (i = 0; i < getPermission.length; i++) {
      if (key == getPermission[i].nlevel && getPermission[i].outerSys == '0') {
        obj[getPermission[i].name] = obj[key];
        delete obj[key];
      }
    }
  }
  return obj
})();
//验证权限
function verityRight(menu,right){
  var result = false;
  if(getRightList[menu]){
    for(var i = 0; i < getRightList[menu].length; i++){
      if(getRightList[menu][i]==right){
        result = true;
      }
    }
  }
  return result;
}
//封装hashMap函数
function HashMap(key,value){
  var key;
  var value;
  this.put = function(key,value){
    this.key = key;
    this.value = value;
  };
  this.getKey = function(){
    return key;
  };
  this.getValue = function(){
    return value;
  }
}
//构建简单对象
function Request(url){
  var parameters = null;
  this.init = function(){
    var location = url;
    var index = location.indexOf("?");
    var queryString = ((index>0)?location.substring(index+1):null);
    if(null!=queryString){
      parameters = new Array();
      var parameterArray = queryString.split("&");
      var length = parameterArray.length;
      for(var i=0;i<length;i++){
        var parameter = parameterArray[i];
        index =  parameter.indexOf("=");
        var key = parameter.substring(0,index);
        var value = parameter.substring(index+1);
        if(null!=key && key.length>0){
          parameters.push(new HashMap(key,value));
        }
      }
    }
  };
  this.getParameter = function(key){
    this.init();
    if(null==parameters)
      return "";
    var length = parameters.length;
    for(var i=0;i<length;i++){
      hashMap = parameters[i];
      if(hashMap.getKey() == key){
        return hashMap.getValue();
      }
    }
    return "";
  };

  this.getParameterValues = function(key){
    this.init();
    if(null==parameters)
      return null;
    var array = new Array();
    var length = parameters.length;
    for(var i=0;i<length;i++){
      hashMap = parameters[i];
      if(hashMap.getKey() == key){
        array.push(hashMap.getValue());
      }
    }
    return array;
  }
}
//url切割函数
function getValue(url,key){
  var value = new Request(url).getParameter(key);
  return value
}
//AJAX全局配置url
function getUrl(a){
  var href;
  if(a){
    href = 'beatuat.shie.com.cn/trustee-mp/'
  }else{
    href = 'http://beatuat.shie.com.cn/trustee-mp/'
  }
  return href;
}
//异常捕获 提示
function errorReact(data,fn){
  layui.use('layer',function(){
    var layer = layui.layer;
    if(data =='用户会话验证失败'){
      layer.msg(data,function(){
        window.location.href = '../index.html'
      });
    }else{
      layer.msg(data,fn);
    }
  });
}
//页面loading
function loading(a){
  layui.use('layer',function(){
    var layer = layui.layer;
    var index = layer.load(0,{shade:[0.3,'#808080']});
    if(a){
      layer.close(index);
    }
  })
}
//页面跳转函数封装
function locationTo(lay_id,title,href,delete_lay){
  var menuList = $(".layui-tab-title li .layui-tab-close").parent().text();
  var reg = new RegExp(title);
  layui.element.tabDelete('tabDemo',delete_lay);
  if(menuList.match(reg) ==title){
    layui.element.tabDelete('tabDemo',lay_id);
    layui.element.tabAdd('tabDemo', {title:title, content:'<iframe width="100%"   frameborder="0" src=\'../template/'+ href+'.html\'></iframe>', id: lay_id});
    layui.element.tabChange('tabDemo', lay_id)
  }else{
    layui.element.tabAdd('tabDemo', {title:title, content:'<iframe width="100%"   frameborder="0" src=\'../template/'+ href +'.html\'></iframe>', id: lay_id});
    layui.element.tabChange('tabDemo', lay_id);
  }
}
//设置cookie
function setCookie(name, value, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = name + "=" + value + "; " + expires;
}
//退出登录
$('#logOut').click(function(){
  $.ajax({
    type:'get',
    dataType:'json',
    url:getUrl()+ 'logout.do',
    beforeSend:function(xhr){
      xhr.setRequestHeader("token",getToken());
    },
    success:function(data){
      if(getBrowser()=="ie"||getBrowser()=="edge"||getBrowser()==undefined||getBrowser()=='undefind'||getBrowser()==null){
        var cookie = document.cookie;
        setCookie(cookie, "", -1);
      }else{
        sessionStorage.clear();
      }
      window.location.href = '../index.html'
    },error:function(data){
      if(getBrowser()=="ie"||getBrowser()=="edge"||getBrowser()==undefined||getBrowser()=='undefind'||getBrowser()==null){
        var cookie = document.cookie;
        setCookie(cookie, "", -1);
      }else{
        sessionStorage.clear();
      }
      window.location.href = '../index.html'
    }
  })
});
//渲染用户信息
(function(){
  var userName,userId;
  if(getBrowser()=="ie"||getBrowser()=="edge"||getBrowser()==undefined||getBrowser()=='undefind'||getBrowser()==null){
    userName = document.cookie.split(';',4)[2].split('=',2)[1];
    userId = document.cookie.split(';',4)[2].split('=',2)[1];
  }else{
    userName = sessionStorage.getItem('userName');
    userId = sessionStorage.getItem('userId');
  }
  $('#user').html(userName).attr('name',userId);
})();
//页面高度计算
(function(){
  var  cardTitleHeight = $(document).find(".layui-tab[lay-filter='tabDemo'] ul.layui-tab-title").height();
// 需要减去的高度
  height = $(window).height() - $('.layui-header').height() - cardTitleHeight - $('.layui-footer').height();
// 设置高度
  $(document).find(".layui-tab[lay-filter='tabDemo'] div.layui-tab-content").height(height - 10);
})();
//防止页面打印函数
Function.prototype.toString = function toString(){
  return "function " + (this.name || "anonymous") + "() { [native code] }";
};
//监听控制台打开跳转页面
// window.addEventListener('devtoolschange', function (e) {
//    if(e.detail.open){
//         window.location.href='../index.html';
//    }
// });
//产品详情函数封装
function showProduct(registerCode){
  if(registerCode){
    var menuList = $(".layui-tab-title li .layui-tab-close").parent().text();
    if(menuList.match(/产品详情/g)=='产品详情'){
      top.layui.element.tabDelete('tabDemo','TproductDetail');
      top.layui.element.tabAdd('tabDemo', {title:'产品详情', content:'<iframe width="100%"   frameborder="0" src="../template/TproductDetail.html?registerCode=' +registerCode+ '"></iframe>', id: "TproductDetail"});
      top.layui.element.tabChange('tabDemo','TproductDetail')
    }else{
      top.layui.element.tabAdd('tabDemo', {title:'产品详情', content:'<iframe width="100%"  frameborder="0" src="../template/TproductDetail.html?registerCode=' +registerCode+ '"></iframe>', id: "TproductDetail"});
      top.layui.element.tabChange('tabDemo','TproductDetail')
    }
  }
}
