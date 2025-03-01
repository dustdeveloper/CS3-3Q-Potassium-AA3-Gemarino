function wow(){
    let info = prompt("What is the message?")
    let para = document.getElementById("result")

    if (info.includes("aI") || info.includes("Ai")){
        para.innerHTML = "The message \""+info+"\" is fake!";
        return;
    } else if (info.includes("AI") && !info.includes("FR")){
        para.innerHTML = "The message \""+info+"\" is fake!";
        return;
    } else if (info.includes("AI") && info.includes("FR")){
        para.innerHTML = "The message \""+info+"\" is legitimate!";
        return;
    } else if (info.includes("FR")){
        para.innerHTML = "The message \""+info+"\" is legitimate!";
        return;
    } else {
        para.innerHTML = "The message \""+info+"\" has not yet been encoded!";
        return;
    }
}