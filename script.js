document.body.style.width = "100%";
let header = document.createElement("header");
let headerStyle = header.style;
headerStyle.backgroundColor = "#f1f1f1";
headerStyle.paddingLeft = "200px";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.width = "100%";
let logo = document.createElement("img");
logo.src = "./images/logo.png";
logo.style.height = "70px";
header.append(logo);

document.body.append(header)