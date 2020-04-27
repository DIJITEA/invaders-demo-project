// // function test(){
// //     console.log(this.value = event.pageX);
// // }
// const lw = 0 + (window.innerWidth/3);
// const rw = window.innerWidth - (window.innerWidth/3);

// window.addEventListener('mousemove', value => {
//     if (event.pageX > lw && event.pageX < rw) {
//     document.getElementById('movement').style.left=event.pageX + 'px';
//     console.log(this.value =  window.innerWidth);
//     }
//   });

//   var bi = 0;


//   function shoot(){
//       let fire = document.createElement('div');
//       fire.className = "shoot";
//       fire.id = "BOOM" + bi;
//       fire.style.left = event.pageX + "px";
//       document.body.append(fire);
//       fire.style.bottom = 10 + "%";
//      setTimeout(() => { fire.style.bottom = 90 + "%";}, 0000);
//      setTimeout(() => { fire.style.opacity = 0;}, 0500);
      
//       bi = bi +1;
//   }
 
 
  
// for (var ai = 0; ai < 6; ai++)
  
//     var dd = 200;
//     var bb = 700;
//     console.log("dd=",dd," y=  ",shoot.y, "x= ",shoot.x," bb + 50=",bb+50,"pic= "," bb=",bb, pic);
   
//     if ((dd+4 == shoot.y) && ((bb == shoot.x )||(bb < shoot.x && bb+50 > shoot.x) )){
//         alienslives [ai] = 2;
//         Alis = new Alien( ai*100,alienslives[ai]);
   
//     }
//     else{
//     Alis = new Alien( ai*100,alienslives[ai]);
//     }