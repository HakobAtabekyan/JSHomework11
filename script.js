// Header
document.body.style.width = "100%";
let header = document.createElement("header");
let headerStyle = header.style;
headerStyle.backgroundColor = "#f1f1f1";
headerStyle.paddingLeft = "200px";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.width = "100%-200px";
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
// Nav menu
let nav = document.createElement("nav");
let navStyle = nav.style;
navStyle.width = "100%-400px";
navStyle.backgroundColor = "#EBCF51"
navStyle.paddingLeft = "200px";
navStyle.paddingRight = "200px";
let navbar = document.createElement("div")
navbar.className = "navbar";
navbar.style.display = "flex";
navbar.style.justifyContent = "space-between";
navbar.style.justifyItems = "center";
let menuPoints = ["Home","Gallery","Templates","Themes", "Contact"];
let menu = document.createElement("ul");
menu.style.listStyle = "none";
menu.style.display = "flex";
menu.style.padding = "0";
menu.style.margin = "0";
menu.style.height= "50px";
// console.dir(menuPoint.firstChild)
for (const iterator of menuPoints) {  
let menuPoint = document.createElement("li");
menuPoint.style.padding = "0px";
menuPoint.className = "menuPoint";
let menutext = document.createElement("a");
menutext.style.color = "#746522";
menutext.style.fontSize = "16px";
menutext.style.width = "70px";
menutext.style.height= "50px";
menutext.style.display = "flex";
menutext.style.fontWeight = "400";
menutext.style.fontFamily= "Tahoma, Geneva, sans-serif";
menutext.style.padding = "10px";
menutext.style.marginLeft = "1px";
menutext.style.textDecoration= "none";
menutext.style.justifyContent = "center";
menutext.style.justifyItems = "center";
menutext.innerHTML = iterator;
menutext.href = "#";
menuPoint.append(menutext);  
menu.append(menuPoint);
};
menu.firstChild.style.backgroundImage = "url('./images/menu_hover.png')";
menu.firstChild.style.backgroundSize = "cover";
menu.firstChild.style.backgroundPosition = "top";
menu.firstChild.style.backgroundRepeat = "no-repeat";
console.log(menu.firstChild.style);
navbar.append(menu);
// End Nav menu
//  Nav search
let search = document.createElement("div");
let input = document.createElement("input");
search.style.backgroundImage = "url('./images/search.png')";
search.style.backgroundSize = "cover";
search.style.backgroundPosition = "right";
search.style.height= "38px";
search.style.width = "190x";
search.style.marginTop = "5px";
input.placeholder = "Enter keyword here...";
input.style.color = "#FFFFFF";
input.style.backgroundColor = "transparent";
input.style.borderStyle = "none"
input.style.fontSize = "12px";
input.style.width = "190px";
input.style.height= "28px";
input.style.display = "flex";
input.style.fontWeight = "400";
input.style.fontFamily= "Tahoma, Geneva, sans-serif";
input.style.padding = "5px";
search.append(input);
navbar.append(search);
nav.append(navbar)

document.body.append(nav)