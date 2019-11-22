export async function asyncApiCall(input) {
    let name = input;
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=2&user_key=851d52693f5a10ef473cea5ff2e79504`);
    let jsonifiedResponse = await response.json();
    getElements(jsonifiedResponse);
  }

  const getElements = function(response) {
    $('.showHumidity').text(`${response.data.profile.first_name}`);
    $('.showTemp').text(`${response.data.profile.last_name}`);
  }