// Bài 2

function numberOneTriangle(n) {
  var string = "";
  for (var i=1;i<=n;i++) {
  for (var j=0;j<i;j++) {
      string += "*"
     }
    string += "\n"
  }
  return string
}




function getRes () {
  let n = document.getElementById('n').value;
  // let output = numberOneTriangle(n)
  console.log("Hình tam giác của bạn đây:");
  console.log(numberOneTriangle(n));


  // document.getElementById("res").innerHTML = <h1>numberOneTriangle(n)</h1>;
  // document.write("Kết quả là: ",numberOneTriangle(n));
  // alert("Kết quả là: ", numberOneTriangle(n));
}