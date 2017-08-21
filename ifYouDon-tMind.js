function whatTimeNow(hour, minutes, period) 
{;
if(period == "AM")
    {
        if(minutes > 30)
            {
                console.log(hour,minutes,period,"It's almost" + (hour+1));
            }
        else
            {
                console.log(hour, minutes,period,"It's just after the noon");
            }
    }
if(period == "PM")
    {
        if(hour > 6)
            {
                console.log(hour, minutes,period,"it's time to take break");
            }
        else
            {
                console.log("it's in the morning")
            }
    }
}