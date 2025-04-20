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
          <div id="custom-footer">
              <style>
                  #custom-footer a {
                      color: #D8D4BE !important; /* Color correcto */
                      text-decoration: none !important; /* Quita el subrayado */
                  }
                  #custom-footer a:hover {
                      opacity: 0.8 !important;
                      text-decoration: none !important;
                  }
                  #custom-footer h3 {
                      font-family: Montserrat, sans-serif !important;
                      font-size: 18px !important;
                      font-weight: bold !important;
                      color: #D8D4BE !important;
                  }
                  #custom-footer p {
                      font-family: Montserrat, sans-serif !important;
                      font-size: 14px !important;
                      color: #D8D4BE !important;
                  }
              </style>
  
              <footer style="
                  background-color: #487262;
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
                      min-width: 250px; 
                      display: flex; 
                      flex-direction: column; 
                      justify-content: space-between; 
                      height: 100%;
                  ">
                      <div>
                          <img src="https://i.ibb.co/kzFDXdg/ostara-footer.png" 
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
                      </div>
                      <hr style="border-color: #D8D4BE; width: 75%; margin-left: 0; border-width: 1px; border-style: solid;">
                      <div style="margin-top: auto;">
                          <p><i class="fa-solid fa-phone"></i> <a href="tel:+441334477651">+44 1334 477651</a></p>
                          <p><i class="fa-solid fa-envelope"></i> <a href="mailto:info@ostaralife.com">info@ostaralife.com</a></p>
                          <p><i class="fa-solid fa-location-dot"></i> 165 South St., St. Andrews</p>
                      </div>
                  </div>
  
                  <!-- Columna Store -->
                  <div style="flex: 1; min-width: 150px; padding-left: 30px;">
                      <h3>Store</h3>
                      <p><a href="https://ostaralife.com/products">View all</a></p>
                      <p><a href="https://ostaralife.com/products/Clothing-c170554062">Clothing</a></p>
                      <p><a href="https://ostaralife.com/products/Accessories-c170551378">Accessories</a></p>
                      <p><a href="https://ostaralife.com/products/Toiletries-c170554064">Toiletries</a></p>
                      <p><a href="https://ostaralife.com/products/Gift-cards-c170553550">Gift cards</a></p>
                      <p><a href="https://ostaralife.com/products/Brands-c170551379">Brands</a></p>
                      <p><a href="https://ostaralife.com/products/New-In-c171410788">New In</a></p>
                  </div>
  
                  <!-- Columna Ostara Life y Community -->
                  <div style="
                      flex: 1; 
                      min-width: 150px; 
                      display: flex; 
                      flex-direction: column; 
                      justify-content: space-between; 
                      height: 100%;
                  ">
                      <div>
                          <h3>Ostara Life</h3>
                          <p><i class="fa-solid fa-leaf"></i> <a href="https://ostaralife.com/about-us">About Us</a></p>
                          <p><i class="fa-solid fa-bullhorn"></i> <a href="http://eepurl.com/g2ZnEb">Newsletter</a></p>
                          <p><i class="fa-solid fa-scissors"></i> <a href="https://ostaralife.com/styling">Personal Styling</a></p>
                          <hr style="border-color: #D8D4BE; width: 75%; margin-left: 0; border-width: 1px; border-style: solid;">
                      </div>
                      <div>
                          <h3>Community</h3>
                          <p><a href="https://marielayoga.com/">Mariela Yoga</a></p>
                          <p><a href="https://ostaralife.com/events">Events</a></p>
                          <p><a href="https://beeutifulminds.ie/">Beeutiful Minds</a></p>
                      </div>
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
              <div style="text-align: center; background-color: #487262; color: #B7BE99; padding: 10px; padding-bottom: 30px;">
                  © Ostara - 2025
              </div>
          </div>
      `;
  
    // Insertar el footer en la página
    document.body.insertAdjacentHTML("beforeend", footerHTML);
  })();
  
