latestImg = {
    "img1":"ShopImage.png", 
    "img2":"GalacticImage.png", 
    "img3":"DriveImage.png",
    "img4":"GuardImage.png",
};

workImg = {
    "img1":"ArcadeImg.png", 
    "img2":"samuraiSamImg.png", 
    "img3":"bleeeh_game_pic.png",
    "img4":"areoles_game_pic.png"
};

productDesign = {
    "img1":"umbra_pic.png",
    "img2":"mePosterpic.png",
    "img3":"samuraiSam_pic.png",
    "img4":"infamousLogoPic.png",
    "img5":"l33_pic.png",
    "img6":"specii_pic.png"
};

visualArt = {
    "img1":"Ice-cream_pic.png",
    "img2":"portrait_pic.png",
    "img3":"bathroom_pic.png",
    "img4":"qaci_2_pic.png",
    "img5":"hippie_house_pic.png",
    "img6":"infamous_pic.png"
};

characterDesign = {
    "img1":"highOnPink.png",
    "img2":"cacti.png",
    "img3":"bbOnly.png",
    "img4":"roll.png"
};


let nextNr=0;


$(document).ready(function() {

    //nav buttons
    $("#items div button").mouseover(function(e){
        $(e.currentTarget).addClass("hovered");
    });
    
    $("#items div button").mouseleave(function(e){
        $(e.currentTarget).removeClass("hovered");
    });

    $("#latestWork").mouseover(function(){
        $("button#latestWork").css('background-color', '#49032E');
    });
    
    $("#latestWork").mouseleave(function(){
        $("button#latestWork").css('background-color', '#6D214F');
    });
    
    //Hover effect images
    //Image1
    $("#items div#1").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img1+'")');
        $("#1 button").removeClass("hide");
        $("#1 p").removeClass("hide");
        $("#1 section").addClass("rec");
        $(this).css({
            "transform": "scale(1.08)",
            "transition": "transform 0.3s",
        });
    });

    
        $("#items div#1").click(function(e){
            e.preventDefault();
            var label=$(e.currentTarget).find("h5").html();
        if(label=="SHOP THE PIN"){
            window.location.href = "http://127.0.0.1:5500/ShopPin.html?prev=home";}
        });    

    $("#items div#1").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $(this).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        });  
    });

    //Image2
    $("#items div#2").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img2+'")');
        $("#2 button").removeClass("hide");
        $("#2 p").removeClass("hide");
        $("#2 section").addClass("rec");
        $(this).css({
            "transform": "scale(1.08)",
            "transition": "transform 0.3s",
        });
    });

    $("#items div#2").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
    if(label=="GALACTIC EXPRESS"){
        window.location.href = "http://127.0.0.1:5500/Galactic.html?prev=home";}
    });

    $("#items div#2").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img2+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $(this).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        });  
    });

    //Image3
    $("#items div#3").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img3+'")');
        $("#3 button").removeClass("hide");
        $("#3 p").removeClass("hide");
        $("#3 section").addClass("rec");
        $(this).css({
            "transform": "scale(1.08)",
            "transition": "transform 0.3s",
        });
    });

    $("#items div#3").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
    if(label=="IMPAIRED"){
        window.location.href = "http://127.0.0.1:5500/Impaired.html?prev=home";}
    });

    $("#items div#3").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img3+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $(this).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        });  
    });

    //Image4
    $("#items div#4").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img4+'")');
        $("#4 button").removeClass("hide");
        $("#4 p").removeClass("hide");
        $("#4 section").addClass("rec");
        $(this).css({
            "transform": "scale(1.08)",
            "transition": "transform 0.3s",
        });
    });

    $("#items div#4").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
    if(label=="HIGH INFINITY GUARD"){
        window.location.href = "http://127.0.0.1:5500/Guard.html?prev=home";}
    });

    $("#items div#4").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img4+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $(this).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s",
        });  
    });

    //Categories hover cards
    $("#gamesCat").mouseover(function(e){
        $(e.currentTarget).find("#round").removeClass("hide");
        $("#gameBot").addClass("hide");
        $(e.currentTarget).removeClass("default");
        $(e.currentTarget).addClass("hoverCat");
    });
    $("#gamesCat").mouseleave(function(e){
        $(e.currentTarget).find("#round").addClass("hide");
        $("#gameBot").removeClass("hide");
        $(e.currentTarget).removeClass("hoverCat");
        $(e.currentTarget).addClass("default");
    });

    $("#gamesCat").click(function () {
        window.location.href = "http://127.0.0.1:5500/work.html";
    });

    $("#productCat").mouseover(function(e){
        $(e.currentTarget).find("#round").removeClass("hide");
        $("#proBot").addClass("hide");
        $(e.currentTarget).removeClass("default");
        $(e.currentTarget).addClass("hoverCat");
    });
    $("#productCat").mouseleave(function(e){
        $(e.currentTarget).find("#round").addClass("hide");
        $("#proBot").removeClass("hide");
        $(e.currentTarget).removeClass("hoverCat");
        $(e.currentTarget).addClass("default");
    });

    $("#productCat").click(function () {
        window.location.href = "http://127.0.0.1:5500//work.html?page=product";
    });

    $("#characterCat").mouseover(function(e){
        $(e.currentTarget).find("#round").removeClass("hide");
        $("#charBot").addClass("hide");
        $(e.currentTarget).removeClass("default");
        $(e.currentTarget).addClass("hoverCat");
    });
    $("#characterCat").mouseleave(function(e){
        $(e.currentTarget).find("#round").addClass("hide");
        $("#charBot").removeClass("hide");
        $(e.currentTarget).removeClass("hoverCat");
        $(e.currentTarget).addClass("default");
    });

    $("#characterCat").click(function () {
        window.location.href = "http://127.0.0.1:5500//work.html?page=character";
    });

    $("#visualCat").mouseover(function(e){
        $(e.currentTarget).find("#round").removeClass("hide");
        $("#visBot").addClass("hide");
        $(e.currentTarget).removeClass("default");
        $(e.currentTarget).addClass("hoverCat");
    });
    $("#visualCat").mouseleave(function(e){
        $(e.currentTarget).find("#round").addClass("hide");
        $("#visBot").removeClass("hide");
        $(e.currentTarget).removeClass("hoverCat");
        $(e.currentTarget).addClass("default");
    });

    $("#visualCat").click(function () {
        window.location.href = "http://127.0.0.1:5500//work.html?page=art";
    });

    //Footer button
    $("footer button").mouseover(function(e){
        $(e.currentTarget).addClass("topHover");
        $(e.currentTarget).find("svg").html('<path d="M4 7.3335L8 3.3335L12 7.3335M4 12.6668L8 8.66683L12 12.6668" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
        $("footer a").addClass("aHover");
    });
    $("footer button").mouseleave(function(e){
        $(e.currentTarget).removeClass("topHover");
        $(e.currentTarget).find("svg").html('<path d="M4 7.3335L8 3.3335L12 7.3335M4 12.6668L8 8.66683L12 12.6668" stroke="#BABABA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
        $("footer a").removeClass("aHover");
    });

    //Footer social icons
    $("#linkdeIn").mouseover(function(e){
        $(e.currentTarget).html('<path d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17M7 7.01002L7.01 6.99902" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });
    $("#linkdeIn").mouseleave(function(e){
        $(e.currentTarget).html('<path d="M7 17V10M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17M7 7.01002L7.01 6.99902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });

    $("#insta").mouseover(function(e){
        $(e.currentTarget).html('<path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z" stroke="#B074FF" stroke-width="1.5"/><path d="M17.5 6.51002L17.51 6.49902" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });
    $("#insta").mouseleave(function(e){
        $(e.currentTarget).html('<path d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16Z" stroke="white" stroke-width="1.5"/><path d="M17.5 6.51002L17.51 6.49902" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });

    $("#deviantArt").mouseover(function(e){
        $(e.currentTarget).html('<path d="M12.5 8C12.9 7.6 13.3333 6.5 13.5 6H16.5V8L14 12C13.6 12.4 13.8333 12.5 14 12.5H16V16H12.5H12L11 17.5C11 17.5098 10.9998 17.5195 10.9994 17.5289C10.5 18 10.6626 18 10.5 18H8V15.5L10 12C10.4 11.6 10.1667 11.5 10 11.5H8V8.5H12L12.5 8Z" stroke="#B074FF" stroke-width="1.2" stroke-linejoin="round"/><path d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="#B074FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });
    $("#deviantArt").mouseleave(function(e){
        $(e.currentTarget).html('<path d="M12.5 8C12.9 7.6 13.3333 6.5 13.5 6H16.5V8L14 12C13.6 12.4 13.8333 12.5 14 12.5H16V16H12.5H12L11 17.5C11 17.5098 10.9998 17.5195 10.9994 17.5289C10.5 18 10.6626 18 10.5 18H8V15.5L10 12C10.4 11.6 10.1667 11.5 10 11.5H8V8.5H12L12.5 8Z" stroke="white" stroke-width="1.2" stroke-linejoin="round"/><path d="M21 8V16C21 17.3261 20.4732 18.5979 19.5355 19.5355C18.5979 20.4732 17.3261 21 16 21H8C6.67392 21 5.40215 20.4732 4.46447 19.5355C3.52678 18.5979 3 17.3261 3 16V8C3 6.67392 3.52678 5.40215 4.46447 4.46447C5.40215 3.52678 6.67392 3 8 3H16C17.3261 3 18.5979 3.52678 19.5355 4.46447C20.4732 5.40215 21 6.67392 21 8Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>');
    });

    //About Page
    //Download button
    $("#CV").mouseover(function(e){
        $(e.currentTarget).removeClass("defCV");
        $(e.currentTarget).addClass("hoverCV");
    });
    
    $("#CV").mouseleave(function(e){
        $(e.currentTarget).removeClass("hoverCV");
        $(e.currentTarget).addClass("defCV");
    });

    //Check button
    $("#check").mouseover(function(e){
        $(e.currentTarget).removeClass("defCheck");
        $(e.currentTarget).addClass("hoverCheck");
    });
    
    $("#check").mouseleave(function(e){
        $(e.currentTarget).removeClass("hoverCheck");
        $(e.currentTarget).addClass("defCheck");
    });

    //Contact button
    $("#cont").mouseover(function(e){
        $(e.currentTarget).removeClass("contDefault");
        $(e.currentTarget).addClass("contHover");
    });
    
    $("#cont").mouseleave(function(e){
        $(e.currentTarget).removeClass("contHover");
        $(e.currentTarget).addClass("contDefault");
    });

    //About cards
    $("#aboutCards").mouseover(function(e){
        $("#aboutCards").css("background-color", "#24051B");
        $("#aboutCards figure img:first").attr("src", "imgs/backstoryIconHover.png");
    });
    
    $("#aboutCards").mouseleave(function(e){
        $("#aboutCards").css("background-color", "#1B0314");
        $("#aboutCards figure img:first").attr("src", "imgs/backStoryIcon.png");
    });

    $(".lower").mouseover(function(e){
        $(".lower").css("background-color", "#24051B");
        $("#aboutCards figure img").eq(1).attr("src", "imgs/expIconHover.png");
    });
    
    $(".lower").mouseleave(function(e){
        $(".lower").css("background-color", "#1B0314");
        $("#aboutCards figure img").eq(1).attr("src", "imgs/expIcon.png");
    });

    $(".aboutCards2").mouseover(function(e){
        $(".aboutCards2").css("background-color", "#24051B");
        $(".aboutCards2 figure img").attr("src", "imgs/eduIconHover.png");
    });
    
    $(".aboutCards2").mouseleave(function(e){
        $(".aboutCards2").css("background-color", "#1B0314");
        $(".aboutCards2 figure img").attr("src", "imgs/eduIcon.png");
    });

    $(".lower2").mouseover(function(e){
        $(".lower2").css("background-color", "#24051B");
        $(".lower2 figure img").attr("src", "imgs/statsIconHover.png");
    });
    
    $(".lower2").mouseleave(function(e){
        $(".lower2").css("background-color", "#1B0314");
        $(".lower2 figure img").attr("src", "imgs/statsIcon.png");
    });


    //Soft description

    $("#softRow1 img:first").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Figma").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow1 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("C++").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow2 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Adobe Photoshop").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow2 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("JavaScript").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow3 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Adobe After Effects").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow3 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("HTML").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow4 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Adobe Illustrator").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow4 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("CSS").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow5 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Adobe InDesign").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow5 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Microsoft Word").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow6 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Autodesk Maya").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow6 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Microsoft PowerPoint").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow7 img").eq(0).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Unity").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    $("#softRow7 img").eq(1).hover(function(){
        $(this).mousemove(function(e){
            $("#description").html("Microsoft Excel").css({
                "top" : e.pageY + 20,
                "left" : e.pageX + 20
            }).show();
        });
    }, function(){
        $("#description").hide();
    });

    //CONTACT page
    $("#email button").hover(function(){
        $("#email button").css("background-color", "#4B2F84");
    }, function(){
        $("#email button").css("background-color", "#35215D");
    });

    $("#email button").click(function() {
        navigator.clipboard.writeText("ioanastan2014@gmail.com").then(() => {
            console.log('Copying to clipboard was successful!');
          }, () => {
            console.log('Copying to clipboard failed.');
          });
          $("#phone button").text("Copy to clipboard");
          $(this).text("Copied  ✔");
    });
    

    $("#phone button").hover(function(){
        $("#phone button").css("background-color", "#6D214F");
    }, function(){
        $("#phone button").css("background-color", "#461533");
    });

    $("#phone button").click(function() {
        navigator.clipboard.writeText("Caraneya#2537").then(() => {
            console.log('Copying to clipboard was successful!');
          }, () => {
            console.log('Copying to clipboard failed.');
          });
          $("#email button").text("Copy to clipboard");
          $(this).text("Copied  ✔");
    });

    $("#linkIn button").hover(function(){
        $("#linkIn button").css("background-color", "#163279");
    }, function(){
        $("#linkIn button").css("background-color", "#0E204E");
    });

    $("#instaGram button").hover(function(){
        $("#instaGram button").css("background-color", "#6A2083");
    }, function(){
        $("#instaGram button").css("background-color", "#501862");
    });

    $("#inner:first").hover(function(e){
        $(this).css("background-color", "#251325");
    }, function(){
        $(this).css("background-color", "#221122");
        $("#email img").css({
            'transform': 'rotate(0deg)'
        });
    });
    $("#inner:nth-of-type(1)").hover(function(e){
        $(this).css("background-color", "#251325");
        $(this).find("img").css({
            'transform': 'rotate(20deg)'
        });
    }, function(){
        $(this).css("background-color", "#221122");
        $(this).find("img").css({
            'transform': 'rotate(0deg)'
        });
    });
    
    $("#inner:nth-of-type(2)").hover(function(e){
        $(this).css("background-color", "#251325");
    }, function(){
        $(this).css("background-color", "#221122");
    });
    $("#inner:nth-of-type(3)").hover(function(e){
        $(this).css("background-color", "#251325");
    }, function(){
        $(this).css("background-color", "#221122");
    });

    //WORK PAGES
    var urlParams = new URLSearchParams(window.location.search);
    var parameter = urlParams.get("page");
    if(parameter=="product"){
        changeProduct();
    }
    else if(parameter=="art"){
        changeArt();
    }
    else if(parameter=="character"){
        changeCharacter();
    }
    else{
    changeGame();
    }
    $("#workNav h3:nth-of-type(1)").click(changeProduct);
    $("#workNav h3").eq(0).click(changeGame);
    $("#workNav h3").eq(2).click(changeArt);
    $("#workNav h3").eq(3).click(changeCharacter);

    $("#nextCat").click(function(){
        if(nextNr === 0){
            nextNr =1;
            changeProduct();
        }
        else if(nextNr === 1){
            nextNr =2;
            changeArt();
        }
        else if(nextNr === 2){
            nextNr =3;
            changeCharacter();
        }
        else if(nextNr === 3){
            nextNr =2;
            changeArt();
        }
    });

    $("#orch").hover(
        function() {
            overCharacter("#orch","#FD6EA3");
        },
        function() {
            outCharacter("#orch");
        }
    );

    $("#poppy").hover(
        function() {
            overCharacter("#poppy","#DCCC69");
        },
        function() {
            outCharacter("#poppy");
        }
    );

    $("#corabi").hover(
        function() {
            overCharacter("#corabi","#B3E982");
        },
        function() {
            outCharacter("#corabi");
        }
    );

    $("#hydra").hover(
        function() {
            overCharacter("#hydra","#A3CFFF");
        },
        function() {
            outCharacter("#hydra");
        }
    );

    $("#rose").hover(
        function() {
            overCharacter("#rose","#F37F84");
        },
        function() {
            outCharacter("#rose");
        }
    );

    $("#cutscene img").eq(0).hover(
        function() {
            startGif(1,this,"imgs/intro_areoles");
        },
        function() {
            startGif(0,this,"imgs/intro_areoles");
        }
    );

    $("#cutscene img").eq(1).hover(
        function() {
            startGif(1,this,"imgs/lastScene_areoles");
        },
        function() {
            startGif(0,this,"imgs/lastScene_areoles");
        }
    );

    $(".containerLevels .box:not(.impaired)").eq(0).hover(
        function() {
            galleryChangeHover(1,this,"imgs/poppy");
        },
        function() {
            galleryChangeHover(0,this,"imgs/poppy");
        }
    );

    $(".containerLevels .box:not(.impaired)").eq(1).hover(
        function() {
            galleryChangeHover(1,this,"imgs/hydra");
        },
        function() {
            galleryChangeHover(0,this,"imgs/hydra");
        }
    );
    $(".containerLevels .box:not(.impaired)").eq(2).hover(
        function() {
            galleryChangeHover(1,this,"imgs/orch");
        },
        function() {
            galleryChangeHover(0,this,"imgs/orch");
        }
    );

    $(".containerLevels .box:not(.impaired)").eq(3).hover(
        function() {
            galleryChangeHover(1,this,"imgs/rose");
        },
        function() {
            galleryChangeHover(0,this,"imgs/rose");
        }
    );

    $(".infRow").hover(
        function(e) {
            overInfamous(e.currentTarget,1);
        },
        function(e) {
            overInfamous(e.currentTarget,0);
        }
    );

    $(".infCol").eq(0).hover(
        function(e) {
            overInfamous(e.currentTarget,1);
        },
        function(e) {
            overInfamous(e.currentTarget,0);
        }
    );
    $(".infCol").eq(3).hover(
        function(e) {
            overInfamous(e.currentTarget,1);
        },
        function(e) {
            overInfamous(e.currentTarget,0);
        }
    );
    
    
    var parameter = urlParams.get("prev");
    if(parameter=="product"){
        $("#navPath a").html("Product Design");
        $("#navPath a").attr("href","/work.html?page=product");
    }
    else if(parameter=="VsArt"){
        $("#navPath a").html("Visual art");
        $("#navPath a").attr("href","/work.html?page=art");
    }else if(parameter=="home"){
        $("#navPath a").html("Latest work");
        $("#navPath a").attr("href","/index.html?page=home#jumpHere");
    }else{
        $("#navPath a").html("Game Design");
        $("#navPath a").attr("href","/work.html");
    }
    var parameter = urlParams.get("page");
    if(parameter=="home"){
        $("div#1").find("h5").html("SHOP THE PIN");
        $("div#1").find("h6").html("UI designer");
        $("div#2").find("h5").html("GALACTIC EXPRESS");
        $("div#2").find("h6").html("lead game designer");
        $("div#3").find("h5").html("IMPAIRED");
        $("div#3").find("h6").html("game designer");
        $("div#4").find("h5").html("HIGH INFINITY GUARD");
        $("div#4").find("h6").html("UI designer");
    }
    var title= $("#areolisTitle h1").html();
    if(title=="SHOP THE PIN")
    setupLaptopImageChange("Shop");
    else if(title=="HIGH INFINITY GUARD")
    setupLaptopImageChange("Guard");
    setupHudChange();

    $("nav svg").click(function(e){
        e.preventDefault();
        if($("nav #right a h4").hasClass("media"))
        $("nav #right a h4").removeClass("media");
        else $("nav #right a h4").addClass("media");
    });

});



//changes the game design imgs
function changeGame(){

    $("#workH2").html("The performance");
    
    $("button#nextCat").html('Next category<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 6L19 12L13 18M5 6L11 12L5 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');

    $("#workNav h3").removeClass("workSelected");
    $("#workNav h3").eq(0).addClass("workSelected");

    $("#itemsWork div#1").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+latestImg.img2+'")');
    $("#1 h5").html("GALACTIC EXPRESS");
    $("#1 h6").html("lead game designer");

    $("#itemsWork div#2").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img3+'")');
    $("#2 h5").html("IMPAIRED");
    $("#2 h6").html("game designer");

    $("#itemsWork div#3").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img2+'")');
    $("#3 h5").html("SAMURAI SAM");
    $("#3 h6").html("game designer");

    $("#itemsWork div#4").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img1+'")');
    $("#4 h5").html("MYTHICAL DASH");
    $("#4 h6").html("game & product designer");

    $("#righWor img").attr("src","imgs/controllericons.svg");

    //Hover effect section Work images
    //Image1
    $("#itemsWork div#1").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img2+'")');
        $("#1 h5").removeClass("hide");
        $("#1 h6").removeClass("hide");
        $("#1 button").removeClass("hide");
        $("#1 p").removeClass("hide");
        $("#1 section").addClass("rec");
        transformImg(0,this);
    });

    $("#itemsWork div#1").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="GALACTIC EXPRESS"){
        window.location.href = "https://caraneya.github.io/IoanaStan/Galactic.html";
        }
    });

    $("#itemsWork div#1").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img2+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        transformImg(1,this);
    });

    //Image2
    $("#itemsWork div#2").mouseover(function(e){
        e.preventDefault();
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img3+'")');
        $("#2 h5").removeClass("hide");
        $("#2 h6").removeClass("hide");
        $("#2 button").removeClass("hide");
        $("#2 p").removeClass("hide");
        $("#2 section").addClass("rec");
        transformImg(0,this); 
    });

    $("#itemsWork div#2").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="IMPAIRED"){
        window.location.href = "http://127.0.0.1:5500/Impaired.html";
        }
    });

    $("#itemsWork div#2").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img3+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        transformImg(1,this);
    });

    //Image3
    $("#itemsWork div#3").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+workImg.img2+'")');
        $("#3 h5").removeClass("hide");
        $("#3 h6").removeClass("hide");
        $("#3 button").removeClass("hide");
        $("#3 p").removeClass("hide");
        $("#3 section").addClass("rec");
        transformImg(0,this);
    });

    $("#itemsWork div#3").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="SAMURAI SAM"){
        window.location.href = "http://127.0.0.1:5500/SamuraiSam.html";
        }
    });

    $("#itemsWork div#3").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img2+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        transformImg(1,this);
    });

    //Image4
    $("#itemsWork div#4").mouseover(function(e){
        $("#4 h5").removeClass("hide");
        $("#4 h6").removeClass("hide");
        $(e.currentTarget).css('background-image', 'url("imgs/'+workImg.img1+'")');
        $("#4 button").removeClass("hide");
        $("#4 p").removeClass("hide");
        $("#4 section").addClass("rec");
        transformImg(0,this);
    });

    $("#itemsWork div#4").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="MYTHICAL DASH"){
            window.location.href = "http://127.0.0.1:5500/MythicalDash.html";
        }
    });

    $("#itemsWork div#4").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img1+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        transformImg(1,this);
    });

    $("#itemsWork div#5").remove();
    $("#itemsWork div#6").remove();
    $("#itemsWork div#7").remove();
    $("#itemsWork div#8").remove();

    let newFigure=`
    <div id="5">
    <section id="stuff">
        <h5>SLANGSTER CATS</h5>
        <h6>lead game designer</h6>
        <p class="hide">Cats and rap - a combination that promises endless fun! This educational typing game offers a unique way to learn and master slang.</p>
        <button class="hide">Read more</button>
    </section>
    </div>
    <div id="6">
    <section id="stuff">
        <h5>AREOLES</h5>
        <h6>independent</h6>
        <p class="hide">This game is more than a colorful, playful 2D platformer about flowers, it is a materialization of a sad story that everyone knows too well.</p>
        <a href="/Areoles.html"><button class="hide">Read more</button></a>
    </section>
    </div>`;

    $("#itemsWork").append(newFigure);

    $("#itemsWork div#5").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img3+'")');
    $("#itemsWork div#6").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img4+'")');

    //Image5
    $("#itemsWork div#5").mouseover(function(e){
        $("#5 h5").removeClass("hide");
        $("#5 h6").removeClass("hide");
        $(e.currentTarget).css('background-image', 'url("imgs/'+workImg.img3+'")');
        $("#5 button").removeClass("hide");
        $("#5 p").removeClass("hide");
        $("#5 section").addClass("rec");
        transformImg(0,this);
    });

    $("#itemsWork div#5").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="SLANGSTER CATS"){
        window.location.href = "http://127.0.0.1:5500/SlangsterCats.html";
        }
    });

    $("#itemsWork div#5").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img3+'")');
        $("#5 button").addClass("hide");
        $("#5 p").addClass("hide");
        $("#5 section").removeClass("rec");
        transformImg(1,this);
    });

    //Image6
    $("#itemsWork div#6").mouseover(function(e){
        $("#6 h5").removeClass("hide");
        $("#6 h6").removeClass("hide");
        $(e.currentTarget).css('background-image', 'url("imgs/'+workImg.img4+'")');
        $("#6 button").removeClass("hide");
        $("#6 p").removeClass("hide");
        $("#6 section").addClass("rec");
        transformImg(0,this);
    });

    $("#itemsWork div#6").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="AREOLES"){
        window.location.href = "http://127.0.0.1:5500/Areoles.html";
        }
    });

    $("#itemsWork div#6").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+workImg.img4+'")');
        $("#6 button").addClass("hide");
        $("#6 p").addClass("hide");
        $("#6 section").removeClass("rec");
        transformImg(1,this);
    });


    $("#itemsWork div button").mouseover(function(e){
        $(e.currentTarget).addClass("hovered");
    });
    
    $("#itemsWork div button").mouseleave(function(e){
        $(e.currentTarget).removeClass("hovered");
    });

    $("#nextCat").mouseover(function(){
        $("button#nextCat").css('background-color', '#49032E');
    });
    
    $("#nextCat").mouseleave(function(){
        $("button#nextCat").css('background-color', '#6D214F');
    });
}

//changes the images to the product design's ones
function changeProduct() {
    $("#workH2").html("The skills display");
    nextNr=1;

    $("button#nextCat").html('Next category<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 6L19 12L13 18M5 6L11 12L5 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');

    //removing what was
    $("#workNav h3").removeClass("workSelected");
    $("#workNav h3").eq(1).addClass("workSelected");

    $("#itemsWork div#1").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+latestImg.img1+'")');
    $("#1 h5").html("SHOP THE PIN");
    $("#1 h6").html("UI designer");

    $("#itemsWork div#2").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img4+'")');
    $("#2 h5").html("HIGH INFINITY GUARD");
    $("#2 h6").html("UI designer");

    $("#itemsWork div#3").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+productDesign.img1+'")');
    $("#3 h5").html("UMBRA");
    $("#3 h6").html("game poster");

    $("#itemsWork div#4").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img2+'")');
    $("#4 h5").html("LOST");
    $("#4 h6").html("movie poster");

    $("#itemsWork div#5").remove();
    $("#itemsWork div#6").remove();
    $("#itemsWork div#7").remove();
    $("#itemsWork div#8").remove();

    

    $("#righWor img").attr("src","imgs/penTool.svg");

    //img1
    $("#itemsWork div#1").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").addClass("hide");
        $("#1 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#1").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="SHOP THE PIN"){
        window.location.href = "http://127.0.0.1:5500/ShopPin.html?prev=product";
        }
    });

    $("#itemsWork div#1").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+latestImg.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").removeClass("hide");
        $("#1 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img2
    $("#itemsWork div#2").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+latestImg.img4+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").addClass("hide");
        $("#2 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#2").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="HIGH INFINITY GUARD"){
        window.location.href = "http://127.0.0.1:5500/Guard.html?prev=product";
        }
    });

    $("#itemsWork div#2").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+latestImg.img4+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").removeClass("hide");
        $("#2 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img3
    $("#itemsWork div#3").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img1+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").addClass("hide");
        $("#3 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });
    $("#itemsWork div#3").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="UMBRA"){
        var paragraph=`
        <p class="description">This poster was designed for the board game with the same name, and showcases my ability to improvise and effectively use the existing assets, made by our artists.</p>
        <p class="description">I found a creative way to easily integrate in my design all key elements, such as paws, cards, and dice.</p>
        <p class="description">In terms of composition, the background blends the game's world with the playing board, transitioning it into the real one.</p>
        <p class="description">The balanced design was kept by placing in the top part the game's title and caption. The dark sky provided an ideal setting for them, with the contrast emphasizing the name.</p>
        `;
        overlayOpen(this,paragraph,"imgs/umbraLong.png",0,0);
        }
    });
    
    $("#itemsWork div#3").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img1+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").removeClass("hide");
        $("#3 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img4
    $("#itemsWork div#4").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img2+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").addClass("hide");
        $("#4 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#4").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="LOST"){
            var paragraph=`
            <p class="description">My Photoshop skills were displayed in the creation of this movie poster, from typography to image manipulation and applying several Gestalt principles.</p>
            <p class="description">The elements such as the butterflies and the character were carefully manipulated to complement the dark and intense aesthetic of the poster.</p>
            <p class="description">I applied various filters and adjusted the saturation to easily integrate the character into its surroundings, as well as to keep a consistent overall mood.</p>
            `;
            overlayOpen(this,paragraph,"imgs/lostPoster.png",0,0);
        }
    });

    $("#itemsWork div#4").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img2+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").removeClass("hide");
        $("#4 h6").removeClass("hide");
        transformImg(1,this);
    });

    let newFigure=`
    <div id="5">
        <section id="stuff">
            <h5>SAMURAI SAM</h5>
            <h6>game poster</h6>
        </section>
    </div>        
    <div id="6">
        <section id="stuff">
            <h5>INFAMOUS</h5>
            <h6>wordmark & T-shirt design</h6>
        </section>    
    </div>`;

    $("#itemsWork").append(newFigure);

    $("#itemsWork div#5").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img3+'")');
    $("#itemsWork div#6").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img4+'")');

    //img5
    $("#itemsWork div#5").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img3+'")');
        $("#5 section").removeClass("rec");
        $("#5 h5").addClass("hide");
        $("#5 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#5").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="SAMURAI SAM"){
            window.location.href = "http://127.0.0.1:5500/SamuraiSam.html?prev=product";
        }
    });

    $("#itemsWork div#5").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img3+'")');
        $("#5 section").removeClass("rec");
        $("#5 h5").removeClass("hide");
        $("#5 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img6
    $("#itemsWork div#6").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img4+'")');
        $("#6 section").removeClass("rec");
        $("#6 h5").addClass("hide");
        $("#6 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#6").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="INFAMOUS"){
            window.location.href = "http://127.0.0.1:5500/Infamous.html?prev=product";
        }
    });

    $("#itemsWork div#6").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img4+'")');
        $("#6 section").removeClass("rec");
        $("#6 h5").removeClass("hide");
        $("#6 h6").removeClass("hide");
        transformImg(1,this);
    });

    let newFigure2=`
    <div id="7">
        <section id="stuff">
            <h5>L-33</h5>
            <h6>party flyer</h6>
        </section>
    </div>        
    <div id="8">
        <section id="stuff">
            <h5>SPECII</h5>
            <h6>concert poster</h6>
        </section>    
    </div>`;

    $("#itemsWork").append(newFigure2);

    $("#itemsWork div#7").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img5+'")');
    $("#itemsWork div#8").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img6+'")');

    //img7
    $("#itemsWork div#7").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img5+'")');
        $("#7 section").removeClass("rec");
        $("#7 h5").addClass("hide");
        $("#7 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#7").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="L-33"){
            var paragraph=`
            <p class="description">Designing this flyer for a DnB party featuring <a href="https://soundcloud.com/l-33-1" target="blank">L-33</a> was challenging as I had to find a way to effectively include various information, without overwhelming it.</p>
            <p class="description">I opted for a layout that incorporated the text into the image's style, placed some elements in areas with good contrast, and created a fitting location icon that goes very well with the chosen background.</p>
            <p class="description">I also chose to give the event date a stamp appearance, matching the tradition of using stamps as entrance tickets at club parties. This approach not only makes it more abbealing, but also draws focus to it.</p>
            `;
            overlayOpen(this,paragraph,"imgs/L-33Flyer.png",0,0);
        }
    });

    $("#itemsWork div#7").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img5+'")');
        $("#7 section").removeClass("rec");
        $("#7 h5").removeClass("hide");
        $("#7 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img8
    $("#itemsWork div#8").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+productDesign.img6+'")');
        $("#8 section").removeClass("rec");
        $("#8 h5").addClass("hide");
        $("#8 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#8").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="SPECII"){
            var paragraph=`
            <p class="description">This flyer for a Hip-Hop Rap party, featuring <a href="https://www.discogs.com/artist/2469702-Specii" target="blank">Specii</a>, uses design techniques such as overlay, negative space, and foreground/background contrast.</p>
            <p class="description">The background has a purple glow, which fits the dark atmosphere of the poster and also creates a sense of depth.</p>
            <p class="description">Since it is one of my favorite bands, I paid close attention to details, such as the shadow on the wall which reflects one of the characters from their album.</p>
            `;
            overlayOpen(this,paragraph,"imgs/speciiPoster.png",0,0);
        }
    });

    $("#itemsWork div#8").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+productDesign.img6+'")');
        $("#8 section").removeClass("rec");
        $("#8 h5").removeClass("hide");
        $("#8 h6").removeClass("hide");
        transformImg(1,this);
    });

  }

  function changeArt(){
    nextNr=2;

    $("#workH2").html("The passion");

    $("button#nextCat").html('Next category<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 6L19 12L13 18M5 6L11 12L5 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');

    //removing what was
    $("#workNav h3").removeClass("workSelected");
    $("#workNav h3").eq(2).addClass("workSelected");

    $("#itemsWork div#5").remove();
    $("#itemsWork div#6").remove();
    $("#itemsWork div#7").remove();
    $("#itemsWork div#8").remove();

    $("#itemsWork div#1").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+visualArt.img1+'")');
    $("#1 h5").html("TASTE THE LIFE");
    $("#1 h6").html("digital art");

    $("#itemsWork div#2").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img2+'")');
    $("#2 h5").html("DISSECTION");
    $("#2 h6").html("tempera painting");

    $("#itemsWork div#3").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+visualArt.img3+'")');
    $("#3 h5").html("REFLECTION STAGES");
    $("#3 h6").html("digital art");

    $("#itemsWork div#4").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img4+'")');
    $("#4 h5").html("QACI 2");
    $("#4 h6").html("concept art");

    
    $("#righWor img").attr("src","imgs/eyeIcon.svg");

    //img1
    $("#itemsWork div#1").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").addClass("hide");
        $("#1 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#1").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="TASTE THE LIFE"){
            var paragraph=`
            <p class="description">What started as a drawing in the back of a notebook eventually evolved into an intresting digital art piece.</p>
            <p class="description">The concept portrays the world trying to protect itself with a delicate yet dangerous shield. </p>
            <p class="description">The human desire, then, brutally interferes and disrupts the world's balance, causing it to disintegrate.</p>
            `;
            overlayOpen(this,paragraph,"imgs/Ice-cream_pic.png",0,0);
        }
    });

    $("#itemsWork div#1").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.9)),url("imgs/'+visualArt.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").removeClass("hide");
        $("#1 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img2
    $("#itemsWork div#2").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img2+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").addClass("hide");
        $("#2 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#2").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="DISSECTION"){
            var paragraph=`
                <p class="description">Although I am not a very good painter, I enjoyed varying between digital and physical work.</p>
                <p class="description">This painting represents a self-portrait dissected in color, elements, and opposites.</p>
                `;
                overlayOpen(this,paragraph,"imgs/portrait_picBig.png",0,0);
        }
    });

    $("#itemsWork div#2").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img2+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").removeClass("hide");
        $("#2 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img3
    $("#itemsWork div#3").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img3+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").addClass("hide");
        $("#3 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#3").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="REFLECTION STAGES"){
            var paragraph=`
                <p class="description">It is believed that a lot of good people died on their toilets. </p>
                <p class="description">This digital art is nothing much, but a psychedelic experience into their dull white bathrooms.</p>
                <p class="description">In its final moments, the soul reflects upon its own existence.</p>
                `;
                overlayOpen(this,paragraph,"imgs/bathroom_Big.png",0,0);
        }
    });

    $("#itemsWork div#3").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img3+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").removeClass("hide");
        $("#3 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img4
    $("#itemsWork div#4").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img4+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").addClass("hide");
        $("#4 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#4").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="QACI 2"){
            var paragraph=`
                <p class="description">Human forms are dull, and aliens always remain catchy!</p>
                <p class="description">In this composition, a secret and influential group of extraterrestrial beings from various species gather to deliberate the future of the underneath planet.</p>
                `;
                overlayOpen(this,paragraph,"imgs/qaci_2_pic.png",0,0);
        }
    });

    $("#itemsWork div#4").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img4+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").removeClass("hide");
        $("#4 h6").removeClass("hide");
        transformImg(1,this);
    });

    let newFigure=`
    <div id="5">
        <section id="stuff">
            <h5>HOUSE FOR DREAMS</h5>
            <h6>3D model</h6>
        </section>
    </div>        
    <div id="6">
        <section id="stuff">
            <h5>INFAMOUS COLLECTION</h5>
            <h6>reinterpretation</h6>
        </section>    
    </div>`;

    $("#itemsWork").append(newFigure);

    $("#itemsWork div#5").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img5+'")');
    $("#itemsWork div#6").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img6+'")');

    //img5
    $("#itemsWork div#5").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img5+'")');
        $("#5 section").removeClass("rec");
        $("#5 h5").addClass("hide");
        $("#5 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#5").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="HOUSE FOR DREAMS"){
            var paragraph=`
                <p class="description">This was my first 3D model created using <a href="https://www.autodesk.com/products/maya/overview?term=1-YEAR&tab=subscription" target="blank">Autodesk Maya</a>.</p>
                <p class="description">I realized that there would always be a trade-off between efficiency and quality, so I tried to moderate the number of polygons while keeping the overall relaxing, natural atmosphere of the house.</p>
                <p class="description">I paid close attention to details, from the paint on the chairs to the top wall of the house where I tried to mimic a hand-painted wallpaper.</p>
                `;
                overlayOpen(this,paragraph,'<div class="sketchfab-embed-wrapper"> <div class="sketchfab-embed-wrapper"> <iframe title="Last_Hippie_House" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6885eee16f35420aab901e2cae50508e/embed"> </iframe> </div>',2,0);
        }
    });

    $("#itemsWork div#5").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img5+'")');
        $("#5 section").removeClass("rec");
        $("#5 h5").removeClass("hide");
        $("#5 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img6
    $("#itemsWork div#6").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+visualArt.img6+'")');
        $("#6 section").removeClass("rec");
        $("#6 h5").addClass("hide");
        $("#6 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
        var label=$(e.currentTarget).find("h5").html();
        if(label=="INFAMOUS COLLECTION"){
        $(this).click(function(){
            window.location.href = "http://127.0.0.1:5500/Infamous.html?prev=VsArt";});
        }
    });

    $("#itemsWork div#6").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="INFAMOUS COLLECTION"){
            window.location.href = "http://127.0.0.1:5500/Infamous.html?prev=VsArt";
        }
    });

    $("#itemsWork div#6").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+visualArt.img6+'")');
        $("#6 section").removeClass("rec");
        $("#6 h5").removeClass("hide");
        $("#6 h6").removeClass("hide");
        transformImg(1,this);
    });
    
  }

  function changeCharacter(){
    nextNr=3;
    $("#workH2").html("The amusement");
    //removing what was
    $("#workNav h3").removeClass("workSelected");
    $("#workNav h3").eq(3).addClass("workSelected");

    $("#itemsWork div#5").remove();
    $("#itemsWork div#6").remove();
    $("#itemsWork div#7").remove();
    $("#itemsWork div#8").remove();

    $("#itemsWork div#1").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img1+'")');
    $("#1 h5").html("HIGH ON PINK");
    $("#1 h6").html("flat art");

    $("#itemsWork div#2").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img2+'")');
    $("#2 h5").html("HURTFUL SPINES");
    $("#2 h6").html("digital art");

    $("#itemsWork div#3").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img3+'")');
    $("#3 h5").html("YUCCA");
    $("#3 h6").html("flat art");

    $("#itemsWork div#4").css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img4+'")');
    $("#4 h5").html("ROLL THE DICE");
    $("#4 h6").html("digital art");

    
    $("#righWor img").attr("src","imgs/character.svg");

    //img1
    $("#itemsWork div#1").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+characterDesign.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").addClass("hide");
        $("#1 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#1").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="HIGH ON PINK"){
            var paragraph=`
                <p class="description">In this arwork, I was inspired by an <i>Instagram</i> model, and I experimented with flat design and clipping masks in Illustrator.</p>
                `;
                overlayOpen(this,paragraph,"imgs/highOnPinkBig.png",0,0);
        }
    });

    $("#itemsWork div#1").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img1+'")');
        $("#1 button").addClass("hide");
        $("#1 p").addClass("hide");
        $("#1 section").removeClass("rec");
        $("#1 h5").removeClass("hide");
        $("#1 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img2
    $("#itemsWork div#2").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+characterDesign.img2+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").addClass("hide");
        $("#2 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#2").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="HURTFUL SPINES"){
            var paragraph=`
                <p class="description">This character concept started from my desire to attribute a face and personality to one of my favorite plants, the cactus.</p>
                <p class="description">What captivated me about humanizing this plant is its paradoxical nature. Despite its beauty, the closer you get to it, the more harm it causes.</p>
                <p class="description">This artwork tries to showcase exactly that feeling and the uneasy sensation of always being trapped by your own spikes.</p>
                `;
                overlayOpen(this,paragraph,"imgs/cacti.png",0,0);
        }
    });

    $("#itemsWork div#2").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img2+'")');
        $("#2 button").addClass("hide");
        $("#2 p").addClass("hide");
        $("#2 section").removeClass("rec");
        $("#2 h5").removeClass("hide");
        $("#2 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img3
    $("#itemsWork div#3").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+characterDesign.img3+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").addClass("hide");
        $("#3 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#3").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="YUCCA"){
            var paragraph=`
                <p class="description">This portrait was created for a friend, exploring the use of shadows and contrast.</p>
                `;
                overlayOpen(this,paragraph,"imgs/bbOnlyLong.png",0,0);
        }
    });

    $("#itemsWork div#3").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img3+'")');
        $("#3 button").addClass("hide");
        $("#3 p").addClass("hide");
        $("#3 section").removeClass("rec");
        $("#3 h5").removeClass("hide");
        $("#3 h6").removeClass("hide");
        transformImg(1,this);
    });

    //img4
    $("#itemsWork div#4").mouseover(function(e){
        $(e.currentTarget).css('background-image', 'url("imgs/'+characterDesign.img4+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").addClass("hide");
        $("#4 h6").addClass("hide");
        $(e.currentTarget).css("cursor", "pointer");
        transformImg(0,this);
    });

    $("#itemsWork div#4").click(function(e){
        e.preventDefault();
        var label=$(e.currentTarget).find("h5").html();
        if(label=="ROLL THE DICE"){
            var paragraph=`
                <p class="description">This character design was inspired by one song I really enjoy listening to: <a href="https://www.youtube.com/watch?v=OhPjmI44y2Y" target="blank">"Roll the dice"</a>.</p>
                <p class="description">It incorporates elements of classic pin-up art with a modern anime style, and iconic fashion pieces.</p>
                `;
                overlayOpen(this,paragraph,"imgs/rollLong.png",0,0);
        }
    });

    $("#itemsWork div#4").mouseleave(function(e){
        $(e.currentTarget).css('background-image', 'linear-gradient(to bottom, rgba(109, 33, 79, 0.6), rgba(14, 32, 78, 0.6)),url("imgs/'+characterDesign.img4+'")');
        $("#4 button").addClass("hide");
        $("#4 p").addClass("hide");
        $("#4 section").removeClass("rec");
        $("#4 h5").removeClass("hide");
        $("#4 h6").removeClass("hide");
        transformImg(1,this);
    });

    $("button#nextCat").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 18L5 12L11 6M19 18L13 12L19 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Previous Category');

  }


  function transformImg(val,element){
    if(val==0){
    $(element).css({
        "transform": "scale(1.02)",
        "transition": "transform 0.3s",
      });
    }
    if(val==1){
        $(element).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s"
          });
    }
  }

function overCharacter(hovered,color){
    $(hovered).find("h5").css("color",color);
    $("#allCards").addClass("heightt");
    $(hovered).find("img").removeClass("opacityy");
    $(hovered).find("h5").removeClass("hide");
    $(hovered).find("p").removeClass("hide");
    $(hovered).css({
        "transform": "scale(1.08)",
        "transition": "transform 0.3s",
    });    
}   
function outCharacter(hovered){
    $("#allCards").removeClass("heightt");
    $(hovered).find("h5").addClass("hide");
    $(hovered).find("img").addClass("opacityy");
    $(hovered).find("p").addClass("hide");
        $(hovered).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s"
        });
}

function startGif(start,element,src){
    if(start){
        src=src+".gif";
        $(element).attr("src",src);
        $(element).css({
            "transform": "scale(1.08)",
            "transition": "transform 0.3s",
        });    
    } 
    else{
        src=src+".png";
        $(element).attr("src",src);
        $(element).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s"
        });
    }
}

function galleryChangeHover(start,element,src){
    if(start){
        src=src+"Root.png";
        $(element).find("img").attr("src",src);
    } 
    else{
        src=src+"Castle.png";
        $(element).find("img").attr("src",src);
    }
}

function overInfamous(hovered,start){
    if(start){
    $(hovered).find("img").removeClass("opacityy");
    $(hovered).find("h5").removeClass("hide");
    $(hovered).css({
        "transform": "scale(1.08)",
        "transition": "transform 0.3s",
        });    
    }   
    else{
    $(hovered).find("img").addClass("opacityy");
    $(hovered).find("h5").addClass("hide");
        $(hovered).css({
            "transform": "scale(1)",
            "transition": "transform 0.3s"
        });
    }
}

function overlayOpen(element,figure,src,no,imgs){
        var title = $(element).find("h5").html();
        $('#overlay-title').html(title);
        $('#overlay').find("iframe").remove();
        if(no==1){
            var srcs=`<img src=`+imgs[0]+`><img src=`+imgs[1]+`><img src=`+imgs[2]+`><img src=`+imgs[3]+`>`;
            $("#overlay #image-place").html(srcs);
        } else if(no==0){
        $('#overlay-img').attr('src', src);}
        else if(no==2){
            $('#overlay-img').attr('src', "");
            $('#image-place').append(src);}
        
        $('#overlay').removeClass("hide");
        if(figure)
        $("#overlay").find("section").html(figure);
    $( "#close-overlay" ).click(function(e) {
        e.preventDefault();
        $('#overlay').addClass("hide");});
    
}

function setupLaptopImageChange(name){
    const laptop = $('.innerLaptop');
    const bullets = $('.bullet');
    let active = 0;
    
    const changeImage = (index) => {
      active = index;
      laptop.addClass('hidden');
      setTimeout(() => {
        laptop.attr('src', `imgs/hero`+name+`${index + 1}.png`);
        laptop.removeClass('hidden');
        bullets.removeClass('bullActive');
        $(bullets[index]).addClass('bullActive');
      }, 1000);
    };
    
    bullets.click((event) => {
      changeImage(bullets.index(event.currentTarget));
    });
    
    const autoChange = () => {
      active = active === bullets.length - 1 ? 0 : active + 1;
      changeImage(active);
    };
    
    setInterval(autoChange, 6000);
}


function setupHudChange(){
    const laptop = $('.innerSlang');
    const bullets = $('.bullet');
    let active = 0;
  
    const changeImage = (index) => {
      active = index;
      laptop.addClass('hidden');
      setTimeout(() => {
        laptop.attr('src', `imgs/slangsterCat${index + 1}.png`);
        laptop.removeClass('hidden');
        bullets.removeClass('bullActive');
        $(bullets[index]).addClass('bullActive');
      }, 1000);
    };
  
    bullets.click((event) => {
      changeImage(bullets.index(event.currentTarget));
    });
  
    const autoChange = () => {
      active = (active + 1) % 3;
      changeImage(active);
    };
  
    setInterval(autoChange, 6000);
  
    laptop.hover(function() {
      const src = $(this).attr('src');
      const newSrc = src.replace('.png', '.gif');
      $(this).attr('src', newSrc);
    }, function() {
      const src = $(this).attr('src');
      const newSrc = src.replace('.gif', '.png');
      $(this).attr('src', newSrc);
    });
  }