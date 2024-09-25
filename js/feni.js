


document.getElementById("feni-input").addEventListener('click',function(){
    const feni_input = value('feni_value');
    if(feni_input <= 0 ){
      alert("faild to negative add money ")
      return;
      
    }
    if(feni_input > 0){
      document.getElementById('my_modal_4').showModal();
        }

    const Balance_amount = innertext('balance_amounts');
   
   
    const total_amount = Balance_amount + feni_input;
    const frist_Balance = innertext('balance_frist');
    const total_Balance = frist_Balance  -  total_amount;
    document.getElementById('balance_amounts').innerText = total_amount;
    document.getElementById('balance_frist').innerText = total_Balance;;
    
    
    
    
    const div = document.createElement('div');
    div.classList.add('bg-slate-50','border-2', 'p-4')
    div.innerHTML= `
   <p class="text-xl font-bold ">${feni_input }  Taka is Donated for Flood Relief in Feni,Bangladesh</p>
   <p>Date :    ${new Date()}  GMT +0600 (Bangladesh Standard Time)</p>
   `
  
   
  
    
     document.getElementById('history_continar').appendChild(div);
    
    
})

