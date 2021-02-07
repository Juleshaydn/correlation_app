function targetCalculator() {
  input = document.getElementById("Roas_target_input").value;
  table = document.getElementById("target_calculator");

  // Creates Cost  variable

  //Calculates CPA
  average_order_value = document.getElementById("average-order-value")
    .innerHTML;

  click_value_1 = parseInt(Link_clicks_1, 10);
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

  // Creates Click through rate Variable
  Click_through_rate1 = document.getElementById("click-through-rate_1").value;
  Click_through_rate1_value = parseFloat(Click_through_rate1, 10);

  Click_through_rate2 = document.getElementById("click-through-rate_2").value;
  Click_through_rate2_value = parseFloat(Click_through_rate2, 10);

  Click_through_rate3 = document.getElementById("click-through-rate_3").value;
  Click_through_rate3_value = parseFloat(Click_through_rate3, 10);

  // Creates Cost variables
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

  // Value Arrays for rendering corrolations
  Cpa_array = [Cost_Per_Purchase1, Cost_Per_Purchase2, Cost_Per_Purchase3];
  Roas_array = [
    Purchase_ROAS_1_value,
    Purchase_ROAS_2_value,
    Purchase_ROAS_3_value,
  ];

  Click_through_rate_array = [
    Click_through_rate1_value,
    Click_through_rate2_value,
    Click_through_rate3_value,
  ];

  Cost_per_checkout_array = [
    Cost_per_initiate_checkout_value1,
    Cost_per_initiate_checkout_value2,
    Cost_per_initiate_checkout_value3,
  ];

  Cost_Per_Click_Array = [Cost_Per_Click1, Cost_Per_Click2, Cost_Per_Click3];

  Cost_Per_Add_to_cart_Array = [
    Cost_Per_Add_to_cart1,
    Cost_Per_Add_to_cart2,
    Cost_Per_Add_to_cart3,
  ];

  Amount_spent_all =
    Amount_spent_1_value + Amount_spent_2_value + Amount_spent_3_value;

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

  // Checkouts Initiated to Purchase CPA Correlation

  x = Cpa_array;
  y = Cost_Per_Add_to_cart_Array;

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

  table1.rows[4].cells[1].innerHTML = answer.toFixed(2);

  // Cost per initial check out to ROAS Corrolaction

  x = Roas_array;
  y = Cost_per_checkout_array;

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

  // Click through rate to ROAS Corrolaction

  x = Roas_array;
  y = Click_through_rate_array;

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

  // Click through rate to CPA Corrolaction

  x = Cpa_array;
  y = Click_through_rate_array;

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

  table1.rows[1].cells[1].innerHTML = answer.toFixed(2);

  // Cost Per Click to CPA Corrolaction

  x = Cpa_array;
  y = Cost_Per_Click_Array;

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

  table1.rows[2].cells[1].innerHTML = answer.toFixed(2);

  // Cost Per Click to ROAS Corrolaction

  x = Roas_array;
  y = Cost_Per_Click_Array;

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

  table1.rows[2].cells[2].innerHTML = answer.toFixed(2);

  // Cost Per Add To cart to CPA Corrolaction

  x = Roas_array;
  y = Cost_Per_Add_to_cart_Array;

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

  table1.rows[3].cells[2].innerHTML = answer.toFixed(2);

  // Cost Per Add To cart to CPA Corrolaction

  x = Cpa_array;
  y = Cost_Per_Add_to_cart_Array;

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

  table1.rows[3].cells[1].innerHTML = answer.toFixed(2);

  //===================================
  //     Saving CSV fields to vars
  //===================================

  // Total Amount Spent
  let amountSpent = 0;
  $(".cell-1").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      amountSpent += parseFloat(value);
    }
  });
  console.log(amountSpent.toFixed(2));

  // Total Purchases Conversion Value
  let Purchases_Conversion_Value = 0;
  $(".cell-2").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      Purchases_Conversion_Value += parseFloat(value);
    }
  });
  console.log(Purchases_Conversion_Value.toFixed(2));

  // Total Purchases
  let purchases = 0;
  $(".cell-3").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      purchases += parseFloat(value);
    }
  });
  console.log(purchases);

  // Total Purchase ROAS (return on ad spend)
  let Purchase_ROAS = 0;
  $(".cell-4").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      Purchase_ROAS += parseFloat(value);
    }
  });
  console.log(Purchase_ROAS.toFixed(2));

  // Total Unique checkouts initiated
  let Unique_checkouts_initiated = 0;
  $(".cell-5").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      Unique_checkouts_initiated += parseFloat(value);
    }
  });
  console.log(Unique_checkouts_initiated);

  // Total Adds to cart
  let Adds_to_cart = 0;
  $(".cell-6").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      Adds_to_cart += parseFloat(value);
    }
  });
  console.log(Adds_to_cart);

  // Total Link clicks
  let Link_clicks = 0;
  $(".cell-7").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      Link_clicks += parseFloat(value);
    }
  });
  console.log(Link_clicks);

  // Total CTR (link click-through rate)
  let CTR = 0;
  $(".cell-8").each(function () {
    var value = $(this).text();
    if (!isNaN(value) && value.length != 0) {
      CTR += parseFloat(value);
    }
  });
  console.log(CTR.toFixed(2));
}
