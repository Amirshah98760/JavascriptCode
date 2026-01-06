
  const gigs = [
    { title: "Logo Design", desc: "Professional logo design service", price: 50, category: "design" },
    { title: "Website Development", desc: "Modern responsive website", price: 300, category: "development" },
    { title: "Blog Writing", desc: "SEO friendly articles", price: 40, category: "writing" }
  ];

  const grid = document.getElementById('gigGrid');
  const searchInput = document.getElementById('search');
  const categorySelect = document.getElementById('category');


  function renderGigs() {
    grid.innerHTML = '';
    const search = searchInput.value.toLowerCase();
    const category = categorySelect.value;

    gigs
      .filter(g => (!category || g.category === category))
      .filter(g => g.title.toLowerCase().includes(search))
      .forEach(gig => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <div>
            <h3>${gig.title}</h3>
            <p>${gig.desc}</p>
            <div class="price">From $${gig.price}</div>
          </div>
          <button>Order Now</button>
        `;
        grid.appendChild(card);
      });
  }

  searchInput.addEventListener('input', renderGigs);
  categorySelect.addEventListener('change', renderGigs);

  renderGigs();

  // Modal logic
  const modal = document.getElementById('gigModal');
  document.getElementById('addGigBtn').onclick = () => modal.style.display = 'flex';
  modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

  function saveGig() {
    const title = document.getElementById('gigTitle').value;
    const desc = document.getElementById('gigDesc').value;
    const price = document.getElementById('gigPrice').value;
    const category = document.getElementById('gigCategory').value;

    if (!title || !price) return alert('Please fill required fields');

    gigs.push({ title, desc, price, category });
    modal.style.display = 'none';
    // Clear form
    document.getElementById('gigTitle').value = '';
    document.getElementById('gigDesc').value = '';
    document.getElementById('gigPrice').value = '';
    document.getElementById('gigCategory').value = 'design';
    renderGigs();
  }