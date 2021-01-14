import * as ActionTypes from './ActionTypes';





  
  export const postFeedback = (feedback) => () => {
    return fetch("feedback", {
      method: "POST",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            const error = new Error(
              `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        console.log("Feedback: ", response);
        alert("Thank you for your feedback!\n" + JSON.stringify(response));
      })
      .catch((error) => {
        console.log("Feedback: ", error.message);
        alert("Your feedback could not be posted\nError: " + error.message);
      });
  };