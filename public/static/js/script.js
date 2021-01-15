/* eslint-disable no-unused-expressions */
var type = function (e, t) {
    var o = 0;
    function n() {
      o < t.length &&
        ((e.innerHTML += t.charAt(o)), (o += 1), setTimeout(n, 40 + o));
    }
    (e.innerHTML = "")
      setTimeout(function () {
        n();
      }, 800);
  },
  text = document.querySelector(".efeito, .efeito2");
if (text) {
  var finalText = text.innerHTML;
  type(text, finalText);
}
