 // //Sorting angka with bubble sort method
// var arr = ['4','1','2','3','5']
// var arr2 = []
// var temp = 0
// //bubble sort
// for(var i = 0;i<arr.length;i++){
//     for(var j = 0;j < arr.length - i - 1;j++){
//         if(arr[j] > arr[j + 1]){
//             temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr)
 
 //Input : ['blueberry','apple','orange','anggur','banana']
   /*Output : [
       ['anggur','apple'],
       ['banana','blueberry'],
       ['orange']
   ] */
//1
var buah = ['blueberry','apple','orange','anggur','banana']


function pembanding(fruit1, fruit2){
    var panjang1 = fruit1.length
    var panjang2 = fruit2.length
    var minLen = 0;
    if(panjang1 < panjang2){
        minLen = panjang1
    }else{
        minLen = panjang2
    }//milih yang panjangnya lebih pendek kalau ga error


    //ASCII A = 65, B = 66, C = 67, ...
    //ASCII a = 97, b = 98, c = 99, ...
    for(var i = 0; i<minLen ;i++){
        if(fruit1[i] < fruit2[i]){
            return -1
        }else if(fruit1[i] > fruit2[i]){
            return 1
        }
    }

    //string yang lebih pendek < string yang lebih panjang
    if(panjang1 < panjang2){
        return -1
    }else if(panjang1 > panjang2){
        return 1
    }else{
        return 0
    }
}
function sorting(fruits){
    var temp = ''

    for(var i = 0; i < fruits.length; i++){
        for(var j = 0; j < fruits.length - i - 1;j++){
            if(pembanding(fruits[j], fruits[j+1]) == 1){
                temp = fruits[j]
                fruits[j] = fruits[j + 1]
                fruits[j + 1] = temp
            }
        }
    }
}
//'anggur', 'apple', 'banana', 'blueberry', 'orange'
function grouping(arr){
    var len = arr.length
    var buah2 = []
    var buah3 = []
    for(var i = 0;i < len - 1;i++){          
        if(i != len - 2){
            if(arr[i][0] == arr[i+1][0]){           
                buah2.push(arr[i])
            }else{
                buah2.push(arr[i])
                buah3.push(buah2)
                buah2 = []
            }
        }else if(i == len-2){
            if(arr[len - 1][0] == arr[len - 2][0]){
                buah2.push(arr[i])
                buah2.push(arr[i + 1])
                buah3.push(buah2)
            }else{
                buah2.push(arr[i])
                buah3.push(buah2)
                buah2 = []
                buah2.push(arr[i + 1])
                buah3.push(buah2)
            }
        }      
    }
    return buah3
}

sorting(buah)
console.log(grouping(buah))

 //Input : "kamu makan bersama teman kamu"
    /* Output : [
        ['Makan','Bersama','Teman'],
        ['Kamu']
    ]

    */
    // Input : "jalan jalan dan makan makan enak"
    /* Output : [
        ['Dan','Enak'],
        ['Jalan','Makan']
    ]
    */
//2
var kata = 'jalan jalan dan makan makan enak'

function pemasuk(word){
    var arrWord = []
    var tmp = ""
    var panjang = word.length
    
    for(var i = 0;i < panjang;i++){
        if(word[i] != " "){
            tmp += word[i]
        }else{
            arrWord.push(tmp)
            tmp = ""
        }
        if(i == panjang - 1){
            arrWord.push(tmp)
            tmp = ""
        }

    }
    return arrWord
}

function sorter(sort){
    var test = sort.length
    var tempo = ""
        for(var i = 0; i < test - 1;i++){
            for(var j = 0; j < test -i - 1 ;j++){
                if(pembanding(sort[j], sort[j+1]) == 1){
                    tempo = sort[j]
                    sort[j] = sort[j + 1]
                    sort[j + 1] = tempo
                }
            }
        }
    return sort
}

function check(cek){
    var pjg = cek.length
    var tampung = []
    var tampung1 = []
    var tampung2 = []

    for(var i = 0;i < pjg - 1;i++){
        if(cek[i] == cek[i + 1]){ 
            tampung2.push(tampung)
            tampung = []
            tampung1.push(cek[i])      
        }else if(cek[i] != cek[i + 1]){
            tampung.push(cek[i])
        }
        if(i == pjg-1){
            tampung1.push(cek[i])
            tampung2.push(tampung1)
        }
    }
    return tampung2
}


var hello = pemasuk(kata)
var hallo = sorter(hello)
var hillo = check(hallo)
console.log(hallo)
console.log(hillo)