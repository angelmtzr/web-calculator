var operation = ["0"];
var result;
$(".btn-n,.btn-s,.btn-f").on("click",function(){
    var btn = $(this).attr("id");
    if(btn === "reset"){
        $("#screen-text").text("0");
        operation = ["0"];
    }
    else if(btn === "del"){
        console.log(operation.join(""));
        if(operation.length === 1){
            console.log("long 1");
            operation = ["0"];
            $("#screen-text").text(operation.join(""));
        }
        else{
            operation.pop();
            console.log("poped, now "+operation.join(""));
            $("#screen-text").text(operation.join(""));
        }
    }
    else if(btn === "equals"){
        result = eval(operation.join(""));
        $("#screen-text").text(result);
        operation = ["0"];
    }
    else{
        console.log("clicked");
        if (operation.join("") === "0") operation.pop();
        operation.push(btn);
        $("#screen-text").text(operation.join(""));
    }
});
$(".slider").on("click", function(){
    var theme = this.value;
    $("#theme-style").attr("href","style"+theme+".css");
    console.log($("#theme-style").attr("href"));
});