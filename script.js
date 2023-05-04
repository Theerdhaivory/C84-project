flavours_array = [];

function submit()
{

      var flavour_1= document.getElementById("flavor_input_1").value;
  
     

      flavours_array.push(flavour_1);
   

      console.log(flavours_array);

      document.getElementById("display_name").innerHTML= flavours_array;
}