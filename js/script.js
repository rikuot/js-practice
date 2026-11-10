// const button = document.querySelector('.check');
// const size = document.querySelector('.size');

// button.addEventListener('click',function(){
//   const radio = document.querySelector('input[name="paper"]:checked');
//   const checkboxes = document.querySelectorAll('input[name="option"]:checked');
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
//     if(checkboxes.length===0){
//     console.log("オプションを選択してください");
//     return;
//     }
//     checkboxes.forEach(function(checkbox){
//     console.log(checkbox.value);
//     });


//     const params = new URLSearchParams();
//     params.set('size',size.value);
//     params.set('paper',radio.value);
//     checkboxes.forEach(function(checkbox){
//     params.append('option',checkbox.value);
// });
//     window.location.href = `next.html?${params.toString()}`;
// });

const button = document.querySelector('.check');
const size = document.querySelector('.size');

button.addEventListener('click',function(){
    const params = new URLSearchParams();
    const radio = document.querySelector('input[name="paper"]:checked');
    if(radio === null){
        const radiobottom = document.createElement('p');
        radiobottom.textContent="用紙を入力してください";
        const paperArea = document.querySelector('.paper-area');
        paperArea.append(radiobottom);
        return;
    }
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');
    if(checkboxes.length===0){
        const checkboxbottom = document.createElement('p');
        checkboxbottom.textContent="加工を入力してください";
        const ppp = document.querySelector('.kakouArea');
        ppp.append(checkboxbottom);
        return;
    }

    params.set('size',size.value);
    params.set('radio',radio.value);
    checkboxes.forEach(function(checkbox){
        params.append('option',checkbox.value);
    });
    window.location.href=`next.html?${params.toString()}`;
});
