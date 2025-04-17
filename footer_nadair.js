(function () {
  // Agregar Font Awesome al head si aún no está
  if (!document.querySelector("link[href*='font-awesome']")) {
    let faLink = document.createElement("link");
    faLink.rel = "stylesheet";
    faLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(faLink);
  }

  const footerHTML = `
        <div id="nadair-footer">
            <style>
                #nadair-footer h3 {
                    font-family: Montserrat, sans-serif !important;
                    font-size: 18px !important;
                    font-weight: bold !important;
                    color: #D8D4BE !important;
                }
                #nadair-footer p, #nadair-footer a {
                    font-family: Montserrat, sans-serif !important;
                    font-size: 14px !important;
                    text-decoration: none !important;
                    color: #D8D4BE !important;
                }
                #nadair-footer a:hover {
                    opacity: 0.8 !important;
                    text-decoration: none !important;
                }
            </style>

            <footer style="
                background-color: #573e6b;
                color: #B7BE99;
                padding: 30px 5%;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                font-family: Montserrat, sans-serif;
            ">
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
                            <a href="https://www.instagram.com/nadairbyostara/" target="_blank" style="font-size: 18px;">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                        <hr style="border-color: #D8D4BE; width: 80%; margin-left: 0; border-width: 1px; border-style: solid; margin-bottom: 30px;">
                    </div>

                    <!-- Parte inferior (Teléfono, mail y dirección) -->
                    <div>
                        <p><i class="fa-solid fa-phone"></i> <a href="tel:+441334477651">+44 1334 477651</a></p>
                        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:nadair@ostaralife.com">nadair@ostaralife.com</a></p>
                        <p><i class="fa-solid fa-location-dot"></i> 165 South St., St. Andrews</p>
                    </div>
                </div>

                <!-- Columna Store -->
                <div style="flex: 1; min-width: 150px; padding-left: 30px;">
                    <h3>Store</h3>
                    <p><a href="https://ostaralife.com/products/Fidget-rings-c178071367">Fidget rings</a></p>
                    <p><a href="https://ostaralife.com/products/Nadair-by-Paperchain-c178071368">Nádair by Paperchain</a></p>
                    <p><a href="https://ostaralife.com/products">Ostara</a></p>
                </div>

                <!-- Columna Ostara Life -->
                <div style="flex: 1; min-width: 150px;">
                    <h3>Nádair Life</h3>
                    <p><i class="fa-solid fa-leaf"></i> <a href="https://ostaralife.com/aboutnadair">About Us</a></p>
                    <!-- <p><i class="fa-solid fa-bullhorn"></i> <a href="http://eepurl.com/g2ZnEb">Newsletter</a></p> -->

                    <hr style="border-color: #D8D4BE; width: 75%; margin-left: 0; border-width: 1px; border-style: solid;">

                    <h3>Community</h3>
                    <p><a href="https://marielayoga.com/">Mariela Yoga</a></p>
                    <p><a href="https://ostaralife.com/events">Events</a></p>
                    <p><a href="https://beeutifulminds.ie/"></a>Beeutiful Minds</p>
                    
                </div>

                <!-- Columna Customer Care -->
                <div style="flex: 1; min-width: 150px;">
                    <h3>Customer Care</h3>
                    <p><i class="fa-solid fa-envelope-open-text"></i> <a href="mailto:nadair@ostaralife.com">Contact Us</a></p>
                    <p><i class="fa-solid fa-handshake"></i> <a href="https://ostaralife.com/deliveries">Delivery and payments</a></p>
                    <p><i class="fa-solid fa-file-contract"></i> <a href="https://ostaralife.com/privacy">Privacy Policy</a></p>
                    <p><i class="fa-solid fa-rotate"></i> <a href="https://ostaralife.com/returns">Returns and Exchange</a></p>
                </div>
            </footer>
            <div style="text-align: center; background-color: #573e6b; color: #B7BE99; padding: 10px; padding-bottom: 30px;">
                © Nádair - 2025
            </div>
        </div>
    `;

  // Insertar el footer en la página
  document.body.insertAdjacentHTML("beforeend", footerHTML);
})();
