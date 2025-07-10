/* <h1>Contact</h1>
        <div class="hours">
            <p>Monday to Friday: 11am - 9pm</p>
            <p>Saturday and Sunday: 10am - 10pm</p>
        </div>
        <div class="contact">
            <p>Address: 803 Maple Drive</p>
            <p>Phone: 392-444-3341</p>
            <p>Email: mariorest@email.com</p>
        </div> */

export function createContact() {
    const content = document.querySelector('#content');

    // create and add header
    let header = document.createElement('h1');
    header.textContent = "Contact Mario's Restaurant";
    content.appendChild(header);

    // creating, modifying, and appending the hours box
    const hoursContainer = document.createElement('div');
    content.appendChild(hoursContainer);
    let hours1 = document.createElement('p');
    hours1.textContent = 'Monday to Friday: 11am - 9pm';
    let hours2 = document.createElement('p');
    hours2.textContent = 'Saturday and Sunday: 10am - 10pm';

    hoursContainer.appendChild(hours1);
    hoursContainer.appendChild(hours2);

    // content container
    const contactContainer = document.createElement('div');
    content.appendChild(contactContainer);

    let address = document.createElement('p');
    address.textContent = 'Address: 803 Maple Drive';
    let phone = document.createElement('p');
    phone.textContent = 'Phone: 392-444-3341';
    let email = document.createElement('p');
    email.textContent = 'Email: mariorest@email.com';

    contactContainer.appendChild(address);
    contactContainer.appendChild(phone);
    contactContainer.appendChild(email);

    // body styles
    const body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(77,108,186)';

    // content styles
    content.style.display = 'flex';
    content.style.flexDirection = 'column';
    content.style.alignItems = 'center';
    content.style.flexDirection = 'column';

    // hours styles
    hoursContainer.style.backgroundColor = 'rgb(137, 206, 77)';
    hoursContainer.style.border = 'rgba(0,0,0,50%) 4px solid';
    hoursContainer.style.padding = '10px';
    hoursContainer.style.marginBottom = '10px';
    

    // contact styles
    contactContainer.style.backgroundColor = 'rgb(137, 206, 77)';
    contactContainer.style.border = 'rgba(0,0,0,50%) 4px solid';
    contactContainer.style.padding = '10px';





}