(function() {
    const footerHTML = `
        <footer style="
            background-color: #573e6b; /* Color de fondo */
            color: #B7BE99; /* Color del texto */
            padding: 40px 10%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-family: Montserrat, sans-serif;
        ">
            <!-- Columna Izquierda (Logo y Contacto) -->
            <div style="flex: 1; min-width: 250px;">
                <img src="https://i.ibb.co/3YRygjVB/Nadair-Logo-Wide-Light-Purple.png" alt="NadairLogo" style="width: 120px; margin-bottom: 10px;">
                <p>Inspired by Nature</p>
                <div style="display: flex; gap: 10px; margin: 10px 0;">
                    <a href="https://www.facebook.com/OstaraStAndrews/" target="_blank" style="color: #D8D4BE; text-decoration: none;">📘</a>
                    <a href="https://www.instagram.com/ostara_life/" target="_blank" style="color: #D8D4BE; text-decoration: none;">📷</a>
                </div>
                <hr style="border-color: #D8D4BE; width: 80%;">
                <p>📞 +44 1334 477651</p>
                <p>📧 info@ostaralife.com</p>
                <p>📍 165 South St., St. Andrews</p>
            </div>

            <!-- Columna Store -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Store</h3>
                <p><a href="https://ostaralife.com/products" style="color: #D8D4BE; text-decoration: none;">View all</a></p>
                <p><a href="https://ostaralife.com/products/Clothing-c170554062" style="color: #D8D4BE; text-decoration: none;">Clothing</a></p>
                <p><a href="https://ostaralife.com/products/Accessories-c170551378" style="color: #D8D4BE; text-decoration: none;">Accessories</a></p>
                <p><a href="https://ostaralife.com/products/Toiletries-c170554064" style="color: #D8D4BE; text-decoration: none;">Toiletries</a></p>
                <p><a href="https://ostaralife.com/products/Gift-cards-c170553550" style="color: #D8D4BE; text-decoration: none;">Gift cards</a></p>
                <p><a href="https://ostaralife.com/products/Brands-c170551379" style="color: #D8D4BE; text-decoration: none;">Brands</a></p>
                <p><a href="https://ostaralife.com/products/New-In-c171410788" style="color: #D8D4BE; text-decoration: none;">New In</a></p>
            </div>

            <!-- Columna Ostara Life -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Ostara Life</h3>
                <p>🌿 <a href="https://ostaralife.com/about-us" style="color: #D8D4BE; text-decoration: none;">About Us</a></p>
                <p>📢 <a href="http://eepurl.com/g2ZnEb" style="color: #D8D4BE; text-decoration: none;">Newsletter</a></p>
                <p>💇 <a href="https://ostaralife.com/styling" style="color: #D8D4BE; text-decoration: none;">Personal Styling</a></p>
                <hr style="border-color: #D8D4BE; width: 80%;">
                <h3>Community</h3>
                <p><a href="https://marielayoga.com/" style="color: #D8D4BE; text-decoration: none;">Mariela Yoga</a></p>
                <p><a href="https://ostaralife.com/events" style="color: #D8D4BE; text-decoration: none;">Events</a></p>
            </div>

            <!-- Columna Customer Care -->
            <div style="flex: 1; min-width: 150px;">
                <h3 style="margin-bottom: 10px;">Customer Care</h3>
                <p>📩 <a href="mailto:info@ostaralife.com" style="color: #D8D4BE; text-decoration: none;">Contact Us</a></p>
                <p>🤝 <a href="https://ostaralife.com/deliveries" style="color: #D8D4BE; text-decoration: none;">Delivery and payments</a></p>
                <p>📄 <a href="https://ostaralife.com/privacy" style="color: #D8D4BE; text-decoration: none;">Privacy Policy</a></p>
                <p>🔄 <a href="https://ostaralife.com/returns" style="color: #D8D4BE; text-decoration: none;">Returns and Exchange</a></p>
            </div>
        </footer>
        <div style="text-align: center; background-color: #526B5C; color: #B7BE99; padding: 10px;">
            © Ostara - 2025
        </div>
    `;

    // Insertar el footer en la página
    document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
