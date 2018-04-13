// function modJsCallback (Mod) {
//   console.info("调用modJsCallback");
//   var ModObject = new Mod.default($(item.modId));
// };

var modList = window.$mb.modList || [];
modList.forEach(function(item) {
  $.ajax({
    url: item.modJsUrl,
    type: "GET",
    dataType: "jsonp",
    jsonpCallback: "modJsCallback",
    success: function (Mod) {
      console.info("调用modJsCallback");
      var ModObject = new Mod.default($(item.modId));
      ModObject.componentDid()
    }
  });
})