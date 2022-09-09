function cache_affiche(ok1, okPlusMoins){
        if(document.getElementById(ok1).style.display == 'none')
        {
                document.getElementById(ok1).style.display='block';
                document.getElementById(okPlusMoins).value = '-';
        }
        else
        {
                document.getElementById(ok1).style.display='none';
                document.getElementById(okPlusMoins).value = '+'
        }
    };