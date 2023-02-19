function isAllPresent(str) {
 
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

  
    if (!str || str.length === 0) {
      console.log("No" + "<br>");
      return;
    }

   
    if (pattern.test(str)) {
      console.log("Valid Password");
    } else {
      console.log("Please Enter Valid Passowrd");
    }
    return;
  }

  // Driver Code
  var str = "#Victor123@";
  isAllPresent(str);