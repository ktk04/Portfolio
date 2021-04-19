var a=1;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("social").style.display="flex";
        return a=0;
    }
    else
    {
        document.getElementById("social").style.display="none";
        return a=1;
    }
}