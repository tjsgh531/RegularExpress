const PhoneNum = document.getElementById('PhoneNum');
const warning = document.getElementById('warning');

PhoneNum.addEventListener('keyup',()=>{
  const InputNumber =PhoneNum.value;
  if(/^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/.test(InputNumber)){
    warning.textContent ='좋아';
    warning.style.color = "green";
  }
  else{
    warning.textContent ='전화번호 양식에 맞춰 입력해 주세요';
  }
})