function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    if (fano.value.length == 0) {
        window.alert('[ERRO]Veirifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        //homem abaixo
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade > 100 && idade <= 120) {
                res.innerHTML = `Você é um <strong>ANCIÃO</strong> de ${idade} anos de idade`
            } else if (idade < 0) {
                window.alert('Desculpe, o programa não funciona com viajantes do tempo :(')
            } else if (idade > 120) {
                res.innerHTML = `Você existe mesmo? ${idade} anos é muita coisa...`
            } else {
                res.innerHTML = `Você é um ${genero} com ${idade} anos de idade`
            }
            img.setAttribute('src', 'hpb.png')
            //------------------------------------------------------------

            //mulher abaixo
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade > 100 && idade <= 120) {
                res.innerHTML = `Você é uma <strong>ANCIÃ</strong> de ${idade} anos de idade`
            } else if (idade < 0) {
                window.alert('Desculpe, o programa não funciona com viajantes do tempo :(')
            } else if (idade > 120) {
                res.innerHTML = `Você existe mesmo? ${idade} anos é muita coisa...`
            } else {
                res.innerHTML = `Você é uma ${genero} com ${idade} anos de idade`
            }
            img.setAttribute('src', 'mpb.png')
        }
        //------------------------------------------------------------
        res.style.textAlign = 'center'
        res.appendChild(img)

    }


}