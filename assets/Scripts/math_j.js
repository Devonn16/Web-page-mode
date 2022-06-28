let counter 
let storage = [];
const app = document.getElementById('app');
const question_div = document.getElementById('question_div');
const ans_div = document.getElementById('ans_div');
const instructions_div = document.getElementById('instructions');
const change_btns = document.getElementById('change_btns');
const check = document.getElementById('check');
var data 
let check_btn =  document.getElementById('check_btn');

async function questionLoader(){
    const questdb = await fetch('../assets/db/MATHEMATICS_jhs.json');
     data = await questdb.json();
     counter = 0;
    listGen();
    questionDisplay()
    
    questionChange();
};
questionLoader();

function listGen(){
    for(let i = 0; i <500; i++){
        let num = Math.floor(Math.random() * data.length);
        // console.log(num)
        if(storage.indexOf(num) == -1){
            storage.push(num);
        }else if(storage.indexOf(num) > -1){
         // console.log('questions already'  + ' exists')
        }
     // console.log(storage)
        
    }
    if (storage.length = data.length){
        console.log(storage.length +1 + ' questions loaded successfully  ');
    }
};
function questionDisplay(){
  
    instructions_div.innerHTML =  data[storage[counter]].Instructions +'<br>';
   question_div.textContent = data[storage[counter]].Question;
   let options = [data[storage[counter]].opt_A,data[storage[counter]].opt_B,data[storage[counter]].opt_C,data[storage[counter]].opt_D];
   ans_div.innerHTML = null;
   for(let i=0;i<options.length;i++){
    
    ans_div.innerHTML += `
    <input type="radio" name="radio" value="${options[i]}">${options[i]}<br>
    `
     check.style.display = 'block';
   }
   
   
   
};
check_btn.onclick =  function (){
    
    let radio = document.getElementsByName('radio');
    
    
        let selected
        let ans = data[storage[counter]].Valid;
        for(let i=0; i<radio.length; i++) {
            if(radio[i].checked == true){
                selected = radio[i].value;
            }
        }
        if(ans == selected){
           alert('correct');
           
            
        }else{
            alert('wrong')
        }
      

};
function questionChange(){
    change_btns.innerHTML = `
    <button id="prev" class="btn btn-secondary">Previous</button>
    <button id="next" class="btn btn-secondary">Next</button>
    `;
    let buttons = document.getElementsByTagName("button"); 
    for(let i = 0; i < buttons.length; i++){
        
        // if(counter == storage.length){
        //     document.getElementById('next').style.display = 'none';
        //  }else if(counter <= storage.length){
        //     document.getElementById('next').style.display = 'block';
        //  }
        buttons[i].onclick = function(){
            if(buttons[i].id == "prev"){
                 if(counter > 0){
                    counter--;
                    // console.log(counter);
                    questionDisplay()
                }
                
            }else if(buttons[i].id == "next"){
                if(counter == storage.length){
                    alert('This is the last question')
                }else if(counter < storage.length){
                    counter++;
                    //console.log(counter);
                    questionDisplay()
                }
            }
        
         }
    }
};


