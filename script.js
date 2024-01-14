const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

let pdfMerger = async (filearray) => {
    let date = new Date().getTime();
    for (let i = 0; i < filearray.length; i++){
        await merger.add(filearray[i].path);
    }
    // await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
    // await merger.add(p2); // merge only page 2
    await merger.save(`./static/pdf/${date}.pdf`); //save under given name and reset the internal document
    // Export the merged PDF as a nodejs Buffer
    // const mergedPdfBuffer = await merger.saveAsBuffer();
    // fs.writeSync('merged.pdf', mergedPdfBuffer);
    return date
};
module.exports = {pdfMerger}

