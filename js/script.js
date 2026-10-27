const button = document.querySelector('.check');
const size = document.querySelector('.size');

button.addEventListener('click',function(){
  const radio = document.querySelector('input[name="paper"]:checked');
    if(size.value===""){
        console.log("サイズ入力してください");
    }else{
        console.log(size.value);
    }
    if(radio===null){
        console.log("入力してください");
    }else{
        console.log(radio.value);
    }
});