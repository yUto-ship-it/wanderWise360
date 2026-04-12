
function generateTicket(event) {
    event.preventDefault();
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const name = document.getElementById('name').value;
    const nrc = document.getElementById('nrc').value;
    const town = document.getElementById('town').value;
    const coty = document.getElementById('coty').value;
    const a = document.getElementById('a').value;
    if (a.includes("-")) {
        alert("မှန်ကန်သော မှတ်ပုံတင်နံပါတ်အားရိုက်ထည့်ပါ။");
        return false;
    }
    const countryCode = document.getElementsByName('countryCode')[0].value;
    const phone = document.getElementsByName('phone')[0].value;
    if (phone.includes("-")) {
        alert("ဖုန်းနံပါတ် မှန်ကန်အောင်ရိုက်ထည့်ပါ။");
        return false;
    }
    const carclass = document.getElementById('carclass').value;
    const number = document.getElementById('gender').value;
    const date = new Date();
    const pay = document.getElementById('pay').value;
    const deperture = document.getElementById('in').value;
    const bookingTime = new Date().toLocaleString();
    let price = 0;
    if (carclass === "VIP") {
        price = 45000;
    }
    else { price = 35000; }
    const cost = price;
    if (!from || !to || !name || !nrc || !town || !coty || !a || !countryCode || !phone || !carclass || !number || !date || !pay || !deperture ) {
        alert(" ကျေးဇူးပြု၍ အချက်အလက်အားလုံးကို ပြည့်စုံစွာဖြည့်စွက်ပေးပါခင်ဗျာ။");
        return false;
    }
    const ticketContent = `

        <p style="background:white;border-radius:3px;padding:2px;"><strong>From : </strong>${from}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>To : </strong>${to}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Guest Name:</strong> ${name}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>NRC No:</strong> ${nrc} ${town} ${coty} ${a}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Phone:</strong> ${countryCode} ${phone}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Deperture Date:</strong> ${deperture.toLocaleString()}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Class:</strong>${carclass}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Gender:</strong>${number}</P>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Booking Time:</strong>${bookingTime}</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Cost : </strong>${cost.toLocaleString()} ks</p>
        <p style="background:white;border-radius:3px;padding:2px;"><strong>Payment Method: </strong>${pay}</p>
        <p style="text-align: center; font-size: 12px; color: green;">Status: Confirmed ✓</p>`;

    document.getElementById('ticketdata').innerHTML = ticketContent;
    document.getElementById('ticket').style.display = 'block';

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}