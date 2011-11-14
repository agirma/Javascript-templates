<% for(var i = 0, len = records.length; i < len; i++) { %>
<% var record = records[i]; %>
	<tr>
		<td> <%= record.number %> </td>
		<td> <%= record.name %> </td>
		<td> <%= record.email %> </td>
		<td> <%= record.phone %> </td>
		<td> <%= record.address %> </td>
	</tr>
<% } %>