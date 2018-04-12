import axios from "axios";

export default {
  // Deletes the user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // Send user the product review email
  sendEmail: function(userEmail) {
    // console.log(userEmail);
    return axios.post("/sendemail", userEmail, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  // Authenticates a user
  authenticateUser: function(userData) {
    return axios.post("/auth/login", userData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  },
  // Sign up a user
  signUp: function(userData) {
    // console.log("User Data");
    // console.log(typeof userData);
    // console.log(userData);
    return axios.post("/auth/signup", userData, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};
