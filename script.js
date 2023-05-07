// Header
document.body.style.width = "100%";
let header = document.createElement("header");
let headerStyle = header.style;
headerStyle.backgroundColor = "#f1f1f1";
headerStyle.paddingLeft = "100px";
headerStyle.paddingTop = "10px";
headerStyle.paddingBottom = "10px";
headerStyle.width = "100%-100px";
headerStyle.borderBottomStyle = "solid";
headerStyle.borderBottomWidth = "3px";
headerStyle.borderBottomColor = "#C0C0C0";
let logo = document.createElement("img");
logo.src = "./images/logo.png";
logo.alt = "LOGO";
logo.style.height = "70px";
header.append(logo);
document.body.append(header)
// End Header
// Nav
// Nav menu
let nav = document.createElement("nav");
let navStyle = nav.style;
navStyle.width = "100%-200px";
navStyle.backgroundColor = "#EBCF51"
navStyle.paddingLeft = "100px";
navStyle.paddingRight = "100px";
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
search.style.width = "200px";
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

// End Nav
// Main

let main = document.createElement("main");
let mainStyle = main.style;
mainStyle.width = "100%-200px";
mainStyle.backgroundColor = "#f1f1f1";
mainStyle.padding = "50px 100px";
let contentbox = document.createElement("div");
contentbox.style.paddingBottom = "30px";
contentbox.style.borderBottom = "3px";
contentbox.style.borderBottomStyle = "dotted";
contentbox.style.borderBottomColor = "#C0C0C0";
let title = document.createElement("h2");
title.innerHTML = "FREE CSS TEMPLATES"
title.style.color = "#333";
title.style.fontSize = "30px";
title.style.fontWeight = "normal";
title.style.fontFamily = "Tahoma, Geneva, sans-serif";
title.style.padding = "5px";
title.style.margin = "0px";
// title.style.marginTop = "30px";
contentbox.append(title)

let p = document.createElement("p");
let alist=["templatemo","Pineapple","XHTML","CSS","Free Photos"];
let plist = [" provides a lot of high quality free css templates for your personal or commercial websites."," is a one page layout that can be applied for any purpose. Validate "," & ",". Credit goes to ", " for photos used in this template. Quisque in diam a justo condimentum molestie. Vivamus a velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis velit quis tortor tincidunt aliquet.  Mauris quis nulla sed ipsum pretium sagittis. Suspendisse feugiat. Ut sodales libero ut odio. Maecenas venenatis metus eu est. In sed risus ac felis varius bibendum."]

for (let i= 0; i < alist.length; i++) {
  let a = document.createElement("a");
  a.innerHTML = alist[i];
  a.href = "#";
  a.style.color = "#BB8800";
  a.style.textDecoration = "none";
  a.style.fontSize = "13px";  
  a.style.fontWeight = "400";
  a.style.fontFamily= "Tahoma, Geneva, sans-serif";
  p.append(a);
  a = document.createTextNode(plist[i]);
  p.append(a);
}
p.style.fontSize = "13px";  
p.style.fontWeight = "400";
p.style.fontFamily= "Tahoma, Geneva, sans-serif";
p.style.lineHeight = "1.7em"
contentbox.append(p)

let a = document.createElement("a");
a.innerHTML = "Read More";
a.href = "#";
a.style.color = "#fff";
a.style.textDecoration = "none";
a.style.fontSize = "14px";  
a.style.fontWeight = "400";
a.style.fontFamily= "Tahoma, Geneva, sans-serif";
a.style.lineHeight = "33px"
a.style.backgroundImage = "url('./images/readmore.png')";
a.style.backgroundSize = "cover";
a.style.backgroundPosition = "right";
a.style.display = "block";
a.style.height= "33px";
a.style.width = "90px";
a.style.margin = "0  0  0 auto";
a.style.paddingLeft = "48px";
contentbox.append(a);
main.append(contentbox)

let boxesdata =[
  {image:"./images/image_01.png",
   title: "Lorem ipsum dolor sit amet",
   content:"Quisque nec nisl. Nam scelerisque cursus dolor. Integer vel sapien quis risus egestas suscipit."},
   {image:"./images/image_02.png",
   title: "Curabitur quis velit quis tortor",
   content:"Vivamus vulputate felis. Etiam luctus. Quisque facilisis suscipit elit. Curabitur eleifend congue leo.."},
   {image:"./images/image_03.png",
   title: "Quisque at ante sit amet erat",
   content:"Maecenas nisl ante, mollis et, tincidunt vitae, feugiat sit amet, mi. Vestibulum urna."},
   {image:"./images/image_04.png",
   title: "Mauris vestibulum felis eget tortor",
   content:"Sed pretium, neque hendrerit rhoncus accumsan, nibh tellus pharetra neque, quis rutrum elit justo vitae sapien."},
   {image:"./images/image_05.png",
   title: "Vestibulum auctor odio eget ante",
   content:"Aliquam erat arcu, euismod et, dignissim in, interdum ac, est. Mauris congue felis at nisi. Donec felis."},
   {image:"./images/image_06.png",
   title: "Duis vitae velit sed dui",
   content:"Proin vulputate justo et quam. Cras nisl eros, elementum eu, iaculis vitae, viverra ut, ligula."},
  ]

 title = document.createElement("h2");
  title.innerHTML = "Mega Development Projects";
 title.style.color = "#746522"
 title.style.fontSize = "30px";
 title.style.fontWeight = "normal";
 title.style.fontFamily = "Tahoma, Geneva, sans-serif";
 title.style.padding = "5px";
 title.style.margin = "30px 0 20px";
//  title.style.marginTop = "30px";
main.append(title)
let boxcollection = document.createElement("div");
boxcollection.style.display = "flex";
boxcollection.style.width= "100%";
boxcollection.style.justifyContent = "space-between";
boxcollection.style.alignContent = "space-between";
boxcollection.style.flexWrap = "wrap";


for (const iterator of boxesdata) {
  let box =  document.createElement("div");
  box.style.width= "280px";
  let imagebox = document.createElement("div");
  imagebox.style.width = "280px";
  imagebox.style.height = "128px";
  imagebox.style.margin = "20px 0 0 25px";
  imagebox.style.backgroundImage = "url('./images/image_frame.png')";
  let image = document.createElement("img");
  image.src = iterator.image;
  image.alt = "FOTO";
  image.style.width = "238px"
  image.style.height = "88px";
  image.style.margin = "20px 0 0 25px";
  imagebox.append(image)
  box.append(imagebox)
let imgtitle = document.createElement("a");
imgtitle.innerHTML = iterator.title;
imgtitle.href = "#";
imgtitle.style.color = "#b6980d";
imgtitle.style.textDecoration = "none";
imgtitle.style.fontSize = "14px";  
imgtitle.style.fontStyle = "italic";  
imgtitle.style.fontWeight = "400";
imgtitle.style.fontFamily= "Tahoma, Geneva, sans-serif";
imgtitle.style.lineHeight = "33px"
imgtitle.style.marginLeft = "40px"
box.append(imgtitle)

let imgcontent = document.createElement("p");
imgcontent.innerHTML = iterator.content;
imgcontent.style.fontSize = "13px";   
imgcontent.style.fontWeight = "400";
imgcontent.style.fontFamily= "Tahoma, Geneva, sans-serif";
imgcontent.style.lineHeight = "1.7em"
imgcontent.style.marginLeft = "40px"
box.append(imgcontent) 
  boxcollection.append(box)
}

main.append(boxcollection)

 a = document.createElement("a");
a.innerHTML = "View More";
a.href = "#";
a.style.color = "#fff";
a.style.textDecoration = "none";
a.style.fontSize = "14px";  
a.style.fontWeight = "400";
a.style.fontFamily= "Tahoma, Geneva, sans-serif";
a.style.lineHeight = "33px"
a.style.backgroundImage = "url('./images/readmore.png')";
a.style.backgroundSize = "cover";
a.style.backgroundPosition = "right";
a.style.display = "block";
a.style.height= "33px";
a.style.width = "90px";
a.style.margin = "30px  0  50px auto";
a.style.paddingLeft = "48px";

main.append(a);






document.body.append(main)