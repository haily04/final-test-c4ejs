// Bài 1

function kiemTraSNT (n) {
  var output = true;

  if (n<2) {
    output = false;
  }
  else {
    for (var i=2; i<n-1; i++) {
      if (n%i==0){
        output = false;
        break;
      }
  }
  return output
} }

function tongSNT (a,b) {
  var sum = 0;
  if (a < b) {
  for (var i =a;i <= b ;i++)
    {
      if (kiemTraSNT(i)) { 
        sum += i;
      }
    }
    return sum
  }
}

// alert('Kết quả là',tongSNT(a,b))
console.log(tongSNT(a,b));

function getRes () {
  let a = document.getElementById('num-a').value;
  let b = document.getElementById('num-b').value;
  document.getElementById("res").innerHTML = tongSNT(a,b);
  // document.write("Kết quả là: ", tongSNT(a,b));
}



// Bài 2

// function numberOneTriangle(n) {
//   var string = "";
//   for (var i=1;i<=n;i++) {
//   for (var j=0;j<i;j++) {
//       string += "*"
//      }
//     string += "\n"
//   }
//   return string
// }

// console.log(numberOneTriangle(4));