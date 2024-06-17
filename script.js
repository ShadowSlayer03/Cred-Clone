let tl = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#part2",
      //markers: true,
      end: "bottom 0%",
      start: "top 40%",
    },
  });
  
  tl.from("#p2-img3,#p2-img2, #p2-img4,#p2-img1, #p2-img5", {
    duration: 1.5,
    scale: 0.5,
    opacity: 0,
    bottom: "-100vh",
  });

  let tl1 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#part6",
      //markers: true,
      scrub: 5,
      start: "50% 50%",
      end: "190% 50%",
      pin: true,
    }
  })

  tl1.to("#scroll-1",{
    y: "-70vh",
  })

  tl1.to("#scroll-1",{
    opacity: 0,
  })

  tl1.to("#scroll-2",{
    opacity: 1,
    y: "-10vh",
  },"anim1")

  tl1.to("#phone-imgs img",{
    transform: "translateX(-100%)",
  },"anim1")

  tl1.to("#scroll-2",{
    y: "-70vh",
  })

  tl1.to("#scroll-2",{
    opacity: 0,
  })

  tl1.to("#scroll-3",{
    opacity: 1,
    y: "-10vh",
  },"anim2")

  tl1.to("#phone-imgs img",{
    transform: "translateX(-200%)",
  },"anim2")


  tl1.to("#scroll-3",{
    y: "-70vh",
  })

  tl1.to("#scroll-3",{
    opacity: 0,
  })

  tl1.to("#scroll-4",{
    opacity: 1,
    y: "-10vh",
  },"anim3")

  tl1.to("#phone-imgs img",{
    transform: "translateX(-300%)",
  },"anim3")


let testimonial = document.querySelector("#testimonial p");
let testimonialName = document.querySelector("#testimonial span");
let circles = document.querySelectorAll(".circle");
let testiArr = [
  "this is a great app loaded with functionality and simplicity yet elegant and intuitive. a must have for the plastic money users. keeps me in financial discipline and helps me take the billing and payment worries out of my mind",
  "in love! such a seamless user experience, smooth as freshly waxed pair of legs! very intuitive and easy to use application. good job people, good job.",
  "i would say one of the best platforms to manage your credit card payments with lot of advantages and rewards. you can even pay rent to your owner using credit card. that's really cool. thanks for all the awesomeness. keep inventing !!",
  "have been using the app for an year... very happy with this. it greatly avoids the need for searching for statements individually and logging in to pay them all. with cred i can happily pay all my cc bills with a single click. love the experience.",
  "great app, paying dues of credit card was never that much easy and fast. few more rewarding features also available there like showing credit score, can easily pay rent, getting cashback whenever paying cc dues. lots more. i really loves cred."
]
let testiNames = ["ranesh bhattacharya","parul mehra","jagadeeswar reddy singam","pushpalatha a","sanjeev kataria"];

circles.forEach(circle => {
  circle.addEventListener('click', (e) => {
    e.target.classList.toggle("active");
    for (let i = 0; i < 5; i++) 
    {
      if(e.target==circles[i])
      {
        testimonial.textContent = testiArr[i];
        testimonialName.textContent = testiNames[i];
      }
    }
    if(e.target)
    circles.forEach(otherCircle => {
      if (otherCircle !== e.target && otherCircle.classList.contains("active")) {
        otherCircle.classList.remove("active");
      }
    });
  });
});
