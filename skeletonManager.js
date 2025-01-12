class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>  
            <a href="C:/Users/Thomas/Downloads/Blog Website/index.html">
                <img src="C:/Users/Thomas/Downloads/Blog Website/logoNav.png" alt="Travel Express" width="187" height="150">
            </a>
            <div class="centerText">
                <h6>
                    Wander Express
                </h6> 
                <nav>
                    <div class="dropdown">
                        <div class="dropbtn">Credit Cards</div>
                        <div class="dropdown-content">
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/Amex.html">American Express</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/BoA.html">Bank of America</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/C1.html">Capital One</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/Chase.html">Chase</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/Citi.html">Citi</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/USBank.html">US Bank</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/WF.html">Wells Fargo</a>
                        <a href="C:/Users/Thomas/Downloads/Blog Website/Credit_Card/Other.html">Other</a>
                        </div>
                    </div>
                
                    <a href="C:/Users/Thomas/Downloads/Blog Website/Travel_Review.html">Travel Reviews</a> 
                    
                    <div class="dropdown">
                        <div class="dropbtn">Airlines</div>
                        <div class="dropdown-content">
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/AS.html">Alaska</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/AA.html">American</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/DL.html">Delta</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/UA.html">United</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/AC.html">Air Canada</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/IAG.html">IAG/Avios</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/AFKLM.html">Air France/KLM</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/ANA.html">ANA</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Airlines/EVA.html">EVA</a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <div class="dropbtn">Hotels</div>
                        <div class="dropdown-content">
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/Choice.html">Choice</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/Hilton.html">Hilton</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/Hyatt.html">Hyatt</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/IHG.html">IHG</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/Marriott.html">Marriott</a>
                            <a href="C:/Users/Thomas/Downloads/Blog Website/Hotels/Wyndham.html">Wyndham</a>
                        </div>
                    </div>
                    <a href="C:/Users/Thomas/Downloads/Blog Website/Flight_Sweetspots.html">Flight SweetSpots</a>
                    <a href="C:/Users/Thomas/Downloads/Blog Website/Tierlist.html">Tierlist</a>
                    <a href="C:/Users/Thomas/Downloads/Blog Website/News_Archive.html">News Archive</a>
                </nav> 
            </div>
            </header> 
        `
    }
}

class footBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer> 
            <p>© 2023 Travel Train. All rights reserved.</p> 
        </footer> 
        `
    }
}

customElements.define('nav-bar', navBar)
customElements.define('foot-bar', footBar)