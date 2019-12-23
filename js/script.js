var current_li;
var intervalHandler;
var next_li;
var id ;
// FUNCTION THAT PUSH IMAGE YOU SELECTED
function selectImage(src,id){
        $("#selected").attr("src",src);
        
}
//////////////////////////////////////////////////////////////////////////
function nextItem(){
         if(current_li.is(":last-child")){
             next_li = $("#portfolio li").first();;
         }
         else{
             next_li = current_li.next();
         }
         var src = next_li.children("img").attr("src");
         id = next_li.children("img").attr("id");
         selectImage(src,id);
         current_li= next_li;
}
//////////////////////////////////////////////////////////////////////////
function prevItem(){
            if(current_li.get(0)==$("#portfolio li:first").get(0)){
             current_li=$("#portfolio li").last();
            }
             else{
             var prev_li = current_li.prev();
             current_li= prev_li;
             }
             var src = current_li.children("img").attr("src");
             id = current_li.children("img").attr("id");
             selectImage(src,id);
}
//////////////////////////////////////////////////////////////////////////
function slideShow(){
    nextItem();
    $("#resc").fadeIn();
    $("#overlay").fadeIn();
}
//////////////////////////////////////////////////////////////////////////
//THIS CODE START FROM HERE
$("document").ready(function(){
     $("#portfolio img").click(function (){
        var src = $(this).attr("src");
        id = $(this).attr("id");
        current_li = $(this).parent();
        console.log(current_li);
        $("#resc").fadeIn();
        $("#overlay").fadeIn();
        var height = $("body").prop("scrollHeight");
        $("#overlay").css("height",height);
        $(".shape").css({"transform":"none","transition-duration":"0s"});
        selectImage(src,id);
});
///////////////////////////////////////////////////////////////////////////    
     $("#overlay").click(function(){
         $("#resc").fadeOut();
         $(this).fadeOut();
         $(".shape").css({"transform":"","transition-duration":""});
         clearInterval(intervalHandler);
         $("#slideshow").fadeIn();
     });
/////////////////////////////////////////////////////////////////////////     
     $("#right").click(function(){
         nextItem();
     });
///////////////////////////////////////////////////////////////////////////    
         $("#left").click(function(){
             prevItem();
     });
//////////////////////////////////////////////////////////////////////////    
    $("body").keydown(function(event){
       if(event.which == 39){
           nextItem();
       } 
    });
//////////////////////////////////////////////////////////////////////////    
        $("body").keydown(function(event){
       if(event.which == 37){
           prevItem();
       } 
    });
///////////////////////////////////////////////////////////////////////////
    $("#slideshow").click(function(){
       $(this).fadeOut();
       current_li = $("#portfolio li").first();
       intervalHandler = setInterval(slideShow,1000);
    });
///////////////////////////////////////////////////////////////////////////    
    $("#end").click(function(){
        
       clearInterval(intervalHandler);
    });
});