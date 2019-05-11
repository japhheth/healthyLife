$(document).ready(function(){
    $(function() {
        $(window).on("scroll", function() {
            if($(window).scrollTop() > 40) {
                $(".header").addClass("active");
                $(".link").addClass("link-active");
                $(".color").addClass("new-color");
                $(".header").css({"position": "fixed"});
            } else {
               $(".header").removeClass("active");
               $(".link").removeClass("link-active");
               $(".color").removeClass("new-color");
               $(".header").css({"position": "relative"});

            }         
        });
    });
    $(function(){
        $(window).on("scroll", function(){
            if($(window).scrollTop() > 505 ){
                $(".section").css({"position": "fixed", "top" : "0","background-color": "white", "z-index": "1"});
                $(".header").css({"position": "relative"});
            }else{
                $(".section").css({"position": "relative"});
                $(".header").css({"position": "fixed"});
            };
        });
        
    });
    (function(){
        let words = [
            'stress',
            'sleep',
            'life',
            'energy'
            ], i = 0;
    
        setInterval(function(){
                $('#change').fadeOut(function(){
                $(this).html(words[i=(i+1)%words.length]).fadeIn();
            });
        }, 2000);
    
    })(); 

    $('#link-1').click(function(){
        $(".links").children().removeClass('active-link');
        $(this).addClass('active-link');
    });
    $('#link-2').click(function(){
        $(".links").children().removeClass('active-link');
        $(this).addClass('active-link');
    });
    $('#link-3').click(function(){
        $(".links").children().removeClass('active-link');
        $(this).addClass('active-link');
    });
    $('#link-4').click(function(){
        $(".links").children().removeClass('active-link');
        $(this).addClass('active-link');
    });
    $('#link-5').click(function(){
        $(".links").children().removeClass('active-link');
        $(this).addClass('active-link');
    });
    
    document.getElementById("toggle-btn").onclick = function() {
        document.getElementById("myNav").style.height = "100%";
        document.querySelector('.overlay').style.display ="block"
      } //caleb_hall6
      
      
      document.getElementById("closebtn").onclick = function() {
        document.getElementById("myNav").style.height = "0%";
      }
    
});