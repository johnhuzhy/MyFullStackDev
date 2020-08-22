function changePageAjax(path, element) {
    $.ajax({
        url: path,
        dataType: "html",
        type: "GET",
        async: true,
    })
        .done((data) => {
            var rslt = $(data).find(element);
            $("#main").html(rslt);
        })
        .fail((error) => {
            console.log("failed.", error);
        });
}

function changePage(path) {
    console.log(path);
    $("main").attr({"src":path});
}

function getParentValue(argname) {
    var url = document.location.href;
    var arrStr = url.substring(url.indexOf("?") + 1).split("&");
    //return arrStr;
    for (var i = 0; i < arrStr.length; i++) {
        var loc = arrStr[i].indexOf(argname + "=");
        if (loc != -1) {
            return arrStr[i]
                .replace(argname + "=", "")
                .replace("?", "");
            break;
        }
    }
    return "";
}