/*
    !Contents (Search Line : CTRL + G)
    ? คำสั่งสำหรับแสดงผลข้อมูล JavaScript Output                                   (40)
    ? JavaScript Statements                                                    (46)
    ? การสร้างตัวแปร JavaScript Variables                                         (49)
    ? การเชื่อมต่อ String หรือ ตัวแปล Concatenate                                   (55)
    ? เครื่องหมายการคำนวณทางคณิตศาสตร์ Javascript Operators                        (61)
    ? การสร้าง Function และการใช้งาน                                              (140)
    ? เปลี่ยนสี background ด้วย javascript                                          (152)
    ? สร้างโปรแกรมแปลง อุณภูมิ                                                      (165)
    ? รู้จักกับ JavaScript Objects                                                   (182)
    ? รู้จักกับ JavaScript Events                                                    (206)
    ? ทำงานกับข้อความ String                                                      (211)
    ? รู้จักกับ Array                                                                (219)
    ? Array Method, pop, push, shift, unshift                                    (230)
    ? เพิ่มเติมจากอันบน Array Method, splice                                         (256)
    ? การเอาข้อมูลใน Array2ตัวมารวมกัน โดยใช้ Array Method, slice                      (267)
    ? ชนิดของข้อมูลใน JavaScript - 7 Data Types                                     (284)
    ? การใช้งาน Typeof Operator (เอามาเช็ค Data Type)                                (295)
    ? รู้จักกับ JavaScript Math Object                                                (299)
    ? รู้จักกับเงื่อนไข JavaScript If else                                              (312)
    ? รู้จักกับ JavaScript Switch Case                                                (322)
    ? รู้จักกับ JavaScript For Loop                                                   (372)        
    ? JavaScript For/In Loop (Loop ผ่าน Properties ของ Object)                     (388)
    ? JavaScript For/In Loop (Loop ผ่าน ค่า ของ Object)                             (403)
    ? JavaScript Type Conversions (การแปลงชนิดข้อมูล)                                (419)
    ? JavaScript Scope การกำหนดความสามารถในการเข้าถึงตัวแปล หรือการมองเห็นของตัวแปล      (449)
    ? JavaScript Hoisting การย้ายตัวแปรที่ประกาศไว้ด้านล่าง เอาไปไว้ด้านบนสุดของ Scope       (465)
    ? JavaScript Strict Mode โหมดเข้มงวด                                            (474)
    ? What is " This " keyword                                                     (483)
    ? Var & let & Const - [ ES6 ]                                                  (501)
    ? รู้จักกับ Template Literals - [ ES6 ]                                            (553)
    ? Arrow Function - [ ES6 ]                                                     (565)
    ? JavaScript Class - [ ES6 ]                                                   (588)
    ? Class Inheritace                                                             (607)
    ? JavaScript Style Guide                                                       (628)
    ? JavaScript Reserved Words                                                    (652)

*/
////////////////////////// . คำสั่งสำหรับแสดงผลข้อมูล JavaScript Output
console.log("Hello World");
document.getElementById("text").innerHTML = "BILLMURRAY";
document.write("BILL");
// window.alert("Hi Billmurrayy");

////////////////////////// . JavaScript Statements
console.log("Hello World"); //?นับเป็น 1 Statements , จะใส่ " ; " ไว้ท้าย Statements

//////////////////////////  . การสร้างตัวแปร JavaScript Variables
var x = 5;
var y = 6;
var z = x + y;
console.log(z); //- 11

////////////////////////// .  การเชื่อมต่อ String หรือ ตัวแปล Concatenate
var Firstname = "Nitipat";
var Lastname = "Kijsumraj";
var Fullname = Firstname + " " + Lastname;
console.log(Fullname); //- Nitipat Kijsumraj

////////////////////////// . เครื่องหมายการคำนวณทางคณิตศาสตร์ Javascript Operators
//? Operators
    /*
        * operators คือเครื่องหมายงๆที่เอาไว้ใช้ทำการคำนวนทางคผิตศาสตร์หรือตรรกะ
        * ท่อนขึ้นเรื่อง operators ควรเข้าใจชนิตพื้นฐานของตัวแปล

        * number (ตัวเลข) เซ่น 10, 5.555
        * string (ตัวอักษร) เช่น "abcd", "5.555" - สังเกตว่มี " " ครอบตัวแปลที่เป็นสตริงเสมอ
        * boolean (ค่าความเป็นจริง) คือ true หรือ false
    */
//? Arithmetic Operators
    /*
        * + บวก                  console. log(4 + 2); 1/ ได้ 6
        * - ลบ                   console,log(4 - 2); 1/ ได้ 2
        * * คูณ                   console log(4 * 2); // ได้ 8
        * / หาร                   console, log(4 / 2); // ได้ 2
        * ** ยกกำลัง              console.log(4 ** 2); 11 ได้ 16
        * % โมดูลัส หาค่าเศษจากหาร  console, log(10 % 3); 1/ ได้ 1
        * ++ +1 กับตัวแปรที่ถูกดำเนินการ
        *       เขียนได้สองแบบคือ x++ และ ++X
        *       x++ จะให้คำ X ก่อนบวก
        *       ++x จะให้ค่า X หลังบวก
        
        *       var x = 10;
        *       console. log( X++ ); // ได้ 10
        *       console,log( x ); // ได้ 11
        *       var y = 10;
        *       console.log( ++y ); // ได้ 11
        *       console. log( y ); // ได้ 11
        * -- -1 กับตัวแปรที่ถูกดำเนินการ
        * เขียนได้สองแบบคือ X-- และ --X กฎเกณฑ์เหมือน ++
    */
// ? Comparison operators
/*
        * == และ ===            เท่ากับ
        * != และ !==            ไม่เท่ากับ
        * >                     มากกว่า
        * >==                   มากกว่าหรือเท่ากับ
        * <                     น้อยกว่า
        * <==                   น้อยกว่าหรือ เท่ากับ
        
        * ตัวอย่าง:
        *   console.log( 1 === 1 ); // ได้ true
        *   console,log( 2 <= 1 ); // ไต้ false
        
*/
// ? Assignment Operators
/*
        * x = y                 x = y
        * x += y                x = x + y
        * x -= y                x = x - y
        * x *= y                x = x * y
        * x /= y                x = x / y
         
        * ตัวอย่าง:
        *   Let a = 10;
        *   a += 5;
        *   console.log(a); //ได้ 15
*/
// ? Logical Operators
/*
        * Logical operators ทั่วไปจะใช้เปรียบเทียบระหว่างค่า boolean
        * ใน Javascript มี logical operator คือ && (และ) กับ || (หรือ)
        
        * ตัวอย่าง:
        * console,log( true && true ); // ได้ true
        * console.log( true && false ); // ได้ false
        * console,log( true || false ); // ได้ true
        * console.log( false || false ); // ได้ false
        
        * && จะถูกคำนวนก่อน ||
        * สามารถใช้วงเบบอกลำตับการเปรียบเทียบได้
        
        * ตัวอย่าง:
        * console.log( false ss true || true ); // ได้ true
        * console,log( false s& (true || true) ); // false
        * หากมีโลจิกที่ซับซ้อน แนะนำให้ครอบวงเล็บให้ชัดเจน
*/

////////////////////////// .  การสร้าง Function และการใช้งาน
// JavaScript Function Syntax
function name(parameter1, parameter2, parameter3) {
    // code to be executed
  }

function myFunction(value1, value2){
    return value1 * value2;
}
var myFunc = myFunction(5,5);
console.log(myFunc); //- 25

//////////////////////////  . เปลี่ยนสี background ด้วย javascript
function changeBg(){
    document.body.style.backgroundColor = "pink";
    /* 
        * document หมายถึงหน้า HTML ทั้งหน้าเลย
        * body การเข้าถึง Tag body
        * style การเข้าถึง style
        * และก็เช้าถึง properties backgroundColor เพื่อเปลี่ยนสี
        ? ถ้าอยากเห็นภาพมากขึ้น เข้าไปใน console ของ chrome แล้วพิม " document.body.style "
    */
}
//changeBg();

////////////////////////// .  สร้างโปรแกรมแปลง อุณภูมิ
function cToF(celsius){
    var cTemp = celsius;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + "\xB0C is " + cToFahr + "\xB0F";
    console.log(message); //- 30°C is 86°F
}
cToF(30);

function fToC(fahrenheit){
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + "\xB0F is " + fToCel + "\xB0C"
    console.log(message); //- 86°F is 30°C
}
fToC(86);

////////////////////////// .  รู้จักกับ JavaScript Objects
var myCar = {
    brand: "Ford",
    model: "1",
    color: "black"
    //? myCar คือชื่อ Object , brand คือ Properties  
};
//* เข้าถึง Object ได้ 2 วิธี
console.log(myCar.brand); //- Ford
console.log(myCar["brand"]); //- Ford

var person = {
    firstname: "Nitipat",
    lastname: "Kijsumraj",
    nickname: "Time",
    fullName: function() {
        return this.firstname + " " + this.lastname;
        // return person.firstname + " " + person.lastname;
        // ? this จะอ้างอิงถึงชื่อ Object ก็คือ person
    }
    // ? fullName คือ Method
};
console.log(person.fullName()); //- Nitipat Kijsumraj

////////////////////////// . รู้จักกับ JavaScript Events
function displayDate(){
    document.getElementById('demo').innerHTML = Date();
}

////////////////////////// .  ทำงานกับข้อความ String
var x = "BILLMURRAYY";
console.log(x.length);          //- 11
var x1 = "BILL \\ It\'s \"MURRAYY\"";
console.log(x1);                //- BILL \ It's "MURRAYY" 
var x2 = "BILL\nMURRAYY";
console.log(x2);                //- BILL เว้นบรรทัด MURRAYY

////////////////////////// .  รู้จักกับ Array
// ? Array Literal
var myArr = ["BMW","Ford","Honda"];

// ? Array Constructor
var myArr2 = new Array("BMW","Ford","Honda");

console.log(myArr); //- ["BMW", "Ford", "Honda"]
console.log(myArr.length); //- 3
console.log(myArr2[0]); //- BMW

////////////////////////// . Array Method, pop, push, shift, unshift
// ? แปลง Array เป็น String
var fruits = ["Banana","Orange","Apple","Mango"];
document.getElementById("demo1").innerHTML = fruits.toString(); //- Banana,Orange,Apple,Mango
// document.getElementById("demo1").innerHTML = fruits.toLocaleString();

// ? join
document.getElementById("demo1").innerHTML = fruits.join(" - "); //- Banana - Orange - Apple - Mango

// ? pop, push, shift, unshift
fruits.pop(); // * pop คือการลบข้อมูลตัวสุดท้ายของ Array
console.log(fruits); //- ["Banana", "Orange", "Apple"]

fruits.push("Kiwi"); // * push คือการเพิ่มข้อมูลตัวท้ายสุดของ Array
console.log(fruits); //- ["Banana", "Orange", "Apple", "Kiwi"]

fruits.shift(); // * shift คือการลบข้อมูลตัวหน้าสุดของ Array
console.log(fruits); //- ["Orange", "Apple", "Kiwi"]

fruits.unshift("Lemon"); // * unshift คือการเพิ่มข้อมูลตัวหน้าสุดของ Array
console.log(fruits); //- ["Lemon", "Orange", "Apple", "Kiwi"]

// ? เปลี่ยนข้อมูลใน Array
fruits[0] = "Banana";
console.log(fruits); //- ["Banana", "Orange", "Apple", "Kiwi"]

////////////////////////// . เพิ่มเติมจากอันบน Array Method, splice
// ? Delete ข้อมูล
delete fruits[0]; //- พิม fruits ใน console จะได้ [empty, "Orange", "Apple", "Kiwi"]

// ? splice เพิ่มข้อมูล หรือ การแทรกข้อมูล และลบตัวหน้า .splice(ตำแหน่งที่จะเพิ่ม , จำนวนข้อมูลที่จะลบ , "ข้อมูลที่จะเพิ่ม",....); 
//*การเพิ่ม
fruits.splice(2,0,"Lemon","Bill"); //- พิม fruits ใน console จะได้ [empty, "Orange", "Lemon", "Bill", "Apple", "Kiwi"]
//*การลบจากตัวหน้าไปตัวหลัง
fruits.splice(0,1); //- พิม fruits ใน console จะได้ ["Orange", "Lemon", "Bill", "Apple", "Kiwi"]
// fruits.splice(0,5); //- พิม fruits ใน console จะได้ ["Kiwi"]

////////////////////////// . การเอาข้อมูลใน Array2ตัวมารวมกัน โดยใช้ Array Method, slice
//? Mathod Concat
var arr1 = ["value1","value2"];
var arr2 = arr1.concat(["value3","value4","value5"]);
console.log(arr2); //- ["value1", "value2", "value3", "value4", "value5"]

var Arr1 = ["value1"];
var Arr2 = ["value2"];
var Arr3 = ["value3"];
var concatArr = Arr1.concat(Arr2,Arr3);
console.log(concatArr); //- ["value1", "value2", "value3"]

//? Method slice คือการตัดข้อมูลใน Array
var ARR = ["value1","value2","value3","valie4"]
var myNewArr = ARR.slice(1); //- ตัดข้อมูลตั้งแต่ตัวที่ 1 มาใช้ จึงได้ ["value2", "value3", "valie4"]
// var myNewArr = ARR.slice(1 , 3); //- ตัดข้อมูลตั้งแต่ตัวที่ 1 จนถึงตัวที่ 3 มาใช้ จึงได้ ["value2", "value3"]

////////////////////////// . ชนิดของข้อมูลใน JavaScript - 7 Data Types 
//? Primative Type
var myNumber = 10;
var myStraing = "BILLMURRAY";
var myBoolean = true;
var myBoolean = false;
var myNull = null;
var myUndefined; //* คือตัวแปรที่ยังไม่ได้กำหนดค่าให้
//? Object Type
var myObject = { };

////////////////////////// . การใช้งาน Typeof Operator (เอามาเช็ค Data Type)
console.log(typeof myNumber);
//* หรือพิมใน console ว่า " typeof ..... "

////////////////////////// . รู้จักกับ JavaScript Math Object
/*
    * Math.PI; (3.14159265358)
    * Math.round(4.5); ได้ 5 (ปัดเลข)
    * Math.pow(5,5); ได้ 3125 (ยกกำลัง)
    * Math.sqrt(64); ได้ 8
    * Math.abs(-4.5); ได้ 4.5
    * Math.ceil(4.1); ได้ 5 (ปัดขึ้นหมด)
    * Math.floor(4.6); ได้ 4 (ปัดลง)
    * Math.random(); จะ random 0-1
    * 
*/

////////////////////////// . รู้จักกับเงื่อนไข JavaScript If else
var time = 15;
if(time < 12){
    console.log("Good Morning");
}else if(time < 18){
    console.log("Good Afternoon"); //- Good Afternoon
}else{
    console.log("Good Evening");
}

////////////////////////// . รู้จักกับ JavaScript Switch Case
/*
     - switch(expression){
     -   case x:
     -      //* code block
     -      break;
     -   case y:
     -      //* code block
     -      break;
     -   default:
     -      //* code block
}
*/
//? EX1
switch(new Date().getDate()){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
}
//? EX2
var myphone = "OPPO";
switch(myphone){
    case "iPhone":
        console.log("30,000");
        break;
    case "Samsung":
        console.log("25,000");
        break;
    default:
        console.log("We don't have phone"); //- We don't have phone
}

////////////////////////// . รู้จักกับ JavaScript For Loop
/*
    *    // JavaScript For Loop Statement Syntax
    *    for (statement 1; statement 2; statement 3) {
    *        // code block to be executed
    *    }
*/
for(var i = 0 ; i < 5 ; i++){
    console.log(i); //- 0 1 2 3 4
}

var car = ["BMW","Ford","Honda","Audi"];
for(var i = 0 ; i < car.length ; i++){
    console.log(car[i]);
}

////////////////////////// . JavaScript For/In Loop (Loop ผ่าน Properties ของ Object)
/*
    *   for (variable in iterable) {
    *       // code block to be executed
    *   }
*/
var persons = {
    fname: "Nitipat",
    lname: "Kijsumraj",
    age: 20
};
// for(var i in persons){              //? var i in Object
//     console.log(persons[i]);        //? เรียกใช้ด้วย ชื่อ Object ตามด้วย [i]
// }

////////////////////////// . JavaScript For/In Loop (Loop ผ่าน ค่า ของ Object)
/*
    *    for (variable of iterable) {
    *        // code block to be executed
    *    }
*/
var Car = ["BMW","Ford","Honda"];
for(var i of Car){              
    console.log(i);        
}

var mystring = "BILLMURRAY";
for(var i of mystring){              
    console.log(i);        
}

////////////////////////// . JavaScript Type Conversions (การแปลงชนิดข้อมูล)
/*
    todo JavaScript Data Types
    ? In Javascript there are 5 different data types that can contain values:
    * - string
    * - number
    * - boolean
    * - object
    * - function

    ? There are 6 types of objects:
    * - Object
    * - Date
    * - Array
    * - String
    * - Number
    * - Boolean
    
    ? And 2 data types that cannot contain values:
    * - null
    * - undefined
*/
var Strings = String(12345);
console.log(Strings); //- 12345
var Numbers = Number("5555");
console.log(Numbers); //- 5555
console.log(String(Date())); //-on Feb 01 2021 19:46:56 GMT+0700 (เวลาอินโดจีน)
console.log(Number(true)); //- ( 1 )
console.log(Number(false)); //-  ( 0 )

////////////////////////// . JavaScript Scope การกำหนดความสามารถในการเข้าถึงตัวแปล หรือการมองเห็นของตัวแปล
// ?    Local Scope ภายใน
// ?    Global Scope ภายนอก
var mycar = "BMW";
function mylocal(){
    var myName = "Nitipat";
    console.log(myName);
    console.log(mycar); //- BMW เข้าถึงได้

    Mynames = "BillMurrayy"; //- เอา var ออกจะกลายเป็น Global Scope
}
mylocal();
// console.log(myName); //- ไม่สามารถเข้าถึง myName ได้
console.log(mycar); //- BMW
console.log(Mynames); //- BillMurrayy

////////////////////////// . JavaScript Hoisting การย้ายตัวแปรที่ประกาศไว้ด้านล่าง เอาไปไว้ด้านบนสุดของ Scope
g = 5;
console.log(g);
var g; //? Declaration
console.log(g); //- 5     Hoisting

console.log(gg); //- undefined     Not Hoisting
var gg = 10; //? Initialzation

////////////////////////// .   JavaScript Strict Mode โหมดเข้มงวด
 "use strict";
x = 5; //- Error

function ggs(){
    yy = 6; //- Error
}
ggs();

////////////////////////// . What is " This " keyword
var Person = {
    firstname: "Nitipat",
    lastname: "Kijsumraj",
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}
console.log(Person.fullname());

console.log(this); //-จะแสดง Properties ทั้งหมดออกมาในหน้าต่างเว็บ

"use strict";
function myFuncs(){
    return this;
}
console.log(myFuncs); //- undefined

////////////////////////// . Var & let & Const - [ ES6 ]
////? var
var a = 10;
var a = 15;
console.log("a:",a); //- a: 15
//*สามารถเรียกใช้จากภายนอกได้
{
    var r = 50;
}
console.log("r:",r); //- r: 50


////? let ประกาศใหม่ไม่ได้ (เป็น block scope)
let s = 6;
// let s = 7; //- จะขึ้น Error
//* แต่เปลี่ยนค่าแบบนี้ได้
let d = 12;
d = 16;
console.log("d:",d); //- d: 16
//* ไม่สามารถเรียกใช้จากภายนอกได้
{
    let t = 40;
    console.log("t:",t); //- ไม่ Error
}
// console.log("t:",t); //- จะ Error


////? Const คือค่าคงที่ (เป็น block scope)
const f = 20;
console.log("f:",f); //- f: 20
//* ไม่สามารถเข้าถึงจากภายนอกได้เหมือน let

////? EX
var a = 1;
{
    var a = 2;
}
console.log(a); //- 2

let ss = 1;
{
    let ss = 2;
}
console.log(ss); //- 1

const u = 1;
{
     const u = 2;
     console.log(u); //- 2
}
console.log(u); //- 1

////////////////////////// . รู้จักกับ Template Literals - [ ES6 ]
//? วิธีเดิม
var myname = "Nitipat";
console.log("Hi " + myname + " nice to meet you.") //- Hi Nitipat nice to meet you.
//? วิธีใหม่
console.log(`Hi ${myname} nice to meet you.`) //- Hi Nitipat nice to meet you.
//? ใช้กับ function
function mymyname(name) {
    console.log(`Hi, my name is ${name}`);
}
mymyname("Bill"); //- Hi, my name is Bill

////////////////////////// . Arrow Function - [ ES6 ]
//? Function Expression
var fun = function() {
    return "hi";
}
//? Function Declaration
function Fun() {

}
//? Arrow Function
//* แบบที่1
// var Func = () => { 
//     return "hi hi";
// }
//* แบบที่2
var Func = () => "hi hi";

console.log(Func()); //- hi hi

//? Arrow Function and Parameters
var Funct = (value) => `Hi ${value}`;
console.log(Funct("Time")); //- Hi Time

////////////////////////// . JavaScript Class - [ ES6 ]
class myClass {
    constructor(name) {
        this.mynamee = name;
    }
    fullNa() { //* สร้างตัวแปรรับ Parameter ได้ปกติ
        return `My name is ${myname}`;
    }
    static hello(Name){
        return "Hello! " + Name;
    }
}
var ps = new myClass("BillMur");
console.log(ps); //- myClass {mynamee: "BillMur"}
console.log(ps.fullNa()); //- My name is Nitipat
//* static method() ต้องเข้าถึงด้วยการเรียกชื่อ Class โดยตรง
// console.log(ps.hello()); //- จะ Error
console.log(myClass.hello("Joe")); //- Hello! Joe

////////////////////////// . Class Inheritace ( การสืบทอด )
class Cars {
    constructor(brand) { //* !!!
        this.carname = brand; 
    }
    present(){
        return "I have a" + this.carname;
    }
}
class Model extends Cars {
    constructor(brand,model){ //* เปลี่ยนชื่อ brand เป็นชื่ออื่นได้ ไม่ต้องอ้างอิงเหมือน Class แม่ !!! (แต่ถ้าใช้ตัวแปรชื่อเดียวกันจะสร้างความเข้าใจที่ตรงกัน)
        super(brand);
        this.model = model;
    }
    show(){
        return this.present() + ", it's a " + this.model;
    }
}
var MyCar = new Model("ford","mustang");
console.log(MyCar.show()); //- I have aford, it's a mustang 

////////////////////////// . JavaScript Style Guide (รูปแบบการเขียน javascript)
var firstName = "Nitipat"; //* CamelCase คือการสร้างตัวแปร ตัวพิมเล็กก่อนตัวพิมใหญ่
//* การเว้นวรรค เพื่อให้อ่านง่าย
var l, i;
var k = l + i;

var myArray = ["a", "b", "c"];

var Person = {
    firstName: "Nitipat",
    lastName: "kijsumraj",
    eyeColor: "black"
};

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var time = 15;
if (time < 20) {
    console.log("Good Day");
} else {
    console.log("Good Evening");
}
////////////////////////// . JavaScript Reserved Words
//* คือคำสงวห้ามเอามาตั้งชื่อตัวแปร