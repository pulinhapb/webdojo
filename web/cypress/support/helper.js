const pdf = require('pdf-parse')
const path = require('path')
const fs = require('fs')     //File system . modo nativo do noje

const readPdf = (caminhoDoPdf) => { //leitura do arquivo pdf  . caminho relativo
    return new Promise((resolve) => {  //devolve uma promessa
        const pdfpath = path.resolve(caminhoDoPdf)       //caminho absoluto
        const pdfData = fs.readFileSync(caminhoDoPdf)  //leia o conteudo deste pdf e guarde dentro de pdfData
        pdf(pdfData)      //chame o pdf-parse(módulo NODE) que pega o conteúdo pdf e transforma em TXT
            .then(function ({ text }) {
                resolve(text)      // Devolva o texto
            })
    })
}
module.exports = { readPdf }