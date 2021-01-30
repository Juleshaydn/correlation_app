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
  click_value_1 = parseInt(Link_clicks_1, 10);

  Link_clicks_2 = document.getElementById("Link_clicks_2").value;
  click_value_2 = parseInt(Link_clicks_2, 10);

  Link_clicks_3 = document.getElementById("Link_clicks_3").value;
  click_value_3 = parseInt(Link_clicks_3, 10);

  click_value = click_value_1 + click_value_2 + click_value_3;

  // Creates Purchases Variable
  Purchases_1 = document.getElementById("Purchases_1").value;
  Purchases_1_value = parseInt(Purchases_1, 10);

  Purchases_2 = document.getElementById("Purchases_2").value;
  Purchases_2_value = parseInt(Purchases_2, 10);

  Purchases_3 = document.getElementById("Purchases_3").value;
  Purchases_3_value = parseInt(Purchases_3, 10);

  Purchases_all_values =
    Purchases_1_value + Purchases_2_value + Purchases_3_value;

  Pval = (Purchases_all_values / click_value) * 100;

  // Creates Add to cart Variable
  Adds_to_cart_1 = document.getElementById("Adds_to_cart_1").value;
  Adds_to_cart_1_value = parseInt(Adds_to_cart_1, 10);

  Adds_to_cart_2 = document.getElementById("Adds_to_cart_2").value;
  Adds_to_cart_2_value = parseInt(Adds_to_cart_2, 10);

  Adds_to_cart_3 = document.getElementById("Adds_to_cart_3").value;
  Adds_to_cart_3_value = parseInt(Adds_to_cart_3, 10);

  Add_to_cart_all_values =
    Adds_to_cart_1_value + Adds_to_cart_2_value + Adds_to_cart_3_value;

  Atc1val = (Add_to_cart_all_values / click_value) * 100;
  // Creates Unique checkouts initiated Variable
  Unique_checkouts_initiated_1 = document.getElementById(
    "Unique_checkouts_initiated_1"
  ).value;
  Unique_checkouts_initiated_1_value = parseFloat(
    Unique_checkouts_initiated_1,
    10
  );

  Unique_checkouts_initiated_2 = document.getElementById(
    "Unique_checkouts_initiated_2"
  ).value;
  Unique_checkouts_initiated_2_value = parseFloat(
    Unique_checkouts_initiated_2,
    10
  );

  Unique_checkouts_initiated_3 = document.getElementById(
    "Unique_checkouts_initiated_3"
  ).value;
  Unique_checkouts_initiated_3_value = parseFloat(
    Unique_checkouts_initiated_3,
    10
  );

  Unique_checkouts_initiated_all_values =
    Unique_checkouts_initiated_1_value +
    Unique_checkouts_initiated_2_value +
    Unique_checkouts_initiated_3_value;

  Ucival = (Unique_checkouts_initiated_all_values / click_value) * 100;
  Ucitatcval =
    (Unique_checkouts_initiated_all_values / Add_to_cart_all_values) * 100;
  Ptatcval = (Purchases_all_values / Add_to_cart_all_values) * 100;
  Ptucival =
    (Purchases_all_values / Unique_checkouts_initiated_all_values) * 100;
  // CORRELATION OVERVIEW
  // Creates ROAS Variable
  Purchase_ROAS_1 = document.getElementById("Purchase_ROAS_1").value;
  Purchase_ROAS_1_value = parseFloat(Purchase_ROAS_1, 10);

  Purchase_ROAS_2 = document.getElementById("Purchase_ROAS_2").value;
  Purchase_ROAS_2_value = parseFloat(Purchase_ROAS_2, 10);

  Purchase_ROAS_3 = document.getElementById("Purchase_ROAS_3").value;
  Purchase_ROAS_3_value = parseFloat(Purchase_ROAS_3, 10);

  Purchase_ROAS_Values =
    Purchase_ROAS_1_value + Purchase_ROAS_2_value + Purchase_ROAS_3_value;

  // Creates CPA Variable
  Cost_per_Purchase_1 = document.getElementById("Cost_per_Purchase_1").value;
  Cost_per_Purchase_1_value = parseFloat(Cost_per_Purchase_1, 10);

  // Creates Add to cart Variable
  CTR_1 = document.getElementById("CTR_1").value;
  CTR_1_value = parseFloat(CTR_1, 10);

  // Creates Cost  variable
  Amount_spent_1 = document.getElementById("Amount_spent_1").value;
  Amount_spent_1_value = parseFloat(Amount_spent_1, 10);
  Cost_Per_Purchase1 = Amount_spent_1_value / Purchases_1;
  Cost_per_initiate_checkout_value1 =
    Amount_spent_1_value / Unique_checkouts_initiated_1_value;
  Cost_Per_Add_to_cart1 = Amount_spent_1_value / Adds_to_cart_1_value;
  Cost_Per_Click1 = Amount_spent_1_value / click_value_1;

  Amount_spent_2 = document.getElementById("Amount_spent_2").value;
  Amount_spent_2_value = parseFloat(Amount_spent_2, 10);
  Cost_Per_Purchase2 = Amount_spent_2_value / Purchases_2;
  Cost_per_initiate_checkout_value2 =
    Amount_spent_2_value / Unique_checkouts_initiated_2_value;
  Cost_Per_Add_to_cart2 = Amount_spent_2_value / Adds_to_cart_2_value;
  Cost_Per_Click2 = Amount_spent_2_value / click_value_2;

  Amount_spent_3 = document.getElementById("Amount_spent_3").value;
  Amount_spent_3_value = parseFloat(Amount_spent_3, 10);
  Cost_Per_Purchase3 = Amount_spent_3_value / Purchases_3;
  Cost_per_initiate_checkout_value3 =
    Amount_spent_3_value / Unique_checkouts_initiated_3_value;
  Cost_Per_Add_to_cart3 = Amount_spent_3_value / Adds_to_cart_3_value;
  Cost_Per_Click3 = Amount_spent_3_value / click_value_3;

  Amount_spent_all =
    Amount_spent_1_value + Amount_spent_2_value + Amount_spent_3_value;

  console.log(Amount_spent_all);

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

  // Checkouts Initiated to Purchase ROAS Correlation
  x = [
    Cost_per_initiate_checkout_value1,
    Cost_per_initiate_checkout_value2,
    Cost_per_initiate_checkout_value3,
  ];
  y = [Purchase_ROAS_1_value, Purchase_ROAS_2_value, Purchase_ROAS_3_value];

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

  table1.rows[4].cells[2].innerHTML = answer.toFixed(2);

  // Adding another corrolation
  z = [1, 2, 3];
  q = [1, 2, 3];

  var shortestArrayLength = 0;

  if (z.length == q.length) {
    shortestArrayLength = z.length;
  } else if (z.length > q.length) {
    shortestArrayLength = q.length;
    console.error(
      "z has more items in it, the last " +
        (z.length - shortestArrayLength) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength = z.length;
    console.error(
      "q has more items in it, the last " +
        (q.length - shortestArrayLength) +
        " item(s) will be ignored"
    );
  }

  var zq = [];
  var z2 = [];
  var q2 = [];

  for (var i = 0; i < shortestArrayLength; i++) {
    zq.push(z[i] * q[i]);
    z2.push(z[i] * z[i]);
    q2.push(q[i] * q[i]);
  }

  var sum_z = 0;
  var sum_q = 0;
  var sum_zq = 0;
  var sum_z2 = 0;
  var sum_q2 = 0;

  for (var i = 0; i < shortestArrayLength; i++) {
    sum_z += z[i];
    sum_q += q[i];
    sum_zq += zq[i];
    sum_z2 += z2[i];
    sum_q2 += q2[i];
  }

  var step1 = shortestArrayLength * sum_zq - sum_z * sum_q;
  var step2 = shortestArrayLength * sum_z2 - sum_z * sum_z;
  var step3 = shortestArrayLength * sum_q2 - sum_q * sum_q;
  var step4 = Math.sqrt(step2 * step3);
  var answer1 = step1 / step4;

  table1.rows[5].cells[2].innerHTML = answer1.toFixed(2);
}
