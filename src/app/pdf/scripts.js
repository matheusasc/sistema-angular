

const btnGenerate = document.querySelector("btn-generate-ccaf");
btnGenerate.addEventListener("click", () => {
    const ccaf = document.querySelector("ccaf")

    const options = {
        margin: [10, 10, 10, 10],
        filename: "naoAbra.pdf",
        html2canvas: {scale: 2},
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };

    html2pdf()
    .set(options)
    .from(ccaf)
      .save();

});
