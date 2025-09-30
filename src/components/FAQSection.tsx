'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Por qué tantos beneficios de ALTÍSIMA CALIDAD por el precio de 50 dólares y para toda la vida?",
      answer: "Ahora el modelo es diferente, más ajustado a la realidad y dinámica del mercado en habla hispana. Ahora Blacks.University® y Universidad.Online® CREA los programas educativos y los productos digitales y NECESITA URGENTEMENTE vendedores (afiliados) que los comercialicen masivamente por Internet. Nosotros estamos comprometidos entregando todo lo que cualquier persona que quiera vender nuestros programas y productos necesita saber, hacer y tener para generar ALTOS INGRESOS diariamente. En este momento un afiliado (vendedor) bien capacitado puede estar facturando aproximadamente de 2 mil a 4 mil dólares todos los días. Si nosotros le damos 50% u 80% de comisión en programas y/o productos, para nosotros el ingreso es representativo en el tiempo. El cobro de los 50 dólares es simbólico para que las personas se animen y tengan la seriedad, orden y disciplina de capacitarse con las estrategias básicas validadas y así salir a vender y ganar. Cuando los vendedores ganan ¡NOSOTROS GANAMOS!"
    },
    {
      question: "¿Tengo que a pagar adicional y/o posteriormente por los beneficios ofrecidos en Blacks.University®?",
      answer: "NO. Realmente el pago de los 50 dólares es un precio simbólico PARA TODA LA VIDA. Sin cargos adicionales ni posteriores NUNCA MÁS."
    },
    {
      question: "¿Cuáles son todos los beneficios que voy a recibir para toda la vida si entro a Blacks.University®?",
      answer: "Los siguientes son todos los beneficios que vas a recibir cuando ingresas al equipo de vendedores de Blacks.University®. 1. Acceso ilimitado y PARA TODA LA VIDA a la plataforma de Blacks.University®. Ahí puedes encontrar las estrategias e instrucciones para copiar y pegar, vender y ganar. 2. Acceso ilimitado y PARA TODA LA VIDA a las sesiones de mentoría todos los días. También puedes acceder para toda la vida a las grabaciones de las mismas. 3. Acceso ilimitado y PARA TODA LA VIDA a la comunidad de usuarios activos de Blacks.University®. Podrás interactuar con todas las personas que están creando y/o vendiendo productos digitales con Hotmart®. 4. Acceso ilimitado y PARA TODA LA VIDA a la franquicia educativa digital de Universidad.Online® que te permite vender las matrículas, programas educativos y productos digitales. 5. Acceso ilimitado y PARA TODA LA VIDA a la franquicia de Blacks.University® que te permitirá vender los accesos a la plataforma usando nuestros ecosistemas y embudos validados. 6. Acceso ilimitado y PARA TODA LA VIDA a los exámenes de suficiencia académica y diplomas de Marketer Profesional, Closer de Ventas y Productor Digital homologables posteriormente con Florida Global University. 7. Acceso ilimitado y PARA TODA LA VIDA a más de 1.500 productos digitales en todas las categorías. Podrás ver el contenido de cada uno, analizar y verificar los ángulos de ventas y así estar mucho más seguro de lo que vas a vender. 8. Acceso ilimitado y PARA TODA LA VIDA a la afiliación de más de 1.500 productos digitales para ganar directa y automáticamente hasta el 80% de comisión a través de la plataforma de Hotmart®."
    },
    {
      question: "¿Por qué Mauricio GARANTIZA los ingresos (dinero) vendiendo productos digitales con Hotmart®?",
      answer: "¡Así es! Mauricio GARANTIZA los resultados (ingresos) porque aquí tu vienes a usar nuestros ecosistemas, embudos y productos que ya están creados, funcionando y vendiéndose todos los días en todo momento. Aquí vienes a COPIAR y PEGAR para VENDER y GANAR. ¿Estás listo? <span style=\"text-decoration: underline;\"><span style=\"color: #3366ff;\"><a style=\"color: #3366ff; text-decoration: underline;\" href=\"https://pay.hotmart.com/G99109427E\" target=\"_blank\" rel=\"noopener\">Click aquí para ingresar al equipo.</a></span></span>"
    },
    {
      question: "¿Cuáles son cada uno de los temas, expertos, días y horarios de las mentorías de Blacks.University®?",
      answer: "Las mentorías de Blacks.University® funcionan todos los días de lunes a viernes de 9:00 AM a 12:00 M hora Colombia. <ul><li><span style=\"color: #ffff00;\"><strong>Lunes:</strong> </span>Mentoría de tráfico pago con <span style=\"color: #3366ff;\"><a style=\"color: #3366ff;\" href=\"https://blacks.university/wp-content/uploads/2025/04/lunes.jpg\">Marcos Araujo.</a></span></li><li><span style=\"color: #ffff00;\"><strong>Martes:</strong></span> Mentoría de Inteligencia Artificial con <span style=\"color: #3366ff;\"><a style=\"color: #3366ff;\" href=\"https://blacks.university/wp-content/uploads/2025/04/martes.jpg\">Kike Cadena.</a></span></li><li><span style=\"color: #ffff00;\"><strong>Miércoles:</strong></span> Closer de Ventas con <span style=\"color: #3366ff;\"><a style=\"color: #3366ff;\" href=\"https://blacks.university/wp-content/uploads/2025/04/miercoles.jpg\">Diana Aragón.</a></span></li><li><span style=\"color: #ffff00;\"><strong>Jueves:</strong></span> Creación y Ventas de Productos Digitales con <span style=\"color: #3366ff;\"><a style=\"color: #3366ff;\" href=\"https://blacks.university/wp-content/uploads/2025/04/jueves.jpg\">Mauricio Duque.</a></span></li><li><span style=\"color: #ffff00;\"><strong>Viernes:</strong> </span>Diseño y desarrollo de productos digitales con <span style=\"color: #3366ff;\"><a style=\"color: #3366ff;\" href=\"https://blacks.university/wp-content/uploads/2025/04/viernes.jpg\">Nino Scarpato.</a></span></li></ul>"
    },
    {
      question: "¿Cuáles son las múltiples formas de ganar dinero con Blacks.University®?",
      answer: "Es muy importante tener el fin en la mente <strong>MUY CLARO.</strong> NO vienes a Blacks.University® a aprender, vienes a Blacks.University® <strong>A GANAR DINERO.</strong> Sencillamente porque tanto los productos como los ecosistemas y embudos ya están creados, automatizados y funcionando. Ya los productos se están vendiendo todos los días. Simplemente hay que <strong>ENTENDER</strong> como funcionan y <strong>COPIAR</strong> y <strong>PEGAR</strong> para <strong>VENDER</strong> y <strong>GANAR.</strong> Las siguientes son las 7 formas de generar ingresos que tiene Blacks.University® y están incluídos como beneficios <span style=\"color: #ffff00;\">PARA TODA LA VIDA</span> cuando realizas el ingreso pagando únicamente 50 dólares. <ol><li>Vendiendo el producto recomendado.<ul><li>Con este producto podemos garantizar tus ingresos desde hoy mismo. De forma automática y manual.</li></ul></li><li>Vender los productos del catálogo de Universidad.Online®.<ul><li>De forma manual y automática.</li></ul></li><li>Vender los programas educativos de Universidad.Online®.<ul><li>De forma manual.</li></ul></li><li>Vender las matrículas vitalicias de Universidad.Online®.<ul><li>De forma manual.</li></ul></li><li>Vender tu propio producto digital.<ul><li>De forma manual y automática.</li></ul></li><li>Prestar servicios.<ul><li>Asesoría, consultoría, diseño, desarrollo, producción.</li></ul></li><li>COproducciones.<ul><li>Sociedades con los productores.</li></ul></li></ol>"
    }
  ];

  return (
    <div className="py-8">
      <div className="py-4">
        <p style={{ textAlign: 'center' }}>RESPUESTAS A PREGUNTAS FRECUENTES</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              className="w-full text-left p-4 hover:bg-gray-200 focus:outline-none flex justify-between items-center"
              style={{ backgroundColor: '#f0f0f0' }}
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium" style={{ color: '#000000' }}>{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="p-4" style={{ backgroundColor: '#ffffff' }}>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;