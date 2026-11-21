const links = document.querySelectorAll('a[href="next.html"]');
links.forEach(function(link){
    link.addEventListener('click',function(){
        link.href=`next.html?order=${link.textContent.trim()}`;
    });
});