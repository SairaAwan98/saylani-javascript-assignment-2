// ============== chapter 21 to 25 =================
// task 1
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName+" "+lastName;
alert("hello welcome "+fullName);

// task 2
var mobDetails = prompt("enter details about yuor phone");
var len = mobDetails.length;
alert(mobDetails+"\n"+" length of your string is "+len);

//task 3
var st = "pakistan";
var find = st.indexOf("n");
alert(" index of n is "+find);

//task 4
var st = "Hello world";
var find = st.lastIndexOf("l");
alert(" last index of l is "+find);

//task 5

var st = "pakistan";
var find = st.charAt(3);
alert(" character at 3  is "+find);

//task 6
var firstName = prompt("enter your first name");
var lastName = prompt("enter your last name");
var fullName = firstName.concat(lastName);
alert("hello welcome "+fullName);

//task 7
var city = " karachi";
var replace = city.replace("karachi","islamabad");
document.write("after replacement string is "+replace);

//task 8
var city = "Ali and Sami are best friends. They play cricket and football together";
var replace = city.split("and").join("&");
document.write("after replacement :   "+replace);

//task 9
var a = "472";
document.write(parseInt("472"));

//task 10
var string1 = prompt("enter string");
var string2 = string1.toLowerCase();
document.write(string2);

//task 11
var string1 = prompt("enter string");
var string2 = string1.toUpperCase();
document.write(string2);

//task 12
var num1 = 35.36;
var num2= num1.toString();
document.write(num2);

//task 13
var nam = prompt("enter your name ");
for(var i = 0; i<nam.length;i++){
    b=nam.charCodeAt(nam[i]);
    if (b === 33 || b === 44 || b===46 || b===64){
        alert("enter correct name without characters");
    }
    else{
        alert("name is correct");
    }

}

//task 14
var fruit = ["apple","mango","orange","grapes"];
var search = prompt("enter the fruit name");
var search2= search.toLowerCase();
for(var i=0;i<fruit.length;i++){
    if (search2===fruit[i]){
        alert("found");
        break;
    }
    
    else{
        alert("not found");
    }
}

//===================== chapter 26 to 30 =====================
//task 1
var a = +prompt("enter a positive integer");
var b= Math.round(a);
var c= Math.floor(a);
var d = Math.ceil(a);
document.write("number : "+a);
document.write(" round off :"+b);
document.write(" floor function "+c);
document.write(" ceil function "+d);

//task 2
var a = +prompt("enter a positive integer");
var b= Math.round(a);
var c= Math.floor(a);
var d = Math.ceil(a);
document.write("number : "+a);
document.write(" round off :"+b);
document.write(" floor function "+c);
document.write(" ceil function "+d);

//task 3
var aa = +prompt("enter any number");
var bb = Math.abs(aa);
document.write(bb);

//task 4
var a = Math.random();
document.write(a);
document.write(a);

//task 5
document.write("\n");
var a = Math.random();
var b = +prompt("enter number");
if(b===a){
    alert(" congrats !");
}
else{
    alert("failed");
}


// ==================== chapter 31 to 34 =================
//task 1
var date = new Date();
console.log(date);

//task 2
var date = new Date();
console.log(date);
var months = ["January", "February", "march", "april","may", "june","july","august","september","october","november","december"]
var month = date.getMonth();
console.log("month is :"+months[month]);

//task 3
var date = new Date();
console.log(date);
var con = date.toString();
var day = con.slice(0,3);
console.log(day);

//task 4
var date = new Date();
console.log(date);
var td = date.getDate();
if(td <= 15){
    console.log("firs fifteen days of month");
}
else{
    console.log(" last 15 days of month");
}

//task 5
var date = new Date();
console.log(date);
var tm = date.getTime();
var ts = (tm / 1000) / 60 ;
console.log(" time in minutes"+ts);

//====================== chapter 34 to 38 ==========================
//task 1
function myDate(){
    var date = new Date();
    return date;
}
console.log(date);

//task 2
function greet(fname,lname){
    return "hello "+fname+" "+lname;
}
console.log(greet("saira","awan"));

//task 3
function add(){
   var a =+prompt("enter first number");
   var b =+prompt("enteer second number");
   var c=a+b;
   return c
}
console.log(add());

//task 4
function calculator(n1,operator,n2){
   if(operator==="+"){return n1+n2}
   else if(operator==="-"){return n1-n2}
   else if(operator === "*"){return n1*n2}
   else if(operator ==="/"){return n1/n2}
   else if(operator ==="%"){return n1%n2}
   else{alert("enter correect operartor")}
}
console.log(calculator(4,"%",2));

//task 5
function square(a){
    return a*a;
}
var b=+prompt("enter number to find square ");
console.log(square(b));

//task 6
var b=1;
function factorial(a){
    
    for(var i = 1;i<=a;i++){
        
        b= b*i;
        
    }
    return b;
}
var d=+prompt("enter number to find factorial ");
console.log(factorial(d));

//task 7
function counting(start,end){
    for(var i=start;i<=end;i++){
        console.log(i);
    }
}
console.log(counting(1,5));

//task 8
function calcCircumference(r){
    return 2*3.14*r;
}
console.log("circumference of circle is :"+calcCircumference(4));

function calcArea(r){
    return 3.14*(r*r);
}
console.log("area of circle is :"+calcArea(4));