// Declaring variables and selecting the Dom.
let playing = false;
let roll = document.querySelector('.spin');
let status = document.getElementById("status")
let spin = [new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav")];
let coin = [new Audio("Sounds/SlotSpin.wav"),
new Audio("Sounds/SlotSpin.wav")
,new Audio("Sounds/SlotSpin.wav")];
let slots = document.querySelectorAll('#slot');
let list1 = document.querySelector('#l1');
let list2 = document.querySelector('#l2');
let list3 = document.querySelector('#l3');
let list4 = document.querySelector('#l4');
let list5 = document.querySelector('#l5');
let noCombination = document.querySelector('#l6');


// selecting the random slot button and adding events 
let ran_slot = document.querySelector('#ran');
ran_slot.addEventListener('click', function() {
    ran_slot.classList.add('selected')
    fixedSlot.classList.remove('selected')
});

// selecting the fixed button and adding events
let fixedSlot = document.querySelector('#fixed');
    fixedSlot.addEventListener('click', function() {
    fixedSlot.classList.add('selected');
    ran_slot.classList.remove('selected');
    alert('click on the spin button to set your desired output')
});

// selecting the spin button and adding event
roll.addEventListener('click' , function () {
    let ran_slot = document.querySelector('#ran').className;
    let fixedSlot = document.querySelector('#fixed').className;
    // if random slot button is selected
    if (ran_slot == 'selected') {
    // Spin reels randomly
        ranSpin();
    // if fixed button is selected
    }else if(fixedSlot == 'selected'){
    // spin according to the input by the player
        fixedSpin();
    // else if no selection use random spin as default
    }else{ranSpin()};
})

// Getting a random number to country the spinning
function ran_number(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}

// function for the random spinning
function ranSpin(){
    if (playing)
    {return null;}
	playing = true;
    let numChanges = ran_number(1,4)*5
	let numeberReel1 = numChanges+ran_number(1,5)
	let numeberReel2 = numChanges+2*5+ran_number(1,5)
	let numeberReel3 = numChanges+4*5+ran_number(1,5)
	let i1 = 0;
	let i2 = 0;
    let i3 = 0;
    let sound = 0;
	status.innerHTML = "RANDOM SPIN"
	reel1 = setInterval(spin1, 200);
	reel2 = setInterval(spin2, 200);
    reel3 = setInterval(spin3, 200);
    colorChange = setInterval(setColor, 300);
    let allList = document.querySelectorAll('li');
    for (let i = 0; i< allList.length; i++) {
        allList[i].classList.remove('winner');
    }
   
    // finction that controls the reel 1 spinning
	function spin1(){
		i1++;
		if (i1>=numeberReel1){
            coin[0].play();
			clearInterval(reel1);
			return null;
		}
		reelTile = document.getElementById("slot1");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
        let d1 = Math.floor(Math.random() * 5) + 1;
		reelTile.className = "s"+ d1
    }
    // finction that controls the reel 2 spinning
	function spin2(){
		i2++;
		if (i2>=numeberReel2){
            coin[1].play();
			clearInterval(reel2);
			return null;
		}
		reelTile = document.getElementById("slot2");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
        let d2 = Math.floor(Math.random() * 5) + 1;
		reelTile.className = "s"+ d2
    }
    // finction that controls the reel 3 spinning
	function spin3(){
		i3++;
		if (i3>=numeberReel3){
            coin[2].play();
			clearInterval(reel3);
			checkWin();
			return null;
		}
		reelTile = document.getElementById("slot3");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
        sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();

        let d3 = Math.floor(Math.random() * 5) + 1;
		reelTile.className = "s"+ d3
	}
}
             
// function for the fixed spinning
function fixedSpin(){
    // Setting questions
    let q1 = 'What image do you want in reel 1? 1:Cherry, 2: 2xBAR, 3: 3xBAR, 4: Seven, 5: BAR';
    let q2 = 'What image do you want in reel 2? 1:Cherry, 2: 2xBAR, 3: 3xBAR, 4: Seven, 5: BAR';
    let q3 = 'What image do you want in reel 3? 1:Cherry, 2: 2xBAR, 3: 3xBAR, 4: Seven, 5: BAR';
    // Getting inputs from the player
    let question1 = parseInt(prompt(q1));
    let question2 = parseInt(prompt(q2));
    let question3 = parseInt(prompt(q3));

    if (playing)
    {return null;}
	playing = true;
    let numChanges = ran_number(1,4)*5
	let numeberReel1 = numChanges+ran_number(1,5)
	let numeberReel2 = numChanges+2*5+ran_number(1,5)
	let numeberReel3 = numChanges+4*5+ran_number(1,5)
	let i1 = 0;
	let i2 = 0;
    let i3 = 0;
    let sound = 0;
	status.innerHTML = "FIXED SPIN"
	reel1 = setInterval(spin1, 200);
	reel2 = setInterval(spin2, 200);
    reel3 = setInterval(spin3, 200);
    colorChange = setInterval(setColor, 300);
    let allList = document.querySelectorAll('li');
    for (let i = 0; i< allList.length; i++) {
        allList[i].classList.remove('winner');
    }
    
    // finction that controls the reel 1 spinning
	function spin1(){
		i1++;
		if (i1>=numeberReel1){
            coin[0].play();
			clearInterval(reel1);
			return null;
		}
		reelTile = document.getElementById("slot1");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
		reelTile.className = "s"+ question1
    }
    
    // finction that controls the reel 2 spinning
	function spin2(){
		i2++;
		if (i2>=numeberReel2){
            coin[1].play();
			clearInterval(reel2);
			return null;
		}
		reelTile = document.getElementById("slot2");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
		reelTile.className = "s"+ question2
    }
    
    // finction that controls the reel 3 spinning
	function spin3(){
		i3++;
		if (i3>=numeberReel3){
            coin[2].play();
			clearInterval(reel3);
			checkWin();
			return null;
		}
		reelTile = document.getElementById("slot3");
		if (reelTile.className=="s1"){
			reelTile.className = "s0";
        }
        sound++;
		if (sound==spin.length){
			sound=0;
		}
		spin[sound].play();

		reelTile.className = "s"+ question3
	}
}

// function that check the winning
function checkWin() {
    let reel1 = document.getElementById("slot1").className;
	let reel2 = document.getElementById("slot2").className;
    let reel3 = document.getElementById("slot3").className;
    
    switch (true) {
        case (reel1=='s1' || reel2 == 's1' ) && (reel2 == 's1' ||reel3 == 's1')
         && (reel1=='s1' || reel3 == 's1' ):
            status.innerHTML = " Cherry Combination ";
            list1.classList.add('winner');
            break;
        
        case (reel1=='s2' || reel2 == 's2' ) && (reel2 == 's2' ||reel3 == 's2')
            && (reel1=='s2' || reel3 == 's2' ):
            status.innerHTML = " 2x BaAR Combination";
            list2.classList.add('winner');
            break;
        
        case (reel1=='s3' || reel2 == 's3' ) && (reel2 == 's3' || reel3 == 's3')
            && (reel1=='s3' || reel3 == 's3' ):
            status.innerHTML = " 3x BAR Combination ";
            list3.classList.add('winner');
            break;
        
        case (reel1=='s4' || reel2 == 's4' ) && (reel2 == 's4' ||reel3 == 's4')
            && (reel1=='s4' || reel3 == 's4' ):
            status.innerHTML = " Seven Combination ";
            list4.classList.add('winner');
            break;

        case (reel1=='s5' || reel2 == 's5' ) && (reel2 == 's5' ||reel3 == 's5')
            && (reel1=='s5' || reel3 == 's5' ):
            status.innerHTML = " BAR Combination";
            list5.classList.add('winner');
            break;
        
        default:
        status.innerHTML = " No Combinations Try Again!"
        noCombination.classList.add('winner');
            break;
  
    }
    clearInterval(colorChange);
    roll.style.backgroundColor = 'red';
    fixedSlot.classList.remove('selected');
    ran_slot.classList.remove('selected');

    playing = false;
}

// function to set different colors for the spinning button
function setColor() {
    roll.style.backgroundColor = roll.style.backgroundColor == "green" ? "blue" : "green";
  }





   