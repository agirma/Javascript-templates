// This file was automatically generated from rows.soy.
// Please don't edit this file by hand.

if (typeof templateJs == 'undefined') { var templateJs = {}; }
if (typeof templateJs.widget == 'undefined') { templateJs.widget = {}; }


templateJs.widget.rows = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var recordList4 = opt_data.records;
  var recordListLen4 = recordList4.length;
  for (var recordIndex4 = 0; recordIndex4 < recordListLen4; recordIndex4++) {
    var recordData4 = recordList4[recordIndex4];
    output.append('<tr><td> ', soy.$$escapeHtml(recordData4.number), ' </td><td> ', soy.$$escapeHtml(recordData4.name), ' </td><td> ', soy.$$escapeHtml(recordData4.email), ' </td><td> ', soy.$$escapeHtml(recordData4.phone), ' </td><td> ', soy.$$escapeHtml(recordData4.address), '</td></tr>');
  }
  return opt_sb ? '' : output.toString();
};
