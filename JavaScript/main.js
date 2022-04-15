var CurInput = document.querySelector(".cInput");
var CurSelect = document.querySelector(".rates");
var CurButton = document.querySelector(".cvBtn");

var Amounts = document.querySelector(".amounts");

var UZS = document.querySelector(".uzs");
var USD = document.querySelector(".usd");
var EUR = document.querySelector(".eur");
var RUB = document.querySelector(".rub");
var GBP = document.querySelector(".gbp");
var CHF = document.querySelector(".chf");
var JPY = document.querySelector(".jpy");

var c1 = document.querySelector(".currency1");
var c2 = document.querySelector(".currency2");
var c3 = document.querySelector(".currency3");
var c4 = document.querySelector(".currency4");
var c5 = document.querySelector(".currency5");
var c6 = document.querySelector(".currency6");
var c7 = document.querySelector(".currency7");

var KursUSD = 11400;
var KursEUR = 12300;
var KursRUB = 137.27;
var KursGBP = 14868.82;
var KursCHF = 12113.43;
var KursJPY = 90.29;

Amounts.style.display = "none";

c1.style.display = "none";
c2.style.display = "none";
c3.style.display = "none";
c4.style.display = "none";
c5.style.display = "none";
c6.style.display = "none";
c7.style.display = "none";

CurButton.addEventListener("click", function (e) {
  e.preventDefault();
  var input = CurInput.value.trim();
  var select = CurSelect.value;

  if (input == "") {
      return
  }

  input = Number(input);

  if (isNaN(input)) {
    return
  }

  switch(select) {
    case "uzs":
      // var vuzs = (input / KursUSD).toFixed(2);
      var vusd = (input / KursUSD).toFixed(2);
      var veur = (input / KursEUR).toFixed(2);
      var vrub = (input / KursRUB).toFixed(2);
      var vgbp = (input / KursGBP).toFixed(2);
      var vchf = (input / KursCHF).toFixed(2);
      var vjpy = (input / KursJPY).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "none";
      c2.style.display = "block";
      c3.style.display = "block";
      c4.style.display = "block";
      c5.style.display = "block";
      c6.style.display = "block";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "usd":
      var vuzs = (input * 11330).toFixed(2);
      // var vusd = (input / KursUSD).toFixed(2);
      var veur = (input * 0.93).toFixed(2);
      var vrub = (input * 83.25).toFixed(2);
      var vgbp = (input * 0.77).toFixed(2);
      var vchf = (input * 0.94).toFixed(2);
      var vjpy = (input * 126.38).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "none";
      c3.style.display = "block";
      c4.style.display = "block";
      c5.style.display = "block";
      c6.style.display = "block";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "eur":
      var vuzs = (input * 12246).toFixed(2);
      var vusd = (input * 1.08);
      // var veur = (input / KursEUR).toFixed(2);
      var vrub = (input * 89.98).toFixed(2);
      var vgbp = (input * 0.83).toFixed(2);
      var vchf = (input * 1.02).toFixed(2);
      var vjpy = (input * 136.52).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "block";
      c3.style.display = "none";
      c4.style.display = "block";
      c5.style.display = "block";
      c6.style.display = "block";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "rub":
      var vuzs = (input * 136.10).toFixed(2);
      var vusd = (input * 0.012).toFixed(2);
      var veur = (input * 0.011).toFixed(2);
      // var vrub = (input * KursRUB).toFixed(2);
      var vgbp = (input * 0.0092).toFixed(2);
      var vchf = (input * 0.011).toFixed(2);
      var vjpy = (input * 1.52).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "block";
      c3.style.display = "block";
      c4.style.display = "none";
      c5.style.display = "block";
      c6.style.display = "block";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "gbp":
      var vuzs = (input * 14799.25).toFixed(2);
      var vusd = (input * 1.31).toFixed(2);
      var veur = (input * 1.21).toFixed(2);
      var vrub = (input * 108.73).toFixed(2);
      // var vgbp = (input * 1.23).toFixed(2);
      var vchf = (input * 1.23).toFixed(2);
      var vjpy = (input * 165.04).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "block";
      c3.style.display = "block";
      c4.style.display = "block";
      c5.style.display = "none";
      c6.style.display = "block";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "chf":
      var vuzs = (input * 12013.83).toFixed(2);
      var vusd = (input * 1.06).toFixed(2);
      var veur = (input * 0.98).toFixed(2);
      var vrub = (input * 88.29).toFixed(2);
      var vgbp = (input * 0.81).toFixed(2);
      // var vchf = (input / KursCHF).toFixed(2);
      var vjpy = (input / 134.01).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "block";
      c3.style.display = "block";
      c4.style.display = "block";
      c5.style.display = "block";
      c6.style.display = "none";
      c7.style.display = "block";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    case "jpy":
      var vuzs = (input * 89.66).toFixed(2);
      var vusd = (input * 0.0079).toFixed(2);
      var veur = (input * 0.0073).toFixed(2);
      var vrub = (input * 0.66).toFixed(2);
      var vgbp = (input * 0.0061).toFixed(2);
      var vchf = (input * 0.0075).toFixed(2);
      // var vjpy = (input / KursJPY).toFixed(2);
      Amounts.style.display = "block";
      c1.style.display = "block";
      c2.style.display = "block";
      c3.style.display = "block";
      c4.style.display = "block";
      c5.style.display = "block";
      c6.style.display = "block";
      c7.style.display = "none";
      UZS.textContent = Math.abs(vuzs);
      USD.textContent = Math.abs(vusd);
      EUR.textContent = Math.abs(veur);
      RUB.textContent = Math.abs(vrub);
      GBP.textContent = Math.abs(vgbp);
      CHF.textContent = Math.abs(vchf);
      JPY.textContent = Math.abs(vjpy);
      break;
    default:
      return
  }
})

//------------------------------------------------------------------------------------------------------------------//

var eldeg = document.querySelector("#Degree");
var ellsat = document.querySelector("#LSAT");
var elSchol = document.querySelector("#School");
var elVol = document.querySelector("#Volunter");
var elPLan = document.querySelector("#ProgrammingLanguage");
var elCompAr = document.querySelector("#CompArch");
var btn = document.querySelector("#SubBtn");
var output = document.querySelector(".output");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var deg = eldeg.checked;
  var lsat = ellsat.checked;
  var Schol = elSchol.checked;
  var Vol = elVol.checked;
  var PLan = elPLan.checked;
  var CompAr = elCompAr.checked;
  var message = "";

  if ((deg && lsat) ||(deg && lsat && CompAr) || (deg && CompAr) || (CompAr && !Vol && !PLan && !Schol) || (CompAr && !Schol)) {
    message = "Yes, you can :)"
  } else {
    message = "No, you can't :("
  }

  output.textContent = message;
})