document.getElementById('noakhali_donate').addEventListener('click',function(){
  const noakhali_amount = value("noakhali_input")
  if(noakhali_amount <= 0){
    alert("failt to add money ")
    return;
    
  }
  const Balance_amount = innertext('balance_amount');
  const total_amount = Balance_amount + noakhali_amount;
  const frist_Balance = innertext('balance_frist');
  const total_Balance = frist_Balance  -  total_amount;
  document.getElementById('balance_amount').innerText = total_amount;
  document.getElementById('balance_frist').innerText = total_Balance;;


  
  
    
})