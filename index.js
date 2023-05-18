 // to use in about section
 const tabContents= document.getElementsByClassName('tab-contents');
 const tabLinks= document.getElementsByClassName('tab-links');
 const openTab=(tabID)=>{
     // to hide the lists
     for(tabLink of tabLinks){
         tabLink.classList.remove('active-link');
     }
     for(tabContent of tabContents){
         tabContent.classList.remove('active-tab');
     }
     // to display the outher lists
     event.currentTarget.classList.add('active-link');
     document.getElementById(tabID).classList.add('active-tab');
 }

 // to use in header nav bar 
 const sideMenu = document.getElementById('sideMenu');
 const openMenu=()=>{
     sideMenu.style.right="0";
 }
 const closeMenu=()=>{
     sideMenu.style.right="-220px";

 }
