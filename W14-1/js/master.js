var Body = {
    setColor: function(color){
        $("body").css('color',color);

    },
    setBackgroundColor: function(color){
        $("body").css('backgroundColor',color);
        
    }
}

var Links = {
    setColor: function(color){
       $("a").css('color',color);
   
    }
}
var ui = {
    setColor: function(color){
        $("ul").css('backgroundColor',color);
},
    setHeadColor: function(color){
        $("h1").css('backgroundColor',color);
}
}
function nightDayHandler(self){
    var target = document.querySelector('body');      
    if(self.value == 'day'){
        Body.setColor('black');
        Body.setBackgroundColor(' rgb(253, 253, 188)'); 
        Links.setColor('blue');
        ui.setColor('rgb(255, 226, 181)');
        ui.setHeadColor('blanchedalmond');     
      self.value = 'night';      
    } else {
        Body.setColor('white');
        Body.setBackgroundColor('rgb(0, 0, 35)');     
        Links.setColor('powderblue');
        ui.setColor('rgb(35, 15, 0)');
        ui.setHeadColor('rgb(40, 38, 35)');  
      self.value = 'day';
    } 
    }  
  