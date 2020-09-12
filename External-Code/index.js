
let clickedValue = [];
let clickedValue2 = [];
let count = 0;
let count2 = 0;
$("#submitButton").click(function(){

    $("#table1").removeClass("visibility")

}

)

$(".table1Img").click(function(){
  
  
    let name = this.name
  $(this).addClass("select");

    clickedValue.push(name);
    
 
    $("#imgSubmit").click(function(){
        count++;
        console.log(count)
        if(clickedValue.includes ("car1"&&"car2"&& "car3")){
            $("#table1").addClass("visibility");
            $("i").removeClass("visibility");
            $("i").animate({
               fontSize:"20px",
              
            }),2000
            if (count===3){
                clickedValue = [];
                console.log("car1")
            }
            
            
        }
        
        else {
            
            $("#table1").animate({
               opacity:0,
              
            }),4000

            $("#table2").removeClass("visibility")
           
           
            
        }
    })
    
});


$(".table2Img").click(function(){
    let name1 = this.name
    $(this).addClass("select");
     
      clickedValue2.push(name1);


      $("#imgSubmit2").click(function(){
        count2++;
        console.log(count2)
        if(clickedValue2.includes ("car4"&&"car5"&& "car6")){
            $("#table2").addClass("visibility")
            $("i").removeClass("visibility");
            $("i").animate({
                fontSize:"20px",
               
             }),2000
            if (count2===3){
                clickedValue = [];
                console.log("car1")
            }
            
            
        }
        
        else {
            
            $("#table2").animate({
               opacity:0,
              
            }),4000
            $("#table1").animate({
                opacity:1,
               
             }),4000
            
           
           
            
        }
    })
      
})