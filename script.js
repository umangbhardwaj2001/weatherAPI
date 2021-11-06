function makeLink(loc)
{
    let endpoint = 'https://api.openweathermap.org/data/2.5';
    let path = 'weather';
    let unit = 'metric';
    let parameter = 'q='+loc+'&units='+unit;
    let auth = '3e16a0122975713f9f4c9bb730c8b3a9'

    let apiURL=endpoint+'/'+path+'?'+parameter+'&appid='+auth;
    return apiURL;
}

function fetchAPI(link)
{
    // let xhr = new XMLHttpRequest();

    // xhr.onload = function()
    // {
    //     var jsontext = JSON.parse(xhr.response);
    //     var temp = jsontext.main.temp;
    //     $('h1').html(temp);
    // }
    // xhr.open('get',link,true);
    // xhr.send();


    $.ajax({
        url: link,
        method: 'get',
        success: function(data)
        {
            $('h1').html(data.main.temp);
        }
    });
}

function getLoc()
{
    var loc = $('.location').val();
    let link = makeLink(loc);
    fetchAPI(link);
}
$('.submit').click(getLoc);
