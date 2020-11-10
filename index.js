
var arrlen=document.querySelectorAll(".drum").length;
for(var i=0;i<arrlen;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleclick()
    {
        
         this.style.color="white";
        var butten_key=this.innerHTML;
        makesound(butten_key);
        button_animation(butten_key);
        
    });

    document.addEventListener("keypress",function(event)
    {
        makesound(event.key);
        button_animation(event.key);
    });

    function makesound(key)
    {
          switch (key) {
             case "w":
                 var t1=new Audio("sounds/tom-1.mp3");
                 t1.play();
                 break;
             case "a":
                 var t2=new Audio("sounds/tom-2.mp3");
                 t2.play();
                 break;
             case "s":
                 var t3=new Audio("sounds/tom-3.mp3");
                 t3.play();
                 break;
             case "d":
                 var t4=new Audio("sounds/tom-4.mp3");
                 t4.play();
                 break;
             case "k":
                 var t5=new Audio("sounds/crash.mp3");
                 t5.play();
                 break;
             case "l":
                 var t6=new Audio("sounds/kick-bass.mp3");
                 t6.play();
                 break;
             case "j":
                 var t7=new Audio("sounds/snare.mp3");
                 t7.play();
                 break;
             default:
                 console("wroung choice");
                 break;
         }

    }
    function button_animation(current_key){
        var action=document.querySelector("."+current_key);
        action.classList.add("pressed");
        setTimeout(function(){
            action.classList.remove("pressed");
        },100);
    }
}