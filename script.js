console.log("Script running...")
// Task 1: Intro section
// Select the location button
let button = document.querySelector("#location")
console.log(button)

// Select the empty p tag under the button
let tag = document.querySelector("#locationText")
console.log(tag)

// Add an event listener on the location button such that when it is clicked, the text in the p tag is "1300 Boynton Ave (moving soon!)"
button.addEventListener("click",function(event){
tag.textContent=" 1300 Boynton Ave is moving soon!"
})



// Task 2: Our Values section
// Select the h3 with S under "Our Values"
let h3= document.querySelector("#score1")
console.log(h3)

// Add an event listener on the h3 such that when it is clicked, the text changes to "Self-Awareness"
h3.addEventListener("click",function(event){
h3.textContent="Self-Awareness"
})



// Task 3: Uniform section
// Select the joggers image
let button2= document.querySelector("#joggers")
console.log(button2)

// Add an event listener on the image such that when it is clicked, the src becomes joggers-back.webp
// button2.addEventListener("click",function(event){
// button2.src="joggers-back.webp"
// })



// EXTRA CREDIT
// Set up the DOM manipulation flows for the rest of the SCORE values (consistency, ownership, resilience, excellent)
let ha= document.querySelector("#score2")
console.log(ha)
ha.addEventListener("click",function(event){
ha.textContent="Consistency"
})

let hb= document.querySelector("#score3")
console.log(hb)
hb.addEventListener("click",function(event){
hb.textContent="Onwership"
})
let hc= document.querySelector("#score4")
console.log(hc)
hc.addEventListener("click",function(event){
hc.textContent="Resilience"
})
let hd= document.querySelector("#score5")
console.log(hd)
hd.addEventListener("click",function(event){
hd.textContent="Excellent"
})

// Comment out the event listener in the uniform section and do the following instead
// Add an event listener on the image such that when the mouse is over it, the src becomes joggers-back.webp
button2.addEventListener("mouseover",function(event){
button2.src="joggers-back.webp"
})


// Add an event listener on the image such that when the mouse is off it, the src becomes joggers-front.webp
button2.addEventListener("mouseout",function(event){
button2.src="joggers-front.webp"
})



