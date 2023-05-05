cmnwlth=[
    {country:"India",gold:12,silver:44,bronze:45},
    {country:"China",gold:14,silver:34,bronze:15},
    {country:"Korea",gold:1,silver:64,bronze:4},
    {country:"UsA",gold:10,silver:4,bronze:5}
]

cmnwlth.map((item)=>item.country).forEach(item=>{console.log(item)})

s=cmnwlth.map((item)=>item.gold).reduce((t,item)=>t+item)
console.log(s)

a=cmnwlth.sort((a,b)=>a.silver-b.silver)
console.log(a)

d=cmnwlth.filter((j)=>j.bronze>10).forEach(item=>{console.log(item.country)})
console.log(d)

p=cmnwlth.find(p => p.country == "UsA")
console.log(p)