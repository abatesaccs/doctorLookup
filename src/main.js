import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocCall } from "./docSearch.js";

$(document).ready(function() {
    $('#inputButton').click(function(event) {
      event.preventDefault();
      let input = $("#nameInput").val();
      (async () => {
        let docCall = new DocCall();
        const response = await docCall.nameCall(input);
        return getElements(response)
      })();

      function getElements(response) {
        for (let i = 0; i < response.data.length; i++) {
          $(".showName").append(`Name: ${response.data[i].profile.last_name}.`);
        }
      }

    });
});