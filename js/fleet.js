// scripts/fleet.js
document.addEventListener('DOMContentLoaded', function() {
    // Vehicle data array
    const vehicles = [
        {
            image: "https://mj2motors.com/wp-content/uploads/2024/09/FB_IMG_1727019175402.jpg",
            alt: "Toyota Wish",
            name: "Toyota Wish",
            price: "P300/day | P2000/week",
            details: [
                {icon: "car", text: "Compact Class"},
                {icon: "users", text: "7 Seats"},
                {icon: "gas-pump", text: "95 Unleaded"},
                {icon: "suitcase", text: "2 Bags"}
            ]
        },
        {
            image: "https://www.gainesville.com/gcdn/authoring/2010/02/18/NTGS/ghows-LK-1bee6664-d7c1-4934-9380-722c1f272eff-5e9c0a4f.jpeg?width=600",
            alt: "Honda Fit",
            name: "Honda Fit",
            price: "P250/day | P1700/week",
            details: [
                {icon: "car", text: "Subcompact Class"},
                {icon: "users", text: "5 Seats"},
                {icon: "gas-pump", text: "95 Unleaded"},
                {icon: "suitcase", text: "2 Bags"}
            ]
        },
        // Add all other vehicles following the same pattern
        {
            image: "https://www.longotoyota.com/blogs/4337/wp-content/uploads/2023/01/2023-Toyota-RAV4-1024x576.jpg",
            alt: "Toyota RAV4",
            name: "Toyota RAV4",
            price: "P450/day | P3000/week",
            details: [
                {icon: "car", text: "SUV Class"},
                {icon: "users", text: "5 Seats"},
                {icon: "gas-pump", text: "95 Unleaded"},
                {icon: "suitcase", text: "4 Bags"}
            ]
        }
    ];

    // Function to generate vehicle HTML
    function createVehicleCard(vehicle) {
        return `
            <div class="vehicle">
                <img src="${vehicle.image}" alt="${vehicle.alt}">
                <div class="vehicle-details">
                    <h3>${vehicle.name}</h3>
                    <p class="price">${vehicle.price}</p>
                    <ul>
                        ${vehicle.details.map(detail => `
                            <li><i class="fas fa-${detail.icon}"></i> ${detail.text}</li>
                        `).join('')}
                    </ul>
                    <button class="btn book-btn" data-car="${vehicle.name}">Book Now</button>
                </div>
            </div>
        `;
    }

    // Load vehicles into the container
    const container = document.getElementById('vehicleContainer');
    if (container) {
        vehicles.forEach(vehicle => {
            container.innerHTML += createVehicleCard(vehicle);
        });

        // Add event listeners to all book buttons
        document.querySelectorAll('.book-btn').forEach(button => {
            button.addEventListener('click', function() {
                const carModel = this.getAttribute('data-car');
                localStorage.setItem('selectedCar', carModel);
                window.location.href = 'contact.html';
            });
        });
    }
});
