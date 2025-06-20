Shery.imageEffect("#back", {
  style: 5,
//   debug: true,
  gooey: true,
  config: {
    a: { value: 1.15, range: [0, 30] },
    b: { value: -0.89, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.068552806824315 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1.06, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.07, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.33, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.12, range: [0, 2] },
    noise_scale: { value: 13.74, range: [0, 100] },
  },
});


let elems = document.querySelectorAll('.elem');

elems.forEach(function(elem){


let h1s = elem.querySelectorAll("h1");
let index = 0 ;
let anime = false;

document.querySelector("#main").addEventListener("click" , function(){
   
    if(!anime){

        anime = true;

        
    gsap.to(h1s[index] , {
        top: '-=100%',
        ease: Expo.easeInout,
        duration:1,
        onComplete:function(){
            gsap.set(this._targets[0] , {top:'100%'})
            anime = false;
        }
    })
  index === h1s.length - 1 ? index = 0 : index++;
    gsap.to(h1s[index] , {
        top: '-=100%',
        ease: Expo.easeInout,
        duration:1
    })
    }

})



});
