console.log("%c===> [21.AJAX_&_JSON] #178 <===", "color:blueviolet;font-weight:bold");

// Ajax
// Loop On Data 

// Search :
// * Cross Origin API [CORS]
// * API Authentication

let myRequest2 = new XMLHttpRequest();
myRequest2.open("GET", "https://api.github.com/users/elzerowebschool/repos", true);
myRequest2.send();

myRequest2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        let jsData = JSON.parse(this.responseText);
        // console.log(jsData);
        for (let i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(jsData[i].full_name);
            div.appendChild(repoName);
            document.body.appendChild(div);
        }
    };
};

