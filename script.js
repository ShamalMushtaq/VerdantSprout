/* --------------------------------------------------------------------
   PRODUCT CATALOG
   Static product data. In a real backend this would come from an API,
   but for this static site it's hardcoded here.
   -------------------------------------------------------------------- */
        const products = [
            {
                id: 1,
                title: "Monstera Deliciosa",
                category: "Beginner Friendly",
                light: "Bright Indirect Light",
                water: "Moderate Water",
                price: 38.00,
                rating: 4.9,
                reviews: 46,
                stock: 14,
                image: "Images/Monstera Deliciosa.jpg",
                description: "Famous for its natural leaf holes, this tropical classic brings an instant jungle vibe to any interior space while requiring minimal oversight."
            },
            {
                id: 2,
                title: "Calathea Ornata",
                category: "Pet Safe",
                light: "Low Light, High Humidity",
                water: "High Water Control",
                price: 29.50,
                rating: 4.7,
                reviews: 28,
                stock: 6,
                image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600",
                description: "Striking pinstripe foliage that folds gracefully in the evening hours. Completely safe for curious cats and dogs to share your home."
            },
            {
                id: 3,
                title: "Fiddle Leaf Fig",
                category: "Low Light",
                light: "Direct Sunlight Corner",
                water: "Low Water Cycle",
                price: 54.00,
                rating: 4.6,
                reviews: 51,
                stock: 3,
                image: "Images/Fiddle Leaf Fig.jpg",
                description: "An architectural masterpiece featuring large, violin-shaped glossy leaves. Perfect focal point for well-lit urban living rooms."
            },
            {
                id: 4,
                title: "Snake Plant Laurentii",
                category: "Beginner Friendly",
                light: "Any Light Condition",
                water: "Drought Tolerant",
                price: 24.00,
                rating: 5.0,
                reviews: 63,
                stock: 22,
                image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&q=80&w=600",
                description: "Virtually indestructible succulent featuring striking yellow-bordered upright sword leaves. Excellent natural air purifying traits."
            },
            {
                id: 5,
                title: "Peace Lily 'Sensation'",
                category: "Pet Safe",
                light: "Low to Medium Shade",
                water: "Moist Soil Friendly",
                price: 32.00,
                rating: 4.8,
                reviews: 39,
                stock: 0,
                image: "Images/Peace Lily Sensation.jpg",
                description: "Dark glossy green leaves accompanied by pristine white blooms. Known for outstanding indoor pollutant filtering efficiency."
            },
            {
                id: 6,
                title: "Golden Pothos",
                category: "Low Light",
                light: "Low Light Resilient",
                water: "Moderate Care",
                price: 18.50,
                rating: 4.9,
                reviews: 71,
                stock: 18,
                image: "Images/Golden Pothos.jpg",
                description: "Cascading vines with heart-shaped golden-variegated leaves. A hardy houseplant that thrives almost anywhere you place it."
            },
            {
                id: 7,
                title: "ZZ Plant",
                category: "Low Light",
                light: "Low Light Tolerant",
                water: "Drought Tolerant",
                price: 27.00,
                rating: 4.9,
                reviews: 58,
                stock: 16,
                image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&q=80&w=600",
                description: "Glossy, wax-like leaves on upright stems that barely need any attention. Nearly impossible to kill, even for the busiest plant parent."
            },
            {
                id: 8,
                title: "Spider Plant",
                category: "Pet Safe",
                light: "Bright Indirect Light",
                water: "Moderate Water",
                price: 19.00,
                rating: 4.8,
                reviews: 44,
                stock: 20,
                image: "Images/Spider Plant.jpg",
                description: "Arching variegated foliage that sends out playful baby 'spiderettes' on long stems. A completely pet-friendly classic for hanging baskets."
            },
            {
                id: 9,
                title: "Rubber Plant 'Burgundy'",
                category: "Beginner Friendly",
                light: "Bright Indirect Light",
                water: "Moderate Water",
                price: 42.00,
                rating: 4.7,
                reviews: 33,
                stock: 9,
                image: "https://images.unsplash.com/photo-1591958911259-bee2173bdccc?auto=format&fit=crop&q=80&w=600",
                description: "Deep burgundy, glossy leaves on a sturdy upright stem that quickly becomes a striking statement piece in any bright corner."
            },
            {
                id: 10,
                title: "Boston Fern",
                category: "Pet Safe",
                light: "Medium Indirect Light",
                water: "High Water Control",
                price: 22.50,
                rating: 4.5,
                reviews: 21,
                stock: 11,
                image: "Images/Boston Fern.jpg",
                description: "Lush, feathery fronds that thrive in humid bathrooms and shaded corners. Naturally safe around curious pets and children."
            },
            {
                id: 11,
                title: "String of Pearls",
                category: "Low Light",
                light: "Bright Indirect Light",
                water: "Drought Tolerant",
                price: 21.00,
                rating: 4.6,
                reviews: 27,
                stock: 4,
                image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&q=80&w=600",
                description: "Delicate trailing vines dotted with bead-like succulent leaves. A charming addition to shelves and hanging planters alike."
            },
            {
                id: 12,
                title: "Areca Palm",
                category: "Beginner Friendly",
                light: "Bright Indirect Light",
                water: "Moderate Water",
                price: 46.00,
                rating: 4.8,
                reviews: 35,
                stock: 7,
                image: "Images/Areca Palm.jpg",
                description: "Feathery, tropical fronds that instantly soften a room and add gentle height. A natural humidifier for dry indoor air."
            }
        ];

        let cart = [];
        let wishlist = [];
        let recentlyViewed = [];
        let currentModalProduct = null;
        let selectedPotName = 'Nursery Pot';
        let selectedPotPrice = 0;
        let discountMultiplier = 1;

        // Dark Mode Logic
        const themeToggleBtn = document.getElementById('themeToggleBtn');
        const themeIcon = document.getElementById('themeIcon');
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            if(currentTheme === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                themeIcon.className = 'fa-solid fa-sun';
            }
        });

        // Quiz Logic
        function runQuiz(category) {
            document.querySelectorAll('.filter-btn').forEach(b => {
                if(b.getAttribute('data-filter') === category) b.click();
            });
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
            showToast(`Quiz matched! Filtered by: ${category}`);
        }

        const productsGrid = document.getElementById('productsGrid');
        const filterBtns = document.querySelectorAll('.filter-btn');
        const searchInput = document.getElementById('searchInput');

        const cartDrawer = document.getElementById('cartDrawer');
        const cartOverlay = document.getElementById('cartOverlay');
        const openCartBtn = document.getElementById('openCartBtn');
        const closeCartBtn = document.getElementById('closeCartBtn');
        const cartItemsContainer = document.getElementById('cartItemsContainer');
        const cartTotalPrice = document.getElementById('cartTotalPrice');
        const cartCount = document.querySelector('.cart-count');

        const wishlistDrawer = document.getElementById('wishlistDrawer');
        const wishlistOverlay = document.getElementById('wishlistOverlay');
        const openWishlistBtn = document.getElementById('openWishlistBtn');
        const closeWishlistBtn = document.getElementById('closeWishlistBtn');
        const wishlistItemsContainer = document.getElementById('wishlistItemsContainer');
        const wishlistCount = document.getElementById('wishlistCount');

        const productModal = document.getElementById('productModal');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modalImg = document.getElementById('modalImg');
        const modalBadge = document.getElementById('modalBadge');
        const modalTitle = document.getElementById('modalTitle');
        const modalPrice = document.getElementById('modalPrice');
        const modalDesc = document.getElementById('modalDesc');
        const modalAddToCart = document.getElementById('modalAddToCart');

        const checkoutModal = document.getElementById('checkoutModal');
        const checkoutBtn = document.getElementById('checkoutBtn');
        const toastNotification = document.getElementById('toastNotification');

        function renderProducts(items) {
            productsGrid.innerHTML = '';
            if(items.length === 0) {
                productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 3rem 0;">No organic plants match your selection.</p>`;
                return;
            }
            
            items.forEach(product => {
                const isWishlisted = wishlist.some(item => item.id === product.id);
                const fullStars = Math.round(product.rating);
                const starsHtml = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
                let stockHtml;
                if(product.stock === 0) {
                    stockHtml = `<span class="stock-badge out-stock">Out of Stock</span>`;
                } else if(product.stock <= 5) {
                    stockHtml = `<span class="stock-badge low-stock">Only ${product.stock} left</span>`;
                } else {
                    stockHtml = `<span class="stock-badge in-stock">In Stock</span>`;
                }
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
                    <div class="product-img-box" onclick="openModal(${product.id})">
                        <span class="badge-tag">${product.category}</span>
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist(${product.id})" title="Save to Wishlist">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                    <div class="product-details">
                        <div class="product-meta">
                            <span>${product.light.split(',')[0]}</span> • <span>${product.water.split(' ')[0]} Water</span>
                        </div>
                        <a class="product-title" onclick="openModal(${product.id})">${product.title}</a>
                        <div class="rating-row"><span class="stars">${starsHtml}</span> ${product.rating.toFixed(1)} (${product.reviews}) &nbsp;${stockHtml}</div>
                        <p class="product-description">${product.description}</p>
                        <div class="product-footer">
                            <span class="price">$${product.price.toFixed(2)}</span>
                            <button class="quick-add" onclick="quickAddToCart(${product.id})" title="Add to Bag" ${product.stock === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                `;
                productsGrid.appendChild(card);
            });
        }

        const sortSelect = document.getElementById('sortSelect');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                filterAndSearch(btn.getAttribute('data-filter'), searchInput.value);
            });
        });

        searchInput.addEventListener('input', (e) => {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            filterAndSearch(activeFilter, e.target.value);
        });

        sortSelect.addEventListener('change', () => {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            filterAndSearch(activeFilter, searchInput.value);
        });

        function filterAndSearch(filter, query) {
            let filtered = products;
            if(filter !== 'all') filtered = filtered.filter(p => p.category === filter);
            if(query.trim() !== '') {
                const q = query.toLowerCase();
                filtered = filtered.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
            }
            const sortVal = sortSelect ? sortSelect.value : 'default';
            filtered = [...filtered];
            if(sortVal === 'price-asc') filtered.sort((a, b) => a.price - b.price);
            else if(sortVal === 'price-desc') filtered.sort((a, b) => b.price - a.price);
            else if(sortVal === 'rating-desc') filtered.sort((a, b) => b.rating - a.rating);
            renderProducts(filtered);
        }

        // Mobile Menu Logic
        const menuToggleBtn = document.getElementById('menuToggleBtn');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        const mobileNavPanel = document.getElementById('mobileNavPanel');

        function openMobileNav() {
            mobileNavOverlay.classList.add('active');
            mobileNavPanel.classList.add('active');
        }
        function closeMobileNav() {
            mobileNavOverlay.classList.remove('active');
            mobileNavPanel.classList.remove('active');
        }
        menuToggleBtn.addEventListener('click', openMobileNav);
        mobileNavOverlay.addEventListener('click', closeMobileNav);
        mobileNavPanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileNav));

        // FAQ Accordion
        function toggleFaq(el) {
            const item = el.parentElement;
            const wasOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
            if(!wasOpen) item.classList.add('open');
        }

        // Blog Modal
        const blogPosts = {
            1: {
                tag: "Care Guide",
                title: "When (and How) To Repot Your Plant",
                image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&q=80&w=800",
                body: `<p>The clearest sign your plant needs a new home is roots circling the drainage hole or poking out the top of the soil. Growth slowing down even in the growing season, and water running straight through the pot without being absorbed, are other giveaways.</p>
                       <p>Choose a pot only 1-2 inches wider than the current one — going too big holds excess moisture and can lead to root rot. Water the plant a day before repotting so the rootball slides out cleanly, gently loosen the outer roots, and settle it into fresh, well-draining potting mix.</p>
                       <p>Skip fertilizing for about four weeks afterward to let the roots settle, and keep the plant out of direct harsh sun while it recovers from the move.</p>`
            },
            2: {
                tag: "Troubleshooting",
                title: "Yellow Leaves? Here's What They're Telling You",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800",
                body: `<p>Yellow leaves are one of the most common plant-parent worries, but the cause usually comes down to a handful of things. Overwatering is the top culprit — soggy, heavy soil suffocates roots and leaves turn yellow and soft.</p>
                       <p>Underwatering causes yellowing too, but the leaves usually feel dry and crispy at the edges instead. Too much direct sun can bleach leaves pale, while a lack of nutrients after months without feeding often shows up as pale, uniform yellowing on older leaves first.</p>
                       <p>Check the soil moisture with your finger before deciding what's wrong, and remember: a single yellow leaf now and then, especially near the base, is completely normal ageing.</p>`
            },
            3: {
                tag: "Seasonal",
                title: "Winter Plant Care 101",
                image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=80&w=800",
                body: `<p>Most houseplants slow their growth in winter as daylight hours shrink, which means their care routine needs to shift too. Cut back watering frequency and let the top few inches of soil dry out fully between waterings.</p>
                       <p>Move plants closer to windows to capture the maximum available light, and wipe dust off leaves regularly so they can absorb what little sun there is. Keep plants away from cold drafts, radiators, and heating vents, which can dry out leaves rapidly.</p>
                       <p>Hold off on fertilizing until active growth resumes in spring — feeding a dormant plant can build up salts in the soil and stress the roots.</p>`
            }
        };

        function openBlogModal(id) {
            const post = blogPosts[id];
            if(!post) return;
            document.getElementById('blogModalImg').src = post.image;
            document.getElementById('blogModalTag').textContent = post.tag;
            document.getElementById('blogModalTitle').textContent = post.title;
            document.getElementById('blogModalBody').innerHTML = post.body;
            document.getElementById('blogModal').classList.add('active');
        }

        function closeBlogModal() {
            document.getElementById('blogModal').classList.remove('active');
        }

        // Newsletter & Contact Forms
        function handleNewsletterSubmit(e) {
            e.preventDefault();
            e.target.reset();
            showToast("🎉 Subscribed! 10% off code sent to your inbox.");
        }

        function handleContactSubmit(e) {
            e.preventDefault();
            e.target.reset();
            showToast("Message sent! We'll get back to you soon.");
        }

        // Back to Top
        const backToTopBtn = document.getElementById('backToTopBtn');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 500) backToTopBtn.classList.add('show');
            else backToTopBtn.classList.remove('show');
        });
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

        // Customizer Pot Logic
        function selectPot(name, price, btnElement) {
            selectedPotName = name;
            selectedPotPrice = price;
            document.querySelectorAll('.pot-option-btn').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            
            if(currentModalProduct) {
                const finalPrice = currentModalProduct.price + selectedPotPrice;
                modalPrice.textContent = `$${finalPrice.toFixed(2)}`;
            }
        }

        function quickAddToCart(productId) {
            const product = products.find(p => p.id === productId);
            if(product.stock === 0) { showToast("Sorry, this plant is out of stock."); return; }
            const cartItemKey = `${product.id}-Nursery Pot`;
            const existing = cart.find(i => i.cartKey === cartItemKey);

            if(existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    cartKey: cartItemKey,
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    pot: 'Nursery Pot',
                    quantity: 1
                });
            }
            updateCartUI();
            showToast("Added plant to your bag!");
        }

        function addSubscriptionToCart() {
            const subKey = 'sub-box';
            const existing = cart.find(i => i.cartKey === subKey);
            if(existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    cartKey: subKey,
                    id: 'sub-box',
                    title: 'Monthly Greenery Club Box',
                    price: 34.00,
                    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&q=80&w=600',
                    pot: 'Subscription Box',
                    quantity: 1
                });
            }
            updateCartUI();
            showToast("Subscription box added!");
        }

        // Promo Code Logic
        function applyPromoCode() {
            const code = document.getElementById('promoInput').value.trim().toUpperCase();
            if(code === 'GREEN20') {
                discountMultiplier = 0.8;
                showToast("Promo GREEN20 applied (20% OFF)!");
                updateCartUI();
            } else {
                alert("Invalid promo code. Try GREEN20");
            }
        }

        function updateCartUI() {
            cartItemsContainer.innerHTML = '';
            if(cart.length === 0) {
                cartItemsContainer.innerHTML = `<div class="empty-msg">Your bag is currently empty.</div>`;
                cartTotalPrice.textContent = '$0.00';
                cartCount.textContent = '0';
                document.getElementById('shippingMsg').textContent = "Add $50.00 more to unlock Free Eco-Shipping!";
                document.getElementById('shippingProgressFill').style.width = '0%';
                return;
            }

            let subtotal = 0;
            let totalCount = 0;
            cart.forEach(item => {
                subtotal += item.price * item.quantity;
                totalCount += item.quantity;

                const div = document.createElement('div');
                div.className = 'drawer-item';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="drawer-item-info">
                        <div class="drawer-item-title">${item.title}</div>
                        <div style="font-size: 0.75rem; color: var(--accent-sage);">Pot: ${item.pot}</div>
                        <div class="drawer-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                        <div style="display: flex; gap: 0.75rem; align-items: center; margin-top: 4px;">
                            <button class="qty-btn" onclick="changeQty('${item.cartKey}', -1)">-</button>
                            <span style="font-size: 0.85rem; font-weight: 600;">${item.quantity}</span>
                            <button class="qty-btn" onclick="changeQty('${item.cartKey}', 1)">+</button>
                        </div>
                    </div>
                    <button class="remove-item" onclick="removeFromCart('${item.cartKey}')" style="background:none; border:none; color:#d9534f; cursor:pointer;"><i class="fa-solid fa-trash-can"></i></button>
                `;
                cartItemsContainer.appendChild(div);
            });

            const finalTotal = subtotal * discountMultiplier;
            cartTotalPrice.textContent = `$${finalTotal.toFixed(2)}`;
            cartCount.textContent = totalCount;

            // Shipping Progress Bar calculation (Target $50)
            const freeShippingTarget = 50.00;
            const progress = Math.min((subtotal / freeShippingTarget) * 100, 100);
            document.getElementById('shippingProgressFill').style.width = `${progress}%`;
            if(subtotal >= freeShippingTarget) {
                document.getElementById('shippingMsg').textContent = "🎉 You've unlocked Free Eco-Shipping!";
            } else {
                const diff = (freeShippingTarget - subtotal).toFixed(2);
                document.getElementById('shippingMsg').textContent = `Add $${diff} more to unlock Free Eco-Shipping!`;
            }
        }

        function changeQty(cartKey, delta) {
            const item = cart.find(i => i.cartKey === cartKey);
            if(item) {
                item.quantity += delta;
                if(item.quantity <= 0) cart = cart.filter(i => i.cartKey !== cartKey);
                updateCartUI();
            }
        }

        function removeFromCart(cartKey) {
            cart = cart.filter(i => i.cartKey !== cartKey);
            updateCartUI();
        }

        // Wishlist Logic
        function toggleWishlist(productId) {
            const product = products.find(p => p.id === productId);
            const index = wishlist.findIndex(item => item.id === productId);

            if(index > -1) {
                wishlist.splice(index, 1);
                showToast("Removed from wishlist.");
            } else {
                wishlist.push(product);
                showToast("Saved to your wishlist!");
            }
            renderProducts(products);
            updateWishlistUI();
        }

        function updateWishlistUI() {
            wishlistItemsContainer.innerHTML = '';
            wishlistCount.textContent = wishlist.length;

            if(wishlist.length === 0) {
                wishlistItemsContainer.innerHTML = `<div class="empty-msg">No saved plants in your wishlist.</div>`;
                return;
            }

            wishlist.forEach(item => {
                const div = document.createElement('div');
                div.className = 'drawer-item';
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <div class="drawer-item-info">
                        <div class="drawer-item-title">${item.title}</div>
                        <div class="drawer-item-price">$${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="quickAddToCart(${item.id}); toggleWishlist(${item.id});" class="quick-add" title="Move to Bag" style="width:30px; height:30px;"><i class="fa-solid fa-plus"></i></button>
                `;
                wishlistItemsContainer.appendChild(div);
            });
        }

        // Recently Viewed Logic
        function trackRecentlyViewed(product) {
            recentlyViewed = recentlyViewed.filter(p => p.id !== product.id);
            recentlyViewed.unshift(product);
            if(recentlyViewed.length > 3) recentlyViewed.pop();

            const sec = document.getElementById('recentSection');
            const grid = document.getElementById('recentGrid');
            sec.style.display = 'block';
            grid.innerHTML = '';

            recentlyViewed.forEach(item => {
                const div = document.createElement('div');
                div.className = 'product-card';
                div.innerHTML = `
                    <div class="product-img-box" onclick="openModal(${item.id})">
                        <span class="badge-tag">${item.category}</span>
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="product-details">
                        <a class="product-title" onclick="openModal(${item.id})">${item.title}</a>
                        <div class="product-footer">
                            <span class="price">$${item.price.toFixed(2)}</span>
                            <button class="quick-add" onclick="quickAddToCart(${item.id})"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                `;
                grid.appendChild(div);
            });
        }

        // Drawers Listeners
        openCartBtn.addEventListener('click', () => { cartDrawer.classList.add('active'); cartOverlay.classList.add('active'); });
        closeCartBtn.addEventListener('click', () => { cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); });
        cartOverlay.addEventListener('click', () => { cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); });

        openWishlistBtn.addEventListener('click', () => { wishlistDrawer.classList.add('active'); wishlistOverlay.classList.add('active'); });
        closeWishlistBtn.addEventListener('click', () => { wishlistDrawer.classList.remove('active'); wishlistOverlay.classList.remove('active'); });
        wishlistOverlay.addEventListener('click', () => { wishlistDrawer.classList.remove('active'); wishlistOverlay.classList.remove('active'); });

        // Modal View
        function openModal(productId) {
            const product = products.find(p => p.id === productId);
            currentModalProduct = product;
            selectedPotName = 'Nursery Pot';
            selectedPotPrice = 0;

            trackRecentlyViewed(product);

            document.querySelectorAll('.pot-option-btn').forEach((btn, idx) => {
                if(idx === 0) btn.classList.add('active');
                else btn.classList.remove('active');
            });

            modalImg.src = product.image;
            modalBadge.textContent = product.category;
            modalTitle.textContent = product.title;
            modalPrice.textContent = `$${product.price.toFixed(2)}`;
            modalDesc.textContent = product.description;

            renderRelatedProducts(product);

            productModal.classList.add('active');
        }

        function renderRelatedProducts(product) {
            let related = document.getElementById('relatedProductsBox');
            if(!related) {
                related = document.createElement('div');
                related.className = 'related-products';
                related.id = 'relatedProductsBox';
                document.getElementById('modalAddToCart').insertAdjacentElement('beforebegin', related);
            }
            const relatedItems = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
            if(relatedItems.length === 0) { related.innerHTML = ''; return; }
            related.innerHTML = `<h4>You Might Also Like</h4><div class="related-grid">
                ${relatedItems.map(p => `
                    <div class="related-item" onclick="openModal(${p.id})">
                        <img src="${p.image}" alt="${p.title}">
                        <span>${p.title}</span>
                    </div>
                `).join('')}
            </div>`;
        }

        closeModalBtn.addEventListener('click', () => productModal.classList.remove('active'));
        productModal.addEventListener('click', (e) => { if(e.target === productModal) productModal.classList.remove('active'); });
        document.getElementById('blogModal').addEventListener('click', (e) => { if(e.target === e.currentTarget) closeBlogModal(); });

        modalAddToCart.addEventListener('click', () => {
            if(currentModalProduct) {
                const finalPrice = currentModalProduct.price + selectedPotPrice;
                const cartKey = `${currentModalProduct.id}-${selectedPotName}`;
                const existing = cart.find(i => i.cartKey === cartKey);

                if(existing) {
                    existing.quantity += 1;
                } else {
                    cart.push({
                        cartKey: cartKey,
                        id: currentModalProduct.id,
                        title: currentModalProduct.title,
                        price: finalPrice,
                        image: currentModalProduct.image,
                        pot: selectedPotName,
                        quantity: 1
                    });
                }
                updateCartUI();
                productModal.classList.remove('active');
                showToast("Customized plant added to bag!");
            }
        });

        // Checkout Flow
        checkoutBtn.addEventListener('click', () => {
            if(cart.length === 0) return;
            cartDrawer.classList.remove('active');
            cartOverlay.classList.remove('active');
            checkoutModal.classList.add('active');
        });

        function closeCheckoutModal() {
            checkoutModal.classList.remove('active');
        }

        function handleCheckoutSubmit(e) {
            e.preventDefault();
            checkoutModal.classList.remove('active');
            const orderId = 'VS-' + Math.floor(100000 + Math.random() * 900000);
            document.getElementById('orderIdBox').textContent = `ORDER #${orderId}`;
            document.getElementById('orderConfirmModal').classList.add('active');
            cart = [];
            discountMultiplier = 1;
            updateCartUI();
        }

        function closeOrderConfirmModal() {
            document.getElementById('orderConfirmModal').classList.remove('active');
        }

        function showToast(msg = "Item added!") {
            toastNotification.textContent = msg;
            toastNotification.classList.add('show');
            setTimeout(() => toastNotification.classList.remove('show'), 2500);
        }

        renderProducts(products);