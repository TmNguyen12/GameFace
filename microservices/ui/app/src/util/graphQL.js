import axios from "axios";

const gameTest = {
  games(id: "1"){
    user {
      id, 
      display_name
    },
    users2 {
      id, 
      display_name
    },
    users3 {
      id, 
      display_name
    },
    users4 {
      id, 
      display_name
    },
    users5 {
      id, 
      display_name
    }
  }
}; 

POST data.<project-name>.hasura-app.io/v1alpha1/graphql HTTP/1.1
Content-Type: application/json
Authorization: Bearer <token>

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), 
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

{
    "operationName" : "some-operation-name",
    "query" : "a graphql query",
    "variables" : {
        "variable-name" : "variable-value"
    }
}


export const getBusiness = businessId => {
  return axios.get("/business", {
    params: {
      Id: businessId
    }
  });
};

// const defaultQuery = {
//   term: "plumbing",
//   latitude: "37.786882",
//   longitude: "-122.399972",
//   category: ""
// };

export const search = query => {
  return axios.get("/search", {
    params: {
      term: query.term,
      latitude: query.latitude,
      longitude: query.longitude,
      category: query.category
    }
  });
};

export const fetchAutoComplete = query => {
  return axios.get("/autocomplete", {
    params: {
      text: query.text,
      latitude: query.latitude,
      longitude: query.longitude,
      category: query.category
    }
  });
};

// const defaultQuery = {
//   text: "plumbing",
//   latitude: "37.786882",
//   longitude: "-122.399972",
//   category: ""
// };

