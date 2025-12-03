let sotuv = document.querySelectorAll('.narxlarimiz');
let umumiySumma = document.querySelector('.ohirgi-narx');

let inp = document.querySelectorAll('.tel')
let btn = document.querySelector('.zakas')

btn.addEventListener('click', ()=>{
  if(inp[0].value.trim() === '' || inp[1].value.trim() === ''){
  alert('❌ Iltimos telefon raqamingiz va usernammgizni yozing')
} else{
  alert('✅ Buyurtma qabul qilindi')
}   
})


sotuv.forEach(e => {
  e.addEventListener('click', () => {
 
    e.classList.toggle('active');
    e.classList.toggle('ohiri');

  
    let umumiy = 0;
    sotuv.forEach(b => {
      if (b.classList.contains('active')) {
        umumiy += parseInt(b.getAttribute('data-price'));
      }
    });


    umumiySumma.textContent = 'Umumiy Summa: ' + umumiy.toLocaleString() + ' uzs';
  });
});


let form = document.querySelector('form')
let  telegramToken = '8440344367:AAE_Q2oOmO3pdc66Rdh8rPs7be8wvWUU02k'
let chatId = '8384498547'

form.addEventListener('submit', event =>{
  event.preventDefault()
  const formData = new FormData(form)
  const object = {}
  formData.forEach((value, key) =>{
    object[key] = value
    console.log(object)
  })
    
  fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      chat_id: chatId , 
      text: `
      Telefon raqam : ${object.name}. Username : ${object.phone}
      `
    })
  })
})