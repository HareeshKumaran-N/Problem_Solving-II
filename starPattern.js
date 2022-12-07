

function starPattern(rowSize)
{
    let result="";
    for(let i=rowSize;i>0;i--)
    {
        let str="";

        for(let j=0;j<i;j++)
        {
          str=str+"*"
        }
         
        result+=str+"\n"
      
    }
    console.log(result);
   
}
starPattern(5);