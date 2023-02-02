import pdf from "html-pdf";
import { Response } from "express";

const convertToPDF = (html: string, res: Response) => {
  pdf.create(html).toStream((err, stream) => {
    if (err) return res.send(err.stack);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="relatorio-clientes.pdf"'
    );
    stream.pipe(res);
  });
};

export default convertToPDF;
