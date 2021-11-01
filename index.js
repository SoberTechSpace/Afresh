const { response } = require("express");

document.addEventListener ('DOMcontentLoaded', function ()
{  
    fetch('http://localhost:5000/getAll')
    .then (Response => response.json())
    .then (data => console.log(data));
    loadHTMLTable ([]);
});
function loadHTMLTable (data){
    const table = document.querySelector('table tbody');
  
if  (data.length ===0) 
{
    table.innerHTML=" <tr> <td class='no-data' colspan='5'>NO Data </td> </tr>";
  
} 
}