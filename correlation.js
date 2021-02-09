function populateFields() {
  //===================================
  //     Saving CSV fields to vars
  //===================================

  // Total Amount Spent
  amountSpent = 0;
  let amountSpentArr = [];
  $(".cell-1").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      amountSpentArr.push(value);
      amountSpent += parseFloat(value, 10);
    }
  });

  // Total Purchases Conversion Value
  let purchasesConversionValue = 0;
  let purchasesConversionValueArr = [];
  $(".cell-2").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesConversionValueArr.push(Math.round(value));
      purchasesConversionValue += parseFloat(value, 10);
    }
  });

  // Total Purchases
  let purchases = 0;
  let purchasesArr = [];
  let costPerPurchaseArr = [];
  $(".cell-3").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchasesArr.push(value);
      purchases += parseFloat(value);
    }
  });

  // Total Purchase ROAS (return on ad spend)
  let purchaseROAS = 0;
  let purchaseROASArr = [];
  $(".cell-4").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchaseROASArr.push(String(Math.round(value)));
      purchaseROAS += parseFloat(value, 10);
    }
  });

  // Total checkouts initiated
  checkoutsInitiated = 0;
  let checkoutsInitiatedArr = [];
  $(".cell-5").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      checkoutsInitiatedArr.push(value);
      checkoutsInitiated += parseFloat(value);
    }
  });

  // Total Adds to cart
  addsToCart = 0;
  let addsToCartArr = [];
  $(".cell-6").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      addsToCartArr.push(value);
      addsToCart += parseFloat(value);
    }
  });

  // Total Link clicks
  let linkClicks = 0;
  let linkClicksArr = [];
  $(".cell-7").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      linkClicksArr.push(value);
      linkClicks += parseInt(value, 10);
    }
  });

  // Total CTR (link click-through rate)

  let ctr = 0;
  let ctrArr = [];
  $(".cell-8").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      ctrArr.push(String(Math.round(value)));
      ctr += parseFloat(value, 10);
    }
  });

  // Updates Conversion rate
  conversionTable = document.getElementById("conversion_rate_overview");

  clicksToCart = (addsToCart / linkClicks) * 100;
  conversionTable.rows[1].cells[1].innerHTML = clicksToCart.toFixed(2) + "%";

  clicksToCheckout = (checkoutsInitiated / linkClicks) * 100;
  conversionTable.rows[2].cells[1].innerHTML =
    clicksToCheckout.toFixed(2) + "%";

  clicksToPurchase = (purchases / linkClicks) * 100;
  conversionTable.rows[3].cells[1].innerHTML =
    clicksToPurchase.toFixed(2) + "%";

  cartToCheckout = (checkoutsInitiated / addsToCart) * 100;
  conversionTable.rows[4].cells[1].innerHTML = cartToCheckout.toFixed(2) + "%";

  cartToPurchase = (purchases / addsToCart) * 100;
  conversionTable.rows[5].cells[1].innerHTML = cartToPurchase.toFixed(2) + "%";

  checkoutToPurchase = (purchases / checkoutsInitiated) * 100;
  conversionTable.rows[6].cells[1].innerHTML =
    checkoutToPurchase.toFixed(2) + "%";

  cpa = amountSpent / purchases;

  x = purchaseROASArr;
  y = ctrArr;

  var shortestArrayLength = 0;

  if (x.length == y.length) {
    shortestArrayLength = x.length;
  } else if (x.length > y.length) {
    shortestArrayLength = y.length;
    console.error(
      "x has more items in it, the last " +
        (x.length - shortestArrayLength) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength = x.length;
    console.error(
      "y has more items in it, the last " +
        (y.length - shortestArrayLength) +
        " item(s) will be ignored"
    );
  }

  var xy = [];
  var x2 = [];
  var y2 = [];

  for (var i = 0; i < shortestArrayLength; i++) {
    xy.push(x[i] * y[i]);
    x2.push(x[i] * x[i]);
    y2.push(y[i] * y[i]);
  }

  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_x2 = 0;
  var sum_y2 = 0;

  for (var i = 0; i < shortestArrayLength; i++) {
    sum_x += x[i];
    sum_y += y[i];
    sum_xy += xy[i];
    sum_x2 += x2[i];
    sum_y2 += y2[i];
  }

  var step1 = shortestArrayLength * sum_xy - sum_x * sum_y;
  var step2 = shortestArrayLength * sum_x2 - sum_x * sum_x;
  var step3 = shortestArrayLength * sum_y2 - sum_y * sum_y;
  var step4 = Math.sqrt(step2 * step3);
  var answer = step1 / step4;

  Aov = purchasesConversionValue / purchases;
  table1 = document.getElementById("table1");
  document.getElementById("average-order-value").innerHTML = Aov.toFixed(2);
  table1.rows[1].cells[2].innerHTML = answer.toFixed(2);
}

function targetCalculator() {
  input = document.getElementById("Roas_target_input").value;
  table = document.getElementById("target_calculator");

  addsToCartTar = addsToCart / input;

  checkoutsInitiatedTar = checkoutsInitiated / input;

  cpaTar = cpa / input;

  table.rows[2].cells[1].innerHTML = "£" + addsToCartTar.toFixed(2);
  table.rows[3].cells[1].innerHTML = "£" + checkoutsInitiatedTar.toFixed(2);
  table.rows[4].cells[1].innerHTML = "£" + cpaTar.toFixed(2);
}
