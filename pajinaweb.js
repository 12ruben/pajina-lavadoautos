



$(document).ready(function() {






      $("#basic-form").validate({
            rules:{
      
      name: {
            required: true,
            minlength:3
      },
      
      
      age:{
            required: true,
            number: true,
            min:18
      },
      
      
      email: {
            required: true,
            email: true,
      
      },
      
      weight: {
            required:{
            depends: function(elem){
                  return $("#age").val()>50 // si la persona es mayor a 50 años debe ingresar su peso
            }
           },
      
      
       number: true,
       min:0
         }
            },
      
      messages:{
            name:{
                  minlength:" Name should be at lests 3 characters"
            },
      
      
      age:{
      
         required: "please enter your age",
         number: " please enter your age as a numerical value",
         min: "you must be at least 18 years old"
      },
      
      
      
      email:{
         email:" the email should be in the format: abc@domain.tld"
      },
      
      weight:{
      
            required:" people with age over 50 have to enter their weigth",
            number: " please enter your weigth as a numerical value"
          }
      
        }
      
      });
      
      
      });