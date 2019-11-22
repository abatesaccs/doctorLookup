export class DocCall{
    async nameCall(name) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&fields=profile&skip=0&limit=2&user_key=851d52693f5a10ef473cea5ff2e79504`);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch (error) {
            console.error("there was an error: " + error.message);
        }
        
    }
}
// const getElements = function(response) {
//     return (`${response.data[0].profile.last_name}`);
//     // (`${response.data.profile.last_name}`);
// };