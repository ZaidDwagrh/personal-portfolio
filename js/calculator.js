'use strict';
const display=document.getElementById('calcDisplay');const history=document.getElementById('calcHistory');
let current='0',previous=null,operator=null,waiting=false;
const symbols={'+':'+','-':'−','*':'×','/':'÷'};
function render(){display.textContent=current;history.textContent=previous!==null&&operator?`${previous} ${symbols[operator]}`:'\u00a0'}
function reset(){current='0';previous=null;operator=null;waiting=false;render()}
function digit(d){if(current==='Error')reset();if(waiting){current=d;waiting=false}else if(current==='0')current=d;else if(current.replace(/[^0-9]/g,'').length<14)current+=d;render()}
function decimal(){if(current==='Error')reset();if(waiting){current='0';waiting=false}if(!current.includes('.'))current+='.';render()}
function compute(a,b,op){switch(op){case '+':return a+b;case '-':return a-b;case '*':return a*b;case '/':return b===0?null:a/b;default:return b}}
function format(n){if(n===null||!Number.isFinite(n))return 'Error';return String(Number(n.toPrecision(12)))}
function chooseOperator(op){if(current==='Error')reset();if(operator&&!waiting){const result=compute(Number(previous),Number(current),operator);current=format(result);if(current==='Error'){previous=null;operator=null;render();return}}previous=current;operator=op;waiting=true;render()}
function equals(){if(operator===null||previous===null||current==='Error')return;const second=Number(current);const first=Number(previous);const result=format(compute(first,second,operator));history.textContent=`${previous} ${symbols[operator]} ${current} =`;current=result;previous=null;operator=null;waiting=true;display.textContent=current}
function backspace(){if(current==='Error'){reset();return}if(waiting)return;current=current.length<=1||(current.length===2&&current.startsWith('-'))?'0':current.slice(0,-1);render()}
function action(type,value){switch(type){case 'digit':digit(value);break;case 'decimal':decimal();break;case 'operator':chooseOperator(value);break;case 'equals':equals();break;case 'clear':reset();break;case 'backspace':backspace();break;case 'sign':if(current!=='0'&&current!=='Error')current=current.startsWith('-')?current.slice(1):'-'+current;render();break;case 'percent':if(current!=='Error')current=format(Number(current)/100);render();break}}
document.querySelectorAll('.calc-key').forEach(button=>button.addEventListener('click',()=>action(button.dataset.action,button.dataset.value)));
document.addEventListener('keydown',e=>{if(e.altKey||e.ctrlKey||e.metaKey||e.target.matches('input,textarea'))return;let type=null,value=e.key;if(/^\d$/.test(value))type='digit';else if(['+','-','*','/'].includes(value))type='operator';else if(value==='.')type='decimal';else if(value==='Enter'||value==='=')type='equals';else if(value==='Backspace')type='backspace';else if(value==='Escape')type='clear';else if(value==='%')type='percent';if(type){e.preventDefault();action(type,value)}});render();
