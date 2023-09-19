const display1El = document.querySelector('.display-1');
const display2El = document.querySelector('.display-2');
const numbersEl = document.querySelectorAll('.number'); // Use querySelectorAll to select all number buttons
const operationEl = document.querySelectorAll('.operation'); // Also select all operation buttons
const equalEl = document.querySelector('.equal');
const clearEl = document.querySelector('.all-clear');
const allclearEl = document.querySelector('.last-clear');
const tempEl=document.querySelector('.temp');

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numbersEl.forEach(number => {
  number.addEventListener('click', (e) => {
    if (e.target.innerText === '.' && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === '.' && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

// You should do the same for operation buttons
operationEl.forEach(operation => {
  operation.addEventListener('click', (e) => {
  	if (!dis2Num) result;
  	haveDot=false;
  	const operationName=e.target.innerText;
  	if (dis1Num && dis2Num && lastOperation) {
  		mathOperation();
  	} else {
  		result=parseFloat(dis2Num);
  	}
  	clearVar(operationName);
  	lastOperation=operationName;
  	console.log(result);
  });
});

function clearVar(name='') {
	dis1Num+=dis2Num+' '+name+' ';
	display1El.innerText=dis1Num;
	display2El.innerText='';
	dis2Num='';
	tempEl.innerText=result;
}

function mathOperation() {
	if (lastOperation === 'X') 
	{
		result=parseFloat(result)*parseFloat(dis2Num);
	}
	else if (lastOperation === '+') 
	{
		result=parseFloat(result)+parseFloat(dis2Num);
	}
	else if (lastOperation === '-') 
	{
		result=parseFloat(result)-parseFloat(dis2Num);
	}
	else if (lastOperation === '/') 
	{
		result=parseFloat(result)/parseFloat(dis2Num);
	}
	else if (lastOperation === '%') 
	{
		result=parseFloat(result)%parseFloat(dis2Num);
	}
}

equalEl.addEventListener('click', (e)=> {
	if (!dis1Num || !dis2Num) return;
	haveDot=false;
	mathOperation();
	clearVar();
	display2El.innerText=result;
	tempEl.innerText='';
	dis2Num=result;
	dis1Num='';
})

clearEl.addEventListener('click', (e)=> {
	display1El.innerText='0';
	display2El.innerText='0';
	dis2Num='';
	dis1Num='';
	result='';
	tempEl.innerText='0';
})

allclearEl.addEventListener('click', (e)=>{
	display2El.innerText='';
	dis2Num='';
})