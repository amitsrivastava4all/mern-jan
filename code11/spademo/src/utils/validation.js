export const validations = {
    isBlank(str){
        if(!str){
            return true;
        }
        else{
            return false;
        }
    },
    isCorrectLen(str, minLen){
        if(str.length>=minLen){
            return true;
        }
        else{
            return false;
        }
    }
}