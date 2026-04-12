function generateTicket(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const nrc = document.getElementById('nrc').value;
    const town = document.getElementById('town').value;
    const coty = document.getElementById('coty').value;
    const a = document.getElementById('a').value;
    const countryCode = document.getElementsByName('countryCode')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    if (phone.includes("-")) {
        alert("ဖုန်းနံပါတ် မှန်ကန်အောင်ရိုက်ထည့်ပါ။");
        return false;
    }
    const roomtype = document.getElementById('room').value;
    const number = document.getElementById('no').value;
    const date = new Date();
    const pay = document.getElementById('pay').value;
    const checkin = new Date(document.getElementById('in').value);
    const checkout = new Date(document.getElementById('out').value);
    const time = checkout.getTime() - checkin.getTime();
    const night = Math.ceil(time / (1000 * 3600 * 24));
    let pricepernight = 0;
    if (roomtype === "Single Room") { pricepernight = 50000; }
    else if (roomtype === "Double Room") { pricepernight = 70000; }
    else if (roomtype === "Twin Room") { pricepernight = 85000; }
    else if (roomtype === "Triple Room") { pricepernight = 99000; }
    const total = pricepernight * night;
    const bookingTime = new Date().toLocaleString();
    if (!name || !nrc || !town || !coty || !a || !countryCode || !phone || !roomtype || !number || !date || !pay || !checkin || !checkout) {
        alert(" ကျေးဇူးပြု၍ အချက်အလက်အားလုံးကို ပြည့်စုံစွာဖြည့်စွက်ပေးပါခင်ဗျာ။");
        return false;
    }

    const ticketContent = `
        <p><strong>Guest Name:</strong> ${name}</p>
        <p><strong>NRC No:</strong> ${nrc} ${town} ${coty} ${a}</p>
        <p><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p><strong>Check-in:</strong> ${checkin.toLocaleDateString()}</p>
        <p><strong>Check-out:</strong> ${checkout.toLocaleDateString()}</p>
        <p><strong>Room-type:</strong>${roomtype}</p>
        <p><strong>Number of People:</strong>${number}</P>
        <p><strong>Booking Time;</strong>${bookingTime}</p>
        <p><strong>Cost : </strong>${total}Ks</p>
        <p><strong>Payment Method: </strong>${pay}</p>
        <p style="text-align: center; font-size: 12px; color: green;">Status: Confirmed ✓</p>`;

    document.getElementById('ticketdata').innerHTML = ticketContent;
    document.getElementById('ticket').style.display = 'block';

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}