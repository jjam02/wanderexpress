class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>  
            <a href="/index.html">
                <img src="/logoNav.png" alt="Travel Express" width="187" height="150">
            </a>
            <div class="centerText">
                <h6>
                    Wander Express
                </h6> 
                <nav>
                    <div class="dropdown">
                        <div class="dropbtn">Credit Cards</div>
                        <div class="dropdown-content">
                        <a href="/Credit_Card/Amex.html">American Express</a>
                        <a href="/Credit_Card/BoA.html">Bank of America</a>
                        <a href="/Credit_Card/C1.html">Capital One</a>
                        <a href="/Credit_Card/Chase.html">Chase</a>
                        <a href="/Credit_Card/Citi.html">Citi</a>
                        <a href="/Credit_Card/USBank.html">US Bank</a>
                        <a href="/Credit_Card/WF.html">Wells Fargo</a>
                        <a href="/Credit_Card/Other.html">Other</a>
                        </div>
                    </div>
                
                    <a href="/Travel_Review.html">Travel Reviews</a> 
                    
                    <div class="dropdown">
                        <div class="dropbtn">Airlines</div>
                        <div class="dropdown-content">
                            <a href="/Airlines/AS.html">Alaska</a>
                            <a href="/Airlines/AA.html">American</a>
                            <a href="/Airlines/DL.html">Delta</a>
                            <a href="/Airlines/UA.html">United</a>
                            <a href="/Airlines/AC.html">Air Canada</a>
                            <a href="/Airlines/IAG.html">IAG/Avios</a>
                            <a href="/Airlines/AFKLM.html">Air France/KLM</a>
                            <a href="/Airlines/ANA.html">ANA</a>
                            <a href="/Airlines/EVA.html">EVA</a>
                        </div>
                    </div>
                    
                    <div class="dropdown">
                        <div class="dropbtn">Hotels</div>
                        <div class="dropdown-content">
                            <a href="/Hotels/Choice.html">Choice</a>
                            <a href="/Hotels/Hilton.html">Hilton</a>
                            <a href="/Hotels/Hyatt.html">Hyatt</a>
                            <a href="/Hotels/IHG.html">IHG</a>
                            <a href="/Hotels/Marriott.html">Marriott</a>
                            <a href="/Hotels/Wyndham.html">Wyndham</a>
                        </div>
                    </div>
                    <a href="/Flight_Sweetspots.html">Flight SweetSpots</a>
                    <a href="/Tierlist.html">Tierlist</a>
                    <a href="/News_Archive.html">News Archive</a>
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