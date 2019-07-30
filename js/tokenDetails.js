var tokenList = {};
var logoBaseUrl = window.location.href.split("index")[0];
var createdElement = false;

function disableToken() {
    var url = $(location).attr('href');
    var parts = url.split("/");
    var last_part = parts[parts.length - 1];
    var urlSymbol = (last_part.split("-")[0]);
    for (let tokenKey in tokenList) {
        if (urlSymbol === tokenList[tokenKey].symbol && tokenList[tokenKey].disable === true) {
            $("body").addClass("someAction");
            if (document.getElementById("disable-trade-content-id") === null) {
                addBlock()
            }
        }
    }
    if ($("body").hasClass("someAction")) {
        $(".buy-sell input").prop("disabled", true); //Enable
        $(".buy-sell button").prop("disabled", true); //Enable
    } else {
        $(".buy-sell input").prop("disabled", false); //Disable
        $(".buy-sell button").prop("disabled", false); //Disable
    }
}

function addBlock() {
    var aqDBS = document.createElement("div");
    aqDBS.setAttribute("class", "disable-trade-content");
    aqDBS.setAttribute("id", "disable-trade-content-id");
    var inPara = document.createElement("p");
    inPara.innerHTML = "Buy directly from Orderbook"
    var downIcon = document.createElement("i");
    downIcon.setAttribute("class", "fa fa-long-arrow-down");
    downIcon.setAttribute("aria-hidden", true)
    document.querySelector('.aq-invoice').appendChild(aqDBS);
    aqDBS.append(inPara);
    aqDBS.append(downIcon);
    createdElement = true;
}

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    if (element !== null) {
        element.parentElement.removeChild(element)
    }
}