function serializeJson(form){
    let formArr = form.serializeArray()
    var result = {}
    formArr.forEach((item,ind)=>{
     result[item.name] = item.value
    })
    return result
   
}

