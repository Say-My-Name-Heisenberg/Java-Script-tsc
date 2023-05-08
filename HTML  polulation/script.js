students = [
    {id:10,name:"anju",Age:20,class:"10A"},
    {id:12,name:"manju",Age:20,class:"10A"},
    {id:13,name:"ranju",Age:20,class:"10A"},
    {id:16,name:"kunju",Age:20,class:"10A"},
    {id:17,name:"chinju",Age:20,class:"10A"}
]

datas=''

students.forEach(item=>{
    datas+=`
        <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.Age}</td>
            <td>${item.class}</td>
        </tr>`
})

dt.innerHTML=datas