
export const Islogin=() => {
    localStorage.getItem('user')
    if(Islogin){
       return true;
    } else{
        return false;
    }
}