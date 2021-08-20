/*
let elements = document.getElementsByClassName('navButtons');

function navBarPagesRedirect(text)
{
  if (text == 'Contact me')
    {
      window.location.href =  "Contact.html";
    }
    else
    {
      window.location.href = text + ".html";
    }
}

for (element of elements)
{
    let text = element.innerHTML;
    element.addEventListener("click", function () {navBarPagesRedirect(text); });
}
*/

let facebookElements= document.getElementsByClassName('facebook-item');
for (element of facebookElements)
{
  element.addEventListener('click', function () {window.open('https://www.facebook.com/yousef.moataz/', '_blank');})
}

let githubElements = document.getElementsByClassName('github-item');
for (element of githubElements)
{
  element.addEventListener('click', function () {window.open('https://github.com/YousefAllam221b', '_blank');})
}

let linkedinElements = document.getElementsByClassName('linkedin-item');
for (element of linkedinElements)
{
  element.addEventListener('click', function () {window.open('https://www.linkedin.com/in/yousefallam221b', '_blank');})
}

let emailElements = document.getElementsByClassName('email-item');
for (element of emailElements)
{
  element.addEventListener('click', function () {window. open('mailto:YousefAllam221b@gmail.com', '_blank');})
}

let phoneElements = document.getElementsByClassName('phone-item');
for (element of phoneElements)
{
  element.addEventListener('click', function () {window.location.href = 'tel://+201001097153';})
}




var sections = document.querySelectorAll('section');
var navItems = document.createDocumentFragment();


var listItems = document.querySelectorAll('.navButtons');
listItems.forEach((listItem, index , array) =>
{

  var sectionId = listItem.innerHTML.split(' ')[0].toLowerCase();
  var section = document.getElementById(sectionId);
  if (sectionId === 'home')
  {
    sectionId = 'welcome';
  }
  var section = document.getElementById(sectionId);
  listItem.addEventListener("click", function () {section.scrollIntoView();});

});

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}




var links = [('yousef.allam221b@gmail.com'), ('https://github.com/YousefAllam221b'), ('https://www.linkedin.com/in/yousefallam221b')];


function doTheyExist()
{
  var checker = document.getElementsByClassName('footer-contact');
  if (checker.length == 0)
  {
    return false;
  }
  return true;
}


function addLinks()
{
  var footerImages = document.getElementsByClassName('contact-footer-img');

  for (var i = 0; i < footerImages.length; i++)
  {

    var iElement = document.createElement('i');
    iElement.classList.add("contact-items");
    iElement.classList.add("footer-contact");
    iElement.innerHTML = links[i];
    insertAfter(iElement,footerImages[i]);
  }
}

function footerLinks()
{

  if (x.matches)
  {
    if (doTheyExist())
    {
      var links = document.getElementsByClassName('footer-contact');
      for (var i = 0; i < links.length; i++)
      {
        links[i].remove();
      }
    }
  }
  else
  {

    if (!doTheyExist())
    {
      addLinks();
    }
  }
}



var x = window.matchMedia("(max-width: 576px)")
footerLinks(x) // Call listener function at run time
x.addListener(footerLinks)



window.onresize = function(){
  footerLinks();
}


/*
var but = document.getElementById('but');
but.addEventListener('click', function () {
var divWidth = document.getElementById('row-container').clientWidth;
var cardLeftWidth = document.getElementsByClassName('show')[0].offsetLeft;

var collapseItem = document.getElementsByClassName('collapsing')[0];
collapseItem.style.width = divWidth - cardLeftWidth;
console.log(collapseItem.clientWidth);
console.log(divWidth - cardLeftWidth);
console.log(collapseItem.clientWidth);});
*/



/*
var seeMore = document.getElementById('see-more-button');

seeMore.addEventListener('click', function (){

  setTimeout(function () {
    var divWidth = document.getElementById('row-container').clientWidth;
    var cardLeftWidth = document.getElementsByClassName('collapsing')[0].offsetLeft;

    var collapseItem = document.getElementsByClassName('collapsing')[0];
    var x = divWidth - cardLeftWidth*10;
    collapseItem.style.width = ''+ x +'px';


  }, 1);

  setTimeout(function () {
    var divWidth = document.getElementById('row-container').clientWidth;
    var cardLeftWidth = document.getElementsByClassName('show')[0].offsetLeft;

    var collapseItem = document.getElementById('help');
    var x = divWidth - cardLeftWidth*10;
    collapseItem.style.width = ''+ x +'px';


  },1000);

});

var el = document.getElementById('card-container');
console.log(el);

//const {top, left, width, height} = element.getBoundingClientRect();


*/
/*

var seeMore = document.getElementById('see-more-button');
seeMore.addEventListener('click', function (){

  setTimeout(function () {
    var divWidth = document.getElementById('row-container').clientWidth;
    var cardLeftWidth = document.getElementsByClassName('collapsing')[0].offsetLeft;

    var collapseItem = document.getElementsByClassName('collapsing')[0];
    var x = divWidth - cardLeftWidth*11;
    collapseItem.style.width = ''+ x +'px';
    console.log(x);

  }, 1);
});

*/




















//
