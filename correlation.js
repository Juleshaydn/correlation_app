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

  table1.rows[4].cells[1].innerHTML = answer.toFixed(2);

  // Cost per initial check out to ROAS Corrolaction

  v = Roas_array;
  w = Cost_per_checkout_array;

  var shortestArrayLength1 = 0;

  if (v.length == w.length) {
    shortestArrayLength1 = v.length;
  } else if (v.length > w.length) {
    shortestArrayLength1 = w.length;
    console.error(
      "v has more items in it, the last " +
        (v.length - shortestArrayLength1) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength1 = v.length;
    console.error(
      "w has more items in it, the last " +
        (w.length - shortestArrayLength1) +
        " item(s) will be ignored"
    );
  }

  var vw = [];
  var v2 = [];
  var w2 = [];

  for (var i = 0; i < shortestArrayLength1; i++) {
    vw.push(v[i] * w[i]);
    v2.push(v[i] * v[i]);
    w2.push(w[i] * w[i]);
  }

  var sum_v = 0;
  var sum_w = 0;
  var sum_vw = 0;
  var sum_v2 = 0;
  var sum_w2 = 0;

  for (var i = 0; i < shortestArrayLength1; i++) {
    sum_v += v[i];
    sum_w += w[i];
    sum_vw += vw[i];
    sum_v2 += v2[i];
    sum_w2 += w2[i];
  }

  var step1_1 = shortestArrayLength1 * sum_vw - sum_v * sum_w;
  var step2_1 = shortestArrayLength1 * sum_v2 - sum_v * sum_v;
  var step3_1 = shortestArrayLength1 * sum_w2 - sum_w * sum_w;
  var step4_1 = Math.sqrt(step2_1 * step3_1);
  var answer1 = step1_1 / step4_1;

  table1.rows[4].cells[2].innerHTML = answer1.toFixed(2);

  // Click through rate to ROAS Corrolaction
  t = Roas_array;
  u = Click_through_rate_array;

  var shortestArrayLength2 = 0;

  if (t.length == u.length) {
    shortestArrayLength2 = t.length;
  } else if (t.length > u.length) {
    shortestArrayLength2 = u.length;
    console.error(
      "t has more items in it, the last " +
        (t.length - shortestArrayLength2) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength2 = t.length;
    console.error(
      "u has more items in it, the last " +
        (u.length - shortestArrayLength2) +
        " item(s) will be ignored"
    );
  }

  var tu = [];
  var t2 = [];
  var u2 = [];

  for (var i = 0; i < shortestArrayLength2; i++) {
    tu.push(t[i] * u[i]);
    t2.push(t[i] * t[i]);
    u2.push(u[i] * u[i]);
  }

  var sum_t = 0;
  var sum_u = 0;
  var sum_tu = 0;
  var sum_t2 = 0;
  var sum_u2 = 0;

  for (var i = 0; i < shortestArrayLength2; i++) {
    sum_t += t[i];
    sum_u += u[i];
    sum_tu += tu[i];
    sum_t2 += t2[i];
    sum_u2 += u2[i];
  }

  var step1_2 = shortestArrayLength2 * sum_tu - sum_t * sum_u;
  var step2_2 = shortestArrayLength2 * sum_t2 - sum_t * sum_t;
  var step3_2 = shortestArrayLength2 * sum_u2 - sum_u * sum_u;
  var step4_2 = Math.sqrt(step2_2 * step3_2);
  var answer2 = step1_2 / step4_2;

  table1.rows[1].cells[2].innerHTML = answer2.toFixed(2);

  // Click through rate to CPA Corrolaction
  s = Cpa_array;
  p = Click_through_rate_array;

  var shortestArrayLength3 = 0;

  if (s.length == p.length) {
    shortestArrayLength3 = s.length;
  } else if (s.length > p.length) {
    shortestArrayLength3 = p.length;
    console.error(
      "t has more items in it, the last " +
        (s.length - shortestArrayLength3) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength3 = s.length;
    console.error(
      "p has more items in it, the last " +
        (p.length - shortestArrayLength3) +
        " item(s) will be ignored"
    );
  }

  var sp = [];
  var s2 = [];
  var p2 = [];

  for (var i = 0; i < shortestArrayLength3; i++) {
    sp.push(s[i] * p[i]);
    s2.push(s[i] * s[i]);
    p2.push(p[i] * p[i]);
  }

  var sum_s = 0;
  var sum_p = 0;
  var sum_sp = 0;
  var sum_s2 = 0;
  var sum_p2 = 0;

  for (var i = 0; i < shortestArrayLength3; i++) {
    sum_s += s[i];
    sum_p += p[i];
    sum_sp += sp[i];
    sum_s2 += s2[i];
    sum_p2 += p2[i];
  }

  var step1_3 = shortestArrayLength3 * sum_sp - sum_s * sum_p;
  var step2_3 = shortestArrayLength3 * sum_s2 - sum_s * sum_s;
  var step3_3 = shortestArrayLength3 * sum_p2 - sum_p * sum_p;
  var step4_3 = Math.sqrt(step2_3 * step3_3);
  var answer3 = step1_3 / step4_3;

  table1.rows[1].cells[1].innerHTML = answer3.toFixed(2);

  // Cost Per Click to CPA Corrolaction

  n = Cpa_array;
  m = Cost_Per_Click_Array;

  var shortestArrayLength4 = 0;

  if (n.length == m.length) {
    shortestArrayLength4 = n.length;
  } else if (n.length > m.length) {
    shortestArrayLength4 = m.length;
    console.error(
      "t has more items in it, the last " +
        (n.length - shortestArrayLength4) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength4 = n.length;
    console.error(
      "m has more items in it, the last " +
        (m.length - shortestArrayLength4) +
        " item(s) will be ignored"
    );
  }

  var nm = [];
  var n2 = [];
  var m2 = [];

  for (var i = 0; i < shortestArrayLength4; i++) {
    nm.push(n[i] * m[i]);
    n2.push(n[i] * n[i]);
    m2.push(m[i] * m[i]);
  }

  var sum_n = 0;
  var sum_m = 0;
  var sum_nm = 0;
  var sum_n2 = 0;
  var sum_m2 = 0;

  for (var i = 0; i < shortestArrayLength4; i++) {
    sum_n += n[i];
    sum_m += m[i];
    sum_nm += nm[i];
    sum_n2 += n2[i];
    sum_m2 += m2[i];
  }

  var step1_4 = shortestArrayLength4 * sum_nm - sum_n * sum_m;
  var step2_4 = shortestArrayLength4 * sum_n2 - sum_n * sum_n;
  var step3_4 = shortestArrayLength4 * sum_m2 - sum_m * sum_m;
  var step4_4 = Math.sqrt(step2_4 * step3_4);
  var answer4 = step1_4 / step4_4;

  table1.rows[2].cells[1].innerHTML = answer4.toFixed(2);

  // Cost Per Click to ROAS Corrolaction
  f = Roas_array;
  l = Cost_Per_Click_Array;

  var shortestArrayLength5 = 0;

  if (f.length == l.length) {
    shortestArrayLength5 = f.length;
  } else if (f.length > l.length) {
    shortestArrayLength5 = l.length;
    console.error(
      "t has more items in it, the last " +
        (f.length - shortestArrayLength5) +
        " item(s) will be ignored"
    );
  } else {
    shortestArrayLength5 = f.length;
    console.error(
      "m has more items in it, the last " +
        (l.length - shortestArrayLength5) +
        " item(s) will be ignored"
    );
  }

  var fl = [];
  var f2 = [];
  var l2 = [];

  for (var i = 0; i < shortestArrayLength5; i++) {
    fl.push(f[i] * l[i]);
    f2.push(f[i] * f[i]);
    l2.push(l[i] * l[i]);
  }

  var sum_f = 0;
  var sum_l = 0;
  var sum_fl = 0;
  var sum_f2 = 0;
  var sum_l2 = 0;

  for (var i = 0; i < shortestArrayLength5; i++) {
    sum_f += f[i];
    sum_l += l[i];
    sum_fl += fl[i];
    sum_f2 += f2[i];
    sum_l2 += l2[i];
  }

  var step1_5 = shortestArrayLength5 * sum_fl - sum_f * sum_l;
  var step2_5 = shortestArrayLength5 * sum_f2 - sum_f * sum_f;
  var step3_5 = shortestArrayLength5 * sum_l2 - sum_l * sum_l;
  var step4_5 = Math.sqrt(step2_5 * step3_5);
  var answer5 = step1_5 / step4_5;

  table1.rows[2].cells[2].innerHTML = answer5.toFixed(2);

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

  // CPA to ROAS Corrolaction

  x = Cpa_array;
  y = Roas_array;

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

  table1.rows[5].cells[2].innerHTML = answer.toFixed(2);
  table1.rows[6].cells[1].innerHTML = answer.toFixed(2);
}
