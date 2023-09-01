function StartPlaying(){
    window.location.replace("/Level1.html")
}
function Checklevela()
{
    var row1 = document.getElementById("l1r1c").value
    var row2 = document.getElementById("l1r2c").value
    var row3 = document.getElementById("l1r3c").value

    if(row1 == "2")
    {
        if(row2 == "5")
        {
            if(row3 == "8")
            {
                alert("You Passed")
                window.location.replace("/Level2.html")
            }
            else
            {
                alert("your failed")
            }
        }
        else
        {
            alert("your failed")
        }
    }
    else
    {
        alert("your failed")
    }
}
function Checklevelb()
{
    var row1 = document.getElementById("l2r1c").value
    var row2 = document.getElementById("l2r2c").value
    var row3 = document.getElementById("l2r3c").value

    if(row1 == "8")
    {
        if(row2 == "5")
        {
            if(row3 == "4")
            {
                alert("You Passed")
                window.location.replace("/You_Won.html")
            }
            else
            {
                alert("your failed")
            }
        }
        else
        {
            alert("your failed")
        }
    }
    else
    {
        alert("your failed")
    }
}
function Home()
{
    window.location.replace("/index.html")
}