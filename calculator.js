function clearr()
{
const re= document.getElementsByClassName("result")[0];
const hist=document.getElementsByClassName("history")[0];
    re.innerHTML=" ";
    hist.textContent=" ";
}
function deletee()
{
    const re= document.getElementsByClassName("result")[0];
const hist=document.getElementsByClassName("history")[0];
    re.textContent=re.textContent.slice(0,-1);
    hist.textContent=hist.textContent.slice(0,-1);
}
function calci(operand) {
    const re= document.getElementsByClassName("result")[0];
    const hist=document.getElementsByClassName("history")[0];
    if (re) {
        re.textContent = operand;
        hist.textContent+=operand;
    } else {
        console.error('Element with class "result" not found.');
    }
    if(operand=="sq")
    {
        
        const value = parseInt(hist.innerText);
        re.textContent=value**2;
        hist.textContent=re.textContent;
    }
    else if(operand=="root")
    {
        const valuee = parseFloat(hist.innerText);  
        re.textContent=Math.sqrt(valuee);
        hist.textContent=re.textContent;
    }
   
}
function calculate()
{
const hist=document.getElementsByClassName("history")[0];
const re= document.getElementsByClassName("result")[0];
    hist.textContent=eval(hist.textContent);
    re.textContent=hist.textContent;
}
