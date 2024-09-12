let input = document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let String="";  //emputy string me result store hoga

let arr=Array.from(buttons);  //ye ek array make karke degaaa

arr.forEach(button =>{
    button.addEventListener('click',(e)=>{  //jab bhi koi button pe click karag to kye hoga   e pass hota hi rhle ga
        if(e.target.innerHTML  == '='){  //jab button pe ye String   jab bhi button eqeal hain hai to ye code ye chalyga
            String= eval(String); //hameri string me jo koi bhi function hoga automatically evelute kar degaa
            input.value= String;   // jab bhi string button parese hoga to string ki value evelute hoti dikegi
        }
        else if(e.target.innerHtml =='AC'){   ////AGER ALL CLEAR BUTTON PE CLICK KARTA HIA TO KYE HOGA
            String =" ";   //STRING 0 HOJAYAGI   
            input.value=String;   //INOUT VALUE ME STRING AJAYGII
        }
        else if(e.target.innerHtml =='DEL'){  //DELETE PER CLICK KKARTE HAI 
            String =String.substring(0,String.length-1);    //JO HAMERI sTRING ME last dugut hotaini hai  0 se last digit remove hojayagi 
            input.value= String;
        }
        else{
            String += e.target.innerHTML;  //ager ve button equeal nhi hai to ve  hameri string me add hote rahege 
                input.value =String
        }
    })
})