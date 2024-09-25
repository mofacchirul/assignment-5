document.getElementById("btn-aid").addEventListener('click',function(){
    

    const btn_aid= value('aid_input');
    
    if(btn_aid <= 0 ){
      alert("faild to negative add money ")
      return;
      
    }

    if(btn_aid > 0){
      document.getElementById('my_modal_5').showModal();
        }



    
    const Balance_amount = innertext('balance_amountes');
    const total_amount = Balance_amount + btn_aid;
    const frist_Balance = innertext('balance_frist');
    const total_Balance = frist_Balance  -  total_amount;
    document.getElementById('balance_amountes').innerText = total_amount;
    document.getElementById('balance_frist').innerText = total_Balance;;
    
    
    
    
    const div = document.createElement('div');
    div.classList.add('bg-slate-50','border-2', 'p-4')
    div.innerHTML= `
   <p class="text-xl font-bold ">${ btn_aid }  Taka is Aid for Injured in the Quota Movement</p>
   <p>Date :  ${new Date()}  GMT +0600 (Bangladesh Standard Time)</p>
   `
   
  
    
     document.getElementById('history_continar').appendChild(div);
    
})