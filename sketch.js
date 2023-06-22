let appearArray_s1 = []

let blackArray_h = [];
let blackID_h  = [];
let whiteArray_e = [];
var time_count_graph =0;

let factor_ca = 1;
let d_factor = 1;

let num_e;
let num_h;

let volume1;

let cc=0

let isOn = false;

let appear_id 
let disappear_id 

let tempe_fraction_e

let gg_rate =1000

let factor_c = 1

let changg = 0;
let e_field_c = 0;
var rate_e =1

let rect_density 

let hole_add_new 

let factor_new =1;


//fraction
//donor
let n_c
let delta_ED
let fraction_e = []
let fraction_e_count
let fraction_e_count_t
let dif_e //difference in freeze count
let dif_e_current //difference in freeze difference count and existing paired e count

//acceptor 
let n_v
let delta_EA
let fraction_h = []
let fraction_h_count
let fraction_h_count_t
let dif_h //difference in freeze count
let dif_h_current //difference in freeze difference count and existing paired e count





//eletron hole

var browserZoomLevel = Math.round(window.devicePixelRatio * 100);


settings = {
  nucleus: false,
  nn: false,
  kk: false,
  valence: true,
  conduction: true,
  nn_live: true
}
var generation_R = 100;
var generation_Rate; 
var generation_Rate_c; 
var current_Electron = 0;
var current_Hole = 0; 
var current_Electron_c = 0;
var current_Hole_c = 0; 
var constant_EH = 0.0000001;
var recombination_R = 0;
var recombination_Rate = 1;
var recombination_Rate_c = 1;
var ni; 
var nn;
var constant_beta = Math.pow(10,-12);
let count_buffer = 0;

var time_count =0;

let x_probability;
let x_probability_time;

////////////////////////////////
let whiteArray = [];
let blackArray = [];
let whiteID = [];
let blackID = [];
let white_seek_ball = [];
let black_seek_ball = [];
let global_id = 0;

let global_id_s1 = 0;

let frequency_A = 0;
let frequency_B = 0;

let slider_temperature;
let slider_temperature_s1;

let t_f_prob = false;

let appearArray = [];
let disappearArray = [];
let disappearArray_s1 = [];

let disappearArray_2 = []; //circles 
let disappearArray_2_pair = []; //circles 
let disappearArray_dot = [];

let generate_num; 

let gap = 200;
let l = 560;
let w = 120;

let scene1_aArray = [];
let scene1_dArray = [];
let scene1_aArray2 = [];
let scene1_dArray2 = [];

let switch_1 = 0
let recombine = 1


let fading = 255;

let loopp = true;

let change_square = -30
let change_length = 100+change_square;

let temp = 270; 

let ni_s1;
let array_band = []
let array_band1 = []
let array_band2 = []
let array_band3 = []
let array_band4 = []
let random_botz = []
var generation_Rate_s1; 
var current_Electron_s1 = 0;
var current_Hole_s1 = 0; 
var recombination_Rate_s1 = 1;
var constant_beta_s1 = Math.pow(10,-12);

let g_rate;

let stop_s1 = false; 

let numm;

let interval_1 = 2000;
let interval_3 = 2000;
let interval_45 = 2000;

let interval_pn = 100;

let interval_s = 1000;

var run1;
var run45;
var run3;

var count_pn;

// let num_speed =1;

var count_pn_num =0;

let button_reset;

let middle_position_Array = [];
let disappear_count = 0;
/////////
let scale_x = 1440;
let scale_y = 789;

let s_x;
let s_y;

let ran_num = 2;

let electron_add = 0;
let hole_add = 0;

var time_count =0;

var time_count_blink =100;

let fade;
var appear1 = 0;

let latticeAtoms = [];
let latticeAtoms_2 = [];
let latticeAtoms_e = [];
let latticeAtoms_h = [];
var globalOrbitalCount = 0;

let free_electron = [];
let free_hole = [];
let random_direction;

var opacity;


let electronLatticePositions = [];

let random_num1 = [];

let id_electron_s1 = 0;
let id_hole_s1 = 0;

var blink;
let interval_blink = 1000;

var scattering_c

var count_g
let count_graph = 10

let count_n = 0;

let scattering_velocity
let scattering_count = 0
let scattering_count_c = 0

let scatter_tf = false

let constant_temperature_real 
let temp_real
let box_count = []

let concentration = 50/3

let context_1

var zincrement = 0.001;
var increment = 0.1;
var zoff = 0.0;

let point_count = 24;
let array_plot = []
let array_plot_0 = []
let array_positive_y = []
let array_negative_y = []
let array_positive_y_0 = []
let array_negative_y_0 = []

let box_count_e = []
let box_count_h = []

let array_plot_e = []
let array_plot_h = []
let array_plot_e_0 = []
let array_plot_h_0 = []

let array_positive_y_e = []
let array_negative_y_e = []
let array_positive_y_0_e = []
let array_negative_y_0_e = []

let array_positive_y_h = []
let array_negative_y_h = []
let array_positive_y_0_h = []
let array_negative_y_0_h = []

let distance_dis = 9;

let array_graph_con = []
let array_graph_current = []

let con_count = 0;
let x_con=0;
let y_con =0
let real_graph = 0
let real_graph_live = 0
let start_graph = 1

let test_a ;
let y_run;
let y_con_c=0;
let y_con_2=0;

let X_n


let test_current_scale =3;
let test_x_scale =0.2;

function mouseClicked() {

  if(abs(910*s_x-mouseX)<30*s_x && abs(377*s_y-mouseY)<9*s_y){
    if(isOn == true) isOn = false;
    else isOn = true;
  }

}

function setup() {
  let canvas = createCanvas(2 * windowWidth / 3, windowHeight);
  canvas.parent('visualization');

  frameRate(10);
  setInterval(time_graph, 0.00000000002);

  context_1 = canvas.drawingContext;

  ////////////
 // generate balls based on frequency
 run45 = setInterval(function(){genBalls(1);}, interval_45); // scene changing T

 count_pn = setInterval(function(){count_pn_f();}, interval_pn); 


 run1 = setInterval(function(){genBalls_scene1(1);}, interval_1); // scene 1 gen

 blink = setInterval(function(){blinking();}, interval_blink); // blinking

 scattering_c = setInterval(function(){scattering();}, 50); // scattring time 

 count_g = setInterval(function(){count_start_graph();}, 130); // scattring time 

 y_run = setInterval(function(){y_change();}, 1700); // y axis real time change 

//  setInterval(function(){genBalls_scene2(1);}, 100); // scene 2 gen

//  run3 = setInterval(function(){genBalls_scene3(1);}, interval_3); // scene 3 gen contant T

 
 setInterval(timeIt, 1000);

 setInterval(timeIt_blink, 10);

 setInterval(time_concentration,10)
/////////
  sceneCount = 0;

  ///
  goToHole = [];


  random_hole = [];

  random_direction=[];

  xLimit = ((int)(width / 180));
  yLimit = ((int)(height / 180));




}

function draw() {
  background(18, 18, 18);
  s_x = windowWidth/scale_x;
  s_y = windowHeight/scale_y;


  if (mouseX > 0) {
    select('body').addClass('noselect');
  } else {
    if (select('body').hasClass('noselect')) {
      select('body').removeClass('noselect');
    }
  }

   if (sceneCount == 0.5) {

    }
  else if (sceneCount == 1) {
    // console.log(time_count)

     ///grid for graph




/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    




    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    
  
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}




if (recombine == 1) {

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x))) {

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }

      }

    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

      //horizon
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,40*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, 171.25*s_y)


//arrow up right 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
//arrow up up
line((10+100+70+change_square+940-change_length-70-760-20-3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20+3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)


  //down
      //horizon
      line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (10+385/2+96.25+70)*s_y)
//228.75 368.75
//arrow up 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//arrow down up
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20-3)*s_x, (10+385/2+96.25-60-5)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20+3)*s_x, (10+385/2+96.25-60-5)*s_y)


if (real_graph_live ==0){

  //green
  stroke(125, 241, 148)

  strokeWeight(1.5)
  beginShape();

      curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
      curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
     
  
    for (var k = 0; k < point_count; k++) {

        curveVertex((190+k*(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*0.7)*s_y)

    }
   

      curveVertex((950-(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*0.7)*s_y)
  
  
  
  endShape();
  noStroke()
  //298.75

  
  
  //yellow
  stroke(254,246,182)
  

strokeWeight(1.5)
beginShape();
// for ( var i = 0; i < point_count; i++ ) {
  // if (i==0 ) {
    curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
    curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
    // curveVertex(190*s_x,(171.25-array_plot[0].length*0.7)*s_y)

  // }

  for (var k = 0; k < point_count; k++) {
    // if (i!=(point_count-1)||i!=(0)) {
      curveVertex((190+k*(950-190)/point_count)*s_x,(171.25-array_plot_e[k].length*0.7)*s_y)
    // }
  }
 
  // if (i==(point_count-1)) {
    curveVertex((950-(950-190)/point_count)*s_x,(171.25-array_plot_e[point_count-1].length*0.7)*s_y)
  // }
// }


endShape();
noStroke()



//////////////////// plot current

noFill();


// //green
// stroke(125, 241, 148)

// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
  
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[k].length-array_negative_y_h[k].length))*s_y)
//       // }
//     }


//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[point_count-1].length-array_negative_y_h[point_count-1].length))*s_y)
  

 

// endShape();
// noStroke()
// strokeWeight(1)



//yellow
stroke(254,246,182)




// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
   
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[k].length-array_negative_y_e[k].length))*s_y)
//       // }
//     }

//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[point_count-1].length-array_negative_y_e[point_count-1].length))*s_y)





 

// endShape();
// noStroke()
// strokeWeight(1)


  }


//box

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70-760)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)

 

textSize(14);
  
text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)


text("x",(930)*s_x,(190)*s_y)
text("x",(930)*s_x,(318+70)*s_y)

textSize(10);


// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

text("10\u2077",(155)*s_x,(172)*s_y)


text("10\u00B9\u00B3",(153)*s_x,(298+70)*s_y)

text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}





  } else if (sceneCount == 1.5) {
    // console.log(time_count)

     ///grid for graph




/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    
  
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}






if (recombine == 1) {

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x))) {

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         console.log("diss")
         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
        //  whiteArray.splice(whiteArray[i], 1);
        //  blackArray.splice(blackArray[k], 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);

            console.log("diss2")

        let b = whiteArray_e[i].position.y;
       
    
        blackArray_h.push(new Vehicle((170)*s_x, b, 10, "h", 1));
        blackID_h.push(global_id);
        global_id += 1;

        whiteArray_e.push(new Vehicle((930)*s_x, b, 10, "e", 0));
        whiteID_e.push(global_id);
        global_id += 1;

             break
         
           }
       }
    
        }

      }

    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    // line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4)*s_y)

    noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

//       //horizon
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


//       //vertical
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,40*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, 171.25*s_y)


// //arrow up right 
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
// //arrow up up
// line((10+100+70+change_square+940-change_length-70-760-20-3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)
// line((10+100+70+change_square+940-change_length-70-760-20+3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)


//   //down
//       //horizon
//       line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//       //vertical
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (10+385/2+96.25+70)*s_y)

// //arrow up 
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
// line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
// //arrow down up
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20-3)*s_x, (10+385/2+96.25-60-5)*s_y)
// line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20+3)*s_x, (10+385/2+96.25-60-5)*s_y)

// ////////////new
//   //horizon down 1
//   line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-450)*s_x,(10+385/2+96.25)*s_y)
//   //vertical down 1
// line((10+100+70+change_square + (940-change_length-70)/4)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/4)*s_x, (10+385/2+770/4-30)*s_y)

//  //horizon down 2
//  line((10+100+70+change_square+940-change_length-70-760+30+400)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-450+400)*s_x,(10+385/2+96.25)*s_y)
//  //vertical down 2
// line((10+100+70+change_square + (940-change_length-70)/4*3)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/4*3)*s_x, (10+385/2+770/4-30)*s_y)


// ////////////new
  //horizon down 1
  line((10+100+70+change_square+940-change_length-70-760+30)*s_x,(10+385/2+96.25)*s_y,(10+100+70+change_square+790-30)*s_x,(10+385/2+96.25)*s_y)
  //vertical down 1
line((10+100+70+change_square + (940-change_length-70)/2)*s_x,(10+385/2+30)*s_y, (10+100+70+change_square + (940-change_length-70)/2)*s_x, (10+385/2+770/4-30)*s_y)



///////////new box graphing

noStroke()
fill(254,246,182,100)

rect_density = 1.6*Math.pow(10,-13)*hole_add_new
if (isOn ==false) {
//right up 
rect((550)*s_x,(10+385/2+96.25)*s_y,((400)/8*count_pn_num)*s_x, -rect_density*4*s_y)
//left down
rect((550)*s_x,(10+385/2+96.25)*s_y,-((400)/8*count_pn_num)*s_x, rect_density*4*s_y)

}

noFill()

fill(218,112,214,100)


//E- field 
if (isOn==true){
  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}


/////graph on off switch
if(isOn){
  fill("white");
}
else{
  fill("black");
}

noStroke();
  rect(880*s_x,370*s_y,65*s_x,14*s_y)
  
if(isOn){
  fill("black");
  text("SWITCH",880*s_x,380*s_y);
}
else{
  fill("white");
  text("SWITCH",880*s_x,380*s_y);
}


let V_built = 0.052*Math.log(hole_add_new/Math.pow(10,10))
// console.log(V_built)
X_n = 5811*Math.pow(Math.log(hole_add_new/Math.pow(10,10))/(Math.pow(10,6)*hole_add_new),1/2)*Math.pow(10,6)
// X_n = Math.log(hole_add_new/Math.pow(10,10))
// let array_band = []
for (var i = 0; i<50; i++) {

  ///box length 300-800
  stroke(125, 241, 148,100);
  noFill()
  // rect((150+(800)/50*i)*s_x,(10)*s_y,(800)/50*(i)*s_x,(770/4)*s_y);

  // array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100+(150+(800)/50*i-550)*s_x),2)/100
  // array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/50*i-550)*s_x),2)/100)
// array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100-(150+(800)/20*i-550)*s_x),2)/100)
  // if ((150+(800)/50*i)*s_x <((550-(400)/8*count_pn_num))*s_x ){
  //   array_band[i] = 0

  // } 
  // if ( ((550-(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x && ((150+(800)/50*i)*s_x <(550)*s_x) ){
  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+(150+(800)/50*i-550)*s_x),2)*Math.pow(10,-2)
  //   array_band[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100

  //   //array_band[i] = -7.76*Math.pow(10,-16)*hole_add*Math.pow((145+x),2)
  // }
  //  if ( (550)*s_x <= (150+(800)/50*i)*s_x && (  (150+(800)/50*i)*s_x <((550+(400)/8*count_pn_num))*s_x )){
  
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
 
  // } 
  //  if ( ((550+(400)/8*count_pn_num))*s_x <= (150+(800)/50*i)*s_x  ){
  //   array_band[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100
  // }


}



for (var i = 0; i<100; i++) {

  //(800)/100*i
  if ((800)/100*i>(550-(400)/8*count_pn_num) && (800)/100*i<(550)){
    array_band1[i-19]= -Math.pow(((800)/100*i-(550-(400)/8*count_pn_num))/((400)/8*count_pn_num)*(2*rect_density/(X_n*100)*count_n*2) ,1)/5
  }  else if (i==50) {
    // array_band1[50]= Math.pow((2*rect_density/(X_n*100)*count_n*2),2)/20
  } else {
    array_band1[i]= 0
  } 

  // if (i>50) {
  //   array_band1[i]=  array_band1[100-i]
  // }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {

  if (i>50) {
    array_band1[i]=  array_band1[100-i]
  } else if (i=50){
    array_band1[i]=  -Math.pow((2*rect_density/(X_n*100)*count_n*2) ,1)/5
  }
//  triangle((550-(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550+(400)/8*count_pn_num)*s_x, (10+385/2+96.25)*s_y, (550)*s_x, (10+385/2+96.25+  2*rect_density/(X_n*100)*count_n*2)*s_y)

}

for (var i = 0; i<100; i++) {
  array_band2[i] = 0; // initialize to 0

  if (i > 0) { // run the inner loop only if i > 0
    for (var k = 0; k<i; k++) {
      array_band2[i] = array_band2[i] + array_band1[k];
    }
  }
}



// for (var i = 0; i<50; i++) {
//   array_band2[i] = -7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2+(150+(800)/50*i-550)*s_x),2)/100
// //curve down
// }

// for (var i = 0; i<50; i++) {
//   array_band3[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100+(7.76*Math.pow(10,-16)*hole_add_new*Math.pow((X_n*100/2-(150+(800)/50*i-550)*s_x),2)/100)
// //green curve up
// }

// for (var i = 0; i<50; i++) {
//   array_band4[i] = -Math.pow((count_n/(X_n*100)),2)*V_built*100

//   //purple
// }





  //////band graph
  stroke(254,246,182)
  

strokeWeight(1.5)
beginShape();

  for (var k = 0; k < 50; k++) {
    // if (i!=(point_count-1)||i!=(0)) {
      // curveVertex((150+(800)/20*k)*s_x,(171.25-50+array_band[k]*e_field_c/10)*s_y)
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band[k])*s_y)

  }
 


endShape();
noStroke()
///
stroke(200,246,182)
// beginShape();

//   for (var k = 0; k < 100; k++) {
 
//       curveVertex((150+(800)/100*k)*s_x,(171.25-array_band1[k])*s_y)

//   }
// endShape();
// noStroke()
// ///
// stroke(300,246,182)
beginShape();

  for (var k = 0; k < 100; k++) {
 
      curveVertex((150+(800)/100*k)*s_x,(171.25-array_band2[k]-120)*s_y)

  }
endShape();
noStroke()
///
stroke(100,246,82)
beginShape();

  for (var k = 0; k < 50; k++) {
 
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band3[k])*s_y)

  }
endShape();
noStroke()
///
stroke(200,146,182)
beginShape();

  for (var k = 0; k < 50; k++) {
 
      curveVertex((150+(800)/50*k)*s_x,(171.25-array_band4[k])*s_y)

  }
endShape();
noStroke()

// if (real_graph_live ==0){

//   //green
//   stroke(125, 241, 148)

//   strokeWeight(1.5)
//   beginShape();

//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
 

// for (var k = 0; k < point_count; k++) {

//     curveVertex((190+k*(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*0.7)*s_y)

// }


//   curveVertex((950-(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*0.7)*s_y)


  
//   endShape();
//   noStroke()
  

  
  
//   //yellow
//   stroke(254,246,182)
  

// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {
//     curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
//     curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
//     // curveVertex(190*s_x,(171.25-array_plot[0].length*0.7)*s_y)

//   // }

//   for (var k = 0; k < point_count; k++) {
//     // if (i!=(point_count-1)||i!=(0)) {
//       curveVertex((190+k*(950-190)/point_count)*s_x,(171.25-array_plot_e[k].length*0.7)*s_y)
//     // }
//   }
 
//   // if (i==(point_count-1)) {
//     curveVertex((950-(950-190)/point_count)*s_x,(171.25-array_plot_e[point_count-1].length*0.7)*s_y)
//   // }
// // }


// endShape();
// noStroke()



// //////////////////// plot current

// noFill();


// // //green
// // stroke(125, 241, 148)

// // strokeWeight(1.5)
// // beginShape();
// // // for ( var i = 0; i < point_count; i++ ) {
// //   // if (i==0 ) {

// //       curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
// //     curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
  
   
// //     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

// //   // }


// //     for (var k = 0; k < point_count; k++) {
// //       // if (i!=(point_count-1)||i!=(0)) {
// //         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[k].length-array_negative_y_h[k].length))*s_y)
// //       // }
// //     }


// //     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[point_count-1].length-array_negative_y_h[point_count-1].length))*s_y)
  

 

// // endShape();
// // noStroke()
// // strokeWeight(1)



// //yellow
// stroke(254,246,182)




// // strokeWeight(1.5)
// // beginShape();
// // // for ( var i = 0; i < point_count; i++ ) {
// //   // if (i==0 ) {

// //       curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
// //     curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
   
   
// //     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

// //   // }


// //     for (var k = 0; k < point_count; k++) {
// //       // if (i!=(point_count-1)||i!=(0)) {
// //         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[k].length-array_negative_y_e[k].length))*s_y)
// //       // }
// //     }

// //     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[point_count-1].length-array_negative_y_e[point_count-1].length))*s_y)





 

// // endShape();
// // noStroke()
// // strokeWeight(1)


//   }


//box

// if ((this.position.x > 235.6*s_x) && (this.position.x < (170+524.4)*s_x))

///red box 
///middle 550
//150 

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((550-(400)/8*X_n)*s_x,(10+385)*s_y,((400)/8*X_n*2)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)

 
textSize(14);
  
// text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Valence Band",(160)*s_x,(30)*s_y)
// text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)
text("Charge Density/ Electric Field",(160)*s_x,(223)*s_y)

// text("Electric Field",(560)*s_x,(223)*s_y)

if (count_pn_num >=X_n) {
  text("Equilibrium",(760)*s_x,(223)*s_y)
}
// text("x",(930)*s_x,(190)*s_y)
// text("x",(930)*s_x,(318+70)*s_y)

textSize(12);


// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)

// text("10\u00B9\u2070",(155-3)*s_x,(172+12)*s_y)


// text("10\u00B9\u2070",(153-3)*s_x,(298+70+12)*s_y)

// text("10\u00B9\u2074",(153)*s_x,(298+70-120)*s_y)
 

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}





  } else if (sceneCount == 2) {
    // console.log(time_count)

     ///grid for graph




/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    

      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    
  
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(i, 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(i, 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(i, 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}




if (recombine == 1) {

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x))) {

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
    
        }

      }

    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

      //horizon
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,40*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, 171.25*s_y)



//arrow up right 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
//arrow up up
line((10+100+70+change_square+940-change_length-70-760-20-3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20+3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)


 //down
      //horizon
      line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (10+385/2+96.25+70)*s_y)
//228.75 368.75
//arrow up 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//arrow down up
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20-3)*s_x, (10+385/2+96.25-60-5)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20+3)*s_x, (10+385/2+96.25-60-5)*s_y)


if (real_graph_live ==0){

  //green
  stroke(125, 241, 148)

  strokeWeight(1.5)
  line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70-changg)*s_y,(10+100+70+change_square+790-25)*s_x,(10+385/2+96.25+70-changg)*s_y)
//   beginShape();
//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
//   curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7)*s_y)
 

// for (var k = 0; k < point_count; k++) {

//     curveVertex((190+k*(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*0.7)*s_y)

// }


//   curveVertex((950-(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*0.7)*s_y)

  
//   endShape();
  noStroke()
  

  
  
  //yellow
  stroke(254,246,182)
  

strokeWeight(1.5)
beginShape();
// for ( var i = 0; i < point_count; i++ ) {
  // if (i==0 ) {
    curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7*3)*s_y)
    curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7*3)*s_y)
    // curveVertex(190*s_x,(171.25-array_plot[0].length*0.7)*s_y)

  // }

  for (var k = 0; k < point_count; k++) {
    // if (i!=(point_count-1)||i!=(0)) {
      curveVertex((190+k*(950-190)/point_count)*s_x,(171.25-array_plot_e[k].length*0.7*3)*s_y)
    // }
  }
 
  // if (i==(point_count-1)) {
    curveVertex((950-(950-190)/point_count)*s_x,(171.25-array_plot_e[point_count-1].length*0.7*3)*s_y)
  // }
// }


endShape();
noStroke()



//////////////////// plot current

noFill();


// //green
// stroke(125, 241, 148)

// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
  
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[k].length-array_negative_y_h[k].length))*s_y)
//       // }
//     }


//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[point_count-1].length-array_negative_y_h[point_count-1].length))*s_y)
  

 

// endShape();
// noStroke()
// strokeWeight(1)



//yellow
stroke(254,246,182)




// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
   
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[k].length-array_negative_y_e[k].length))*s_y)
//       // }
//     }

//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[point_count-1].length-array_negative_y_e[point_count-1].length))*s_y)





 

// endShape();
// noStroke()
// strokeWeight(1)


  }


//box

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70-760)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)



textSize(14);
  
text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)
text("x",(930)*s_x,(190)*s_y)
text("x",(930)*s_x,(318+70)*s_y)

textSize(12);


// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)

if (changg <122){
  text("10\u2077",(155-3)*s_x,(172+12)*s_y)
} 
if (changg ==122){
  text("10\u2076",(155-3)*s_x,(172+12)*s_y)
} 

text("10\u00B9\u00B3",(153-3)*s_x,(298+70+12)*s_y)

text("10\u00B9\u2074",(153-3)*s_x,(298+70-120)*s_y)

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}





  } else if (sceneCount == 3) {
    // console.log(time_count)

     ///grid for graph




/////////////////

    // x_probability = 100/(1+((y_cordi/100+constant_fermi)*constant_temperature/0.026/300)/100)
    x_probability = Math.round(100/(1+Math.exp((300*(y_cordi/500-constant_fermi)/(0.026*constant_temperature)))))

  


    x_probability_time=(x_probability)
   
    //tcb = 10 
    if (time_count_blink>x_probability_time){
       opacity_circle=0
       opacity_circle_up=0

    }else if (time_count_blink<=x_probability_time){

  
      if (x_probability_time<30){
        opacity_circle=1
      } else {
        opacity_circle=1
        opacity_circle_up=1
      }
      
    }


    // if (0.56<y_cordi/100 && 2>y_cordi/100){
    //   num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
    //   // opacity_circle=0
    //   // opacity_circle_up=1
    // } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
    //   num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
    //   // opacity_circle=1
    //   // opacity_circle_up=0
    //   //Math.round(50*Math.pow(-0.56+m/100,1/2))
    // } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
    //   num_Line_text=0
    //   opacity_circle=0
    //   opacity_circle_up=0
    // } 

    // d3bands_update()
    // d3bands_update_up()
    if (time_count ==0) {
      ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
      generation_Rate_c = 0.01*ni;
      
  
      
      
      current_Electron_c += generation_Rate_c-recombination_Rate_c; 
      current_Hole_c += generation_Rate_c-recombination_Rate_c;
      recombination_Rate_c = current_Electron_c*0.01;
      } else {
        generation_Rate_c =0;
        current_Electron_c =0;
        current_Hole_c =0;
        recombination_Rate_c =0;
      }


    s_x = windowWidth/scale_x;
    s_y = windowHeight/scale_y;

    // electronHoleGraph_generation();
    // temp = slider_temperature_s1.value();
  
  //temp draw

    // fill(235, 177, 52);
    // fill(255)
    // rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
    // ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
    // // line(110,640,160,640)

    // fill(235, 58, 52)
    // ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
    // rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);

    // // console.log("ssss")
    // fill(255)
    // textSize(18);
  
    // text(temp+"K",(70+140)*s_x,(640+115)*s_y)



      // g_rate = 0.000112099*generation_Rate_c+0.999998791


      g_rate = 0.00000112099*generation_Rate_c+0.999998791


      
    

   
    var target = createVector(300, 300);
    

    // for (let i = 0; i < whiteArray.length; i++) {
    //   if (whiteArray[i].dead == 1){
    //     console.log("sss")
    //       whiteArray.splice(i, 1);
    //     //  blackArray.splice(blackArray[k], 1);
    //     break

    //   }
    // }


    for (let i = 0; i < whiteArray.length; i++) {
      // if (whiteArray[i].dead == 1){
      //   console.log("sss")
      //     whiteArray.splice(whiteArray[i], 1);
      //   //  blackArray.splice(blackArray[k], 1);
      //   break

      // }

      if (whiteArray[i].dead == 0){
      whiteArray[i].display();
      whiteArray[i].appear_update();
      whiteArray[i].update();

      
   
      if (whiteArray[i].appear>255) {
        whiteArray[i].random_walk();
      }
    } 


   

     
    }
    
  
  


    for (let i = 0; i < blackArray.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      if (blackArray[i].dead == 0){
      blackArray[i].display();
      blackArray[i].appear_update();
      blackArray[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray[i].appear>255) {
        blackArray[i].random_walk();
      }
    }

    // if (blackArray[i].show == 0){
    //   blackArray.splice(blackArray[i], 1);
    //   console.log("s")
    //   // break
    // }

    

     
    }

    for (let i = 0; i < blackArray_h.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      blackArray_h[i].display();
      blackArray_h[i].appear_update();
      blackArray_h[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (blackArray_h[i].appear>255) {
        blackArray_h[i].straight_walk()
        if (blackArray_h[i].position.y > 49*s_y) {
        blackArray_h[i].random_walk();
        }
      }
    

     
    }


    for (let i = 0; i < whiteArray_e.length; i++) {
      // whiteArray[i].display();
      // whiteArray[i].appear_update();
      // whiteArray[i].update();

      
      whiteArray_e[i].display();
      whiteArray_e[i].appear_update();
      whiteArray_e[i].update();

      // if (whiteArray[i].appear>255) {
      //   whiteArray[i].random_walk();
      // }
      if (whiteArray_e[i].appear>255) {
        whiteArray_e[i].straight_walk()
        if (whiteArray_e[i].position.y > 49*s_y) {
          whiteArray_e[i].random_walk();
        }
      }
    

     
    }



    for (let i = 0 ; i<disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      if (disappearArray[i].alpha<1) {
        disappearArray.splice(disappearArray[i], 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      }
    }
    }




    for (let i = 0 ; i<appearArray.length; i++) {
      if (appearArray[i].alpha<1) {
        appearArray.splice(appearArray[i], 1);
      }
    }

    for (let i = 0 ; i<disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      if (disappearArray_2[i].disappear<1) {
        disappearArray_2.splice(disappearArray_2[i], 1);
      }
    }
  }

    for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
      if (disappearArray_2_pair[i].disappear<1) {
        disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
  
      } else {
        continue
      }
    }
    }

    for (let i = 0; i < appearArray.length; i++) {
      appearArray[i].display();
      appearArray[i].update();

     
    }

    for (let i = 0; i < appearArray_s1.length; i++) {
      appearArray_s1[i].display();
      appearArray_s1[i].update();
     
    }
    for (let i = 0; i < disappearArray.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray[i].display();
      disappearArray[i].update();
      }
    }


    for (let i = 0; i < disappearArray_dot.length; i++) {
      if (typeof disappearArray[i] != "undefined") {
      disappearArray_dot[i].display();
      // disappearArray_dot[i].update();
      }
    }


    
    // new  double circle
    for (let i = 0; i < disappearArray_2.length; i++) {
      if (typeof disappearArray_2[i] != "undefined") {
      disappearArray_2[i].display();
      disappearArray_2[i].update_circle();
      disappearArray_2[i].update_location();
      // disappearArray_2[i].seek(middle_position_Array[i]);
      
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {

    disappearArray_2_pair[i].display();
    disappearArray_2_pair[i].update_circle();
    disappearArray_2_pair[i].update_location();
    // disappearArray_2_pair[i].seek(middle_position_Array[i]);
   
      }
    }

    for (let i = 0; i < disappearArray_2_pair.length; i++) {
      if (typeof disappearArray_2_pair[i] != "undefined") {
        for (let k = 0; k < disappearArray_2.length; k++) {
          if (typeof disappearArray_2[k] != "undefined") {
           if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
            disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
            disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));

           }
          
          
          
          }}}}




if (recombine == 1) {

  

//disappear
      for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray[k].position.x)<distance_dis
       && abs(whiteArray[i].position.y-blackArray[k].position.y)<distance_dis && (whiteArray[i].id != blackArray[k].id) 
       && (whiteArray[i].show ==1) && (blackArray[k].show ==1) && (whiteArray[i].position.x>(190*s_x))) {

        //15 
        
        //mark
         whiteArray[i].stop();
         blackArray[k].stop();
         whiteArray[i].noShow();
         blackArray[k].noShow();
         whiteArray[i].deadd();
         blackArray[k].deadd();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break       


       }
   }

    }


    //disappear white & black new h 
    for (let i = 0; i < whiteArray.length; i++) {
      for (let k = 0; k< blackArray_h.length; k++) {
        if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
       && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
       && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {

        
        //mark
         whiteArray[i].stop();
         blackArray_h[k].stop();
         whiteArray[i].noShow();
         blackArray_h[k].noShow();
         whiteArray[i].deadd();
         blackArray_h[k].deadd();
          // whiteArray[i].update();
          // blackArray[k].update();


        middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
        //original dots
        // whiteArray[i].seek(middle_position_Array[disappear_count]);
        // blackArray[k].seek(middle_position_Array[disappear_count]);

     

//effects
 
         disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
         disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
         disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))

        disappear_count++
         whiteArray.splice(i, 1);
         blackArray.splice(k, 1);
         break
     
       }
   }
 
    }


         //disappear new white e & black 
         for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray[k].stop();
             whiteArray_e[i].noShow();
             blackArray[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
  
            disappear_count++
             whiteArray.splice(i, 1);
             blackArray.splice(k, 1);
             break
         
           }
       }
    
        }


        //disappear new white e & new black h
        for (let i = 0; i < whiteArray_e.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
           && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray_e[i].stop();
             blackArray_h[k].stop();
             whiteArray_e[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
  
         
  
  //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
  
            disappear_count++
             whiteArray.splice(i, 1);
             blackArray.splice(k, 1);
             break
         
           }
       }
    
        }

      }

    // temp = slider_temperature.value();


    stroke(125, 241, 148,100);
    strokeWeight(1);
    // fill(25,25,25,100)
    // rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);

    noFill();
    rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70)*s_x,(770/2)*s_y);

    fill(30)
    //one
    rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    //two
    rect((10+100+70+change_square)*s_x,(10+385/2)*s_y,(940-change_length-70)*s_x,(770/4)*s_y);

    noFill();

    //plot graph///////////////
    ///up graph x:190-(950-(950-190)/point_count y:down171.25-40up
 
noFill();


    //coordinates
      //up
      stroke(102, 194, 255,180);

      //horizon
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,171.25*s_y,(10+100+70+change_square+790)*s_x,171.25*s_y)


      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,40*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, 171.25*s_y)


//arrow up right 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25+3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(171.25-3)*s_y,(10+100+70+change_square+790)*s_x,(171.25)*s_y)
//arrow up up
line((10+100+70+change_square+940-change_length-70-760-20-3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20+3)*s_x,46*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (40)*s_y)


  //down
      //horizon
      line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
      //vertical
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (10+385/2+96.25+70)*s_y)
//228.75 368.75
//arrow up 
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25+3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
line((10+100+70+change_square+940-change_length-70-20+4)*s_x,(10+385/2+96.25-3+70)*s_y,(10+100+70+change_square+790)*s_x,(10+385/2+96.25+70)*s_y)
//arrow down up
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20-3)*s_x, (10+385/2+96.25-60-5)*s_y)
line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(10+385/2+96.25-70)*s_y, (10+100+70+change_square+940-change_length-70-760-20+3)*s_x, (10+385/2+96.25-60-5)*s_y)


if (real_graph_live ==0){

  //green
  stroke(125, 241, 148)

  strokeWeight(1.5)
  beginShape();
      curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7*3)*s_y)
      curveVertex(170*s_x,(171.25+197.5-array_plot_h_0.length*0.7*3)*s_y)
     
  
    for (var k = 0; k < point_count; k++) {

        curveVertex((190+k*(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[k].length*0.7*3)*s_y)

    }
   

      curveVertex((950-(950-190)/point_count)*s_x,(171.25+197.5-array_plot_h[point_count-1].length*0.7*3)*s_y)
  
  
  
  endShape();
  noStroke()
  

  
  
  //yellow
  stroke(254,246,182)
  

strokeWeight(1.5)

line((10+100+70+change_square+940-change_length-70-760-20)*s_x,(171.25-changg)*s_y,(10+100+70+change_square+790-25)*s_x,(171.25-changg)*s_y)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {
//     curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
//     curveVertex(170*s_x,(171.25-array_plot_e_0.length*0.7)*s_y)
//     // curveVertex(190*s_x,(171.25-array_plot[0].length*0.7)*s_y)

//   // }

//   for (var k = 0; k < point_count; k++) {
//     // if (i!=(point_count-1)||i!=(0)) {
//       curveVertex((190+k*(950-190)/point_count)*s_x,(171.25-array_plot_e[k].length*0.7)*s_y)
//     // }
//   }
 
//   // if (i==(point_count-1)) {
//     curveVertex((950-(950-190)/point_count)*s_x,(171.25-array_plot_e[point_count-1].length*0.7)*s_y)
//   // }
// // }


// endShape();
noStroke()



//////////////////// plot current

noFill();


// //green
// stroke(125, 241, 148)

// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)-(array_positive_y_0_h.length-array_negative_y_0_h.length))*s_y)
  
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[k].length-array_negative_y_h[k].length))*s_y)
//       // }
//     }


//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)-(array_positive_y_h[point_count-1].length-array_negative_y_h[point_count-1].length))*s_y)
  

 

// endShape();
// noStroke()
// strokeWeight(1)



//yellow
stroke(254,246,182)




// strokeWeight(1.5)
// beginShape();
// // for ( var i = 0; i < point_count; i++ ) {
//   // if (i==0 ) {

//       curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
//     curveVertex(170*s_x,((10+385/2+96.25)+(array_positive_y_0_e.length-array_negative_y_0_e.length))*s_y)
   
   
//     // curveVertex(190*s_x,((10+385/2+96.25)+(array_positive_y[0].length-array_negative_y[0].length))*s_y)

//   // }


//     for (var k = 0; k < point_count; k++) {
//       // if (i!=(point_count-1)||i!=(0)) {
//         curveVertex((190+k*(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[k].length-array_negative_y_e[k].length))*s_y)
//       // }
//     }

//     curveVertex((950-(950-190)/point_count)*s_x,((10+385/2+96.25)+(array_positive_y_e[point_count-1].length-array_negative_y_e[point_count-1].length))*s_y)





 

// endShape();
// noStroke()
// strokeWeight(1)


  }


//box

    stroke(255, 58, 23,210);
    context_1.beginPath();
        context_1.setLineDash([10,10]);
        context_1.rect((10+100+70+change_square)*s_x,(10+385)*s_y,(940-change_length-70-760)*s_x,(770/2)*s_y);
        context_1.closePath();
    context_1.stroke();
    context_1.setLineDash([]);

  
    // noFill();
    // rect((10+100+70+change_square)*s_x,(10)*s_y,(940-change_length-70-760)*s_x,(770)*s_y);

    stroke(125, 241, 148,100);

    textSize(17)
    noStroke()
    strokeWeight(1)
    fill(255);
   ///////////////////

   fill(102, 194, 255,180)



textSize(14);
  
text("Electron Concentration (/cm\u00B3)",(160)*s_x,(30)*s_y)
text("Hole Concentration (/cm\u00B3)",(160)*s_x,(223)*s_y)
text("x",(930)*s_x,(190)*s_y)
text("x",(930)*s_x,(318+70)*s_y)

textSize(12);


// text("Hole",(885)*s_x,(43)*s_y)
// text("Electron",(885)*s_x,(53)*s_y)
// text("0",(158)*s_x,(172)*s_y)
// text("0",(158)*s_x,(298+70)*s_y)


if (changg <122){
  text("10\u2077",(155-3)*s_x,(298+70+12)*s_y)
} 
if (changg ==122){
  //text("10\u2076",(155)*s_x,(172)*s_y)
  text("10\u2076",(155-3)*s_x,(298+70+12)*s_y)
} 

text("10\u00B9\u00B3",(153-3)*s_x,(172+12)*s_y)

text("10\u00B9\u2074",(153-3)*s_x,(172-117)*s_y)

stroke(125, 241, 148,100);


//    //green
//    stroke(125, 241, 148)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,40*s_y,(10+100+70+change_square+790-60)*s_x,40*s_y)

// //yellow
// stroke(254,246,182)
// line((10+100+70+change_square+940-change_length-70-760-20+750-60)*s_x,50*s_y,(10+100+70+change_square+790-60)*s_x,50*s_y)

//real world graph 
if (real_graph ==1){


  // if (switch_1 ==0){
  noStroke()
  // fill(254,246,182,50)
  // } else if (switch_1 ==1) {
  //   noStroke()
    fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

    noStroke()
  fill(254,246,182,50)
  // } else if (switch_1 ==1) {
    // noStroke()
    // fill(125, 241, 148,50)
  // }

  // if (count_graph ==0){
    x_con =0
    for (let i = 0; i < array_graph_con.length; i++) {
      if (x_con<750){
        x_con+=array_graph_con[i].x
      } else {
        x_con=750
      }
      

    }


    triangle((170)*s_x, 171.25*s_y, (10+100+70+change_square+940-change_length-70-760-20)*s_x, (171.2-concentration*0.7)*s_y, (170+x_con)*s_x, 171.25*s_y)

  // }


  // if (switch_1==0){
    noStroke()
  fill(254,246,182,50)
//scale current 

// if (count_graph ==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale //scale by 5
    rect(170*s_x,298.75*s_y,(x_con)*s_x,(test_a/x_con)*s_y)
// }
  // } else if (switch_1 ==1) {
    noStroke()
    fill(125, 241, 148,50)

    // if (count_graph==0){
    test_a = (5.33*Math.pow(10,5)*Math.pow(scattering_velocity,2)*scattering_count*concentration)/Math.pow(10,7)*test_current_scale
    rect(170*s_x,298.75*s_y,(x_con)*s_x,-(test_a/x_con)*s_y)
    // }
  // }
 


  // console.log(con_count)
  // if (count_graph ==0){
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].update()
  }
// }

}





  }
  else if (sceneCount == 3.1) {




    num_e = (2*num_Line_text*(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300))))));
    num_h = (2*num_Line_text*(1-(1/(1+(Math.exp((y_cordi/100-constant_fermi_negative)/(0.026*constant_temperature/300)))))));
        // console.log(num_e)
    
    
        if (0.56<y_cordi/100 && 2>y_cordi/100){
          num_Line_text= Math.round(88*Math.pow(y_cordi/100-0.56,1/2))
          // opacity_circle=0
          // opacity_circle_up=1
        } else if (y_cordi/100<-0.56 && -2<y_cordi/100){
          num_Line_text= Math.round(50*Math.pow(-0.56-y_cordi/100,1/2))
          // opacity_circle=1
          // opacity_circle_up=0
          //Math.round(50*Math.pow(-0.56+m/100,1/2))
        } else if (-0.56<y_cordi/100 && y_cordi/100<0.56){
          num_Line_text=0
          opacity_circle=0
          opacity_circle_up=0
        } 
    
    
        d3bands_update_3_1()
      
     
        
        s_x = windowWidth/scale_x;
        s_y = windowHeight/scale_y;
    
    
        drawingContext.setLineDash([0]);
    
    
        if (time_count ==0) {
          if (electron_add >0 || hole_add>0) {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
              generation_Rate_c = 2*0.01*Math.pow(ni,2)/((current_Electron_c+ni)+(current_Hole_c+ni));
              
          
              // globalX += step;
              
              current_Electron_c += generation_Rate_c-recombination_Rate_c; 
              current_Hole_c += generation_Rate_c-recombination_Rate_c;
              recombination_Rate_c = 2*0.01*current_Electron_c*current_Hole_c/((current_Electron_c+ni)+(current_Hole_c+ni));
    
              time_count_graph=1 
            }  else {
              // globalX += step;
            }
    
           
    
          } else {
    
            if (time_count_graph ==0) {
              ni = (9.15*Math.pow(10,19))*Math.pow((temp/300),1.5)*Math.exp((-0.59/(0.026*temp/300)))
            generation_Rate_c = 0.01*ni;
            
        
            // globalX += step;
            
            current_Electron_c += generation_Rate_c-recombination_Rate_c; 
            current_Hole_c += generation_Rate_c-recombination_Rate_c;
            recombination_Rate_c = current_Electron_c*0.01;
            time_count_graph=1
            } else {
              // globalX += step;
            
            }
          }
        } else {
          // globalX += step;
        }
    
        
    
      
    
    
      
          //temp draw
    
    
        fill(255)
        rect((70+110)*s_x, 640*s_y, 10*s_x,105*s_y, 30*s_x);
        ellipse((70+115)*s_x, (640+105)*s_y,30*s_x)
     
    
        fill(235, 58, 52)
        ellipse((70+115)*s_x, (640+105)*s_y,20*s_y)
        rect((70+112.5)*s_x, (640+10+(-0.7*((320-260)/300*temp+260)+245))*s_y, 5*s_x, (105-(-0.7*((320-260)/300*temp+260)+245))*s_y, 30*s_x);
    
        //270-320 y
        //0-300 x
        // 320 = 300a+270
        // a= (320-270)/300
        // rect(112.5*s_x, (640+10+(-0.7*temp+245))*s_y, 5*s_x, (105-(-0.7*temp+245))*s_y, 30*s_x);
    
        fill(255)
        textSize(18);
      
        text(temp+"K",(70+140)*s_x,(640+115)*s_y)
    
    
        
    
        // g_rate = 0.000000112099*generation_Rate_c+0.999998791
    
    
          // g_rate = 0.000002036*generation_Rate_c+0.99999
        
          g_rate = 0.00000112099*generation_Rate_c+0.999998791
          // g_rate = 0.000000112099*generation_Rate_c+0.999998791
          // g_rate = generation_Rate_c/10000+1
    
       
        var target = createVector(300, 300);
        
    
        for (let i = 0; i < whiteArray.length; i++) {

          if (whiteArray[i].swap ==0) {
          whiteArray[i].display();
          whiteArray[i].appear_update();
          whiteArray[i].update();
    
          
       
          if (whiteArray[i].appear>255) {
            whiteArray[i].random_walk();
          }
    
        }

        if (whiteArray[i].swap ==1) {


           //if not freeze and not override 
           if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==0) {
            if (whiteArray[i].appear>255) {
              whiteArray[i].straight_walk()
              if (whiteArray[i].position.y > 49*s_y) {
                whiteArray[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 ){
                whiteArray[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray[m].assigned =1
                whiteArray[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray[i].freeze ==0 &&whiteArray[i].override ==1 && whiteArray[i].assigned ==1) {
            whiteArray[i].easy_seek()

            if (abs(whiteArray[i].position.x-whiteArray[i].target.x)<10 && abs(whiteArray[i].position.y-whiteArray[i].target.y)<10) {

      
              whiteArray[i].stop()
              whiteArray[i].position = createVector(appearArray_s1[whiteArray[i].match].x,appearArray_s1[whiteArray[i].match].y)
            

            }

          }


        }

         
        }
    
      
    
    
        for (let i = 0; i < blackArray.length; i++) {
        
          
          blackArray[i].display();
          blackArray[i].appear_update();
          blackArray[i].update();
    
      
          if (blackArray[i].appear>255) {
            blackArray[i].random_walk();
          }
        
    
         
        }
    ////h 
        for (let i = 0; i < blackArray_h.length; i++) {
  

        
          if (blackArray_h[i].id == "h") {
            blackArray_h[i].display();
            blackArray_h[i].appear_update();
            blackArray_h[i].update();
  
      
            if (fraction_h_count>0){
//not moving in initialize
              blackArray_h[i].freeze = 1
              fraction_h_count-=1
   

            } 


          } 
          


          blackArray_h[i].display();
          blackArray_h[i].appear_update();
          blackArray_h[i].update();


          //if not freeze and not override 
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==0) {
            if (blackArray_h[i].appear>255) {
              blackArray_h[i].straight_walk()
              if (blackArray_h[i].position.y > 49*s_y) {
                blackArray_h[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==5){
                blackArray_h[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                blackArray_h[m].assigned =1
                blackArray_h[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (blackArray_h[i].freeze ==0 &&blackArray_h[i].override ==1 && blackArray_h[i].assigned ==1) {
            blackArray_h[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(blackArray_h[i].position.x-blackArray_h[i].target.x)<10 && abs(blackArray_h[i].position.y-blackArray_h[i].target.y)<10) {

      
              blackArray_h[i].stop()
              blackArray_h[i].position = createVector(appearArray_s1[blackArray_h[i].match].x,appearArray_s1[blackArray_h[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    
        for (let i = 0; i < whiteArray_e.length; i++) {
  

        
          if (whiteArray_e[i].id == "e") {
            whiteArray_e[i].display();
            whiteArray_e[i].appear_update();
            whiteArray_e[i].update();
  
      
            if (fraction_e_count>0){
//not moving in initialize
              whiteArray_e[i].freeze = 1
              fraction_e_count-=1
   

            } 


          } 
          


          whiteArray_e[i].display();
          whiteArray_e[i].appear_update();
          whiteArray_e[i].update();


          //if not freeze and not override 
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==0) {
            if (whiteArray_e[i].appear>255) {
              whiteArray_e[i].straight_walk()
              if (whiteArray_e[i].position.y > 49*s_y) {
                whiteArray_e[i].random_walk();
              }
            }
          }

          //if override(e move to plus sign), assign target 
        
          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==0) {
            for (let m = 0 ; m<appearArray_s1.length; m++) {
              if (appearArray_s1[m].occupied ==0 && appearArray_s1[m].color ==4){
                whiteArray_e[m].target = createVector(appearArray_s1[m].x,appearArray_s1[m].y)
                appearArray_s1[m].occupied=1
                whiteArray_e[m].assigned =1
                whiteArray_e[m].match = m
   
                break
              }

            }

          }
        

          //cancel when close and seek the asisgned cross/minus

          if (whiteArray_e[i].freeze ==0 &&whiteArray_e[i].override ==1 && whiteArray_e[i].assigned ==1) {
            whiteArray_e[i].easy_seek()

            // whiteArray_e[i].position = appearArray_s1[whiteArray_e[i].match].position
            // whiteArray_e[i].stop()
            if (abs(whiteArray_e[i].position.x-whiteArray_e[i].target.x)<10 && abs(whiteArray_e[i].position.y-whiteArray_e[i].target.y)<10) {

      
              whiteArray_e[i].stop()
              whiteArray_e[i].position = createVector(appearArray_s1[whiteArray_e[i].match].x,appearArray_s1[whiteArray_e[i].match].y)
            

            }

          }

    
       
        
        
      }
    
    ////no splice bunny
    
      //   for (let i = 0 ; i<disappearArray.length; i++) {
      //     if (typeof disappearArray[i] != "undefined") {
      //     if (disappearArray[i].alpha<1) {
      //       disappearArray.splice(disappearArray[i], 1);
      //     }
      //   }
      // }
    
      //   for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
      //     if (typeof disappearArray_2_pair[i] != "undefined") {
      //     if (disappearArray_2_pair[i].disappear<1) {
      //       disappearArray_2_pair.splice(disappearArray_2_pair[i], 1);
      //     }
      //   }
      //   }
    
    
    
    
      //   for (let i = 0 ; i<appearArray.length; i++) {
      //     if (appearArray[i].alpha<1) {
      //       appearArray.splice(appearArray[i], 1);
      //     }
      //   }
    
      //   for (let i = 0 ; i<disappearArray_2.length; i++) {
      //     if (typeof disappearArray_2[i] != "undefined") {
      //     if (disappearArray_2[i].disappear<1) {
      //       disappearArray_2.splice(disappearArray_2[i], 1);
      //     }
      //   }
      // }

   

////////////////




    
        for (let i = 0 ; i<disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
          if (disappearArray_2_pair[i].disappear<1) {
            disappearArray_2_pair.splice(i, 1);
      
          } else {
            continue
          }
        }
        }
    
        for (let i = 0; i < appearArray.length; i++) {
          appearArray[i].display();
          appearArray[i].update();
    
         
        }
        

        //note
        for (let i = 0; i < appearArray_s1.length; i++) {
          appearArray_s1[i].display();
          appearArray_s1[i].update();
         
        }
        for (let i = 0; i < disappearArray.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray[i].display();
          disappearArray[i].update();
          }
        }
    
    
        for (let i = 0; i < disappearArray_dot.length; i++) {
          if (typeof disappearArray[i] != "undefined") {
          disappearArray_dot[i].display();
          // disappearArray_dot[i].update();
          }
        }
    
    
        
        // new  double circle
        for (let i = 0; i < disappearArray_2.length; i++) {
          if (typeof disappearArray_2[i] != "undefined") {
          disappearArray_2[i].display();
          disappearArray_2[i].update_circle();
          disappearArray_2[i].update_location();
          // disappearArray_2[i].seek(middle_position_Array[i]);
          
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
    
        disappearArray_2_pair[i].display();
        disappearArray_2_pair[i].update_circle();
        disappearArray_2_pair[i].update_location();
        // disappearArray_2_pair[i].seek(middle_position_Array[i]);
       
          }
        }
    
        for (let i = 0; i < disappearArray_2_pair.length; i++) {
          if (typeof disappearArray_2_pair[i] != "undefined") {
            for (let k = 0; k < disappearArray_2.length; k++) {
              if (typeof disappearArray_2[k] != "undefined") {
               if (disappearArray_2_pair[i].id == disappearArray_2[k].id) {
                disappearArray_2[k].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
                disappearArray_2_pair[i].seek(p5.Vector.div(p5.Vector.add(disappearArray_2[k].position, disappearArray_2_pair[i].position),2));
    
               }
              
              
              
              }}}}
    
    
    
    
    
    
    //disappear
          for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray[k].position.y)<15 && (whiteArray[i].id != blackArray[k].id) 
           && (whiteArray[i].show ==1) && (blackArray[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray[k].stop();
             whiteArray[i].noShow();
             blackArray[k].noShow();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break       
           }
       }
    
        }
    
    
        //disappear white & black new h 
        for (let i = 0; i < whiteArray.length; i++) {
          for (let k = 0; k< blackArray_h.length; k++) {
            if (abs(whiteArray[i].position.x-blackArray_h[k].position.x)<15 
           && abs(whiteArray[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray[i].id != blackArray_h[k].id) 
           && (whiteArray[i].show ==1) && (blackArray_h[k].show ==1)) {
    
            
            //mark
             whiteArray[i].stop();
             blackArray_h[k].stop();
             whiteArray[i].noShow();
             blackArray_h[k].noShow();
              // whiteArray[i].update();
              // blackArray[k].update();
    
    
            middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray[i].position),2);
            //original dots
            // whiteArray[i].seek(middle_position_Array[disappear_count]);
            // blackArray[k].seek(middle_position_Array[disappear_count]);
    
         
    
    //effects
     
             disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
             disappearArray_2[disappear_count] =(new Appear(whiteArray[i].position.x, whiteArray[i].position.y,10,2, disappear_count))
             disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
    
            disappear_count++
            //  whiteArray.splice(whiteArray[i], 1);
            //  blackArray.splice(blackArray[k], 1);
             break
         
           }
       }
     
        }
    
    
             //disappear new white e & black 
             for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray[k].position.y)<15 && (whiteArray_e[i].id != blackArray[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray[k].position.x, blackArray[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
            //disappear new white e & new black h
            for (let i = 0; i < whiteArray_e.length; i++) {
              for (let k = 0; k< blackArray_h.length; k++) {
                if (abs(whiteArray_e[i].position.x-blackArray_h[k].position.x)<15 
               && abs(whiteArray_e[i].position.y-blackArray_h[k].position.y)<15 && (whiteArray_e[i].id != blackArray_h[k].id) 
               && (whiteArray_e[i].show ==1) && (blackArray_h[k].show ==1)) {
        
                
                //mark
                 whiteArray_e[i].stop();
                 blackArray_h[k].stop();
                 whiteArray_e[i].noShow();
                 blackArray_h[k].noShow();
                  // whiteArray[i].update();
                  // blackArray[k].update();
        
        
                middle_position_Array[disappear_count] = p5.Vector.div(p5.Vector.add(blackArray_h[k].position, whiteArray_e[i].position),2);
                //original dots
                // whiteArray[i].seek(middle_position_Array[disappear_count]);
                // blackArray[k].seek(middle_position_Array[disappear_count]);
      
             
      
      //effects
         
                 disappearArray[disappear_count] =(new Appear( middle_position_Array[disappear_count].x,  middle_position_Array[disappear_count].y,10,1, disappear_count))
                 disappearArray_2[disappear_count] =(new Appear(whiteArray_e[i].position.x, whiteArray_e[i].position.y,10,2, disappear_count))
                 disappearArray_2_pair[disappear_count] =(new Appear(blackArray_h[k].position.x, blackArray_h[k].position.y,10,3, disappear_count))
      
                disappear_count++
                //  whiteArray.splice(whiteArray[i], 1);
                //  blackArray.splice(blackArray[k], 1);
                 break
             
               }
           }
        
            }
    
    
    
    
    
    
      
        // temp = slider_temperature.value();
    
    
        stroke(125, 241, 148,100);
        strokeWeight(1);
        fill(25,25,25,100)
        rect((970-350+20)*s_x,(790-200+80)*s_y,(330-20)*s_x,(190-80)*s_y);
    
        noFill();
        rect((10+100+70+change_square)*s_x,10*s_y,(940-change_length-70)*s_x,770*s_y);
    
    
    
        textSize(17)
        noStroke()
        strokeWeight(1)
        fill(255);
        // text("Generation Rate: "+ generation_Rate_c.toExponential(1), (970-350+20)*s_x,(790-200+40)*s_y);
        // text("Recombination Rate: "+ recombination_Rate_c.toExponential(1),(970-350+20)*s_x,(790-200+80)*s_y);
        text("Number of Electrons:    "+ current_Electron_c.toExponential(1),(970-350+20+30)*s_x,(790-200+120)*s_y);
        text("Number of Holes:    "+ current_Hole_c.toExponential(1),(970-350+20+30)*s_x,(790-200+160)*s_y);
        
    
        textSize(14*s_x)
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+40)*s_y )
          // text("pairs/sec*cm",(970-350+20+190+27)*s_x,(790-200+80)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40)*s_y )
          text("per cm",(970-350+20+190+58+11)*s_x,(790-200+80+40+40)*s_y )
    
          textSize(10*s_x)
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+80-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8)*s_y )
          text("3",(970-350+20+190+100+11)*s_x,(790-200+80+40-8+40)*s_y )
          // text("3",(970-350+20+190+100+11)*s_x,(790-200+40-8)*s_y )
    
        //restart
      
    
        // fill(255, 58, 23,210);
        // rect((970-350-55+323-2.5)*s_x,(790-200+185-15)*s_y,(55+5)*s_x,18*s_y,5)
      
    
    
        // textSize(17*s_x)
        // noStroke()
        // strokeWeight(2)
        // fill(255);
        // text("RESET",(970-350-55+325)*s_x,(790-200+185)*s_y);
    
    
        if (abs(generation_Rate_c.toExponential(1)-recombination_Rate_c.toExponential(1))< 10) {
        //   fill(125, 241, 148,210);
        // rect((970-350-55+325-55-2.5)*s_x,(30-15)*s_y,(105+5)*s_x,22*s_y,5)
      
        textSize(17*s_x)
        noStroke()
        strokeWeight(2)
        fill(255);
        text("In Equilibrium",(970-350-55-55)*s_x,(790-200+185-5)*s_y);
        }
     
    
    
    
      } else if (sceneCount == 3.15) {
    
  
    

  } else if (sceneCount == 3.25) {


  } else if (sceneCount == 4) {
  
  }
}

reset_scene1 = ()=> {
  
  // add_h(123)
  

  count_n = 0
  count_pn_num =0
  e_field_c = 0

  y_con_c=0
  y_con_2 =0
  y_con = 0
  start_graph =1
  count_graph = 10

  whiteArray = [];
  blackArray = [];
  whiteArray_e  =  []
  blackArray_h = []
  appearArray_s1 = []

  appearArray_s1 = []
  whiteArray_e = [];
  whiteID_e  = [];
  
  appearArray_s1 = []
  appearArray_s2 = []
  blackArray_h = [];
  blackID_h  = [];

  console.log("sss")
   array_graph_con=[]

   con_count =0

   console.log(concentration)

  
    array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

    if (sceneCount ==2) {
   
  
 
      current_Electron_c = Math.round(electron_add ) 
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
      ///  fraction cal   // n_c delta_ED
    
      n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
      // let tempe_fraction_e
      tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
      fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
      fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
      // console.log(fraction_e_count)
      // console.log(tempe_fraction_e+"donor")
    ///
    
      for (let i=0; i < e_count; i ++){
    
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4,i));
    //id start from 0 ,color 4
    
        whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
      
        ///////hole
    
    
    
          current_Hole_c = Math.round(hole_add) 
          // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
          h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
          //note_bun
    
          ///  fraction cal   // n_c delta_ED
    
     n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
     let tempe_fraction_h
     tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
     fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
     fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
     // console.log(fraction_e_count)
     // console.log(tempe_fraction_e+"donor")
    ///
    
         for (let i=0; i < h_count; i ++){
    
          let a = random(170*s_x,930*s_x);
          let b = random((20+385)*s_y,760*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5,i));
      
          blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
          blackID_h.push(global_id);
          global_id += 1;
          }
        
          // reset_scene1();
    
      }


      if (sceneCount ==3) {
  
    
  
        current_Electron_c = Math.round(electron_add ) 
  
    e_count = Math.pow(100,((Math.log10(Math.round(electron_add ))-8)/2))/1000
  
    ///  fraction cal   // n_c delta_ED
  
    n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
    // let tempe_fraction_e
    tempe_fraction_e = (-1+Math.pow(1+8*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp),1/2))/(4*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp))
  
    current_Electron_c = Math.round(electron_add ) *tempe_fraction_e
    // console.log(Math.round(100*tempe_fraction_e)/100)
    fraction_e.push(Math.round(100*tempe_fraction_e)/100)
  
    fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
  
    constant_fermi_final = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
       
    constant_fermi_final = Math.round(1000*constant_fermi_final)/1000
  
    //freeze
  
    nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add*tempe_fraction_e+Math.pow((Math.pow(electron_add*tempe_fraction_e,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)
  
    
    // nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    //   let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    //   constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)
  
   
          // reset_d3bands_3_1() 
          // d3bands_3_1()
  ///
  
    for (let i=0; i < e_count; i ++){
  
      let a = random(170*s_x,930*s_x);
      let b = random((20+385)*s_y,760*s_y);
      appearArray_s1.push(new Appear(a,b,10,4,i));
  //id start from 0 ,color 4
  
      whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
      // whiteID_e.push(global_id);
      global_id += 1;
      }
    
    
      ///////hole
  
  
  
        current_Hole_c = Math.round(hole_add) 
        // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
        h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
  
        //note_bun
  
        ///  fraction cal   // n_c delta_ED
  
   n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
   let tempe_fraction_h
   tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
  
   fraction_h.push(Math.round(100*tempe_fraction_h)/100)
  
   fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
   // console.log(fraction_e_count)
   // console.log(tempe_fraction_e+"donor")
  ///
  
       for (let i=0; i < h_count; i ++){
  
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);
      
        appearArray_s1.push(new Appear(a,b,10,5,i));
    
        blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
        blackID_h.push(global_id);
        global_id += 1;
        }
      
    
  
    }

    if (sceneCount ==1.5) {
   
  
 
      current_Electron_c = Math.round(electron_add ) 
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
      ///  fraction cal   // n_c delta_ED
    
      n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
      // let tempe_fraction_e
      tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
      fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
      fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
      // console.log(fraction_e_count)
      // console.log(tempe_fraction_e+"donor")
    ///
    
      for (let i=0; i < e_count; i ++){
    
        let a = random(550*s_x,930*s_x);
        // let b = random(30*s_y,730*s_y);  
        let b = random((20+385)*s_y,760*s_y);
        appearArray_s1.push(new Appear(a,b,10,4,i));
    //id start from 0 ,color 4
    
        whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
      
        ///////hole
    
    
    
          current_Hole_c = Math.round(hole_add) 
          // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
          h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
          //note_bun
    
          ///  fraction cal   // n_c delta_ED
    
     n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
     let tempe_fraction_h
     tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
     fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
     fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
     // console.log(fraction_e_count)
     // console.log(tempe_fraction_e+"donor")
    ///
    
         for (let i=0; i < h_count; i ++){
    
          let a = random(170*s_x,550*s_x);
          let b = random((20+385)*s_y,760*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5,i));
      
          blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
          blackID_h.push(global_id);
          global_id += 1;
          }
        
          // reset_scene1();
    
      }

   
  
}

setTemperature = (te) => {
  constant_temperature = te;
  temp = te;
  if (sceneCount == 1 || sceneCount == 2) {
   
    temp = te;
    constant_fermi = Math.round(1000*-0.28*0.026/300*constant_temperature)/1000
    // console.log(constant_fermi) 
    // console.log(constant_temperature)
    reset_d3bands()
    d3bands()

  } 

}

setDistance = (te) => {
  factor_ca = te
//  distance_dis = 10-factor_ca*(d_factor)
 distance_dis = te/100
}

setConcentration = (te) => {
  factor_c=te
  y_con_c =0
  y_con_2 =0
  y_con = 0
  concentration = te/3
  count_graph = 10

  whiteArray = [];
  blackArray = [];
  array_graph_con=[]

   con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))


}

switch_eh_1 = () => {
  if(switch_1 == 0){
    //hole
    switch_1 = 1;
    switch_eh_1.checked = true
    console.log("sss")

    whiteArray = []
    array_graph_con=[]

   con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

   
  }
  else{
    switch_1 = 0;
    switch_eh_1.checked = false
    blackArray = []
    array_graph_con=[]

    con_count =0
   array_graph_con.push(new Concentration(scattering_velocity,scattering_count))
 
  }


}

switch_recombine= () => { 
  if (recombine ==1) {
    //off
    recombine = 0
    switch_re.checked = false
  } else {
  recombine = 1
  switch_re.checked = true
}
}


setTemperature_real = (te) => {
  constant_temperature_real = te
  temp_real = te

  document.getElementById("speed_1").value=(Math.pow(Math.pow(2.6,2)*Math.pow(10,10)*constant_temperature_real/300,1/2)).toExponential(1)
  document.getElementById("speed_2").value=Math.round(150*Math.pow((constant_temperature_real/300),-2.3)) //scarer

 
  // 
  scattering_velocity = constant_temperature_real/50

 setScattering(Math.round(150*Math.pow((constant_temperature_real/300),-2.3)/14))

  for (let i=0; i < whiteArray.length; i ++){
whiteArray[i].movingVelocity = 5*parseInt(constant_temperature_real/30)/5;
  }

  for (let i=0; i < blackArray.length; i ++){
    blackArray[i].movingVelocity = 5*parseInt(constant_temperature_real/30)/5;
      }



}
setCurrent = (v) => {

  test_current_scale = v
  document.getElementById("scale_1").value=v
}

setTest = (v) => {

  test_x_scale = 2*0.1
  document.getElementById("scale_2").value=Math.round((2*0.1*100))/100
}


setVelocity = (v) => {
  scattering_velocity = v
  console.log(scattering_velocity)
  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].stop_count()
  }
  con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))


  for (let i=0; i < whiteArray.length; i ++){
whiteArray[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
  }

  for (let i=0; i < blackArray.length; i ++){
    blackArray[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
      }

      for (let i=0; i < blackArray_h.length; i ++){
        blackArray_h[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
          }

          for (let i=0; i < whiteArray_e.length; i ++){
            whiteArray_e[i].movingVelocity = 5*parseInt(scattering_velocity)/5;
              }

}

setScattering = (c) => {
  scattering_count = c
  scattering_count_c = parseInt(c)+2
  console.log(scattering_count_c+"countc")


  for (let i = 0; i < array_graph_con.length; i++) {
    array_graph_con[i].stop_count()
  }
  con_count =0
  array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}

setFactor = (c) => {
  factor_new =c
}

setPoint = (k) => {
  point_count = k
  for ( var i = 0; i < point_count; i++ ) {
    array_plot[i] = []; 
    array_positive_y[i] = []
    array_negative_y[i] = []
  }

}

setVolume = (v) => {
  volume1 = v
  num_multi = 1/v

}


checkBoundaryAtoms = (latticeAtoms, xLimit, yLimit) => {
  for (let i = -xLimit; i <= xLimit; i++) {
    for (let j = -yLimit; j <= yLimit; j++) {
      if (latticeAtoms[i][j].selected) {
        latticeAtoms[i][j].boundary = false;
      } else if (latticeAtoms[i - 1][j].selected || latticeAtoms[i + 1][j].selected || latticeAtoms[i][j - 1].selected || latticeAtoms[i][j + 1].selected) {
        latticeAtoms[i][j].boundary = true;
      } else {
        latticeAtoms[i][j].boundary = false;
      }
    }
  }
}



timeIt = () => {
  if (time_count > 0) {
    time_count--;
  }
}

time_concentration= () => {
  if (x_con<750 && count_graph ==0){
    con_count+=1
  }
  
}



timeIt_blink = () => {
  if (time_count_blink > 0) {
    time_count_blink--;
  }
  if (time_count_blink ==0) {
    time_count_blink=100
  }
}

scattering = () =>{
  //timebetween scatter 
  if (scattering_count_c>2) {
//time when straight line no scatter

scatter_tf = false
// console.log("no")

// console.log(scattering_count_c) count scatter
  }
  else if ((scattering_count_c<=2) ) {
//time to scatter 2s
scatter_tf = true
// console.log("yes")

  }

  scattering_count_c -=1 

  if (scattering_count_c ==0){
    scattering_count_c = parseInt(scattering_count)+2
  }

}

count_start_graph = () =>{
  if (start_graph =1 && count_graph>0) {
    count_graph -=1
    console.log(count_graph)
  } 


}

count_pn_f= () =>{

  // clearInterval(count_pn);
  // interval_pn = 1000
  // count_pn = setInterval(function(){count_pn_f(1);},  interval_pn);
// if (count_pn_num <rect_density && hole_add !=0 ) {
//   count_pn_num +=0.01
//   e_field_c +=0.1*1/rect_density*1.7
// }

if (count_pn_num <X_n && hole_add !=0 ) {
  count_pn_num +=0.01
  e_field_c +=0.1*1/rect_density*5
  count_n +=1;
}


  
}

y_change = () =>{
  if ((x_con>750) && (y_con<((concentration*0.7)*s_y))) {
    y_con+=1;
    y_con_2 += (test_a/x_con)/(concentration*0.7)

  } 
  if (y_con>((concentration*0.7)*s_y)){
    y_con = (concentration*0.7)*s_y
    y_con_2 = test_a/x_con
  }

  // y_con_c+=1;


}

genBalls_scene1 = (num) =>{
  clearInterval(run1);
  interval_1 = 2000/g_rate*10000*5/factor_c;
  run1 = setInterval(function(){genBalls_scene1(1);}, interval_1);

  
  // generate *num* balls
if (loopp = true && sceneCount ==0.55 || sceneCount ==0.5|| sceneCount ==0.7|| sceneCount ==0.71  || sceneCount ==1  || sceneCount ==2 || sceneCount ==3|| sceneCount ==3.1 && whiteArray.length<13000) {

if (time_count>0) {

} else if (time_count==0){

  if (switch_1 ==0) {
    for (let i = 0; i < whiteArray.length; i++) {
      if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=(150*s_x)) ){
       
  
        
        box_count.push(whiteArray[i])
        // console.log(box_count.length)
    }
  
  
    }
  } else if (switch_1 ==1) {

    for (let i = 0; i < blackArray.length; i++) {
      if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=(150*s_x)) ){
       
  
        
        box_count.push(blackArray[i])
        // console.log(box_count.length)
    }
  
  
    }

  } else if (switch_1 ==2) {

    for (let i = 0; i < blackArray.length; i++) {
      if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=(150*s_x)) ){
       
  
        
        box_count_h.push(blackArray[i])
        // console.log(box_count_h.length)
    }
  
  
    }

  } 

 

if (box_count.length < concentration) {

  if (switch_1 ==0) {


  if (sceneCount ==0.55){
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20)*s_y,(770)*s_y);
  
      appearArray.push(new Appear(170*s_x,b,10,0));
  
      whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
  } else {
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20+385)*s_y,(770)*s_y);
  
      appearArray.push(new Appear(170*s_x,b,10,0));
  
      whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
  }
} else if (switch_1 ==1) {

  if (sceneCount ==0.55){
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20)*s_y,(770)*s_y);
  
      appearArray.push(new Appear(170*s_x,b,10,0));
  
      blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
  } else {
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20+385)*s_y,(770)*s_y);
  
      appearArray.push(new Appear(170*s_x,b,10,0));
  
      blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
  }

} }

if ((box_count_h.length < concentration)|| (box_count_h.length >= concentration)) {
if (switch_1 ==2) {

  if (sceneCount ==0.55){
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20)*s_y,(770)*s_y);
  
      appearArray.push(new Appear(170*s_x,b,10,0));
  
      blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
  } else {
    for (let i=0; i < num; i ++){
      let a = random(200*s_x,900*s_x);
      let b = random((20+385)*s_y,(770)*s_y);

      appearArray.push(new Appear(170*s_x,b,10,0));
      whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
      blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
      // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      whiteID.push(global_id);
      blackID.push(global_id);
      global_id += 1;
      
    }
      // if (sceneCount==1.5){
      //     for (let i=0; i < num; i ++){
      //       //change num 
      //       let a = random(200*s_x,900*s_x);
      //       let b = random((20+385)*s_y,(770)*s_y);

      //       appearArray.push(new Appear(170*s_x,b,10,0));
      //       whiteArray.push(new Vehicle(170*s_x, b, 10, global_id, 0));
      //       blackArray.push(new Vehicle(170*s_x, b, 10, global_id, 1));
      //       // blackArray.push(new Vehicle(200*s_x, b, 10, global_id, 1));
      //       whiteID.push(global_id);
      //       blackID.push(global_id);
      //       global_id += 1;
            
      //     }
      //   }



    
  }

}
 
}

box_count = []
box_count_h = []
box_count_e = []

//////950-190s_x


for ( var i = 0; i < point_count; i++ ) {
  array_plot[i] = []; 
  array_plot_h[i] = []; 
  array_plot_e[i] = []; 
}

array_plot_0 = []
array_plot_h_0 = []
array_plot_e_0 = []


if (switch_1 ==0){
  for (let i = 0; i < whiteArray.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot[k].push(whiteArray[i])
        // console.log(array_plot)
    }
    }
  
    if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=((150)*s_x))){
       
        
      array_plot_0.push(whiteArray[i])
      
      // console.log(array_plot_0.length)
  }
  }
} else if (switch_1 == 1) {

  for (let i = 0; i < blackArray.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot[k].push(blackArray[i])
        // console.log(array_plot)
    }
    }
  
    if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=((150)*s_x))){
       
        
      array_plot_0.push(blackArray[i])
      
      // console.log(array_plot_0.length)
  }
  }
} else if (switch_1 ==2) {
  for (let i = 0; i < whiteArray.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot_e[k].push(whiteArray[i])
        // console.log(array_plot)
    }
    }
  
    if ((whiteArray[i].position.x <=(190*s_x)) && (whiteArray[i].position.x >=((150)*s_x))&&(whiteArray[i].show ==1 )){
       
        
      array_plot_e_0.push(whiteArray[i])
      
      // console.log(array_plot_0.length)
  }
  }

  for (let i = 0; i < whiteArray_e.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot_e[k].push(whiteArray_e[i])
        // console.log(array_plot)
    }
    }
  
    if ((whiteArray_e[i].position.x <=(190*s_x)) && ((whiteArray_e[i].position.x >=((150)*s_x)) && (whiteArray_e[i].show ==1 ))){
       
        
      array_plot_e_0.push(whiteArray_e[i])
      
      // console.log(array_plot_0.length)
  }
  }

///////////

  for (let i = 0; i < blackArray.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot_h[k].push(blackArray[i])
        // console.log(array_plot)
    }
    }
  
    if ((blackArray[i].position.x <=(190*s_x)) && (blackArray[i].position.x >=((150)*s_x)&& (blackArray[i].show ==1))){
       
        
      array_plot_h_0.push(blackArray[i])
      
      // console.log(array_plot_0.length)
  }
  }

  // blackArray_h

  for (let i = 0; i < blackArray_h.length; i++) {


    for (let k = 0; k<point_count; k++){
      if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) ){
       
        
        array_plot_h[k].push(blackArray_h[i])
        // console.log(array_plot)
    }
    }
  
    if ((blackArray_h[i].position.x <=(190*s_x)) && (blackArray_h[i].position.x >=((150)*s_x))&&(blackArray_h[i].show ==1)){
       
        
      array_plot_h_0.push(blackArray_h[i])
      
      // console.log(array_plot_0.length)
  }
  }





}


for ( var i = 0; i < point_count; i++ ) {
  array_positive_y[i] = []; 
  array_negative_y[i] = []; 
  array_positive_y_e[i] = []; 
  array_negative_y_e[i] = []; 
  array_positive_y_h[i] = []; 
  array_negative_y_h[i] = []; 

}

array_positive_y_0 = []
array_negative_y_0 = []; 
array_positive_y_0_h = []
array_negative_y_0_h = []; 
array_positive_y_0_e = []
array_negative_y_0_e = []; 


if (switch_1 ==0) {
  for (let i = 0; i < whiteArray.length; i++) {
    if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x>0){
       
        
      array_positive_y_0.push(whiteArray[i])
      // console.log(array_positive_y)
  }
  
  
  if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x<0){
       
        
    array_negative_y_0.push(whiteArray[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x>0){
       
        
        array_positive_y[k].push(whiteArray[i])
        // console.log(array_positive_y)
    }
  
    if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x<0){
       
        
      array_negative_y[k].push(whiteArray[i])
      // console.log("array_negative_y")
  }
    }
  }


  // for (let i = 0; i < whiteArray_e.length; i++) {
  //   if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
  //     array_positive_y_0.push(whiteArray_e[i])
  //     // console.log(array_positive_y)
  // }
  
  
  // if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
  //   array_negative_y_0.push(whiteArray_e[i])
  //   // console.log("array_negative_y")
  // }
  
  //   for (let k = 0; k<point_count; k++){
  //     if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
  //       array_positive_y[k].push(whiteArray_e[i])
  //       // console.log(array_positive_y)
  //   }
  
  //   if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
  //     array_negative_y[k].push(whiteArray_e[i])
  //     // console.log("array_negative_y")
  // }
  //   }
  // }


} else if (switch_1 == 1) {
  for (let i = 0; i < blackArray.length; i++) {
    if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x>0){
       
        
      array_positive_y_0.push(blackArray[i])
      // console.log(array_positive_y)
  }
  
  if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x<0){
       
        
    array_negative_y_0.push(blackArray[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x>0){
       
        
        array_positive_y[k].push(blackArray[i])
        // console.log(array_positive_y)
    }
  
    if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x<0){
       
        
      array_negative_y[k].push(blackArray[i])
      // console.log("array_negative_y")
  }
    }
  }

  // for (let i = 0; i < blackArray_h.length; i++) {
  //   if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x>0){
       
        
  //     array_positive_y_0.push(blackArray_h[i])
  //     // console.log(array_positive_y)
  // }
  
  // if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x<0){
       
        
  //   array_negative_y_0.push(blackArray_h[i])
  //   // console.log("array_negative_y")
  // }
  
  //   for (let k = 0; k<point_count; k++){
  //     if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x>0){
       
        
  //       array_positive_y[k].push(blackArray[i])
  //       // console.log(array_positive_y)
  //   }
  
  //   if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x<0){
       
        
  //     array_negative_y[k].push(blackArray_h[i])
  //     // console.log("array_negative_y")
  // }
  //   }
  // }
} else if (switch_1 == 2) {
  for (let i = 0; i < whiteArray.length; i++) {
    if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x>0){
       
        
      array_positive_y_0_e.push(whiteArray[i])
      // console.log(array_positive_y)
  }
  
  if ((whiteArray[i].position.x <=((190)*s_x) && (whiteArray[i].position.x >=((150)*s_x))) && whiteArray[i].direction.x<0){
       
        
    array_negative_y_0_e.push(whiteArray[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x>0){
       
        
        array_positive_y_e[k].push(whiteArray[i])
        // console.log(array_positive_y)
    }
  
    if ((whiteArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray[i].direction.x<0){
       
        
      array_negative_y_e[k].push(whiteArray[i])
      // console.log("array_negative_y")
  }
    }
  }

  ///
  for (let i = 0; i < whiteArray_e.length; i++) {
    if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
      array_positive_y_0_e.push(whiteArray_e[i])
      // console.log(array_positive_y)
  }
  
  if ((whiteArray_e[i].position.x <=((190)*s_x) && (whiteArray_e[i].position.x >=((150)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
    array_negative_y_0_e.push(whiteArray_e[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x>0){
       
        
        array_positive_y_e[k].push(whiteArray_e[i])
        // console.log(array_positive_y)
    }
  
    if ((whiteArray_e[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (whiteArray_e[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && whiteArray_e[i].direction.x<0){
       
        
      array_negative_y_e[k].push(whiteArray_e[i])
      // console.log("array_negative_y")
  }
    }
  }


  ////
  for (let i = 0; i < blackArray.length; i++) {
    if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x>0){
       
        
      array_positive_y_0_h.push(blackArray[i])
      // console.log(array_positive_y)
  }
  
  if ((blackArray[i].position.x <=((190)*s_x) && (blackArray[i].position.x >=((150)*s_x))) && blackArray[i].direction.x<0){
       
        
    array_negative_y_0_h.push(blackArray[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x>0){
       
        
        array_positive_y_h[k].push(blackArray[i])
        // console.log(array_positive_y)
    }
  
    if ((blackArray[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray[i].direction.x<0){
       
        
      array_negative_y_h[k].push(blackArray[i])
      // console.log("array_negative_y")
  }
    }
  }


  ////
  for (let i = 0; i < blackArray_h.length; i++) {
    if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x>0){
       
        
      array_positive_y_0_h.push(blackArray_h[i])
      // console.log(array_positive_y)
  }
  
  if ((blackArray_h[i].position.x <=((190)*s_x) && (blackArray_h[i].position.x >=((150)*s_x))) && blackArray_h[i].direction.x<0){
       
        
    array_negative_y_0_h.push(blackArray_h[i])
    // console.log("array_negative_y")
  }
  
    for (let k = 0; k<point_count; k++){
      if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x>0){
       
        
        array_positive_y_h[k].push(blackArray_h[i])
        // console.log(array_positive_y)
    }
  
    if ((blackArray_h[i].position.x <=((190+(950-190)/point_count*(k+1))*s_x) && (blackArray_h[i].position.x >=((190+(950-190)/point_count*k)*s_x))) && blackArray_h[i].direction.x<0){
       
        
      array_negative_y_h[k].push(blackArray_h[i])
      // console.log("array_negative_y")
  }
    }
  }
} 




 
}
}

}


blinking = () =>{
  clearInterval(blink);
  interval_blink = 2000;
  blink = setInterval(function(){blinking();}, interval_blink);



}

genBalls = (num) =>{
  clearInterval(run45);
  interval_45 = 4000/g_rate;

  run45 = setInterval(function(){genBalls(1);}, gg_rate);


  // generate *num* balls
  if (sceneCount == 13 || sceneCount == 12 ||  sceneCount ==2||sceneCount ==3 ||sceneCount ==1.5 ){
    // console.log("haha")
    if (time_count>0) {
      whiteArray = [];
      blackArray = [];
    

      recombination_Rate_c = 0;
    
      recombination_Rate = 0;
 

      recombination_Rate_c = 0;

    } else if (time_count==0){
  for (let i=0; i < num; i ++){
    let a = random(200*s_x,930*s_x);
    let b = random((20+385)*s_y,770*s_y);

    appearArray.push(new Appear(a,b,10,0));

    whiteArray.push(new Vehicle(a, b, 10, global_id, 0));
    blackArray.push(new Vehicle(a, b, 10, global_id, 1));
    whiteID.push(global_id);
    blackID.push(global_id);
    global_id += 1;
  }
}
  }


 


}

time_graph = () => {
  if (time_count_graph > 0) {
    time_count_graph-=1;
  }
}

setGeneration = (a) => {
  gg_rate = a

}



add_e= (a) =>{
  //123-133
  // distance_dis = 10-((a-123)/10*8+1)

  d_factor = Math.pow((a-123)/10*5,1/2)
  distance_dis = 10-factor_ca*(d_factor)

  changg = (a-123)/10*(122) 
  electron_add = Math.pow(10,a/10);
  // let mmm = Math.pow(10,((30 / 23)*(a - 110)+110)/10)
  let mmm = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  let nnn = mmm.toExponential(1)
  // document.getElementById("add_e_text").value=nnn
  document.getElementById("add_e_text_2").value=nnn
  time_count = 0;

  appearArray_s1 = [];
  
  reset_scene1()


appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
appearArray_s2 = []
blackArray_h = [];
blackID_h  = [];

 

  if (sceneCount ==3) {
  
    
  
      current_Electron_c = Math.round(electron_add ) 

  e_count = Math.pow(100,((Math.log10(Math.round(electron_add ))-8)/2))/1000

  ///  fraction cal   // n_c delta_ED

  n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
  // let tempe_fraction_e
  tempe_fraction_e = (-1+Math.pow(1+8*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp),1/2))/(4*Math.round(electron_add ) /n_c*Math.exp(45*300/26/temp))

  current_Electron_c = Math.round(electron_add ) *tempe_fraction_e
  // console.log(Math.round(100*tempe_fraction_e)/100)
  fraction_e.push(Math.round(100*tempe_fraction_e)/100)

  fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))

  constant_fermi_final = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
  constant_fermi_final = Math.round(1000*constant_fermi_final)/1000

  //freeze

  nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  let inside = (electron_add*tempe_fraction_e+Math.pow((Math.pow(electron_add*tempe_fraction_e,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

  
  // nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
  //   let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
  //   constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)

 
        // reset_d3bands_3_1() 
        // d3bands_3_1()
///

  for (let i=0; i < e_count; i ++){

    let a = random(170*s_x,930*s_x);
    let b = random((20+385)*s_y,760*s_y);
    appearArray_s1.push(new Appear(a,b,10,4,i));
//id start from 0 ,color 4

    whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
    whiteID_e.push(global_id);
    global_id += 1;
    }
  
  
    ///////hole



      current_Hole_c = Math.round(hole_add) 
      // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
      h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000

      //note_bun

      ///  fraction cal   // n_c delta_ED

 n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
 let tempe_fraction_h
 tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))

 fraction_h.push(Math.round(100*tempe_fraction_h)/100)

 fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
 // console.log(fraction_e_count)
 // console.log(tempe_fraction_e+"donor")
///

     for (let i=0; i < h_count; i ++){

      let a = random(200*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);
    
      appearArray_s1.push(new Appear(a,b,10,5,i));
  
      blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
      blackID_h.push(global_id);
      global_id += 1;
      }
    
  

  }

  
       
   if (sceneCount ==22 ) {
    if (electron_add - hole_add >=0) {
      //more e
      
      current_Electron_c = Math.round(electron_add ) - Math.round(hole_add);
      // e_count  = Math.round(Math.log10(current_Electron_c)); 
  
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
  
      
      constant_fermi = 0.026*constant_temperature/300*Math.log((electron_add+Math.pow(Math.pow(electron_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026*constant_temperature/300
     
      constant_fermi = Math.round(1000*constant_fermi)/1000

      //mark me
  
      nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (electron_add+Math.pow((Math.pow(electron_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_positive = (0.026/300)*temp * Math.log(inside)+(-0.28)*(0.026/300*temp)
 
        reset_d3bands_2() 
        d3bands_2()

      for (let i=0; i < e_count; i ++){
  
   
  
        let a = random(200*s_x,900*s_x);
        let b = random(30*s_y,730*s_y);  
        appearArray_s1.push(new Appear(a,b,10,4));
    
        whiteArray_e.push(new Vehicle(a, b, 10, global_id, 0));
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
  
  
    } 
   }
   
}


add_h= (a) =>{
  // distance_dis = 10-((a-123)/10*8+1)

 


 

  count_pn_num = 0

  d_factor = Math.pow((a-123)/10*5,1/2)
  distance_dis = 10-factor_ca*(d_factor)
  
  changg = (a-123)/10*(122) 

  hole_add = Math.pow(10,a/10)
  electron_add = Math.pow(10,a/10)

  // console.log(hole_add)
  let mm = Math.pow(10,((10 / 10)*(a - 124)+124)/10)*5
  let pp = mm.toExponential(1)
  document.getElementById("add_h_text").value=pp
  hole_add_new = mm

  time_count = 0;
  appearArray_s1 = [];

  reset_scene1()
  appearArray_s1 = []
whiteArray_e = [];
whiteID_e  = [];

appearArray_s1 = []
appearArray_s2 = []
blackArray_h = [];
blackID_h  = [];
random_botz =[]
  // if (sceneCount ==2) {
  //   //add donor reset
  //   time_count = 3;
  //   whiteArray = [];
  //   blackArray = [];
    
  //   current_Electron_c = 0;
  //   current_Hole_c = 0;
  //   recombination_Rate_c = 0;
    
  //   generation_Rate_c = 0
  //   recombination_Rate = 0;
  //   current_Electron = 0;
  //   current_Hole = 0;
    
  //   recombination_Rate_c = 0;
    
    
  //   appearArray_s1 = []
  //   whiteArray_e = [];
  //   whiteID_e  = [];
    
  //   appearArray_s1 = []
  //   blackArray_h = [];
  //   blackID_h  = [];
    
  //     } 
  

  // appearArray_s1 = []
  //   whiteArray_e = [];
  //   whiteID_e  = [];
  //   appearArray_s1 = []
  //   blackArray_h = [];
  //   blackID_h  = [];


  if (sceneCount ==2) {
   
  
 
    current_Electron_c = Math.round(electron_add ) 
    e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
  

    
    ///  fraction cal   // n_c delta_ED
  
    n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
    // let tempe_fraction_e
    tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
  
    fraction_e.push(Math.round(100*tempe_fraction_e)/100)
  
    fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
    // console.log(fraction_e_count)
    // console.log(tempe_fraction_e+"donor")
  ///
  
    for (let i=0; i < e_count; i ++){
  
      let a = random(200*s_x,900*s_x);
      let b = random(30*s_y,730*s_y);  
      appearArray_s1.push(new Appear(a,b,10,4,i));
  //id start from 0 ,color 4
  
      whiteArray_e.push(new Vehicle(a, b, 10, "e", 0));
      whiteID_e.push(global_id);
      global_id += 1;
      }
    
    
      ///////hole
  
  
  
        current_Hole_c = Math.round(hole_add) 
        // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
        h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
  
        //note_bun
  
        ///  fraction cal   // n_c delta_ED
  
   n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
   let tempe_fraction_h
   tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
  
   fraction_h.push(Math.round(100*tempe_fraction_h)/100)
  
   fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
   // console.log(fraction_e_count)
   // console.log(tempe_fraction_e+"donor")
  ///
  
       for (let i=0; i < h_count; i ++){
  
        let a = random(170*s_x,930*s_x);
        let b = random((20+385)*s_y,760*s_y);
      
        appearArray_s1.push(new Appear(a,b,10,5,i));
    
        blackArray_h.push(new Vehicle(a, b, 10, "h", 1));
        blackID_h.push(global_id);
        global_id += 1;
        }
      
        // reset_scene1();
  
    }

//add ---- hhhh left
    if (sceneCount ==1.5) {
   
  
 
      current_Electron_c = Math.round(electron_add ) 
      e_count = Math.pow(100,((Math.log10(current_Electron_c)-8)/2))/1000
    
      ///  fraction cal   // n_c delta_ED


      while(random_botz.length < e_count){
        //v
     let aa = random(1,800)/100*Math.pow(10,6)
     //p
     let bb = random(0,400)/100*Math.pow(10,6)
     let y = 4 * Math.PI * Math.pow(1.03*Math.pow(10,-10), 3/2) * Math.pow(Math.pow(10,4)*aa, 2) * Math.exp(-1.3*Math.pow(10, -21)*Math.pow(aa*Math.pow(10,4),2)) 
    //  console.log("?")
    //  console.log(y)
     if (bb<y){
       random_botz.push(Math.round(aa/Math.pow(10,6)*2)/4)
     }
     }
    
      n_c = 2.86*Math.pow(10,19)*Math.pow(temp/300,3/2)
      // let tempe_fraction_e
      tempe_fraction_e = (-1+Math.pow(1+8*current_Electron_c/n_c*Math.exp(45*300/26/temp),1/2))/(4*current_Electron_c/n_c*Math.exp(45*300/26/temp))
    
      fraction_e.push(Math.round(100*tempe_fraction_e)/100)
    
      fraction_e_count = Math.round(e_count*(1-fraction_e[fraction_e.length-1]))
      // console.log(fraction_e_count)
      // console.log(tempe_fraction_e+"donor")
    ///
    
      for (let i=0; i < e_count; i ++){
    
        let a = random(550*s_x,930*s_x);
        // let b = random(30*s_y,730*s_y);  
        let b = random((20+385)*s_y,760*s_y);
        appearArray_s1.push(new Appear(a,b,10,4,i));
    //id start from 0 ,color 4
        var vehicle = new Vehicle(a, b, 10, "e", 0)
        vehicle.botz = random_botz[i]
        whiteArray_e.push(vehicle);
        whiteID_e.push(global_id);
        global_id += 1;
        }
      
      
        ///////hole
    
    
    
          current_Hole_c = Math.round(hole_add) 
          // h_count  = (100-0.01)/4*Math.log10(current_Hole_c)+0.01-(100-0.01)*8/4; 
          h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
          //note_bun
    
          ///  fraction cal   // n_c delta_ED
    
     n_v = 2.66*Math.pow(10,19)*Math.pow(temp/300,3/2)
     let tempe_fraction_h
     tempe_fraction_h = (-1+Math.pow(1+8*current_Hole_c/n_v*Math.exp(45*300/26/temp),1/2))/(4*current_Hole_c/n_v*Math.exp(45*300/26/temp))
    
     fraction_h.push(Math.round(100*tempe_fraction_h)/100)
    
     fraction_h_count = Math.round(e_count*(1-fraction_h[fraction_h.length-1]))
     // console.log(fraction_e_count)
     // console.log(tempe_fraction_e+"donor")
    ///
    
         for (let i=0; i < h_count; i ++){
    
          let a = random(170*s_x,550*s_x);
          let b = random((20+385)*s_y,760*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5,i));

          var vehicle2 = new Vehicle(a, b, 10, "h", 1)
          vehicle2.botz = random_botz[i]
          blackArray_h.push(vehicle2);
          blackID_h.push(global_id);
          global_id += 1;
          }
        
          // reset_scene1();
    
      }
  
         
     
    if (sceneCount == 33) {
     
        // more h
        current_Hole_c = Math.round(hole_add) - Math.round(electron_add);
        // h_count  = Math.round(Math.log10(current_Hole_c)); 
    
        h_count = Math.pow(100,((Math.log10(current_Hole_c)-8)/2))/1000
    
        // constant_fermi_negative = -0.026*constant_temperature/300*Math.log((hole_add+Math.pow(Math.pow(hole_add,2)+  Math.pow(constant_temperature/300*1.06*Math.pow(10,10),2),1/2))/(2*constant_temperature/300*1.06*Math.pow(10,10)))-0.28*0.026
        // constant_fermi_negative = Math.round(1000*constant_fermi_negative)/1000

        nn = 4.6*Math.pow(10,15)*Math.pow(temp,1.5)*Math.exp(-1.12/(2*0.026/300*temp)) //new wrong
    let inside = (hole_add+Math.pow((Math.pow(hole_add,2)+4*Math.pow(nn,2)),1/2))/(2*nn)
    constant_fermi_negative = -((0.026/300)*temp * Math.log(inside))+((-0.28)*(0.026/300*temp))
 
          reset_d3bands_3() 
          d3bands_3()

    
        for (let i=0; i < h_count; i ++){
    
          let a = random(200*s_x,900*s_x);
          let b = random(30*s_y,730*s_y);
        
          appearArray_s1.push(new Appear(a,b,10,5));
      
          blackArray_h.push(new Vehicle(a, b, 10, global_id, 1));
          blackID_h.push(global_id);
          global_id += 1;
          }
        
    
      
    }
    
    
    
    
  


 
  

    

}


e_field= (a) => {
  e_field_c = a/10

  document.getElementById("e_f_text").value=a
}

e_field_r= (a) => {
  rate_e = a*0.1

  // e_field_c =a


  // if (count_pn_num <rect_density && hole_add !=0 ) {
  //   // count_pn_num +=0.01
  //   e_field_c +=0.01
  // }
  // document.getElementById("e_f_text").value=a
}



resetGraph= () => {

  // settings.nucleus = document.querySelector('#nuclei-freeze').checked;

  // settings.nn = document.querySelector('#nn').checked;
  // settings.kk = document.querySelector('#kk').checked;

  setTemperature(constant_temperature)

  if(real_graph == 0){
    //on
    real_graph = 1;
    settings.nn = document.querySelector('#nn').checked;
    console.log("real")


   
  }
  else{
    real_graph = 0;
  

  
  }


  // array_graph_con=[]

  // array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}


resetGraph_live = () => {

  // settings.nucleus = document.querySelector('#nuclei-freeze').checked;

  // settings.nn = document.querySelector('#nn').checked;
  // settings.kk = document.querySelector('#kk').checked;

  // setTemperature(constant_temperature)

  if(real_graph_live == 0){
    //on
    real_graph_live = 1;
    nn_live.checked = true;
   


   
  }
  else{
    real_graph_live = 0;
    nn_live.checked = false;

  

  
  }


  // switch_recombine= () => { 
  //   if (recombine ==0) {
  //     //off
  //     recombine = 1
  //     switch_re.checked = true
  //   } else {
  //   recombine = 0
  //   switch_re.checked = false 
  // }
  // }


  // array_graph_con=[]

  // array_graph_con.push(new Concentration(scattering_velocity,scattering_count))

}


