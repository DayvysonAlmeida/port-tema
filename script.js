function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    //PEGAR A TAG IMG
    const img = document.querySelector("#profile img")
    
    //SUBSTITUIR A IMAGEM
   if(html.classList.contains('light')) {
       //SE TIVER LIGHT MODE, ADICIONAR A IMAGEM LIGHT
     img.setAttribute('src','./imagens/PERFILCORTADO.png')
   } else{
       //SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
       img.setAttribute('src','.//imagens/FUNDOAMARELO.png')

   }


}