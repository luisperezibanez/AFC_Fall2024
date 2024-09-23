const STATES = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];
  
const MENU_ITEMS = [
    { name: "Blazing Ribeye", description: "Grilled to perfection with a fiery twist.", price: "$25.99", image: "https://via.placeholder.com/100" },
    { name: "Flame-Kissed Salmon", description: "Seared with herbs and a citrus glaze.", price: "$22.50", image: "https://via.placeholder.com/100" },
    { name: "Inferno Pasta", description: "Spicy marinara with roasted veggies and a kick of chili.", price: "$18.99", image: "https://via.placeholder.com/100" },
    { name: "Torch-Grilled Chicken", description: "Smoky grilled chicken with a charred finish.", price: "$19.99", image: "https://via.placeholder.com/100" },
    { name: "Ember-Roasted Veggie Skewers", description: "Seasonal veggies roasted over open flames.", price: "$14.99", image: "https://via.placeholder.com/100" },
];

function fetchStates(){
    const selectState = document.getElementById("state");

    STATES.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        selectState.appendChild(option);
    });
}

function validateAndSubmitForm() {

    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const address1 = document.getElementById('address1').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value;
    const zipcode = document.getElementById('zipcode').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const cel = document.getElementById('cel').value.trim();
    const email = document.getElementById('email_input').value.trim();
    const password = document.getElementById('pass_input').value;

    let isValid = true;
    let errorMessages = [];

    // Validate First Name
    if (fname.length === 0 || fname.length > 20) {
        isValid = false;
        errorMessages.push('First Name is required and must be 1-20 characters long.');
    }

    // Validate Last Name
    if (lname.length === 0 || lname.length > 20) {
        isValid = false;
        errorMessages.push('Last Name is required and must be 1-20 characters long.');
    }

    // Validate Address
    if (address1.length === 0) {
        isValid = false;
        errorMessages.push('Address 1 is required.');
    }

    // Validate City
    if (city.length === 0 || city.length > 29) {
        isValid = false;
        errorMessages.push('City is required and must be less than 30 characters.');
    }

    // Validate State
    if (state === "") {
        isValid = false;
        errorMessages.push('State is required.');
    }

    // Validate Zip Code
    const zipcodePattern = /^\d{5}(-\d{4})?$/;
    if (!zipcodePattern.test(zipcode)) {
        isValid = false;
        errorMessages.push('Zip code must be valid (5 digits or 5-4 format).');
    }

    // Validate Age
    if (isNaN(age) || age < 21 || age > 99) {
        isValid = false;
        errorMessages.push('Age must be between 21 and 99.');
    }

    // Validate Phone Number
    const phonePattern = /^\(\d{3}\)\d{3}-\d{4}$/;
    if (!phonePattern.test(cel)) {
        isValid = false;
        errorMessages.push('Phone number must be in the format (123)456-7890.');
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|mil|us)$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessages.push('Email must be valid (example: your@email.com).');
    }

    // Validate Password
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessages.push('Password must be 8-12 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }

 
    if (isValid) {
        alert('Form submitted successfully!');
        console.log({
            FirstName: fname,
            LastName: lname,
            Address1: address1,
            Address2: document.getElementById('address2').value.trim(),
            City: city,
            State: state,
            ZipCode: zipcode,
            Age: age,
            PhoneNumber: cel,
            Email: email,
            Password: password,
            IsMarried: document.querySelector('input[name="isMarried"]:checked')?.value,
            FavoriteColors: Array.from(document.querySelectorAll('input[name="favoriteColor"]:checked')).map(el => el.value),
            MoreInfo: document.getElementById('moreInfo').value.trim(),
        });
        this.submit();
    } else {
        alert('Errors:\n' + errorMessages.join('\n'));
    }
}

let currentIndex = 0;

function renderMenuItem(index) {
    const menuContainer = document.getElementById("menuContainer");
    menuContainer.innerHTML = ""; // Clear previous item

    const item = MENU_ITEMS[index];
    const menuItemDiv = document.createElement("div");
    menuItemDiv.className = "menu-item transparent-bg";
    menuItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="img-fluid">
        <div class="menu-content">
            <h5>${item.name}</h5>
            <p>${item.description}</p>
            <p><strong>Price: ${item.price}</strong></p>
        </div>
    `;
    menuContainer.appendChild(menuItemDiv);
}

function updateButtons() {
    document.getElementById("prevButton").disabled = currentIndex === 0;
    document.getElementById("nextButton").disabled = currentIndex === MENU_ITEMS.length - 1;
}

document.getElementById("prevButton").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderMenuItem(currentIndex);
        updateButtons();
    }
});

document.getElementById("nextButton").addEventListener("click", () => {
    if (currentIndex < MENU_ITEMS.length - 1) {
        currentIndex++;
        renderMenuItem(currentIndex);
        updateButtons();
    }
});

