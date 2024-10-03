//task
//1
var arr1=[1,2,3,4]
arr1.push("sumanth")
console.log(arr1);

//2
var arr2=[1,2,3,4,"sumanth"]
arr2.pop("sumanth")
console.log(arr1);

//3
var arr3=[1,2,3,4,]
arr3.unshift("sumanth")
console.log(arr3);

//4
var arr4=["sumanth",1,2,3,4,]
arr4.shift("sumanth")
console.log(arr4);

//5
var a=["sumii","reddy","akash","rahul"];
var b=a.reverse()
console.log(b);

var m="hii hello namaste adab "
var n=m.split(" ")
console.log(n);

//6
var k=["sumii","reddy","akash","rahul"];
var l=k.indexOf("reddy")
console.log(l);

//7
var r=["sumii","reddy","akash","rahul"];
var t=r.includes("reddy")
console.log(t);
// 8
var h=[1,5,7,6,9,45,342,24,197];   
var i=h.sort()
console.log(i);

//9
var p="hi hello namstea adab "
var j=p.toString()
console.log(j);

//task2
//1
var str2=["sumii","reddy","akash","rahul"];
str2.push("KING")
str2.shift() //removes 1st element in array
console.log(str2); // add element in last of array

//2
var str4=["sumii","reddy","akash","rahul"];
var add=str4.reverse()
console.log(add);
var k="sumanth"
var t=str4.concat(k)
console.log(t);

//3
var str5=[1,8,7,6,2,5,3,9]
var order=str5.sort()
console.log(order);
order.pop()
console.log(order); //here 9 is removed 

//4
var i=["sumii","reddy","akash","rahul"]
i.unshift("DARLING","PRABHAS")
console.log(i);
i.shift()
console.log(i);
console.log(i.length);

//5
var i=["sumii","reddy","akash","rahul"]
var j=["prabhas","bondam","ntr","pawan kalyan","allu","ram"]
var h=i.concat(j)
console.log(h);
var p=h.sort()
console.log(p);
p.pop()
console.log(p); // here sumii is removed because after soting sumii is last element in ascending oder 























