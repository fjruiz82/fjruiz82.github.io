(function() {
    const footerHTML = `
        <footer style="
            background-color: #526B5C; /* Color de fondo */
            color: #D8D4BE; /* Color del texto */
            padding: 40px 10%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-family: Arial, sans-serif;
        ">
            <!-- Columna Izquierda (Logo y Contacto) -->
            <div style="flex: 1; min-width: 250px;">
                <img src="https://tudominio.com/logo.png" alt="Ostara" style="width: 120px; margin-bottom: 10px;">
                <p>Inspired by Nature</p>
                <div style="display: flex; gap: 10px; margin: 10px 0;">
                    <a href="#" target="_blank" style="color: #D8D4BE; text-decoration: none;">📘</a>
                    <a href="#" target="_blank" style="color: #D8D4BE; text-decoration: none;">📷</a>
                </div>
                <hr style="border-color: #D8D4BE; width: 80%;">
                <p>📞 +44 1334 477651</p>
                <p>📧 info@ostaralife.com</p>
                <p>📍 165 South St., St. Andrews</p>
            </div>

            <!-- Columna Store -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Store</h3>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">View all</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Clothing</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Accessories</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Toiletries</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Gift cards</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Brands</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">New In</a></p>
            </div>

            <!-- Columna Ostara Life -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Ostara Life</h3>
                <p>🌿 <a href="#" style="color: #D8D4BE; text-decoration: none;">About Us</a></p>
                <p>📢 <a href="#" style="color: #D8D4BE; text-decoration: none;">Newsletter</a></p>
                <p>💇 <a href="#" style="color: #D8D4BE; text-decoration: none;">Personal Styling</a></p>
                <hr style="border-color: #D8D4BE; width: 80%;">
                <h3>Community</h3>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Mariela Yoga</a></p>
                <p><a href="#" style="color: #D8D4BE; text-decoration: none;">Events</a></p>
            </div>

            <!-- Columna Customer Care -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Customer Care</h3>
                <p>📩 <a href="#" style="color: #D8D4BE; text-decoration: none;">Contact Us</a></p>
                <p>🤝 <a href="#" style="color: #D8D4BE; text-decoration: none;">Delivery and payments</a></p>
                <p>📄 <a href="#" style="color: #D8D4BE; text-decoration: none;">Privacy Policy</a></p>
                <p>🔄 <a href="#" style="color: #D8D4BE; text-decoration: none;">Returns and Exchange</a></p>
            </div>
        </footer>
        <div style="text-align: center; background-color: #526B5C; color: #D8D4BE; padding: 10px;">
            © Ostara - 2025
        </div>
    `;

    // Insertar el footer en la página
    document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
