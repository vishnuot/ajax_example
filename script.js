document.getElementById("callAjax").addEventListener("click", () => xhr.send());
var xhr = new XMLHttpRequest();
xhr.open("get", "https://jsonplaceholder.typicode.com/users");

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let resultData = JSON.parse(xhr.responseText);
    var htmlContent = "";
    for (i = 0; i < resultData.length; i++) {
      var data = resultData[i];
      htmlContent =
        htmlContent +
        `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.email}</td><td>${data.phone}</td></tr>`;
    }
    document.getElementById("resultArea").innerHTML = htmlContent;
  } else {
    alert("error");
  }
};
