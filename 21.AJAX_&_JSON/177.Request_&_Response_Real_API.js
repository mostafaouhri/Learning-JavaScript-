console.log("%c===> [21.AJAX_&_JSON] #177 <===", "color:blueviolet;font-weight:bold");

// Ajax
// Request & Response From Real API
// Ready State => Status of the Request
// [0] request not initialized
// [1] server connection established
// [2] request received
// [3] processing request
// [4] request is finished and response is ready
// * Status
// [200] response is successful
// [404] Not found

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
    console.log(myRequest.readyState);
    console.log(myRequest.status);
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
