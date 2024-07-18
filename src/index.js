const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log('scroll!');
  if (window.scrollY > 500) {
    //배지 없애기 
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'  
    });
  } 
  else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
     });
  }
}, 300));
// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl,1,{
    delay: (index + 1) * .7,
    opacity:1
  });
});
