
let lenis = new Lenis();
function raf(time){
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


let ispageready = false;
let tl = gsap.timeline();
tl.to("nav",{
    width:"80%",
    borderRadius:"50px",
    duration:1,
})
tl.from(".navstagger",{
    opacity:0,
    x:-100,
    duration:0.5,
    stagger:0.1,
})
tl.from("#first-section #hero-content, #first-section #start-searching",{
    display:"none",
    opacity:0,
    duration:0.5,
})


gsap.to("#first-section #start-searching h1",{
    opacity:0,
    duration:0.5,
    repeat:-1,
    yoyo:true,
})

document.addEventListener("wheel",(value)=>{
    if(value.deltaY > 0){
        gsap.to("nav",{
            top:"-100px",
            duration:0.5,
        })
    }
    else{
        gsap.to("nav",{
            top:"3%",
            duration:0.5,
        })
    }
})

document.addEventListener("scroll", () => {
    if(ispageready){
        const scrollPosition = window.scrollY;
        const lastScrollPosition = window.lastScrollPosition || 0;
        if (scrollPosition > lastScrollPosition) {
            gsap.to("nav", {
                top: "-200px",
                duration: 0.5,
            })
        } else {
            gsap.to("nav", {
                top: "3%",
                duration: 0.5,
            })
        }
        window.lastScrollPosition = scrollPosition;
    }
})

gsap.to("#first-section #overlay h1",{
    display:"block",
    fontSize:"2rem",
    duration:5,
    yoyo:true,
    scrollTrigger:{
        trigger:"#first-section",
        start:"bottom 95%",
        end:"bottom 70%",
        scrub:true,
    }
})
gsap.to("#first-section #overlay",{

    backgroundColor:"rgb(17, 17, 17)",
    duration:0.01,
    zIndex:1,
    yoyo:true,
    scrollTrigger:{
        trigger:"#first-section",
        start:"bottom 97%",
        end:"bottom 90%",
        scrub:true,
    }
})

window.onload = function() {
    window.scrollTo(0, 0);
};

document.querySelector("#first-section #start-searching h1").addEventListener("click",()=>{
    window.scrollTo({
        top:400,
        behavior:"smooth",
    })
})

gsap.to("#second-section #line-move-down i",{
    top:"98%",
    duration:10,
    ease:"none",
    scrollTrigger:{
        trigger:"#second-section #boxcontainer",
        scroller:"body",
        start:"top 50%",
        end:"bottom 0%",
        scrub:true,
    }
})

gsap.from("#second-section #box1 ",{
    scale:0.5,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#second-section #boxcontainer",
        start:"top 100%",
        end:"bottom 30%",
        scrub:true,
    }
})

gsap.from("#third-section #feedback_box",{
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#third-section",
        scroller:"body",
        start:"top 50%",
    }
})

let feedbackcontent = [
    {
        name:"Alex Johnson",
        feedback:"As a movie buff, CineFinder has become my go-to tool. The interface is sleek, and it makes finding new releases and old classics a breeze.",
    },
    {
        name:"Emily Smith",
        feedback:"I love CineFinder! It's so easy to use and has a great selection of movies. The search feature is top-notch, and I always find what I'm looking for.",
    },
    {
        name:"Michael Brown",
        feedback:"CineFinder is a game-changer! The interface is clean and user-friendly, and the movie suggestions are spot on. I've discovered so many hidden gems I never would have found otherwise.",
    }   
]

let currentfeedback = 0;

let right = document.querySelector("#third-section #feedback_box i:nth-child(3)");
let left = document.querySelector("#third-section #feedback_box i:nth-child(1)");

right.addEventListener("click",()=>{
    if(currentfeedback > 1){
        currentfeedback = 0;
    }
    else{
        currentfeedback++;
    }
    let tl = gsap.timeline();
    tl.to("#third-section #feedback_box_1",{
        opacity:0,
        duration:0.5,
        onComplete:()=>{
            document.querySelector("#third-section #feedback_box_1 h4").textContent = feedbackcontent[currentfeedback].name;
            document.querySelector("#third-section #feedback_box_1 p").textContent = feedbackcontent[currentfeedback].feedback;
        }
    })
    tl.to("#third-section #feedback_box_1",{
        opacity:1,
        duration:0.5,
    })
})
left.addEventListener("click",()=>{
    if(currentfeedback < 1){
        currentfeedback = 2;
    }
    else{
        currentfeedback--;
    }
    let tl = gsap.timeline();
    tl.to("#third-section #feedback_box_1",{
        opacity:0,
        duration:0.5,
        onComplete:()=>{
            document.querySelector("#third-section #feedback_box_1 h4").textContent = feedbackcontent[currentfeedback].name;
            document.querySelector("#third-section #feedback_box_1 p").textContent = feedbackcontent[currentfeedback].feedback;
        }
    })
    tl.to("#third-section #feedback_box_1",{
        opacity:1,
        duration:0.5,
    })
})               

document.querySelector("#fourth-section #start_button img").addEventListener("mouseenter",()=>{
    gsap.to("#fourth-section #start_button img",{
        scale:1.1,
        duration:0.5,
    })  
})

document.querySelector("#fourth-section #start_button img").addEventListener("mouseleave",()=>{
    gsap.to("#fourth-section #start_button img",{
        scale:1,
        duration:0.5,
    })  
})  

document.querySelector("#copyright #socialmedia i:nth-child(1)").addEventListener("mouseenter",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(1)",{
        scale:1.3,
        duration:0.2,
        ease:"power2.inOut",
    })
})
document.querySelector("#copyright #socialmedia i:nth-child(1)").addEventListener("mouseleave",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(1)",{
        scale:1,
        duration:0.2,
        ease:"power2.inOut",
    })
})

document.querySelector("#copyright #socialmedia i:nth-child(2)").addEventListener("mouseenter",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(2)",{
        scale:1.3,
        duration:0.2,
        ease:"power2.inOut",
    })
})
document.querySelector("#copyright #socialmedia i:nth-child(2   )").addEventListener("mouseleave",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(2)",{
        scale:1,
        duration:0.2,
        ease:"power2.inOut",
    })
})

document.querySelector("#copyright #socialmedia i:nth-child(3)").addEventListener("mouseenter",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(3)",{
        scale:1.3,
        duration:0.2,
        ease:"power2.inOut",
    })
})
document.querySelector("#copyright #socialmedia i:nth-child(3)").addEventListener("mouseleave",()=>{
    gsap.to("#copyright #socialmedia i:nth-child(3)",{
        scale:1,
        duration:0.2,
        ease:"power2.inOut",
    })
})

gsap.from("#fourth-section #fourth_content",{
    y:100,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#fourth-section",
        start:"top 50%",
    }
})

gsap.from("#fourth-section #copyright #socialmedia i",{
    y:50,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#fourth-section",
        start:"top 30%",
    }
})
