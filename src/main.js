import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DocCall } from "./docSearch.js";

$(document).ready(function() {
    $('#inputButton').click(function(event) {
      event.preventDefault();
      $(".showInfo").html("");
      let input = $("#nameInput").val();
      let choice = $("#searchMethod").val();
      (async () => {
        let docCall = new DocCall();
        if (choice === "false") {
          $(".errors").html("Please select a search method.");
          return;
        } else if (choice === "first") {
          $(".errors").html("");
          $(".showInfo").append("Searching");
          const response = await docCall.firstCall(input);
          return getNames(response);
        } else if (choice === "specialty") {
          $(".errors").html("");
          const response = await docCall.specialtyCall(input);
          return getNames(response);
        } else if (choice === "last") {
          $(".errors").html("");
          const response = await docCall.lastCall(input);
          return getNames(response);
        } else if (choice === "symptom") {
          $(".errors").html("");
          const response = await docCall.symptomCall(input);
          return getNames(response);
        }
        
      })();

      function getNames(response) {
        if (response.data.length > 1) {
          $(".showInfo").append("Result: ");
          for (let i = 0; i < response.data.length; i++) {
            $(".showInfo").append(`<br/><br/>${response.data[i].profile.first_name} ${response.data[i].profile.last_name} <br/> ${response.data[i].practices[0].visit_address.street} <br/> ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} <br/> Phone number: ${response.data[i].practices[0].phones[0].number} <br/> Accepting new patients: ${response.data[i].practices[0].accepts_new_patients}`);
            if (response.data[i].practices[0].website) {
              $(".showInfo").append(`<br/>${response.data[i].practices[0].website}`);
            }
          }
        } else {
          $(".errors").append("No results");
        }
      }
    });
});