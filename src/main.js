import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocCall } from "./docSearch.js";

$(document).ready(function() {
    $('#inputButton').click(function(event) {
      event.preventDefault();
      let input = $("#nameInput").val();
      let choice = $("#searchMethod").val();
      (async () => {
        let docCall = new DocCall();
        if (choice === "false") {
          $(".errors").html("Please select a search method.");
          return;
        } else if (choice === "first") {
          const response = await docCall.nameCall(input);
          return getNames(response);
        } else if (choice === "specialty") {
          const response = await docCall.specialtyCall(input);
          return getNames(response);
        }
        
      })();

      function getNames(response) {
        if (response.data.length > 1) {
          $(".showInfo").append("Result: <br/>");
          for (let i = 0; i < response.data.length; i++) {
            $(".showInfo").append(`${response.data[i].profile.first_name} ${response.data[i].profile.last_name} <br/> ${response.data[i].practices[0].visit_address.street} <br/> ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} <br/> Phone number: ${response.data[i].practices[0].phones[0].number} <br/> Accepting new patients: ${response.data[i].practices[0].accepts_new_patients} <br/><br/>`);
          }
        } else {
          return 1;
        }
      }
    });
});