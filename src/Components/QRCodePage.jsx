import React from "react";
import QRCode from "react-qr-code";
import Barcode from "react-barcode";

const QRCodePage = () => {
  const websiteURL = "https://fuelant.netlify.app";
  const whatsappURL = "https://wa.me/923439391344?text=Hello%20Fuelant!";
  const productCode = "61902782";

  // ✅ Print Only Selected Section (Centered on page)
  const handlePrint = (id) => {
    const element = document.getElementById(id);

    const heading = element.querySelector("h2")?.innerText;
    const codeSVG = element.querySelector("svg")?.outerHTML;
    const text = element.querySelector("p")?.innerText;

    const printWindow = window.open("", "", "width=800,height=600");

    printWindow.document.write(`
      <html>
        <head>
          <title>Print Code</title>
          <style>
            html, body {
              height: 100%;
              margin: 0;
              font-family: Arial, sans-serif;
            }
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              text-align: center;
            }
            .container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 20px;
            }
            h2 {
              font-size: 28px;
              margin: 0;
            }
            svg {
              max-width: 250px;
              height: auto;
            }
            p {
              font-size: 18px;
              word-break: break-all;
              margin: 0;
            }
            button {
              display: none !important;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${heading}</h2>
            ${codeSVG}
            <p>${text}</p>
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#f7f3ea] to-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-16">
          Scan or Use Our Codes
        </h1>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Website QR */}
          <div
            id="websiteQR"
            className="bg-white p-8 rounded-3xl shadow-xl border flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Visit Our Website
            </h2>
            <div className="flex justify-center mb-4">
              <QRCode value={websiteURL} size={180} />
            </div>
            <p className="text-gray-700 font-medium break-all mb-6">
              {websiteURL}
            </p>
            <button
              onClick={() => handlePrint("websiteQR")}
              className="mt-auto print:hidden bg-black text-white px-6 py-2 rounded-full font-semibold"
            >
              🖨️ Print
            </button>
          </div>

          {/* WhatsApp QR */}
          <div
            id="whatsappQR"
            className="bg-white p-8 rounded-3xl shadow-xl border flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-green-700">
              Chat on WhatsApp
            </h2>
            <div className="flex justify-center mb-4">
              <QRCode value={whatsappURL} size={180} fgColor="#25D366" />
            </div>
            <p className="text-gray-700 font-medium break-all mb-6">
              {whatsappURL.replace("https://wa.me/", "WhatsApp: +")}
            </p>
            <button
              onClick={() => handlePrint("whatsappQR")}
              className="mt-auto print:hidden bg-black text-white px-6 py-2 rounded-full font-semibold"
            >
              🖨️ Print
            </button>
          </div>

          {/* Product Barcode */}
          <div
            id="productBarcode"
            className="bg-white p-8 rounded-3xl shadow-xl border flex flex-col h-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Product Barcode
            </h2>
            <div className="flex justify-center mb-4">
              <Barcode
                value={productCode}
                format="CODE128"
                width={2}
                height={100}
                displayValue={true}
                fontSize={16}
              />
            </div>
            <p className="text-gray-700 font-medium mb-6">
              {productCode}
            </p>
            <button
              onClick={() => handlePrint("productBarcode")}
              className="mt-auto print:hidden bg-black text-white px-6 py-2 rounded-full font-semibold"
            >
              🖨️ Print
            </button>
          </div>

        </div>

        {/* Professional Instruction Paragraph */}
        <div className="mt-16 max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          <p>
            To quickly access our website, connect via WhatsApp, or verify your product,
            simply scan the QR codes and barcode displayed above using your smartphone camera
            or a dedicated barcode/QR scanning application. Make sure your device is aligned
            properly, and hold it steadily until the scan completes. Once scanned, the website
            link will open in your browser, WhatsApp will start a chat with our support, and
            the product barcode will display its corresponding information. This process ensures
            a seamless and efficient interaction with our services.
          </p>
        </div>

      </div>
    </section>
  );
};

export default QRCodePage;
