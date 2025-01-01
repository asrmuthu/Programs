import React, { useState } from 'react'
import './App.css';

const Qrcode = () => {
    const [img, setImg] = useState('');
    const [loading, setLoading] = useState(false);
    const [qr, setQr] = useState('')
    // const [size, setSize] = useState('')

    const generate = (async) => {
      if (!qr.trim()) {
        alert("Please enter a value for QR code generation.");
        return;
      }
        setLoading(true)
        try{
            const URL =`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qr)}`
            setImg(URL)
        }
        catch(error){
            console.log("generation failed",error);
        }
        finally{
            setLoading(false)
            setQr('')
        }
    }

    const download = () => {
        const qrImage = new Image();
        qrImage.crossOrigin = "anonymous";
        qrImage.src = img;
      
        qrImage.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = 200;
          canvas.height = 200;
          canvas.getContext('2d').drawImage(qrImage, 0, 0);
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = `${img.split('data=')[1]}_Qrcode.png`;
          link.click();
        };
      };
  return (
    <div className="app-container">
      <h1>QR CODE QENARETOR</h1>
      {img && (
        <>
          <p>QR code for "<strong>{img.split('data=')[1]}</strong>" generated successfully! </p>
          <img
            src={img}
            alt="QR code"
            onLoad={() => setLoading(false)}
          />
          <button className="download_button" onClick={download}>Download QR code</button>
        </>
      )}

      <div>
        <label htmlFor="dataInput" className="inputlabel">URL or Any text for QR code genaration</label>
        <input type="text" value={qr} id="dataInput" onChange={(e) => setQr(e.target.value)}/>
        {/* <label htmlFor="sizeInput" className="inputlabel">Image size</label>
        <input type="text" id="sizeInput" value={size} onChange={(e) => setSize(e.target.value)}/> */}
        <button className="genarete_button" onClick={generate}>Generate QR code</button>
      </div>
      <p className="footer">Designed by <a href="https://resume-muthupandi-raj.web.app/">Muthupandi Raj</a></p>
    </div>
  )
}

export default Qrcode