

window.onload = function(){
    
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
     document.querySelector(".score h1").innerText=NumOfScore;
     
     const stagehands = document.querySelector(".hands");
     const stagebonus = document.querySelector(".bonus");
    
     const showDefault =NumOfScore;


    if(NumOfScore>=12){
       stagehands.style.display="none";
       stagebonus.style.display="flex";
    } else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
       stagebonus.style.display="none";
       stagehands.style.display="flex";
      
      
    }
    else{
        stagebonus.style.display="none";
        stagehands.style.display="flex";
    };
    let rules = document.querySelector(".rules");
    
   
   
    //let rules =document.querySelector(".rules");
    
    
    $(document).mouseup(function (e) {
        if ($(e.target).closest(".close").length === 1) {
            $(".showRuleImage").hide();
            $(".ShowRules").css("display","block");

            $(".hands").css("opacity","1");
            $(".bonus").css("opacity","1");
            $(".contest").css("opacity","1");
            
           
        }
      

    });
   
   
    $(".computerShadow").css("display","none");
 
//hover state
    $(".hand.paper_outer_shawdow").hover(function(){
        $(this).css({"box-shadow": "0 0 0 40px #293251", "border-radius": "50%"});
        }, function(){
        $(".paper_outer_shawdow").css("box-shadow","none");
      });
    $(".hand.scissors.scissors").hover(function(){
        $(this).css({"box-shadow": "0 0 0 40px #293251", "border-radius": "50%"});
        }, function(){
        
            $(".scissors_outer_shawdow").css("box-shadow","none");
           
      });
    $(".hand.rock.rock_outer_shawdow").hover(function(){
        $(this).css({"box-shadow": "0 0 0 40px #293251", "border-radius": "50%"});
        }, function(){
            $(".rock_outer_shawdow").css("box-shadow","none");
           
      });
    $(".hand.lizard.lizard_outer_shawdow").hover(function(){
        $(this).css({"box-shadow": "0 0 0 40px #293251", "border-radius": "50%"});
        }, function(){
            $(".lizard_outer_shawdow").css("box-shadow","none");

      });
    $(".hand.spock.spock_outer_shawdow").hover(function(){
        $(this).css({"box-shadow": "0 0 0 40px #293251", "border-radius": "50%"});
        }, function(){
            $(".spock_outer_shawdow").css("box-shadow","none");
            
      });
    

    
}



let NumOfScore= JSON.parse(localStorage.getItem('score'));



const pickUserHand = (hand) => {
  
    $(".computerShadow").css("display","none");

    /*hind the current page*/
    let hands = document.querySelector(".hands");
    hands.style.display= "none";

    /*show the next page when clicked*/
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
    let bonus = document.querySelector(".bonus");
    bonus.style.display = "none";
    



   
    let paperStage1 = document.querySelector(".stage1");
    let scissorsStage2 = document.querySelector(".stage2");
    let rockStage3 = document.querySelector(".stage3");
    let spockStage9 = document.querySelector(".stage9");
    let lizardStage10 = document.querySelector(".stage10");



    
    if(hand=="rock"){
       
        scissorsStage2.style.display= "none";
        paperStage1.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";

        rockStage3.style.display= "flex";
        $(".computerShadow").css("display","flex");
    }
    else if(hand=="paper"){
        scissorsStage2.style.display= "none";
        rockStage3.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";
       
        paperStage1.style.display= "flex";
        $(".computerShadow").css("display","flex");
    }
    else if(hand=="scissors"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        spockStage9.style.display= "none";
        lizardStage10.style.display= "none";
       
        scissorsStage2.style.display= "flex";
        $(".computerShadow").css("display","flex");

    }
    else if(hand=="spock"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        lizardStage10.style.display= "none";
        scissorsStage2.style.display= "none";
        
        spockStage9.style.display= "flex";
        $(".computerShadow").css("display","flex");

    }
    else if(hand=="lizard"){
        rockStage3.style.display= "none";
        paperStage1.style.display= "none";
        scissorsStage2.style.display= "none";
        spockStage9.style.display= "none";
        
       
       
        lizardStage10.style.display= "flex";
        $(".computerShadow").css("display","flex");

    }
    //let cphand=pickComputerHand();
   // referee1(hand,cphand);
   // pickReferee();
   //let cphand=pickComputerHand2();
   // referee1(hand,cphand);
   
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
    //document.querySelector(".score h1").innerText=NumOfScore;
    const showDefault =NumOfScore;
   
    if(NumOfScore>=12){
        let cphand=pickComputerHand2();
        setTimeout(() => {
            referee2(hand,cphand);
        }, 500);
        
    } 
    else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
        let cphand=pickComputerHand();
         setTimeout(() => {
            referee1(hand,cphand);
        }, 500);
    }
    
    else{
        let cphand=pickComputerHand();
         setTimeout(() => {
            referee1(hand,cphand);
        }, 500);
      
    }
    
  
    return hand;


}


const pickComputerHand = ()=>{
    let computerShadow = document.querySelector(".computerShadow");
    let paperStage4 = document.querySelector(".stage4");
    let scissorsStage5 = document.querySelector(".stage5");
    let rockStage6 = document.querySelector(".stage6");

    let spockStage7 = document.querySelector(".stage7");
    let lizardStage8 = document.querySelector(".stage8");
    let decide = document.querySelector(".decide");
    decide.style.display= "none";
    //$(".computerShadow").css("display","none");

    let hands=["rock", "paper","scissors"]
    let cphands= hands[Math.floor(Math.random()*3)]
   
    if(cphands=="paper"){
       
        scissorsStage5.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
        setTimeout(() => {
            $(".computerShadow").css("display","none");
             
           
           
            setTimeout(() => {
                paperStage4.style.display= "flex";
                decide.style.display = "flex";
            }, 200);
    
        }, 500);
        
        
    }
    else if(cphands=="scissors"){
        paperStage4.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
       
        
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            
            
               
           
            setTimeout(() => {
                scissorsStage5.style.display= "flex";
                decide.style.display = "flex";
            }, 200);
            
           
        }, 500);
    }
    else if(cphands=="rock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
       
       
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            
            setTimeout(() => {
                rockStage6.style.display= "flex";
                decide.style.display = "flex";
            }, 200);  
           
           
            
        }, 500);

        
    }
   
    return cphands;
    
  
}
const pickComputerHand2 = ()=>{
    let paperStage4 = document.querySelector(".stage4");
    let scissorsStage5 = document.querySelector(".stage5");
    let rockStage6 = document.querySelector(".stage6");
    let spockStage7 = document.querySelector(".stage7");
    let lizardStage8 = document.querySelector(".stage8");
    let decide = document.querySelector(".decide");
    decide.style.display= "none";

    let hands=["rock", "paper","scissors","spock","lizard"]
    let cphands= hands[Math.floor(Math.random()*5)]
   
    if(cphands=="paper"){
       
        scissorsStage5.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";

        
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            setTimeout(() => {
                paperStage4.style.display= "flex";
                decide.style.display = "flex";
            }, 200);

        }, 500);
    }
    else if(cphands=="scissors"){
        paperStage4.style.display= "none";
        rockStage6.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
       
        
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            setTimeout(() => {
                scissorsStage5.style.display= "flex";
                decide.style.display = "flex";
            }, 200);
        }, 500);
    }
    else if(cphands=="rock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        spockStage7.style.display= "none";
       
        
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            setTimeout(() => {
                rockStage6.style.display= "flex";
                decide.style.display = "flex";
            }, 200);
        }, 500);
        
    }
    else if(cphands=="spock"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        lizardStage8.style.display= "none";
        rockStage6.style.display= "none";

       
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            setTimeout(() => {
                spockStage7.style.display= "flex";
                decide.style.display = "flex";
            }, 200);
        }, 500);
        
    }
    else if(cphands=="lizard"){
        scissorsStage5.style.display= "none";
        paperStage4.style.display= "none";
        spockStage7.style.display= "none";
        rockStage6.style.display= "none";
       
       
       
        setTimeout(() => {
            $(".computerShadow").css("display","none");
            setTimeout(() => {
                lizardStage8.style.display= "flex";
            decide.style.display = "flex";
            }, 200);
        }, 500);
    }
    
    return cphands;
  
}


const referee1 =(userHand,cphand)=>{
    if(userHand =="paper" && cphand=="scissors"){
    setDecision("YOU LOSE!")
    setScore_neg(NumOfScore - 1);
    
    }
    else if(userHand =="paper" && cphand=="rock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        
        }
    else if(userHand =="paper" && cphand=="paper"){
        setDecision("It's a tie!")
        }
    else if(userHand =="rock" && cphand=="scissors"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        
        }
    else if(userHand =="rock" && cphand=="paper"){
        setDecision("YOU LOSE!")
        setScore_neg(NumOfScore - 1);
        
       
        }
    else if(userHand =="rock" && cphand=="rock"){
        setDecision("It's a tie!")
        
        }
    else if(userHand =="scissors" && cphand=="rock"){
        setDecision("YOU LOSE!")
        setScore_neg(NumOfScore - 1);
        
        }
    else if(userHand =="scissors" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
       
        }
    else if(userHand =="scissors" && cphand=="scissors"){
        setDecision("It's a tie!")
        }

}
const referee2 =(userHand,cphand)=>{
    
    if(userHand =="paper" && cphand=="scissors"){
    setDecision("YOU LOSE!");
     setScore_neg(NumOfScore - 1);
    
    }
if(userHand =="paper" && cphand=="rock"){
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        
        
        }
 if(userHand =="paper" && cphand=="spock"){
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        
        
        }
 if(userHand =="paper" && cphand=="lizard"){
    setDecision("YOU LOSE!");
        setScore_neg(NumOfScore - 1);
        
        }
if(userHand =="paper" && cphand=="paper"){
        setDecision("It's a tie!")
        
        
        }
        //rock
 if(userHand =="rock" && cphand=="scissors"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        
        }
  if(userHand =="rock" && cphand=="spock"){
    setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        }
   if(userHand =="rock" && cphand=="lizard"){
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        
        }
    if(userHand =="rock" && cphand=="paper"){
        setDecision("YOU LOSE!");
        setScore_neg(NumOfScore - 1);
        
        }

     if(userHand =="rock" && cphand=="rock"){
         setDecision("It's a tie!");
        }
        //scissors
     if(userHand =="scissors" && cphand=="rock"){
        setDecision("YOU LOSE!");
        setScore(NumOfScore - 1);
        }
     if(userHand =="scissors" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
     if(userHand =="scissors" && cphand=="spock"){
        setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        }
     if(userHand =="scissors" && cphand=="lizard"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
    if(userHand =="scissors" && cphand=="scissors"){
        setDecision("It's a tie!");
       
        }

        //new
        //lizard
     if(userHand =="lizard" && cphand=="spock"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
     if(userHand =="lizard" && cphand=="scissors"){
        setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        }
     if(userHand =="lizard" && cphand=="paper"){
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1);
        }
     if(userHand =="lizard" && cphand=="rock"){
        setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        }
     if(userHand =="lizard" && cphand=="lizard"){
        setDecision("It's a tie!");
       
        }

//spock
     if(userHand =="spock" && cphand=="rock"){
       
        setDecision("YOU WIN!")
        setScore(NumOfScore + 1)
        
        
        
        }
     if(userHand =="spock" && cphand=="scissors"){
       
        setDecision("YOU WIN!");
        setScore(NumOfScore + 1);
        
        }
     if(userHand =="spock" && cphand=="paper"){
        setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        
        }
     if(userHand =="spock" && cphand=="lizard"){
        setDecision("YOU LOSE!");
         setScore_neg(NumOfScore - 1);
        }
     if(userHand =="spock" && cphand=="spock"){
        setDecision("It's a tie!");
       
        }

}

// decision to pick referee
const pickReferee =()=>{
    if(NumOfScore>=12){
        referee2(hand,cphand);
    }
    else{
        referee1(hand,cphand);
    }
}
/*Play New Game */
const newGame =()=>{
     /*hind the current page*/
     
 
     /*show the next page when clicked*/
     let contest = document.querySelector(".contest");
     contest.style.display = "none";
    let NumOfScore= JSON.parse(localStorage.getItem('score'));
    const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    $(".computerShadow").css("display","none");
    
    const showDefault =NumOfScore;


    if(NumOfScore>=12){
       stagehands.style.display="none";
       stagebonus.style.display="flex";
    } else if (NumOfScore<1){
        document.querySelector(".score h1").innerText = showDefault;
       stagebonus.style.display="none";
       stagehands.style.display="flex";
      
      
    }
    else{
        stagebonus.style.display="none";
        stagehands.style.display="flex";
    }

}
const RulesOnClick =()=>{
     /*hind the current page*/
     $(".hands").css("opacity","0.7");
            $(".bonus").css("opacity","0.7");
            $(".contest").css("opacity","0.7");
     
     let ShowRules = document.querySelector(".ShowRules");
     ShowRules.style.display = "none";
    /*const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    stagehands.style.display = "none";
    stagebonus.style.display = "none"; */

     /*show the Rules page when clicked*/
    const showImage =document.querySelector(".showRuleImage");

    showImage.style.display="grid";

    const close =document.querySelector(".close");
    close.style.display="flex";

    
    
}
const CloseOnClick =()=>{
     /*hind the current page*/
     
 
     /*show the next page when clicked*/
     let NumOfScore= JSON.parse(localStorage.getItem('score'));
     
     const rules_image =document.querySelector(".rules_image");
    rules_image.style.display="none";
    const close =document.querySelector(".close");
    close.style.display="none";
    
    const rules = document.querySelector(".ShowRules");
    rules.style.display="flex";


    const stagehands = document.querySelector(".hands");
    const stagebonus = document.querySelector(".bonus");
    const showDefault = NumOfScore;


   if(NumOfScore>=12){
      stagehands.style.display="none";
      stagebonus.style.display="flex";
   } else if (NumOfScore<1){
       document.querySelector(".score h1").innerText = showDefault;
      stagebonus.style.display="none";
      stagehands.style.display="flex";
     
     
   }
   else{
       stagebonus.style.display="none";
       stagehands.style.display="flex";
   }
    
      


   


    
}



      

let setDecision =(decision)=>{
   
    
    const computerShadow =document.querySelector(".computerShadow");
    const redcolor =document.querySelector(".newGame");
        document.querySelector(".decision h1").innerText = decision;
        if(decision=="YOU LOSE!"){
            redcolor.addEventListener('mouseover', function handleMouseOver(){
                redcolor.style.color="red";
                
            });
            redcolor.addEventListener('mouseout', function handleMouseOver(){
                redcolor.style.color="hsl(229,25%,31%)";
            });
            $(".computer").css({"box-shadow": "0 0 0 40px #293251, 0 0 0 80px #232c4d, 0 0 0 130px #1e2949", "border-radius": "50%", "transition": "opacity 0.4s ease"});
            $(".user").css("box-shadow","none");
            
            $(".userchoice").css("z-index","1");
            $(".computerchoice").css("z-index","0");
           
        


        } else if(decision=="YOU WIN!"){
            redcolor.addEventListener('mouseover', function handleMouseOver(){
                redcolor.style.color="hsl(229,25%,31%)";
            });
            redcolor.addEventListener('mouseout', function handleMouseOver(){
                redcolor.style.color="hsl(229,25%,31%)";
            });
            $(".user").css({"box-shadow": "0 0 0 40px #293251, 0 0 0 80px #232c4d, 0 0 0 130px #1e2949", "border-radius": "50%", "transition": "opacity 0.4s ease"});
            
            $(".computer").css("box-shadow","none");
            $(".computerchoice").css("z-index","1");
            $(".userchoice").css("z-index","0");

            //,"z-index": "1"
        }
        else{
            $(".computer").css("box-shadow","none");
            $(".user").css("box-shadow","none");
        }
       
       
    }


const setScore =(score)=>{
    NumOfScore = score;
    let new_data = document.querySelector(".score h1").innerText = score;

    

  if(localStorage.getItem('score')==null){
        localStorage.setItem('score',0);
    }
    
    // get old data and add to new data
    let old_data= JSON.parse(localStorage.getItem('score'));
old_data = old_data + 1;
    
    // now save oldd data + new data to the local storage
    score=localStorage.setItem('score', JSON.parse(old_data));

   
   

}
const setScore_neg =(score)=>{
    NumOfScore = score;
    let new_data = document.querySelector(".score h1").innerText = score;

    

  if(localStorage.getItem('score')==null){
        localStorage.setItem('score',0);
    }
    
    // get old data and add to new data
    let old_data= JSON.parse(localStorage.getItem('score'));
old_data = old_data - 1;
    
    // now save oldd data + new data to the local storage
    score=localStorage.setItem('score', JSON.parse(old_data));

   
   

}



const gethand =(gethands)=>{
    // get new data from the accomolated score

    
   
    //document.querySelector(".decision h1").innerText = gethands;
   // document.querySelector(".decision h1").innerText = decision;
    gethands.style.display="none";
}



