// noakhili donated amount

document.getElementById('noakhali_donate').addEventListener('click',function(){
  const noakhali_amount = value("noakhali_input")
  if(noakhali_amount <= 0){
    alert("faild to negative add money ")
    return;
    
  }
  const Balance_amount = innertext('balance_amount');
  const total_amount = Balance_amount + noakhali_amount;
  const frist_Balance = innertext('balance_frist');
  const total_Balance = frist_Balance  -  total_amount;
  document.getElementById('balance_amount').innerText = total_amount;
  document.getElementById('balance_frist').innerText = total_Balance;;
  
  
  
  
  const div = document.createElement('div');
  div.classList.add('bg-slate-50','border-2', 'p-4')
  div.innerHTML= `
 <p class="text-xl font-bold ">${noakhali_amount} Taka is Donate for Flood at Noakhali, Bangladesh</p>
 <p>Date :  ${new Date().toLocaleDateString()}  GMT +0600 (Bangladesh Standard Time)</p>
 `
 

  
   document.getElementById('history_continar').appendChild(div);
   
                  
    
})









const donation = document.getElementById("Donation");
const histors = document.getElementById('History');
const card = document.getElementById('cards');
const history_Continar = document.getElementById('history_continar');
histors.addEventListener("click",function(){
  histors.classList.add( 'bg-[#B4F461]');
 
 donation.classList.remove(
    'bg-lime-300'
 )
card.classList.add("hidden")
history_Continar.classList.remove('hidden')

  
});


donation.addEventListener('click',function(){
  
  donation.classList.add(
    'bg-lime-300'
 )
card.classList.remove("hidden");
history_Continar.classList.add('hidden');


  

});






