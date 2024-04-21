const net = require('net');

function puertoDisponible(puertoInicio, puertoFinal) {
    for (let port = puertoInicio; port <= puertoFinal; port++) {
        const server = net.createServer();

        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                server.close();
            } else {
                console.error('Error inesperado al buscar el puerto', error);
            }
        });

        try {
            server.listen(port);
            server.close();
            return port; 
        } catch (error) {
            
        }
    }

    return null; 
}

module.exports = puertoDisponible;

// Ejemplo de uso
//   console.log(puertoDisponible(3000, 5000))
