var tl = gsap.timeline({
    repeat: -1,
});

tl
.to(".imagecontainer",{
    ease: Expo.easeInOut,
    width:"100%",
    
    duration: 5,
    stagger: 2,

},"a")

.to("h1",{
    
ease: Expo.easeInOut,
   
    stagger: 2,
    duration: 3.5,
    top: 0,

},"a")

.to("h1",{
    delay: 3.5,
    ease: Expo.easeInOut,
    stagger: 2,

    top: "-100%",
},"a")







// gsap.to(".imagecontainer",{
//     ease: Expo.easeInOut,
//     width:"100%",
    
//     duration: 5,
//     stagger: 2,

// })

// gsap.to("h1",{
    
//     ease: Expo.easeInOut,
   
//     stagger: 2,
//     duration: 3,
//     top: 0,

// })

// gsap.to("h1",{
//     delay: 3,
//     ease: Expo.easeInOut,
//     stagger: 2,

//     top: "-100%",

// })









