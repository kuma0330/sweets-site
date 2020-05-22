// TweenMax.to(".loading-screen", 0.1, {
//   top: "-110%",
//   ease: Expo.easeInOut
// });

TweenMax.to(".loading-container", 3, {
  delay: 5,
  opacity: 0,
  ease: Power3.easeInOut,
  display: "" 
}, 0.1);

TweenMax.to(".loading-cover", 0.1, {
  delay: 5,
  opacity: 0,
  ease: Power3.easeInOut,
  display: "",
}, 0.1);

TweenMax.to(".menu__toggler", 0.5, {
  delay: 6,
  opacity: 1,
  ease: Power3.easeInOut,
  display: "",
}, 0.1);

/* --------------------------------
 * ハンバーガーメニュー
 * -------------------------------- */
$('.menu__toggler').click(function(){

  $(this).toggleClass('active');
  $('.menu__contents').toggleClass('active')
});

/* --------------------------------
 * top-imageのslider
 * -------------------------------- */

  $(".home-slider-inner").slick({
    autoplay: true,
    autoplayspeed: 5000,
    dots: false,
    fade: true,
    speed: 2000,
    infinite: true,
    cssEase: 'ease-in-out',
    arrows: false,
    loop: true,
    centerMode: true
  });

 /* --------------------------------
 * スムーズスクロール
 * -------------------------------- */
$('a[href^="#"]').click(function() {

  var speed = 400;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href); 
  var position = target.offset().top;

  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
});

 /* --------------------------------
 * ScrollMagic TimelineMax
 * -------------------------------- */

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();
    var potatoTimeLine = new TimelineMax({ paused: true });
    var creamTimeLine = new TimelineMax({ paused: true });
    var bakedTimeLine = new TimelineMax({ paused: true });
    var ProductsTimeLine = new TimelineMax({ paused: true });;
    var ConceptTimeLine = new TimelineMax({ paused: true });;
    var AccessTimeLine = new TimelineMax({ paused: true });;
  
    /*concept vars*/
    var products = $('#products')
    var concept = $('#concept');
    var access = $('#access');
  
    var TextPotato = $(concept).find('.text-potato');
    var ImagePotato = $(concept).find('.image-potato');
    var PotatoTextCover = $(concept).find('.pt-cover');
    var PotatoImageCover = $(concept).find('.pi-cover');
  
    var TextCream = $(concept).find('.text-cream');
    var ImageCream = $(concept).find('.image-cream');
    var CreamTextCover = $(concept).find('.ct-cover');
    var CreamImageCover = $(concept).find('.ci-cover');
  
    var TextBaked = $(concept).find('.text-baked');
    var ImageBaked = $(concept).find('.image-baked');
    var BakedTextCover = $(concept).find('.bt-cover');
    var BakedImageCover = $(concept).find('.bi-cover');

    var ProductsHead = $(products).find('.headline');
    var ProductsSub = $(products).find('.sub-headline');
    var ProductsLineUp = $(products).find('.products__line-up');
    var ConceptHead = $(concept).find('.headline');
    var ConceptSub = $(concept).find('.sub-headline');
    var AccessHead = $(access).find('.headline');
    var AccessSub = $(access).find('.sub-headline');
    
    var animationSpeed = 0.75;
    var animationTimingIn = Expo.easeIn;
    var animationTimingOut = Expo.easeOut;
  
    /************************************************* */
  
    ProductsTimeLine
      .fromTo(
        ProductsHead,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn},
        { x: '0%', ease: animationTimingOut}
      )
      .fromTo(
        ProductsSub,
        animationSpeed,
        { x: '110%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut },
        '-=.75'
      )
      .fromTo(
        ProductsLineUp,
        animationSpeed,
        { y: '100%', ease: animationTimingIn, display:'', opacity: 0 },
        { y: '0%', ease: animationTimingOut, display:'inline-block', opacity: 1  },
        '-=.1'
      );
  
      /*products scene*/
      new ScrollMagic.Scene({
        triggerElement: '#products',
        triggerHook: 0.4
      })
        .setTween(ProductsTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);

    /************************************************* */
  
    ConceptTimeLine
      .fromTo(
        ConceptHead,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut }
      )
      .fromTo(
        ConceptSub,
        animationSpeed,
        { x: '110%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut },
        '-=.75'
      );
  
      /*concept scene*/
      new ScrollMagic.Scene({
        triggerElement: '#concept',
        triggerHook: 0.7
      })
        .setTween(ConceptTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);

    /************************************************* */
  
    AccessTimeLine
      .fromTo(
        AccessHead,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut }
      )
      .fromTo(
        AccessSub,
        animationSpeed,
        { x: '110%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut },
        '-=.75'

      );
  
      /*access scene*/
      new ScrollMagic.Scene({
        triggerElement: '#access',
        triggerHook: 0.7
      })
        .setTween(AccessTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);



    /************************************************* */
  
    potatoTimeLine
      .fromTo(
        TextPotato,
        animationSpeed,
        { x: '-100%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut }
      )
      .fromTo(
        ImagePotato,
        animationSpeed,
        { x: '110%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut },
        '-=.75'
      )
      .fromTo(
        PotatoTextCover,
        animationSpeed * 2,
        { x: '0%', ease: animationTimingIn },
        { x: '100%', ease: animationTimingOut },
        '-=.1'
      )
      .fromTo(
        PotatoImageCover,
        animationSpeed * 2,
        { x: '0%', ease: animationTimingIn },
        { x: '-100%', ease: animationTimingOut },
        '-=1.5'
      );
  
      /*potato scene*/
      new ScrollMagic.Scene({
        triggerElement: '.concept-card__text',
        triggerHook: 0.65
      })
        .setTween(potatoTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);
    /******************************** */
  
    creamTimeLine
      .fromTo(
        TextCream,
        animationSpeed,
        { x: '100%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut }
      )
      .fromTo(
        ImageCream,
        animationSpeed,
        { x: '-110%', ease: animationTimingIn },
        { x: '0%', ease: animationTimingOut },
        '-=.75'
      )
      .fromTo(
        CreamTextCover,
        animationSpeed * 2,
        { x: '0%', ease: animationTimingIn },
        { x: '-100%', ease: animationTimingOut },
        '-=.1'
      )
      .fromTo(
        CreamImageCover,
        animationSpeed * 2,
        { x: '0%', ease: animationTimingIn },
        { x: '100%', ease: animationTimingOut },
        '-=1.5'
      );
  
      /*cream scene*/
      new ScrollMagic.Scene({
        triggerElement: '.text-cream',
        triggerHook: 0.65
      })
        .setTween(creamTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);
  
    /******************************** */
  
    bakedTimeLine
    .fromTo(
      TextBaked,
      animationSpeed,
      { x: '-100%', ease: animationTimingIn },
      { x: '0%', ease: animationTimingOut }
    )
    .fromTo(
      ImageBaked,
      animationSpeed,
      { x: '110%', ease: animationTimingIn },
      { x: '0%', ease: animationTimingOut },
      '-=.75'
    )
    .fromTo(
      BakedTextCover,
      animationSpeed * 2,
      { x: '0%', ease: animationTimingIn },
      { x: '100%', ease: animationTimingOut },
      '-=.1'
    )
    .fromTo(
      BakedImageCover,
      animationSpeed * 2,
      { x: '0%', ease: animationTimingIn },
      { x: '-100%', ease: animationTimingOut },
      '-=1.5'
    );
  
      /*baked scene*/
      new ScrollMagic.Scene({
        triggerElement: '.text-baked',
        triggerHook: 0.65
      })
        .setTween(bakedTimeLine)
        .setPin(true)
        .reverse(true)
        // .addIndicators()
        .addTo(controller);
  });
  