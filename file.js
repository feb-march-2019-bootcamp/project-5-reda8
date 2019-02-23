
// Note: again it only only work in console by me! ,please if it does not work, run my codes in console!

document.getElementById("calculate").addEventListener("click", function(){

    let billAmount = document.getElementById("bill").value;
    let serviceOption = document.getElementById("service").value;
    let numOfPeople = document.getElementById("people").value;
  
    if (billAmount === "" || serviceOption == 0) {
      alert("Please enter values");
      return true;
  }
    if (numOfPeople === "" || numOfPeople == 0) {
      document.getElementById("small").style.display = "none";
      alert("Please enter values");
      return true;
    } else {
      document.getElementById("small").style.display = "block";
    }
  
    let total = (billAmount * serviceOption) / numOfPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
  
    document.getElementById("total").style.display = "block";
    document.getElementById("amount").innerHTML = total;
    
  });
  
  document.getElementById("total").style.display = "none";
  document.getElementById("small").style.display = "none";
  
  
  
  