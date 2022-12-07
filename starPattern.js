function starPattern(rowSize)
{
    for(let i=rowSize;i>0;i--)
    {
        let str=""
        for(let j=i;j>0;j--)
        {
          str=str+"*"
        }
        console.log(str);

    }
}

starPattern(5)