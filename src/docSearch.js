export class DocCall{
  async firstCall(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${name}&location=or-portland&fields=profile%2Cpractices&skip=0&limit=100&user_key=851d52693f5a10ef473cea5ff2e79504`);
      
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      $(".errors").html("there was an error: " + error.message);
    }
  }

  async symptomCall(symptom) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&fields=profile%2Cpractices&skip=0&limit=100&user_key=851d52693f5a10ef473cea5ff2e79504`);
      
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      $(".errors").html("there was an error: " + error.message);
    }
  }

  async lastCall(last) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?last_name=${last}&location=or-portland&fields=profile%2Cpractices&skip=0&limit=100&user_key=851d52693f5a10ef473cea5ff2e79504`);
      
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      $(".errors").html("there was an error: " + error.message);
    }
  }

  async specialtyCall(specialty) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=${specialty}&location=or-portland&fields=profile%2Cpractices&skip=0&limit=100&user_key=851d52693f5a10ef473cea5ff2e79504`);
      
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch (error) {
      $(".errors").html("there was an error: " + error.message);
    }
  }
}
