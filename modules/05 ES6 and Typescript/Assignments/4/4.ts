

interface StringUtilsInterface<U,T>{

    getVowels(str:U);
    removeChar(str :U , pos : T);
    incrementLetters (str : U);

}

class StringUtils implements StringUtilsInterface<string,number> {

    getVowels(str:string):number{
       let  count :number = 0;
       let vowels : string = "aeiou";
        let res :string = str.toLowerCase() ;
        for(let i=0; i< res.length; i++){
            if(vowels.includes(res[i]))
                count++;
        }
        return count;
    }


    removeChar (str :string , pos :number ):string{
        let newStr :string = str.replace(str[pos],'');
        return newStr;
    } 

    incrementLetters (str:string):string{
        var newStr = "";
        for(var i=0; i<str.length; i++){
            if(str[i] === " ")
                newStr += " ";
            else
                newStr += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return newStr;
    }

}
   let myStringUtils = new StringUtils();
    let myStr:string = "The quick brown fox";
    console.log(myStringUtils.getVowels(myStr));
    console.log(myStringUtils.removeChar(myStr,2));
    console.log(myStringUtils.incrementLetters(myStr));

    
