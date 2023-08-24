const btnGenerate = document.querySelector("#btn-generate-ccaf");

btnGenerate.addEventListener("click", () => {
    const ccaf = document.querySelector("#ccaf")

    const options = {
        margin: [10, 10, 10, 10],
        filename: "naoAbra.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
 //
 // // Criar um novo objeto jsPDF
 // const pdfDoc = new jsPDF(options.jsPDF);

    html2pdf()
    .set(options)
    .from(ccaf)
      .save();
    // .outputPdf()
    // .then((pdf) => {
    //     // Carregar a imagem a ser adicionada
    //     const img = new Image();
    //     img.src = "assets/hackerman.jpg"; // Substitua pelo caminho da sua imagem
    //
    //     // Quando a imagem é carregada, adicione-a ao PDF
    //     img.onload = () => {
    //         pdfDoc.addImage(img, "JPEG", 30, 50, 150, 100); // Ajuste as coordenadas e o tamanho conforme necessário
    //
    //         // Salvar o PDF com a imagem adicionada
    //         pdfDoc.save(options.filename);
    //     };
    // });

});
