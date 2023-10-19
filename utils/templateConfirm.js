

const templateConfirm = (data) => {
 
    const { user, nights, adults, kids, rooms, priceNight, price, category } = data
    const fecha = new Date()
    const fechaActual = fecha.toLocaleDateString();
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Factura de Reserva</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                .invoice {
                    width: 80%;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ccc;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                .invoice h1 {
                    text-align: center;
                }
                .invoice-details {
                    text-align: right;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    text-align: left;
                    border-bottom: 1px solid #ddd;
                }
            </style>
        </head>
        <body>
            <h1>Hola ${user.name}, ¡Gracias por confiar en Rolling Gran Hotel! </h1>
            <br/>
            <p>
            A continuación le enviamos la factura con la información de su reserva.</p>
            <br />
            <div class="invoice">
                <h1>Factura de Reserva</h1>
                <div class="invoice-details">
                    <p><strong>Fecha de Emisión:</strong>${fechaActual}</p>
                    <p><strong>Número de Factura:</strong> 123456</p>
                </div>
                <p><strong>Cliente:</strong>${user.name}</p>
                <p><strong>DNI:</strong>${user.dni}</p>

                <h2>Detalles de la Reserva</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Habitación</th>
                            <th>Cantidad de noches</th>
                            <th>Cantidad de habitaciones</th>
                            <th>Adultos</th>
                            <th>Niños</th>
                            <th>Precio/noche</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${category.title}</td>
                            <td>${nights}</td>
                            <td>${rooms}</td>
                            <td>${adults}</td>
                            <td>${kids}</td>
                            <td>$${priceNight}</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Total</h2>
                <p><strong>Total a Pagar:</strong>$${price}</p>
            </div>
            <p>
            Si tiene una pregunta general sobre su estadía en Rolling Gran Hotel, le invitamos a explorar nuestro sitio web <a href="https://rolling-hotel.netlify.app/">RollinGranHotel</a> para ver información más detallada al respecto.</p>
            <br />
            <span>¡Esperamos verlo pronto!</span>
            <span>Gracias, equipo RollinGranHotel</span>
        </body>
        </html>
    `
}

module.exports = templateConfirm