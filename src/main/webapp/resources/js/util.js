function startTime(dateTime)
{
    var y=dateTime.getFullYear();
    var mo=dateTime.getMonth();
    var d=dateTime.getDate();
    var h=dateTime.getHours();
    var m=dateTime.getMinutes();
    var s=dateTime.getSeconds();

    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time_and_date').innerHTML=y+"-"+(mo+1)+"-"+d+" "+h+":"+m+":"+s;
}

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}

function SynchronizeDateTime()
{
    var count = 0;
    updateDateTime();
    var p = document.getElementById("hiddenForm:timeBean").innerHTML.split("-");
    var dateTime = new Date(p[0],p[1] - 1,p[2],p[3],p[4],p[5]);
    var timerId = setInterval(function() {
        if(count > 0){
            dateTime = new Date()
        }
        count++
        startTime(dateTime)
    }, 1000);

    setTimeout(function() {
        clearInterval(timerId);
        SynchronizeDateTime()
    }, 11000);

}

function sleep(ms) {
    ms += new Date().getTime();
    while (new Date() < ms){}
}

function updateDateTime(){
    var ajaxLink = document.getElementById("hiddenForm:hiddenUpdateLink");
    ajaxLink.click();
}