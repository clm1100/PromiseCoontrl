var current = 0;
let limit = 3;
var requestQueue = [];
async function request(){
    if(current>limit){
        await block();
    }
    current++;
    await timeout(3000);
    current--;
    next()

    
}
function timeout(t=1000){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve()
            console.log("结束了")
        },t)
    })
}

function block(){
    let _resolve;
    let promise2 = new Promise((resolve, reject) => _resolve = resolve);
    requestQueue.push(_resolve);
    return promise2;
}
function next(){
    if (requestQueue.length <= 0) return;
    let _resolve = requestQueue.shift()
    _resolve();
}

for (let i = 0; i < 30; i++) {
    console.log("t");
    request();
    
}


