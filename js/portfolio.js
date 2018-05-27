//document.addEventListener('DOMContentLoaded', function(){
//    
//const tabs = document.querySelector('.tabs');
//  const panels = document.querySelectorAll('.panel');
//  tabs.addEventListener('click', (e) => {
//    if(e.target.tagName == 'LI'){
//      const targetPanel = document.querySelector(e.target.dataset.target);
//      Array.from(panels).forEach((panel) => {
//        if(panel == targetPanel){
//          panel.classList.add('active');
//        }else{
//          panel.classList.remove('active');
//        }
//      });
//    }
//  });
//});

$(document).ready(function(){
    
    $(window).scroll(function(event){
        
        var y = $(this).scrollTop();
        
        if (y >= 0) {
            $('#photo1').addClass('animate');
            $('#photo3').addClass('animate');
        }
    });
});
