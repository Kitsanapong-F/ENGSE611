function loop(){
    console.clear();
    const numBer = [];
    let maxNumbre = 20;
    for(let i = 0 ; i<maxNumbre+1 ; i++){
        if(i%2==0){
            numBer.push(i+" (คู่)");
            console.log(i+" (คู่)");
        }
        else{
            numBer.push(i+" (คี่)");
            console.log(i+" (คี่)");
        }
    }
    for(let i = 0 ; i<maxNumbre+1 ; i+=2){
        numBer.push("นับที่ละ 2: "+i);
        console.log("นับที่ละ 2: "+i);
    }
    for(let i = maxNumbre ; i>=0 ; i-- ){
        numBer.push("ถอยหลัง: "+i);
        console.log("ถอยหลัง: "+i);
    }
    document.getElementById("output").textContent = numBer.join("\n");
}

document.getElementById("btn").addEventListener("click",loop);