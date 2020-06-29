$(function () {
  /* Menu open */
  var navIcon = $('.js-trigger');
  var Navigation = $('.nav');
  var navClose = $('.nav-iconClose');
  navIcon.on("click", function(e){
    Navigation.toggleClass("active");
    navIcon.toggleClass("active");
    $("body").toggleClass("fixed")
  });
});

$(function () {
  var i = $("body").innerWidth(),
    t = $(".slider"),
    s = $("#topslider"),
    a = t.find(".slider_inner"),
    e = a.clone(),
    n = a.clone(),
    b = $('.txt_slider');
    var l = function() {
      var t = setTimeout(l, 1);
      clearTimeout(t),

      setTimeout(function() {
        a.addClass("load"),
        b.addClass("load")
      }, 600);

      var e = a.find("span");

      setTimeout(function() {
        e.eq(0).addClass("rotation"),
        e.eq(0).addClass("active")
      }, 800),

      setInterval(function() {
        e.each(function(t) {
          var e = $(this).offset().left;
          e < i && 0 < e ?
          ($(this).addClass("active"),
          4 != t && 8 != t || $(this).addClass("rotation"))
          :
          ($(this).removeClass("active"),
          e < -100 && ($(this).removeClass("rotation")
          ))
        })
      }, 300)
    };
    l()
    });

$(window).scroll(function() {
  var hT = $('.sec01').offset().top,
      hH = $('.sec01').outerHeight(),
      hT02 = $('.sec03').offset().top,
      hH02 = $('.sec03').outerHeight(),
      hT04 = $('.sec04').offset().top,
      hH04 = $('.sec04').outerHeight(),
      hT05 = $('.sec05').offset().top,
      hH05 = $('.sec05').outerHeight(),
      hT06 = $('.sec06').offset().top,
      hH06 = $('.sec06').outerHeight(),
      hT07 = $('.sec07').offset().top,
      hH07 = $('.sec07').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop(),
      img01 = $(".sec04_bg .img01");
      console.log("hT=: " + hT);
      console.log("hH=: " + hH);
      console.log("wH=: " + wH);
      console.log("wS=: " + wS);
  if (wS > (hT+hH-wH)){
    $('.human01').removeClass("start");
    $('.human01').addClass("end");
    $('.human02').removeClass("start");
    $('.human02').addClass("end");
    $('.title').addClass('load_effect')
  }
  if (wS > (hT02+hH02-wH)){
    $('.sec03 .container').addClass("load");
  }
  if (wS > (hT04+hH04-wH)){
    $('.sec04_txt').addClass("load_effect");
    img01.addClass('load');
  }
  if (wS > (hT05+hH05-wH)){
    $('.sec05').addClass("t-load");
  }
  if (wS > (hT06+hH06-wH)){
    $('.sec06_left_txt').addClass("load_effect");
    $('.sec06').addClass("load");
  }
  if (wS > (hT07+hH07-wH)){
    $('.sec07').addClass("load");
  }
});

$(function() {
  var e = $("header");
  $(window).on("load scroll", function() {
    var t = $(this).scrollTop();
    $(window).width();
    1 < e.offset().top ? e.not(".header_bg") && e.addClass("header_bg") : e.hasClass("header_bg") && e.removeClass("header_bg"), t
  })
});

$(function() {
  
});

$('.sec02_img').mouseenter(function(){
  var path01 = anime.path('.motion-path-demo path');
  $('.sec02_overlay').addClass('modal');
  anime({
    targets: '.motion-path-demo .el',
    translateX: path01('x'),
    translateY: path01('y'),
    rotate: path01('angle'),
    easing: 'linear',
    duration: 5000,
    loop: false
  });
  var path02 = anime.path('.motion-path-demo02 path');
  anime({
    targets: '.motion-path-demo02 .el',
    translateX: path02('x'),
    translateY: path02('y'),
    rotate: path02('angle'),
    easing: 'linear',
    duration: 5000,
    loop: false
  });
});
$('.sec02_img').mouseleave(function(){
  $('.sec02_overlay').removeClass('modal');
});
$(function() {
  var totop = $('.totop');
  totop.on("click", function(e){
    return $("html, body").animate({
      scrollTop: 0
    }, 500, "swing"), !1
  })
});

  function showAxes(ctx,axes) {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            var xMin = 0;           
        }
        function drawPoint(ctx, y) {            
            var radius = 3;
            ctx.beginPath();
            // Hold x constant at 4 so the point only moves up and down.
            ctx.arc(4, y, radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'gray';
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        function plotSine(ctx, xOffset, yOffset) {
            var width = ctx.canvas.width;
            var height = ctx.canvas.height;
            var scale = 20;
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "gray";
            // console.log("Drawing point...");
            // drawPoint(ctx, yOffset+step);
            
            var x = 4;
            var y = 0;
            var amplitude = 40;
            var frequency = 20;
            //ctx.moveTo(x, y);
            ctx.moveTo(x, 50);
            while (x < width) {
                y = height/2 + amplitude * Math.sin((x+xOffset)/frequency);
                ctx.lineTo(x, y);
                x++;
                // console.log("x="+x+" y="+y);
            }
            ctx.stroke();
            ctx.save();
            //console.log("Drawing point at y=" + y);
            drawPoint(ctx, y);
            ctx.stroke();
            ctx.restore();
        }
        function draw() {
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, 500, 500);
            showAxes(context);
            context.save();            
            
            plotSine(context, step, 50);
            context.restore();
            
            step += 2;
            window.requestAnimationFrame(draw);
        }
        function init() {
            window.requestAnimationFrame(draw);
            spirograph();
        }
        var step = -4;