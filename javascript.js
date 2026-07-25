const images = [
"https://picsum.photos/id/1015/900/700",
"https://picsum.photos/id/1011/900/700",
"https://picsum.photos/id/1025/900/700",
"https://picsum.photos/id/1039/900/700",
"https://picsum.photos/id/1043/900/700",
"https://picsum.photos/id/1074/900/700"
];

let current = 0;

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(index){

current=index;
lightbox.style.display="flex";
lightboxImg.src=images[current];

}

function closeLightbox(){

lightbox.style.display="none";

}

function changeImage(step){

current+=step;

if(current<0)
current=images.length-1;

if(current>=images.length)
current=0;

lightboxImg.src=images[current];

}

function filterImages(category){

let items=document.querySelectorAll(".image");

items.forEach(item=>{

if(category=="all"){
item.style.display="block";
}
else if(item.classList.contains(category)){
item.style.display="block";
}
else{
item.style.display="none";
}

});

}