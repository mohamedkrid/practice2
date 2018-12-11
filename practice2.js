
/* this is the slider function
var slider_left = document.querySelector('.icon-left')  ;
var slider_right = document.querySelector('.icon-right')  ;
var slider_options = document.getElementsByClassName('slider-option') ;
 
 for ( var i = 0 ; i < slider_options.length ; i++ ) {
    
        slider_options[i].style.zIndex = 1+i ;
        slider_options[i].style.left = '100% ' ; 
        
 }
 
  slider_right.addEventListener('click'  , transright )   ;

 function  transright () {
       'use strict' ; 
      
       
       if (count == 4  ) {
              return  ;
       }

       var left_val = slider_options[count].style.left  ;
      
       var count2 = 100 ;
       
     var iterv = setInterval(function() {
       'use strict' ;
       
      slider_right.setAttribute('disabled' , 'disabled' )  ; 
       
        
       slider_options[count].style.left = count2 + '%' ;
       if (count !== 0 ) {
          
                     slider_options[count -1 ].style.left = (count2 * 2)  + '%' ;  
              }
        count2 =   count2 -1 ;
         if (count2 == -1 ) {
       clearInterval(iterv)  ;
          slider_right.removeAttribute('disabled' )  ; 
      
     }
     }  , 3 ) ;
     if (left_val == '0%' && count != 4  ) {
      count ++ ;
       console.log(count) ; 
     }else {
       count = 0  ; 
     }
     
 }
slider_left.addEventListener('click'  , transleft ) ;

 function transleft () {
       'use strict' ;
             

           if (count == 1 || count == 0  ) {
              return  ; 
           }
       var left_val = slider_options[count].style.left  ;
      
       var count2 = 0 ;
     var iterv = setInterval(function() {
       'use strict' ;
       
     
       slider_right.setAttribute('disabled' , 'disabled' )  ; 
        
       slider_options[count].style.left = ++count2 + '%' ;
       
       
         if (count2 == 100 ) {
       clearInterval(iterv)  ;
   slider_right.removeAttribute('disabled') ;
      
     }
     }  , 3 ) ;
     if (left_val == '100%'  ) {
      count -- ;
       console.log(count) ; 
     }
 }

*/ 

// the new slider function



var right_button = document.getElementsByClassName('icon-left')[0] ;
var left_button = document.getElementsByClassName('icon-right')[0]  ; 
var slider_cont = document.getElementsByClassName('slider-cont')[0] ; 
var slider_count = 0 ;
function right_click() {
  'use strict'  ;
  
if (slider_count === 0 ) {
  
  slider_cont.children[slider_count].style.transform ='translateX(0% )  ' ;
slider_count += 1  ;
}else if (slider_count === 5) {
  return

}else {
  slider_cont.children[slider_count -1].style.transform ='translateX(-100% )  ' ;
    slider_cont.children[slider_count].style.transform ='translateX(0% )  ' ;
slider_count += 1  ;
}

}

right_button.addEventListener( 'click', right_click ) ; 

 function left_click() {
  'use strict'  ;    
   
 if (slider_count === 0 ) {
  return  ;
 } else if ( slider_count === 5 ) {
  slider_cont.children[slider_count-1].style.transform ='translateX(100% )  ' ;
  slider_cont.children[slider_count -2].style.transform ='translateX(0% )  ' ;
  slider_count -= 1  ;

 }else {
   slider_cont.children[slider_count].style.transform ='translateX(100% )  ' ;
  slider_cont.children[slider_count -1].style.transform ='translateX(0% )  ' ;
  slider_count -= 1  ;

 }
 }
 
left_button.addEventListener( 'click', left_click ) ; 


function slider_reload () {
  'use strict '  ;
  for ( var i = 0  ; i < 5  ; i++ ) {
     slider_cont.children[i].style.transform ='translateX(100% )  ' ;
    
  }
   slider_cont.children[0].style.transform ='translateX(0% )  ' ;
 
} 
// slider part end    
 
 var inter_slider = setInterval(function() {
  'use strict '  ;
   right_button.click() ;
  
  if (slider_cont.children[4].style.transform == 'translateX(0%)' ) {
    setTimeout(slider_reload() , 5000  )  ;
     
  slider_count = 0 ; }
  
 }  , 5000) ;
 






 // the end of  new slider funtion 

// the begining of the featured work function



























var  count = 0 ;  
var projects = document.getElementsByClassName('project') ;
var right_div = document.getElementById('pro-right') ;


  var count =  1  ;
  

function clickright() {
  'use strict' ;

  var src_array  = ['images/weba' ,'images/webb'  ,  'images/webc'  ]  , 
  project_count  = 0   ;
  var permition  = false ; 
  for(var i = 0  ;  i < 3   ; i++ ) {
    
    document.querySelectorAll('.project img ')[i].style.opacity =  1.0 ; 
  }
  var interval = setInterval(function() {
    'use strict '  ;
    
    document.querySelectorAll('.project img ')[project_count].style.opacity =  0.0; 
      setTimeout(function() {
        if (document.querySelectorAll('.project img ')[project_count].style.opacity ==  0.0) {
        document.querySelectorAll('.project img ')[project_count].src = src_array[project_count].concat(count , '.gif')  ;
        console.log(count + '  ' + project_count ) ;
        permition = true ; 
                 
                 }
                 
                 } , 200 )  ;
         
        
           if ( permition === true ) {
          
            console.log('it works') ;
            
            console.log(project_count) ; 
                 document.querySelectorAll('.project img ')[project_count].style.opacity =  1.0 ; 
                 
               project_count += 1    ;
               console.log(project_count) ;
              permition = false  ;
               
           } else {
            console.log('i dont' )  ; 
              
           }
      
      
           if (project_count  > 2   )  {
             console.log('it cancel  ' + project_count + ' count    = ' + count   ) ; 
       project_count = 0   ; 
      clearInterval(interval)   ;
     
           }

  } , 400 )  ;
   
    if (count  < 3  ) {
      
       count++;
    } else {
      count = 0 ;
      count++;
    }


  console.log(project_count) ;

  
  
  
} 

function clickleft() {
  'use strict'  ; 
  var src_array  = ['images/weba' ,'images/webb'  ,  'images/webc'  ]  , 
  project_count  = 2   ;
  var permition  = false ; 
  for(var i = 0  ;  i < 3   ; i++ ) {
    
    document.querySelectorAll('.project img ')[i].style.opacity =  1.0 ; 
  }
  
  var interval = setInterval(function() {
    'use strict '  ;
     document.querySelectorAll('.project img ')[project_count].style.opacity =  0.0; 
      setTimeout(function() {
        if (document.querySelectorAll('.project img ')[project_count].style.opacity ==  0.0) {
        document.querySelectorAll('.project img ')[project_count].src = src_array[project_count].concat(count , '.gif')  ;
        console.log(count + '  ' + project_count ) ;
        permition = true ; 
                 
                 }
                 
                 } , 200 )  ;
  
    if ( permition === true ) {
          
            console.log('it works') ;
            
            console.log(project_count) ; 
                 document.querySelectorAll('.project img ')[project_count].style.opacity =  1.0 ; 
                 
               --project_count   ;
               console.log(project_count) ;
              permition = false  ;
               
           } else {
            console.log('i dont' )  ; 
              
           }
      
      
           if (project_count  == -1  )  {
             console.log('&it cancel  ' + project_count + ' &count    = ' + count   ) ; 
       project_count = 2  ; 
      clearInterval(interval)   ;
     
           }

  } , 400 )  ;
   
    if (count  >= 2 && count != 1  ) {
      
       count--;
    } else if ( count <=  1 )   {
      count = 3 ;
      
    }


  console.log(project_count) ;

  
  
  
  
  
  
  
}

 
// end  of the featured work function
// the begining of the  testemonial funtion
 
var testo_images = ['images/per1.jpg' , 'images/per2.jpg'  , 'images/per3.jpg']  ;
var pic_place = document.getElementById('testi') ;
var testi_cout = 1 ; 
function testoRight() {
  'use strict'  ;
  var permition = false ; 
  pic_place.style.opacity= 1 ;
  
  var interval  = setInterval(function() {
    'use strict' ;
     pic_place.style.opacity = 0.0   ;
     setTimeout(function() {
      'use strict' ;
     if(  pic_place.style.opacity == 0.0   )  {
      pic_place.children[0].src= testo_images[testi_cout]  ; 
      permition = true ;
      console.log(testi_cout)  ; 
     }
      
     } , 200 ) ;
     if ( permition === true ) {
      pic_place.style.opacity = 1  ; 
      ++testi_cout ;
      clearInterval(interval) ; 
     }else if ( testi_cout > 2 )  {
      testi_cout = 0 ; 
     }
    
    
    
    
    } ,400) ; 
  
  
  
}



function testoLeft() {
 'use strict'  ;
 var permition = false ; 
   pic_place.style.opacity= 1 ;
 var interval  = setInterval(function() {
    'use strict' ;
     pic_place.style.opacity = 0.0   ;
     setTimeout(function() {
      'use strict' ;
     if(  pic_place.style.opacity == 0.0   )  {
      pic_place.children[0].src= testo_images[testi_cout--]  ; 
      permition = true ;
      console.log(testi_cout)  ; 
     }
      
     } , 200 ) ;
     if ( permition === true ) {
      pic_place.style.opacity = 1  ;
      console.log(true)  ;
      
      clearInterval(interval) ; 
     }
     
     if ( testi_cout === -1  && permition === true   )  {
      testi_cout = 2 ;
      console.log(false) ;  
     }
    
    
    
    
    } ,400) ; 
  
  
  
 
 
 
 

}









    /*  var interval1 = setInterval( srans() , 50 )   ;
     
     function srans () {
       
       left1 = parseInt(slider_options[count].style.left) ; 
       var val =  slider_options[count].style.left =  (left1 - 1  ).toString() + '%' ;
                 console.log(left1) ;

       if (left1 != 0 ) {
      clearInterval(interval1 ) ;
       } 
     }
    
      if(left1 == 0 ){
         console.log(left1) ; 
         
              count = count + 1 ;
             
        console.log(count) ;
      }*/