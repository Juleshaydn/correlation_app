function targetCalculator() {
  input = document.getElementById("Roas_target_input").value;
  table = document.getElementById("target_calculator");

  //Calculates CPA
  average_order_value = document.getElementById("average-order-value")
    .innerHTML;
  cpa = parseInt(average_order_value, 10);
  cpainput = cpa / input;

  //Calculates Cost Per Initiate Checkout
  initiate_checkout_to_purchase_value = document.getElementById(
    "initiate-checkout-to-purchase-value"
  ).innerHTML;
  cost_per_initiate_checkout =
    parseFloat(initiate_checkout_to_purchase_value) / 100;
  Cicpic = (cpa / input) * cost_per_initiate_checkout;

  //Calculates Cost Per Add To Cart
  add_to_cart_to_purchase_value = document.getElementById(
    "add-to-cart-to-purchase-value"
  ).innerHTML;
  cost_per_add_to_cart = parseFloat(add_to_cart_to_purchase_value) / 100;
  Cicpatc = (cpa / input) * cost_per_add_to_cart;

  // Populates cells with new values
  table.rows[2].cells[1].innerHTML = "£" + Cicpatc.toFixed(2);
  table.rows[3].cells[1].innerHTML = "£" + Cicpic.toFixed(2);
  table.rows[4].cells[1].innerHTML = "£" + cpainput.toFixed(2);
}

// Populates Correlation and conversion rate overviews
function populateFields() {
  // Creates Link Click Variable
  Link_clicks_1 = document.getElementById("Link_clicks_1").value;
  click_value = parseInt(Link_clicks_1, 10);
  // Creates Purchases Variable
  Purchases_1 = document.getElementById("Purchases_1").value;
  Purchases_1_value = parseInt(Purchases_1, 10);
  Pval = (Purchases_1_value / Link_clicks_1) * 100;
  // Creates Add to cart Variable
  Adds_to_cart_1 = document.getElementById("Adds_to_cart_1").value;
  Adds_to_cart_1_value = parseInt(Adds_to_cart_1, 10);
  Atc1val = (Adds_to_cart_1_value / click_value) * 100;
  // Creates Unique checkouts initiated Variable
  Unique_checkouts_initiated_1 = document.getElementById(
    "Unique_checkouts_initiated_1"
  ).value;
  Unique_checkouts_initiated_1_value = parseInt(
    Unique_checkouts_initiated_1,
    10
  );
  Ucival = (Unique_checkouts_initiated_1_value / Link_clicks_1) * 100;
  Ucitatcval =
    (Unique_checkouts_initiated_1_value / Adds_to_cart_1_value) * 100;
  Ptatcval = (Purchases_1_value / Adds_to_cart_1_value) * 100;
  Ptucival = (Purchases_1_value / Unique_checkouts_initiated_1_value) * 100;
  // CORRELATION OVERVIEW
  // Creates ROAS Variable
  Purchase_ROAS_1 = document.getElementById("Purchase_ROAS_1").value;
  Purchase_ROAS_1_value = parseFloat(Purchase_ROAS_1, 10);
  // Creates CPA Variable
  Cost_per_Purchase_1 = document.getElementById("Cost_per_Purchase_1").value;
  Cost_per_Purchase_1_value = parseFloat(Cost_per_Purchase_1, 10);

  // Creates Add to cart Variable
  CTR_1 = document.getElementById("CTR_1").value;
  CTR_1_value = parseFloat(CTR_1, 10);

  table1 = document.getElementById("table1");
  table2 = document.getElementById("conversion_rate_overview");

  // Updates Conversion Rate Overview
  table2.rows[1].cells[1].innerHTML = Atc1val.toFixed(1) + "%";
  table2.rows[2].cells[1].innerHTML = Ucival.toFixed(1) + "%";
  table2.rows[3].cells[1].innerHTML = Pval.toFixed(1) + "%";
  table2.rows[4].cells[1].innerHTML = Ucitatcval.toFixed(1) + "%";
  table2.rows[5].cells[1].innerHTML = Ptatcval.toFixed(1) + "%";
  table2.rows[6].cells[1].innerHTML = Ptucival.toFixed(1) + "%";

  // Updates Correlations Overview

  // Testing correlation function
  x = [14, 12, 3];
  y = [14, 12, 3];

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

  table1.rows[1].cells[2].innerHTML = answer.toFixed(2);
}
