val=''

function pressed(event){
    val += event.target.value
    result.value=val
}

function solve(){
    exp=result.value
    res=eval(exp)
    result.value=res
    val=""
}

function clr(){
    val=""
    result.value=""
}
