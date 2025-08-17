let r=(Math.random())
console.log(r,"before")
let obj={
    score:0,
    wins:0,
    loses:0,
    draws:0,
    w:document.getElementById("wins"),
    l:document.getElementById("loses"),
    d:document.getElementById("draws"),
    scoret:document.getElementById("score"),
    comppicked:document.getElementById("computer-picked"),
    para:document.getElementById("insideimgsrc")     
}
console.log(obj.score)
let audio = new Audio("assets/computer-mouse-click-351398.mp3"); 
function choice(){
    if (r<=0.3 ){
        obj.score++
        obj.wins=obj.wins+1
        obj.w.innerHTML="wins = "+obj.wins  
        obj.scoret.innerHTML="total score is = "+obj.score 
        audio.play();  
        
    }
    else if(r<=0.6 && r>0.3)
    {
      obj.draws=obj.draws+1
      obj.d.innerHTML="draws = "+obj.draws       
      obj.scoret.innerHTML="total score is = "+obj.score
      audio.play();
    }else{
        obj.score--
        obj.loses=obj.loses+1
        obj.l.innerHTML="loses = "+obj.loses
        obj.scoret.innerHTML="total score is = "+obj.score
        audio.play();
    }
    let resetrand=Math.random();
    r=resetrand 
}    
function rock(){ 
  let rrock =r
    choice()
    if (rrock<=0.3 ){    
      obj.comppicked.innerHTML="COMPUTER PICKED SCISSORS" 
      obj.para.innerHTML = '<img src="assets/hairstyle-tool-mobile-phones-iphone-scissors-removebg-preview.png" class="imgsrc">';
      
    }else if (rrock<=0.6 && rrock>0.3) {   
      obj.comppicked.innerHTML="COMPUTER PICKED ROCK" 
      obj.para.innerHTML = '<img src="assets/rock-emoji-removebg-preview.png" class="imgsrc">';       
    }else{ 
      obj.comppicked.innerHTML="COMPUTER PICKED PAPER"
      obj.para.innerHTML = '<img src="assets/OIP-removebg-preview.png" class="imgsrc">';  
    }
  
}
function paper(){ 
  let rrockpaper =r
  choice() 
   if (rrockpaper<=0.3 ){    
      obj.comppicked.innerHTML="COMPUTER PICKED ROCK" 
      obj.para.innerHTML = '<img src="assets/rock-emoji-removebg-preview.png" class="imgsrc">';   
    }else if (rrockpaper<=0.6 && rrockpaper>0.3) {    
      obj.comppicked.innerHTML="COMPUTER PICKED PAPER" 
      obj.para.innerHTML = '<img src="assets/OIP-removebg-preview.png" class="imgsrc">';       
    }else{     
      obj.comppicked.innerHTML="COMPUTER PICKED SCISSORS"
      obj.para.innerHTML = '<img src="assets/hairstyle-tool-mobile-phones-iphone-scissors-removebg-preview.png" class="imgsrc">';
    }
     
}
function scissors(){ 
  let scissorsfunc =r 
  choice()
   if (scissorsfunc<=0.3 ){    
      obj.comppicked.innerHTML="COMPUTER PICKED PAPER" 
      obj.para.innerHTML = '<img src="assets/OIP-removebg-preview.png" class="imgsrc">';    
    }else if (scissorsfunc<=0.6 && scissorsfunc>0.3) {      
      obj.comppicked.innerHTML="COMPUTER PICKED SCISSORS"
      obj.para.innerHTML = '<img src="assets/hairstyle-tool-mobile-phones-iphone-scissors-removebg-preview.png" class="imgsrc">';      
    }else{     
      obj.comppicked.innerHTML="COMPUTER PICKED ROCK"
      obj.para.innerHTML = '<img src="assets/rock-emoji-removebg-preview.png" class="imgsrc">';
    }
}
function reset(){
  audio.play();
    obj.score=0
    obj.draws=0
    obj.wins=0
    obj.loses=0
    obj.w.innerHTML="wins = "+obj.wins
    obj.l.innerHTML="loses = "+obj.loses
    obj.d.innerHTML="draws = "+obj.draws
    obj.scoret.innerHTML="total score is = "+obj.score
    obj.comppicked.innerHTML="SCORE HAS BEEN RESET"
    obj.divs.innerHTML="RESET"
    
}
