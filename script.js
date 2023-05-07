// Header
document.body.style.width = "100%";
let header = document.createElement("header");
let headerStyle = header.style;
headerStyle.backgroundColor = "#f1f1f1";
headerStyle.paddingLeft = "200px";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.width = "100%";
headerStyle.borderBottomStyle = "solid";
headerStyle.borderBottomWidth = "3px";
headerStyle.borderBottomColor = "#C0C0C0";
let logo = document.createElement("img");
logo.src = "./images/logo.png";
logo.style.height = "70px";
header.append(logo);
document.body.append(header)
// End Header
// Nav
let nav = document.createElement("nav");
let navStyle = nav.style;
navStyle.width = "100%";
navStyle.backgroundColor = "#EBCF51"
navStyle.paddingLeft = "200px";
navStyle.paddingRight = "200px";
let navbar = document.createElement("div")
navbar.className = "navbar";
navbar.style.display = "flex";
let menuPoints = ["Home","Gallery","Templates","Themes", "Contact"];
let menu = document.createElement("ul");
menu.style.listStyle = "none";
menu.style.display = "flex";
menu.style.padding = "0";
menu.style.margin = "0";
menu.style.height= "63px";
// console.dir(menuPoint.firstChild)
for (const iterator of menuPoints) {  
let menuPoint = document.createElement("li");
menuPoint.style.padding = "0px";
let menutext = document.createElement("a");
menutext.style.color = "#746522";
menutext.style.fontSize = "16px";
menutext.style.width = "94px";
menutext.style.height= "50px";
menutext.style.display = "flex";
menutext.style.fontWeight = "400";
menutext.style.fontFamily= "Tahoma, Geneva, sans-serif";
menutext.style.padding = "10px";
menutext.style.marginLeft = "1px";
menutext.style.justifyContent = "center";
menutext.style.justifyItems = "center";
menutext.innerHTML = iterator;
menuPoint.append(menutext);  
menu.append(menuPoint);
};

menu.firstChild.style.backgroundImage = "url('./images/menu_hover.png')";
menu.firstChild.style.backgroundSize = "cover";
menu.firstChild.style.backgroundPosition = "top";
menu.firstChild.style.backgroundRepeat = "no-repeat";
console.log(menu.firstChild.style);
navbar.append(menu);
nav.append(navbar)

document.body.append(nav)