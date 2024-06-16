const axios = require('axios');

function makeRequest() {
  axios({
    method: "get",
    url: "testUrl",
  }).then(function (response) {
    console.log(response.data);
    // Delay before making the next request
    setTimeout(makeRequest, 1000); // 1000 milliseconds = 1 second
  }).catch(function (error) {
    console.log(error);
    // Delay before retrying the request
    setTimeout(makeRequest, 1000);
  });
}

// Start the first request
makeRequest();
