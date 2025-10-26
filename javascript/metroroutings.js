
function CheckVerificationIndex() {
    var query = location.search;
    var qryStrKey = query.substring(1, query.indexOf('='));
    if (qryStrKey.toUpperCase() === 'REGID') {
        var newURL = location.href;
        newURL = newURL.replace('index', 'verification');
        location.assign(newURL)

    }
}

function LoadCertificate() {    
    document.getElementById('txtRegID').focus();
    var query = location.search;
    var qryStrKey = query.substring(1, query.indexOf('='));
    if (qryStrKey.toUpperCase() === 'REGID') {
        var qryStrValue = query.substring(query.indexOf('=') + 1);        
        var imgsrcw = document.getElementById('imgRegID');
        imgsrcw.style.setProperty("display", "block");
        imgsrcw.src = "~/../students-certificates/" + qryStrValue + ".jpeg";        
        document.getElementById('txtRegID').value = qryStrValue;        
    }
}

function fnSearch() {    
    var txtRegID = document.getElementById('txtRegID').value
    var imgsrcw = document.getElementById('imgRegID');
    imgsrcw.style.setProperty("display", "block");
    imgsrcw.src = "~/../students-certificates/" + txtRegID + ".jpeg";    
}