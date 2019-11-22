import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocCall } from "./docSearch.js";

$(document).ready(function() {
    $('#inputButton').click(function(event) {
      event.preventDefault();
      
      (async () => {
        let docCall = new DocCall();
        const response = await docCall.nameCall("john");
        return getElements(response)
      })();

      function getElements(response) {
        $(".showName").text(`Name: ${response.data[0].profile.last_name}.`);
      }

    });
});