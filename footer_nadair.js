(function() {
    // Agregar Font Awesome al head si aún no está
    if (!document.querySelector("link[href*='font-awesome']")) {
        let faLink = document.createElement("link");
        faLink.rel = "stylesheet";
        faLink.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
        document.head.appendChild(faLink);
    }

    const footerHTML = `
        <footer style="
            background-color: #573e6b;
            color: #B7BE99;
            padding: 40px 5%;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            font-family: Montserrat, sans-serif;
        ">
            <style>
                footer h3 {
                    font-family: Montserrat, sans-serif;
                    font-size: 18px;
                    font-weight: bold;
                }
                footer p, footer a {
                    font-family: Montserrat, sans-serif;
                    font-size: 14px;
                    text-decoration: none;
                    color: #D8D4BE;
                }
                footer a:hover {
                    opacity: 0.8;
                }
            </style>

            <!-- Columna Izquierda (Logo y Contacto) -->
            <div style="
                flex: 1; 
                min-width: 300px; 
                display: flex; 
                flex-direction: column; 
                justify-content: space-between; 
                height: 100%;
            ">
                <!-- Parte superior -->
                <div>
                    <img src="https://i.ibb.co/fzgWYhj2/Nadair-footer.png" 
                         alt="NadairLogo" 
                         style="width: 85%; margin-bottom: 2px;">
                    <p>Inspired by Nature</p>
                    <div style="display: flex; gap: 15px; margin: 10px 0;">
                        <a href="https://www.facebook.com/OstaraStAndrews/" target="_blank" style="font-size: 18px;">
                            <i class="fa-brands fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/ostara_life/" target="_blank" style="font-size: 18px;">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <hr style="border-color: #D8D4BE; width: 80%; margin-left: 0; border-width: 1px; border-style: solid; margin-bottom: 30px;">
                </div>

                <!-- Parte inferior (Teléfono, mail y dirección) -->
                <div>
                    <p><i class="fa-solid fa-phone"></i> +44 1334 477651</p>
                    <p><i class="fa-solid fa-envelope"></i> info@ostaralife.com</p>
                    <p><i class="fa-solid fa-location-dot"></i> 165 South St., St. Andrews</p>
                </div>
            </div>

            <!-- Columna Store -->
            <div style="flex: 1; min-width: 120px;">
                <h3>Store</h3>
                <p><a href="https://ostaralife.com/products">View all</a></p>
                <p><a href="https://ostaralife.com/products/Clothing-c170554062">Clothing</a></p>
                <p><a href="https://ostaralife.com/products/Accessories-c170551378">Accessories</a></p>
                <p><a href="https://ostaralife.com/products/Toiletries-c170554064">Toiletries</a></p>
                <p><a href="https://ostaralife.com/products/Gift-cards-c170553550">Gift cards</a></p>
                <p><a href="https://ostaralife.com/products/Brands-c170551379">Brands</a></p>
                <p><a href="https://ostaralife.com/products/New-In-c171410788">New In</a></p>
            </div>

            <!-- Columna Ostara Life -->
            <div style="flex: 1; min-width: 150px;">
                <h3>Ostara Life</h3>
                <p><i class="fa-solid fa-leaf"></i> <a href="https://ostaralife.com/about-us">About Us</a></p>
                <p><i class="fa-solid fa-bullhorn"></i> <a href="http://eepurl.com/g2ZnEb">Newsletter</a></p>
                <p><i class="fa-solid fa-scissors"></i> <a href="https://ostaralife.com/styling">Personal Styling</a></p>

                <hr style="border-color: #D8D4BE; width: 80%; margin-left: 0; border-width: 1px; border-style: solid;">

                <h3>Community</h3>
                <p><a href="https://marielayoga.com/">Mariela Yoga</a></p>
                <p><a href="https://ostaralife.com/events">Events</a></p>
            </div>

            <!-- Columna Customer Care -->
            <div style="flex: 1; min-width: 150px;">
                <h3>Customer Care</h3>
                <p><i class="fa-solid fa-envelope-open-text"></i> <a href="mailto:info@ostaralife.com">Contact Us</a></p>
                <p><i class="fa-solid fa-handshake"></i> <a href="https://ostaralife.com/deliveries">Delivery and payments</a></p>
                <p><i class="fa-solid fa-file-contract"></i> <a href="https://ostaralife.com/privacy">Privacy Policy</a></p>
                <p><i class="fa-solid fa-rotate"></i> <a href="https://ostaralife.com/returns">Returns and Exchange</a></p>
            </div>
        </footer>
        <div style="text-align: center; background-color: #573e6b; color: #B7BE99; padding: 10px;">
            © Nádair - 2025
        </div>
    `;

    // Insertar el footer en la página
    document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
