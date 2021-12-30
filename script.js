let slide = document.querySelectorAll(".slide")
console.log(slide)
let  next = document.querySelector(".nextBtn")
let previous = document.querySelector(".prevBtn")

slide.forEach(function(slide,index){
    slide.style.left =`${index*100}%`
    
});
// slide.for(let i in slide){
//     slide.style.left = `${i*100}%`
// }

let counter =0;
next.addEventListener("click",function(){
    counter++;
    carousel();
})
previous.addEventListener("click",function(){
    counter--;
    carousel();
})

function carousel(){
    if(counter==slide.length){
        counter =0;

    }
    if(counter<0){
        counter=(slide.length)-1;
    }
    slide.forEach(function(slide){
        slide.style.transform =`translateX(-${counter*100}%)`;
    })
}