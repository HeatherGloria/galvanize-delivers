$(document).ready(function(){

  var currentSubTotal = 0;
  function subTotal() {
  var numValue = Number($(event.target).parent().parent().find("p").text().replace(/[^0-9\.]+/g,""))
  let sum = currentSubTotal += numValue
  return sum.toFixed(2);
  }


  $('.button').click( function(){

    var title = $(event.target).parent().parent().find(".title").text()
    // console.log(title);
    var price =$(event.target).parent().parent().find("p").text()

    var name = $("<td class='left-align'>"+title+"</td>")
    var number =$("<td class='right-align'>"+price+"</td>")
    var row =$("<tr>")
    row.append(name)
    row.append(number)
    $("#tbody").append(row)




      let subtotal =$("#subtotal").text(subTotal())
      let tax =   $("#tax").text((subTotal()*0.04).toFixed(2))
      let total = (parseInt(subtotal.text())+parseInt(tax.text()))
      $("#total").text(total)
    })


})
