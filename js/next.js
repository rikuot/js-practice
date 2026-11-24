const params = new URLSearchParams(window.location.search);
const flex = document.querySelector('.flex');
const wrappers = document.querySelectorAll('.block-wrapper');

const order = params.get('order');
wrappers.forEach(function(wrapper){
    if(wrapper.textContent.trim()===order){
        flex.prepend(wrapper);
        wrapper.classList.add('selected');
    }
});
