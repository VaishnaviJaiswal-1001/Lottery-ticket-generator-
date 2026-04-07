let generateTicket=(n)=>{
    let arr=new Array();
        for (let i=1;i<=n;i++){
                arr[i]=Math.floor(Math.random()*10)
            }
    return arr;
}

let sum=(arr)=>{
    return arr.reduce((sum,val)=>sum+val,0);
}

export {generateTicket,sum}
    