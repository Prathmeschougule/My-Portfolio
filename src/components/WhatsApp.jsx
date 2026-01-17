import React from 'react'

function WhatsApp() {

    const phonNumber="918265012385";
    const message = "Hello, I want more information";
    const whatsappUrl = `https://wa.me/${phonNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div>       
     <div className="cursor z-20 mb-4 mr-4 fixed bottom-0 right-0">
        <a href={whatsappUrl}><img className='w-[50px]' src="/projectImage/—Pngtree—whatsapp icon vector_8704827.png" alt="" /></a>
     </div>
    </div>
  )
}

export default WhatsApp
