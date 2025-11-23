document.addEventListener('DOMContentLoaded', () => {
    const conflictList = document.getElementById('conflictList');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const matrixCells = document.querySelectorAll('.matrix-cell');

    // Initial Render
    renderConflicts(conflicts);

    // Filter Buttons
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');
            const label = btn.textContent; // Get the button text for context
            filterConflicts(filter, label);
        });
    });

    // Matrix Interaction
    matrixCells.forEach(cell => {
        cell.addEventListener('click', () => {
            const type = cell.getAttribute('data-type');
            if (type) {
                // Update buttons visual state (optional, or just custom filter)
                filterBtns.forEach(b => b.classList.remove('active'));
                // Find matching button to get label if possible, or just use type
                const btn = Array.from(filterBtns).find(b => b.getAttribute('data-filter') === type);
                const label = btn ? btn.textContent : type;

                filterConflicts(type, label);
                // Scroll to list
                document.querySelector('.data-section').scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    function filterConflicts(filter, label) {
        if (filter === 'all') {
            renderConflicts(conflicts, 'All Fatal Wars');
        } else {
            const filtered = conflicts.filter(c => c.type === filter);
            renderConflicts(filtered, label);
        }
    }

    function renderConflicts(data, contextLabel = 'All Fatal Wars') {
        conflictList.innerHTML = '';
        const totalCasualtiesContainer = document.getElementById('totalCasualties');

        if (data.length === 0) {
            conflictList.innerHTML = '<p>No fatal conflicts found for this category.</p>';
            totalCasualtiesContainer.innerHTML = '';
            return;
        }

        let totalCasualties = 0;

        data.forEach((conflict, index) => {
            const item = document.createElement('div');
            item.className = 'conflict-item';
            item.style.animation = `fadeIn 0.3s ease forwards ${index * 0.05}s`;
            item.style.opacity = '0'; // Start hidden for animation

            // Parse casualties
            let casualtyNum = 0;
            let casualtyText = conflict.casualties;

            if (conflict.casualties !== 'Unknown') {
                // Remove spaces and convert to number
                casualtyNum = parseInt(conflict.casualties.replace(/\s/g, ''), 10);
                totalCasualties += casualtyNum;
            }

            // Generate Pictograms (1 per 100,000)
            let visualsHtml = '';
            if (casualtyNum > 0) {
                const iconCount = Math.ceil(casualtyNum / 100000);
                // Cap strictly for performance if needed, but user asked for logic. 
                // 50M = 500 icons. This is renderable.

                let icons = '';
                for (let i = 0; i < iconCount; i++) {
                    icons += `<div class="casualty-icon" title="100,000 deaths"></div>`;
                }

                visualsHtml = `
                    <div class="conflict-visuals">
                        ${icons}
                        <div class="casualty-count-text">${casualtyText} Casualties</div>
                    </div>
                `;
            } else {
                visualsHtml = `<div class="casualty-count-text">${casualtyText}</div>`;
            }

            item.innerHTML = `
                <div class="conflict-header">
                    <div class="conflict-info">
                        <h4>${conflict.name}</h4>
                        <div class="conflict-meta">
                            <span>${conflict.year}</span>
                            <span>${conflict.location}</span>
                            <span>${conflict.type}</span>
                        </div>
                    </div>
                </div>
                ${visualsHtml}
            `;

            conflictList.appendChild(item);
        });

        // Render Totals
        renderTotalCasualties(totalCasualties, contextLabel);
    }

    function renderTotalCasualties(total, contextLabel) {
        const container = document.getElementById('totalCasualties');
        if (!container) return;

        const iconCount = Math.ceil(total / 100000);
        let icons = '';
        // Limit icons for total to avoid crashing browser if number is huge, 
        // but 200M is 2000 icons, which is fine.
        for (let i = 0; i < iconCount; i++) {
            icons += `<div class="casualty-icon" title="100,000 deaths"></div>`;
        }

        container.innerHTML = `
            <div class="total-header">
                <h3>Total Estimated Casualties for ${contextLabel}</h3>
                <div class="total-number">${total.toLocaleString().replace(/,/g, ' ')}</div>
            </div>
            <div class="total-visuals">
                ${icons}
            </div>
        `;
    }
});
