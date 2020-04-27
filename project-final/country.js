$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {
        
        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row" class="bg-info text-center">${selectedCountry[i].date}</th>
            <td class="bg-warning text-center">${selectedCountry[i].confirmed}</td>
            <td class="bg-danger text-center">${selectedCountry[i].deaths}</td>
            <td class="bg-success text-center">${selectedCountry[i].recovered}</td>
          </tr>`

          $("#data").append(row);

        }
        

    });



})