export class DocCall{
    async nameCall(name) {
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&fields=profile%2Cpractices&skip=0&limit=100&user_key=851d52693f5a10ef473cea5ff2e79504`);
        
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      } catch (error) {
        $(".errors").html("there was an error: " + error.message);
      }
    }
    // async specialtyCall(specialty) {
    //   try {
    //     let response = await fetch(``)
    //   } catch (error) {
    //     $(".errors").html("there was an error: " + error.message);
    //   }
    // }
}
