const button = document.querySelector('.check');
const size = document.querySelector('.size');

// button.addEventListener('click',function(){
//   const radio = document.querySelector('input[name="paper"]:checked');
//     if(size.value===""){
//         console.log("サイズ入力してください");
//         return;
//     }else{
//         console.log(size.value);
//     }
//     if(radio===null){
//         console.log("入力してください");
//         return;
//     }else{
//         console.log(radio.value);
//     }
//     const params = new URLSearchParams();
//     params.set('paper',radio.value);
//     params.set('size',size.value);
//     const nexturl = params.toString();
//     console.log(nexturl);


    
//     window.location.href = `next.html?${nexturl}`;
// });

button.addEventListener('click',function(){
    const params = new URLSearchParams();
    if(size===""){
        alert("サイズを入力してください");
        return;
    }else{
        const sizevalue = size.value
        console.log(sizevalue);
    }

    const radio =  document.querySelector('input[name="paper"]:checked'); 
    if(radio===null){
        alert("用紙を選択してください");
        return;
    }else{
    
        console.log(radio.value);
    }
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');
    if(checkboxes.length===0){
        alert("加工を選択してください");
        return;
    }else{
        checkboxes.forEach(function(checkbox){
            params.append('option',checkbox.value);
        });
    }
    params.set('size',size.value);
    params.set('paper',radio.value);
    window.location.href = `next.html?${params.toString()}`
});