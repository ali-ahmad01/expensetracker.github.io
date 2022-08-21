

const balance = document.getElementById("balance");

const moneyplaus = document.getElementById("money-plus")


const moneyminus = document.getElementById("money-minus")

const plus = document.getElementById("plus")

const form = document.getElementById("form")

const text = document.getElementById("text")

const form2 = document.getElementById("form-2")

const amount = document.getElementById("amount")

const list = document.getElementById("list")

const btn = document.getElementById("btn")


// const dummyTrance = [
    
    // ];
    
    
    
    function addtranstion (event){
        event.preventDefault()
        
        if(text.value.trim() === ""  || amount.value.trim() === "" ){
            alert('please enter you form')
        }else{
            const trans = {
                id: gentid(),
                text: text.value,
                amount: +
                amount.value
            };
            Trans.push(trans);
            addtrans(trans);
            updatevalue()
            text.value= "";
            amount.value="";
            updatevalue();
        }
    }
    
    function gentid (){
        return Math.floor(Math.random()*100000000);
    }
    
    
    let Trans = [] ;
    
    function updatevalue(){
        const amount = Trans.map(transtion => transtion.amount);
        const total = amount.reduce((acc,item)=>(acc += item),0).toFixed(2);
        const income = (amount.filter(item => item < 0).reduce((acc,item) => (acc += item),0) *-1).toFixed(2);
        const expense = amount.filter(item => item > 0).reduce((acc,itme) => (acc += itme),0).toFixed(2);
    
    
        balance.innerText=`$${total}`
        moneyplaus.innerText=`$${expense}`
        moneyminus.innerText=`$${income}`
    
    }

function addtrans (trans){
    const sing = trans.amount < 0 ? "-" : "+";

    const items = document.createElement("li")

    items.classList.add(
        trans.amount < 0 ? "minus" : "plus"
    );

    items.classList.add('plu')

    items.innerHTML = (`
    
    ${trans.text}<span> ${sing} ${Math.abs(trans.amount)}
    
    </span> 
    `)
    
    list.appendChild(items)

}



// function removeitems (id){
//         Trans = Trans.filter(Trans => Trans.id !== id);
//         updateLocalStorage();
//         Init();
// }


function Init (){
    list.value= ""
    Trans.forEach(addtrans);
    updatevalue()
}

Init()

btn.addEventListener('click', addtranstion)





