function Biggest(a,b,c)
{
    if (a > b > c)
    {
        return a;
    }
    else if (c > b)
    {
        return c;
    }
    else 
    {
        return b;
    }
}

console.log(Biggest(3,4,1))