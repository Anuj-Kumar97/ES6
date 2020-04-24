export function checkArrow()
{
    let names=["Tom","Evan","Stefan","Damon"];

   let objNames=names.map(name=>({string:name,string_Length:name.length}));
   console.log(objNames);
 }