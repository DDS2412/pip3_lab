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
    startTime(new Date())
    setTimeout(function() {
        SynchronizeDateTime()
    }, 11000);
}

