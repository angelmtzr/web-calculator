var operation = ["0"];
var result;
$(".btn-n,.btn-s,.btn-f").on("click",function(){
    var btn = $(this).attr("id");
    console.log(btn);
    if(btn === "reset"){
        $("#screen-text").text("0");
        operation = [];
        operation.push("0");
    }
    else if(btn === "del"){
        console.log(operation.join(""));
        if(operation.length === 1){
            console.log("yes");
            $("#screen-text").text("0");
        }
        else{
            operation.pop();
            $("#screen-text").text("0");
        }
        
        
    }
    else if(btn === "equals"){
        result = eval(operation.join(""));
        $("#screen-text").text(result);
    }
    else{
        console.log("lol");
        if (operation.join("") === "0") operation.pop();
        operation.push(btn);
        $("#screen-text").text(operation.join(""));
    }
});