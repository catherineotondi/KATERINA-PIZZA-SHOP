$(document).ready(function () {

    
    // hide the following classes in the DOM
    $("table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".additional-info h4").hide();


    // $("input[type='submit']").on("click", function(event) {
    //     event.preventDefault();
        
        $("input[type='submit']").on("click",function () {
            var sizeOfPizza = $("input[name='size']:checked").val();
            var toppingsOfPizza = $("input[name='toppings']:checked").val(); 
            var crustOfPizza = $("input[name='crust']:checked").val(); 
            var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            var order = 1;
            var grandTotal = 0;
    
            $("table").show();
            $(".additional-buttons").show();
            $("input[type='submit']").hide();
    
            //displays the table data values.
            $("#size").html(sizeOfPizza);
            $("#toppings").html(toppingsOfPizza);
            $("#crust").html( crustOfPizza);
            $("#total").html(total);
    
            function Pizza(size, toppings, crust, total, orderNo) {
                this.size = size;
                this.toppings = toppings;
                this.crust = crust;
                this.total = total;
                this.orderNo = orderNo;
            }
             $('.btn.add-pizza').on("click",function (){
                var sizeOfPizza = $("input[name='size']:checked").val();
                var toppingsOfPizza = $("input[name='toppings']:checked").val();
                var crustOfPizza = $("input[name='crust']:checked").val();
                var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
                order = order + 1;
                grandTotal = grandTotal + total;
    
          
                var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);
          
                var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + newPizza.size + '</td><td id="toppings">' + newPizza.toppings + '</td><td id="crust">'+ newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'
          
                $("#pizza").append(newRow);
              });
          
              $(".btn.check-out").click(function() {
                $(".btn.add-pizza").hide();
                $(".btn.check-out").hide();
                $(".additional-info").show();
                $(".btn.yes").show();
                $(".btn.no").show();
                $(".additional-info .location").hide();
                grandTotal = grandTotal + total;
          
                $(".additional-info h3 span").html(grandTotal);
              });
          
              $(".btn.yes").click(function() {
                $(".additional-info h5").hide();
                $(".btn.yes").hide();
                $(".btn.no").hide();
                $(".additional-info .location").show();
                $(".additional-info h3 span").html(grandTotal + 400);
              });
          
              $(".btn.no").click(function() {
                $(".additional-info h5").hide();
                $(".btn.yes").hide();
                $(".btn.no").hide();
                  $(".additional-info .location").show();
                  $(".btn.complete").hide();
                  $("input[type=text]").hide();

              });
          
              $(".btn.complete").click(function() {
                var location = $(".additional-info .location input").val();
                $(".additional-info h4").show();
                $(".additional-info .location").hide();
                $(".additional-info h4 span").html(location);
              });
          
        });
    // });
     
    
   
 });