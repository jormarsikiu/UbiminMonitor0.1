(function countdown(remaining) {
    if(remaining === 0)
        location.reload(true);
    else {
        document.getElementById('countdown').innerHTML = remaining;
        setTimeout(function(){ countdown(remaining - 1); }, 1000);
    }
})(120);
