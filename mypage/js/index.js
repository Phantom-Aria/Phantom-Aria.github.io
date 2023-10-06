console.log('test');

// 主要是后面两种类型的变量
// var(全局作用域), let（值可以修改）, const（值不可以修改，初始化的时候就要申明值）
let age = 18;
age = 20;
//const sex = "male";
//sex = "female"
//Uncaught TypeError: Assignment to constant variable.
console.log(age);

//数值类型
// String, Number, Boolean, null, undefined
const username = "Phantom";
const age_ = 18;
const rate = 4.5;
const iscol = true;
const x = null;    //值被定义，但是空
const y = undefined;    //不存在定义
console.log(typeof y);   //类型

//字符串内置方法
console.log(username.length);    //.length 长度，没括号是属性
console.log(username.toUpperCase());  //有括号的是方法
console.log(username.substring(0,3).toUpperCase());
const test_txt = "p h a n t o m";
console.log(test_txt.split(" "))    //切分数组，其实和python的.split()方法是一样的

//数组内置方法
const numbers = new Array(1, 2, 3, 4, 5);   //构造函数创建数组
const fruits = ['apple', 'banana']  //直接用中括号申明数组
console.log(numbers);
console.log(fruits[1]); //中括号索引，和python一模一样

fruits.push("watermalon");  //.push() 数组中添加元素，等同于python列表的.append()
console.log(fruits);
fruits.pop();    //删除末尾元素
console.log(Array.isArray(fruits));  //判断是否为数组
console.log(fruits.indexOf("apple"));   //计算索引

//javascript对象是有属性和方法的数据，表示为键值对的组合（想起了python的字典......）
const person = {
    firstname: "Alex",
    lastname: "Xie",
    age:18,
    hobbies: ["music", "sing", "dance", "basketball"],
    address: {
        street: "tarim street",
        city: "tarim"
    },
};

console.log(person.firstname, person.address);  //直接查询属性

const {
    firstname,
    lastname,
    address: {city},
} = person;     //相当于用同名变量将值从person变量中抽取出来
console.log(city);   //数据解构

//数组转换成json格式
const personJSON = JSON.stringify(person);
console.log(personJSON);

//if条件语句,===才会连数据类型一起判断，==不会判断数据类型
const n = 20;
const m = 10;
if (n === 10) {
    console.log("n is 10");
} else if (n > 10 || m > 10) {  //条件判断中 或 用||双竖线表示，且 用&&表示
    console.log("n is greater than 10 or m is greater than 10");
} else {
    console.log("n is less than 10");
};

//三目运算符(简化if else代码用的)
const z = 11;
const color = z > 10 ? "red" : "blue";  //？表示判断为真，冒号后是判断为假
console.log(color);

//另一种条件语句switch
switch (color) {
    case "red":
        console.log("color is red");
        break;  //case break相当于shell里的if fi，do done
    case "blue":
        console.log("color is blue");
        break;
    default:    //表示没有匹配到任意一个条件
        console.log("color is not red or blue");
};

//for 循环
for (let i = 0; i < 10; i++) {
    console.log(`for loop number: ${i}`)    //像shell里的for循环
};

//while 循环,与for不同，条件判断在while里面,否则死循环
let l = 0;
while ( l < 10) {
    console.log(`while loop number: ${l}`);
    l++;
};

for (let i = 0; i < fruits.length; i++) {   //结合数组的for循环
    console.log(fruits[i])
};

for (let i of fruits) { //类似于python的for i in [list]
    console.log(i)
}

