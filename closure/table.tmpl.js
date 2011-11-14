// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

if (typeof templateJs == 'undefined') { var templateJs = {}; }
if (typeof templateJs.widget == 'undefined') { templateJs.widget = {}; }


templateJs.widget.table = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<H2>List of Users</H2><table cellspacing=\'0\' cellpadding=\'0\' border=\'1\'><thead></thead><tbody>');
  templateJs.widget.rows(opt_data, output);
  output.append('</tbody></table>');
  return opt_sb ? '' : output.toString();
};
