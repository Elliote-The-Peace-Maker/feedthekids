// Database of South African Locations & Properties
const properties = [
    {
f1c4c750?w=400" alt="Villas">
                <h4>Villas</h4>
                <p>4,300 properties</p>
            </a>
        </div>
    </section>

        id: 1,
        name: "Berrybliss Guesthouse",
        location: "Bedfordview, Johannesburg",
 class="card-title-row">
                        <h4>Lion Sands Game Reserve</h4>
                        <div class="rating-badge    <!-- 2. Trending Destinations -->
    <section style="margin-bottom: 50px;">
        price: 750,
        oldPrice: 900,
        rating: 7.2,
        ratingText: "Good",
        reviews: 106,
        image:        <div class="section-header">
            <h3>Trending destinations</h3>
            <p style="color: var">9.6</div>
                    </div>
                    <p class="location-text">Sabi Sands, Mpumalanga</p> "https://cf.bstatic.com/xdata/images/hotel/square600/12(--text-muted);">Most popular choices for travellers from South Africa</p>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom:
                    <p class="review-summary">Exceptional · 840 reviews</p>
                    <div class="card-3.jpg", // Replace with real SA hotel images
        tags: ["Genius", "Limited Deal"],
        distance: 16px;">
            <a href="destination-detail.html?city=capetown" class="dest-badges">
                        <span class="genius-tag">Genius</span>
                        <span class="sustainable-tag"><card">
                <img src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800" alt="Cape Town">
                <div class="dest-overlay">
                    <h4>Cape Town <img src="https://flag "10.1 km from center"
    },
    {
        id: 2,
        name: "The Estuary Hotel & Spa",
        location: "Port Edward, KZN",
        price: 2106,i class="fas fa-leaf"></i> Travel Sustainable</span>
                    </div>
                    <div class="price-boxcdn.com/za.svg" class="flag-icon"></h4>
                </div>
            </a>
            <a
        oldPrice: 2340,
        rating: 7.5,
        ratingText: "Good",
        reviews: 938,
        image: "https://cf.bstatic.com/x">
                        <span class="price-label">Starting from</span>
                        <span class="price-val">ZAR 8,450</span>
                        <span class="price-sub">per night</span>
                    </div>
 href="destination-detail.html?city=durban" class="dest-card">
                <img srcdata/images/hotel/square600/456.jpg",
        tags: ["Genius                </div>
            </a>
        </div>

        <!-- Listing 2: Camps Bay -->
        <div class="booking-card">="https://images.unsplash.com/photo-1571343753734-7e5"],
        distance: "Beachfront"
    },
    // ... we will programmatically fill the rest to
            <a href="accommodation-detail.html?id=camps-bay-02">
                <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-10a581457f?w=800" alt="Durban">
                <div class="dest-overlay">
                    <h4>Durban <img src="https://flagcdn.com/za.svg" reach 100
];

// Generate 100 Property Listings for the "View All" logic
for549294413-26f195af01c1?auto=format& class="flag-icon"></h4>
                </div>
            </a>
        </div>
        <div class="grid- (let i = 3; i <= 100; i++) {
    properties.push({
        fit=crop&w=400&q=80')">
                    <span class="badge-deal">Limited Deal</span>
                </div>
                <div class="card-content">
                    <div class="3" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1id: i,
        name: `Mzansi Stay #${i} - Premier Collection`,
        location: icard-title-row">
                        <h4>Atlantic Blue Penthouse</h4>
                        <div class="rating-badge">9.2</div>6px;">
            <a href="destination-detail.html?city=joburg" class="dest- % 2 === 0 ? "Cape Town, WC" : "Sandton, GP",
        price: 
                    </div>
                    <p class="location-text">Camps Bay, Cape Town</p>
                    card" style="height: 200px;">
                <img src="https://images.unsplash.com/800 + (i * 10),
        rating: (Math.random() * (9.<p class="review-summary">Superb · 1,120 reviews</p>
                    <div class="photo-1549417229-aa67d3263c09?w=69 - 7.0) + 7.0).toFixed(1),
        ratingText: i % 5card-badges">
                        <span class="genius-tag">Genius</span>
                    </div>
                    <div class="price-box">
                        <span class="old-price">ZAR 5,200</span>
                        <00" alt="Joburg">
                <div class="dest-overlay"><h4>Johannesburg</h4></div>
 === 0 ? "Exceptional" : "Very Good",
        reviews: Math.floor(Math.random() * 2000),
        image: `https://picsum.photos/400/span class="price-val">ZAR 3,900</span>
                        <span class="price-sub">Includes taxes</span>
                    </div>
                </div>
            </a>
        </div>

        <!-- Listing 3: Umhlanga Beach            </a>
            <a href="destination-detail.html?city=knysna" class="dest-card" style="height: 200px;">
                <img src="https://images.unsplash.com/photo-1300?random=${i}`,
        tags: i % 3 === 0 ? ["Genius"] -->
        <div class="booking-card">
            <a href="accommodation-detail.html?id : [],
        distance: `${(Math.random() * 5).toFixed(1)} km from center`
    =umhlanga-03">
                <div class="card-img" style="background-image505994218641-da44866d1df2?w=600});
}

const destinations = [
    { name: "Cape Town", flag: "🇿🇦", img: "https://images: url('https://images.unsplash.com/photo-152025049759" alt="Knysna">
                <div class="dest-overlay"><h4>Knysna</h4></div>
.unsplash.com/photo-1580060839134-75a5edca2e99" },
    { name: "Durban", flag: "🇿🇦", img: "https1-112f2f40a3f4?auto=format&fit=crop&w            </a>
            <a href="destination-detail.html?city=kruger" class="dest-card" style="height: 200px;">
                <img src="https://images.unsplash.com/photo-1=400&q=80')"></div>
                <div class="card-content">
                    ://images.unsplash.com/photo-1552034057-0466<div class="card-title-row">
                        <h4>The Oyster Box</h4>
                        <div class="rating-badge">9.8</div>
                    </div>
                    <p class="location-text">Umhlanga, Durban</p>
                    <p class="review-summary">Exceptional · 2,450 reviews</p>
                    <div1858806c" },
    { name: "Johannesburg", flag: "🇿🇦", img516426122078-c23e76319801: "https://images.unsplash.com/photo-1549117136-2 class="price-box">
                        <span class="price-val">ZAR 6,100</span>
                        <span class="price-sub">Breakfast included</span>
                    </div>
                </div>
            </a>
        </div>

        <!-- Listing?w=600" alt="Kruger">
                <div class="dest-overlay"><h4>2442475e52c" },
    { name: "Pretoria", flag 4: Sandton City -->
        <div class="booking-card">
            <a href="accommodationKruger Park</h4></div>
            </a>
        </div>
    </section>

    <!-- 3. Homes Guests Love (The Data-Rich Cards) -->
    <section style="margin-bottom: 50px;">
        <div class="section-header">
            <h3>Homes guests love</h3>
            <a href="accommodations.html" style=": "🇿🇦", img: "https://images.unsplash.com/photo-1542385151-detail.html?id=sandton-04">
                <div class="card-img" style-efd9000785a0" },
    { name: "Bloemfontein",color: #006ce4; font-weight: 600; font-size: 14px="background-image: url('https://images.unsplash.com/photo-15660737712 flag: "🇿🇦", img: "https://images.unsplash.com/photo-1623067812030-998818f4a0a5" }
];

// R;">Review all properties →</a>
        </div>
        <div class="grid-4">
            
            <!-- Listing 59-6a8506099945?auto=format&fit=crop&w=400&q=80')"></div>
                <div class="card-content">
ENDER FUNCTIONS
function renderHomeListings() {
    const grid = document.getElementById('homes-guests-love');1 -->
            <div class="property-card" style="background: white; border-radius: var(--                    <div class="card-title-row">
                        <h4>The Leonardo Sandton</h4>
                        <div class="rating-badge">radius); border: 1px solid var(--border-color); overflow: hidden;">
                <a href="accommodation-detail9.1</div>
                    </div>
                    <p class="location-text">Sandton, Johannesburg</p>

    // Just show the first 4 on the homepage
    const homeSubset = properties.slice(0, 4); .html?id=101">
                    <img src="https://images.unsplash.com/photo                    <p class="review-summary">Wonderful · 3,800 reviews</p>
                    <div class="
    
    grid.innerHTML = homeSubset.map(prop => `
        <div class="property-card"price-box">
                        <span class="price-val">ZAR 2,800</span>
                    </div>
                </div>
            </a>
        </div>

    </div>
</section>
The CSS for High- onclick="window.location.href='accommodation-detail.html?id=${prop.id}'" style="cursor:pointer-1542314831-068cd1dbfeeb?w=400Density Grid & Styling
Add this to your style.css to handle the complex layout and the Ecoverde/Booking blend">
<div style="position: relative;">
<img src="${prop.img || 'https://images.unsplash.com/photo-1566073771259-6a85060" style="width: 100%; height: 180px; object-fit: cover;">
:
code
CSS
/* Section Spacing */
.section-margin { margin-top: 50px; margin-bottom99945'}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px 8px 0 0;">
                <</a>
                <div style="padding: 12px;">
                    <h4 style="font-size: 50px; }

.section-header h3 { font-size: 24px; margin-bottombutton class="heart-btn" style="position: absolute; top: 10px; right: 10px; background: white; border: none; border-radius: 50%; width: 30px; height: : 15px;"><a href="accommodation-detail.html?id=101">The Twelve Apostles Hotel</a></h4>
                    <p style="font-size: 13px; color: var(--text-muted);">Oudekra: 5px; }
.section-header p { color: var(--text-muted); margin-bottom30px;"><i class="far fa-heart"></i></button>
            </div>
            <div style="padding: 12px; border: 1px solid #e7e7e7; border-top: none;al, Cape Town</p>
                    <div style="display: flex; align-items: center; gap: 6px; margin: 8px 0;">
                        <span class="rating-box">9.2</span>: 25px; }

/* Destinations Grid (Booking.com style) */
.destinations-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-
                        <span style="font-size: 13px; font-weight: 600;">Superb</span>
                         border-radius: 0 0 8px 8px;">
                <h4 style="font-rows: repeat(2, 200px);
    gap: 15px;
}
.dest-card {
    position: relative;
    background-size: cover;
    background-position: center<span style="font-size: 12px; color: var(--text-muted);">• 2,41size: 15px; color: #003580;">${prop.name}</h4>
                <p style;
    border-radius: 8px;
    overflow: hidden;
}
.dest-card="font-size: 12px; color: #6a6a6a;">${prop.location}</0 reviews</span>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 4px; margin-bottom: 10px;">
                        <span class="badge-genius">Genius</span>
                        <span style.large { grid-column: span 3; }
.dest-card.small { grid-column: span 2; }p>
                <div style="display: flex; align-items: center; gap: 8px; margin="font-size: 11px; border: 1px solid var(--primary-green); color: var(--primary-
.dest-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(0,0: 8px 0;">
                    <span style="background: var(--navy-blue); color: whitegreen); padding: 1px 4px; border-radius: 3px;">Sustainable</span>
                    </div>
                    <div style="text-align: right;">
                        <p class="urgency-tag">Only 2,0,0.8));
    color: white;
}
.mini-flag { width: ; padding: 2px 6px; border-radius: 4px; font-weight: bold; font-size: 12px;">${prop.rating}</span>
                    <span style="font-size: 12px rooms left!</p>
                        <p style="font-size: 13px; color: var(--text-muted);">Starting from</p>
                        <p style="font-size: 18px; font-weight:20px; vertical-align: middle; margin-left: 8px; }

/* Property Types (Ecoverde Style) */
.property-types {
    display: flex;
    gap: 15px;
    overflow; font-weight: bold;">${prop.ratingText}</span>
                    <span style="font-size: 12px; color: #6a6a6a;">${prop.reviews} reviews</span>
                </div>
                ${ 700; color: var(--navy-blue);">ZAR 4,250</p>
                    -x: auto;
}
.type-item {
    flex: 0 0 23prop.tags.includes('Genius') ? '<span class="badge-genius" style="font-size:1</div>
                </div>
            </div>

            <!-- Listing 2 (Safari Lodge) -->
            <div class="property-card" style="background: white; border-radius: var(--radius); border: 1px solid var(--border-0px;
    text-align: center;
}
.type-item img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 0px">Genius</span>' : ''}
                <div style="text-align: right; margin-top: 10px;">
                    <p style="font-size: 12px; color: #6a6a6a;">color); overflow: hidden;">
                <a href="accommodation-detail.html?id=102">
                    <img src="https://images.unsplash.com/photo-1516426122078px;
    margin-bottom: 10px;
}
.type-item span { font-weight: Starting from</p>
                    <p style="font-size: 18px; font-weight: bold8-c23e76319801?w=400" style="width700; color: var(--navy-blue); }

/* The Data-Rich Listing Card */
.listing-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.booking-card {
    background: white;
    border:; color: var(--navy-blue);">ZAR ${prop.price.toLocaleString()}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function renderDestinations() {
    const grid = document.getElementById('trending-destinations');
    grid.innerHTML = destinations.map(dest => `
        <div: 100%; height: 180px; object-fit: cover;">
                </a>
 class="destination-card" onclick="window.location.href='accommodations.html?city=${dest. 1px solid var(--border-color);
    border-radius: 8px;
    transition:                <div style="padding: 12px;">
                    <h4 style="font-size: 15px;"><a href="accommodation-detail.html?id=102">Kapama River Lodge</a></h4>
                    <name}'">
            <img src="${dest.img}" alt="${dest.name}">
            <div class=" transform 0.2s;
}
.booking-card:hover { transform: translateY(-5px); box-shadow: varp style="font-size: 13px; color: var(--text-muted);">Kruger Parkdest-overlay">
                <h4>${dest.name} ${dest.flag}</h4>
            </div>
        </div>(--shadow-md); }

.card-img {
    height: 180px;
     Area</p>
                    <div style="display: flex; align-items: center; gap: 6
    `).join('');
}

// Initial Run
window.onload = () => {
    renderHomeListings();
    renderbackground-size: cover;
    background-position: center;
    position: relative;
}
.card-content { padding: 12px; }
.card-title-row { display: flex; justify-contentpx; margin: 8px 0;">
                        <span class="rating-box">9.6</span>
                        <span style="font-size: 13px; font-weight: 600;">Exceptional</span>Destinations();
};