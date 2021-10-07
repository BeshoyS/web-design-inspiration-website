

const menuBtn = document.getElementById('menubtn');
const menuPanel = document.getElementById('menupanel');
const closeBtn = document.getElementById('closebtn');

menuBtn.addEventListener('click',function()
{

   
   
     
        menuPanel.style.right = 0;
        menuBtn.style.zIndex=-2;

      
  
    
    
})

closeBtn.addEventListener('click',function()
{

  
   
    
        menuPanel.style.right = getComputedStyle(document.documentElement).getPropertyValue('--menu-panel-w');
        setTimeout(()=>{
            menuBtn.style.zIndex=1;
        },300);
        


    
})