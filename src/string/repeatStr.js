export default function repeatStr(str,num){
    if(num<0){
        return ''
    }
    var save = str
    for(var i=1;i<num;i++){
        save += str
    }
     return save
}