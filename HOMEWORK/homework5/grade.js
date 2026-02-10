function show(){
    console.clear();
    const output = [];
    let score = Math.floor(Math.random() * 101)
    let grade = "";
    let text =  "";
    let status = "";

    if(score>=80 && score<=100){
        grade = "A";
    }
    else if(score>=70 && score<80){
        grade = "B";
    }
    else if(score>=60 && score<70){
        grade = "C";
    }
    else if(score>=50 && score<60) {
        grade = "D";
    }
    else if(score>0 && score<50 ){
        grade = "F";
    }
    else{
        grade = "กรุณากรอกคะแนน 1-100 เท่านั้น";
    }

    if(score>=50 && score<=100){
        status = "ผ่าน"
    }
    else if(score<50&&score>=0){
        status = "ไม่ผ่าน";
    }
    else{
        status = "ไม่พบเกรด"
    }

    switch(grade){
        case "A":
            text = "ยอดเยี่ยมมาก"
            break;
        case "B":
            text = "ดีมาก รักษามาตรฐานไว้";
            break;
        case "C":
            text = "ผ่านเกณฑ์ระดับดี"
            break;
        case "D":
            text = "พอใช้ แต่ควรพัฒนาเพิ่ม"
            break;
        case "F":
            text = "ต้องลงทะเบียนเรียนใหม่"
            break;
        default:
            text = "ไม่พบเกรด"
    }
    console.log("คะแนนที่สุ่มได้ : "+score);
    console.log("เกรด : "+grade);
    console.log("ผลสอบ : "+status);
    console.log("คำอธิบาย : "+text+"!");

    output.push("คะแนนที่สุ่มได้ : "+score);
    output.push("เกรด : "+grade);
    output.push("ผลสอบ : "+status);
    output.push("คำอธิบาย : "+text+"!");
    document.getElementById("outputBox").textContent = output.join("\n");
}
    document.getElementById("btn").addEventListener("click",show);
