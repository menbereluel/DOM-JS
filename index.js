const image = document.getElementById('myimage');
const styleParagraph=document.getElementById('sell');
// const img=document.getElementById('fruit-image');
// img.style.width='50px';
// img.style.height='50px'
styleParagraph.style.color='white';
styleParagraph.style.fontSize='30pt';
styleParagraph.style.marginLeft='40%';
const vegetableList=document.getElementById('vegList')
vegetableList.style.display='flex';
vegetableList.style.gap='40px';
vegetableList.style.marginLeft='25%';
vegetableList.style.listStyle='none';

const lists=document.getElementById('fruList')
lists.style.display='flex';
lists.style.gap='40px';
lists.style.marginLeft='25%';
lists.style.listStyle='none';




// Change document background color to silver
document.body.style.backgroundColor = "silver";

// Change the font color for h1 title tag to green
const styleTitle=document.getElementById('title');
styleTitle.style.color='green';
styleTitle.style.marginLeft='35%';
styleTitle.style.fontSize='45pt'

// Change the font case for h3 title tags to uppercase
document.querySelectorAll("h3").forEach(function(h3) {
  h3.style.textTransform = "uppercase";
  h3.style.marginLeft='45%';
   h3.style.paddingBottom='5%';
   h3.style.paddingTop='30px';
  h3.style.fontSize='30px';
  h3.style.color='white';

});

// Add one more fruit to the fruits list

function addFruit() {
    const listElement = document.getElementById('fruList');
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Mango';
    newListItem
    listElement.appendChild(newListItem);
  }

function addvegetable() {
    const listElement = document.getElementById('vegList');
    const newListItem = document.createElement('li');
    newListItem.textContent = 'Cabbage';
    newListItem
    listElement.appendChild(newListItem);
  }

const newImage = document.createElement('img');
const imageContent = document.create
newImage.src = 'images/vegetable.jpg'
newImage.alt = 'image';
newImage.style.marginLeft='30%'
newImage.style.boxShadow='2px 0 10px';
image.appendChild(newImage);

// Select all <li> elements inside #fruList and #vegList
const fruitListItems = document.querySelectorAll('#fruList li');
const vegListItems = document.querySelectorAll('#vegList li');

// Function to set font size
function setFontSize(list, size) {
  list.forEach(li => {
    li.style.fontSize = '30px'
  
     
  });
}

const clickButton=document.getElementById('click-button');
clickButton.addEventListener('click',()=>{
    clickButton.style.backgroundColor = 'green';
    clickButton.textContent ='BUY!!';
});

setFontSize(fruitListItems, '30px');
setFontSize(vegListItems, '30px');





