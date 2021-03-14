//*  Check upper and lower case

function checkeralphabet() {
    var alphabets=prompt("Enter Alphabets");
    if (alphabets>="A"&& alphabets<="Z"){
        console.log("you enter uppercase alphabets")
    }
    else if(alphabets>="a"&& alphabets<="z"){
        console.log("you enter lowercase alphabets")
    }
    else{
        alert("Please enter a valid aphabets")
    }
}


//* Week NUmber WEEk days


function weeknumber() {
    const weeknumber=prompt("enter a Day number")
   switch (weeknumber) {
        case "1":
           alert("Monday")
           break;
        case "2":
            alert("Tuesday")
            break;
        case "3":
            alert("Wednesday")
            break;
        case "4":
            alert("Thursday")
            break;
        case "5":
            alert("Friday")
            break;
        case "6":
            alert("Saturday")
            break;
        case "7":
            alert("Sunday")
            break;
       default:
           alert("enter a valid day number")
           break;
   }
}



//* Month number and its days

function month() {
    var month=prompt("enter month number")
    switch (month) {
        case "1":
            alert("There are 31 days in January")
            break;
        case "2":
            alert("There are 28 days in February")
            break;
        case "3":
            alert("There are 31 days in March")
            break;
        case "4":
            alert("There are 30 days in April")
            break;
        case "5":
            alert("There are 31 days in May")
            break;
        case "6":
            alert("There are 30 days in June")
            break;
        case "7":
            alert("There are 31 days in July")
            break;
        case "8":
            alert("There are 31 days in August")
            break;
        case "9":
            alert("There are 30 days in September")
            break;
        case "10":
            alert("There are 31 days in October")
            break;
        case "11":
            alert("There are 30 days in November")
            break;
        case "12":
            alert("There are 31 days in December")
            break;
    
        default:
            alert("Please enter a valid month number ")
            break;
    }
}


//*  Note counter


function notecounter(params) {
   var amount=parseInt(prompt("Enter amount"))
    var note500,note100,note50,note20,note10,note5,note2,note1;
    note500=note100=note50=note20=note10=note5=note2=note1=0;
if(amount >= 500)
{
    note500 = amount/500;
    amount -= note500 * 500;
}
if(amount >= 100)
{
    note100 = amount/100;
    amount -= note100 * 100;
}
if(amount >= 50)
{
    note50 = amount/50;
    amount -= note50 * 50;
}
if(amount >= 20)
{
    note20 = amount/20;
    amount -= note20 * 20;
}
if(amount >= 10)
{
    note10 = amount/10;
    amount -= note10 * 10;
}
if(amount >= 5)
{
    note5 = amount/5;
    amount -= note5 * 5;
}
if(amount >= 2)
{
    note2 = amount /2;
    amount -= note2 * 2;
}
if(amount >= 1)
{
    note1 = amount;
}

/* Print required notes */
console.log("Total number of notes = \n");
console.log("500=\n", note500);
console.log("100=\n", note100);
console.log("50=\n", note50);
console.log("20=\n", note20);
console.log("10=\n", note10);
console.log("5=\n", note5);
console.log("2=\n", note2);
console.log("1=\n", note1);

}

//*angle of trangle total


function angles() {
    var agree=parseInt(prompt("enter a valid angle of triangle"))
    if(agree==180){
        console.log("you enter a valid triangle")
    }
    else{
        console.log("you enter invalid angle of traingle")
    }
}





//* angle of triangle




function calculate_angle() {
     var agree=confirm("you want to calculate a valid angle of a triangle then click OK if not Then click Cancel")
      if(agree==true){
          var a=parseInt(prompt("enter angle A"))
          var b=parseInt(prompt("enter angle B"))
          var c=parseInt(prompt("enter angle C"))
          total_angle=a+b+c;
          if(total_angle==180){
              console.log("you enter valid angles of triangle=",total_angle)
          }
          else{
              console.log("you enter invalid angles of triangle",total_angle + " the sum of angles of triangle will be 180")
          }
      }
      else{
          console.log("thanks for you response")
      }

}



//* check isoscles,equilateral,scelane traingle



function triangles() {
    var angles=parseInt(prompt("enter total angles to check the triangle is isosceles,equilateral,scelene"))
    if(angles==180){
        console.log("you enter a valid isosceles,equilateral,scelene triangle angle")
    }
    else{
        console.log("you enter invalid angle of traingles")
    }
}



//*all root of quadratic angles



function quadraticAngle() {
    
}




//* profit and loss


function profitLoss(params) {
    var manufacturePrize=200
const salesPrize=180
if(manufacturePrize>=200){
    console.log("gain profit");
}
else{
    console.log("gain loss",salesPrize);
}
}



//*occurance of character


function Occchr() {
    var b=prompt("enter any number/alphabet").toLowerCase
    var cs=prompt("enter character you wants to check")
    for(i=0;i<=b.length;i++){
        if (b=cs) {
            console.log("occure")
        }
        else{
            console.log("not occur");
        }
    }
}



//* count occurance

function countOccure(params) {
    var count=0
    var ch=prompt("enter any character").split()
    for (let index = 0; index < ch.length; index++) {
        
        if (ch>="A" && ch<="Z" || ch>="a" && ch<="z" ) {
           count++
        }
    }
    console.log(count)
}



//*  highest frequency



function highestfrequency(params) {
    var count=0
    var str=prompt("enter string")
    var a=prompt("enter chracter to search highest frequency")
    
   
}

//*lowest frequency



