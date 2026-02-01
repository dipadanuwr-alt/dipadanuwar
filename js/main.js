// Small script for mobile nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded',function(){
  var navToggle=document.getElementById('nav-toggle');
  var siteNav=document.getElementById('site-nav');
  navToggle.addEventListener('click',function(){
    siteNav.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click',function(e){
      var targetId=this.getAttribute('href').slice(1);
      var target=document.getElementById(targetId);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(siteNav.classList.contains('show')) siteNav.classList.remove('show');
      }
    });
  });
});