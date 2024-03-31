function rockPaperScissors()
{
    var a=Math.ceil(Math.random() * 3);
    var c=parseInt(document.getElementById("choice").value);
    var ans;
    if(a==c)
    {
        ans="It's a Tie";
    }
    else
    {
        if(c==1 && a==2)
        {
            ans="The Bot Winss!!";
        }
        else if(c==2 && a==3)
        {
                ans="The Bot Winss!!";
        }
        else if(c==3 && a==1)
        {
            ans="The Bot Winss!!";
        }
        else {
            ans="You Win!!";
        }
    }
    document.getElementById('ans').value=ans;
}