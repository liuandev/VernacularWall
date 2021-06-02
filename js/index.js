let isMale = false;

function forbidMouse() {//禁右键、禁选择、禁复制
  document.oncontextmenu = function(){
    event.returnValue = false;
  }
  document.onselectstart = function(){
    event.returnValue = false;
  }
  document.oncopy = function(){
    event.returnValue = false;
  }
}

function getPosition(pi) {
  var position = {x:0,y:0,v:false,s:1};
  var center = {x:45,y:45};


  //圆形
  var r,deg;
  if(pi == 0) {
    r=0;
    deg=0;
  } else if(pi < 9) {
    r = 15;
    deg = (pi-1)*360/8;
  } else if(pi < 25) {
    r=25;
    deg = (pi-9)*360/16;
  } else if(pi < 50) {
    r=35;
    deg = (pi-25)*360/25;
    
  } else {
    r=45;
    deg = (pi-50)*360/35;
    
  }
  var dis1 = Math.PI/180; //1度的计算参数
  position.y = center.y -   Math.cos(dis1 * deg)*r;
  position.x = center.x +   Math.sin(dis1 * deg)*r;
 
  console.log(deg+","+position.x+","+position.y);

  position.x += "%";
  position.y += "%";
  return position;
}

$(function(){
  forbidMouse();

  var player = document.getElementById("player");

  for(var i=0;i<wordsArr.length;i++) {

    var p = document.createElement('p');
    p.id = "word_"+i;
    p.className = "words";
    
    
    console.log(wordsArr[i].name);
    var pp = getPosition(i);

    if(wordsArr[i].x == -1 || wordsArr[i].y == -1) {
      p.style.left = pp.x;
      p.style.top = pp.y;
    } else {
      p.style.left = wordsArr[i].x;
      p.style.top = wordsArr[i].y;
    }

    if( wordsArr[i].vertical == true ) {
      p.className += " vertical-text";
    }

    if( wordsArr[i].size == 0 ) {
      p.className += " normal-text";
    } else {
      p.className += wordsArr[i].size == -1?" small-text":" big-text";
    }

    document.getElementById("fake_body").appendChild(p);
    
    $("#word_"+i).text(wordsArr[i].name);
    $("#word_"+i).data("audio",(i+1)+".mp3");

    $("#word_"+i).click(function(n){
      //点击动画
      $(this)[0].addEventListener("animationend",function(){
        $(this).removeClass("shake-once");//addClass只会运行一次，所以监听动画结束后removeClass
      });
      $(this).addClass("shake-once");
      //点击发音
      player.setAttribute("src","audio/"+(isMale?"male/":"female/")+$(this).data("audio"));
      player.play();
      isMale = !isMale;
    });
  }
});