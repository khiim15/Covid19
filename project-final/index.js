$(function () {

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var no = 1;
        for (var country in result) {

            var row = `<tr>
                        <th scope="row" class="bg-secondary text-center">${no}</th>
                        <td class="text-center">
                        <a href="country.html?country=${country}">${country}</a>
                        </td>
                    </tr>`;

            $("#data").append(row);
            no++;

        }

    });





})