export function renderPost(object) {
    const divP = document.createElement('div');
    divP.classList.add('p');
    const pin = document.createElement('img');
    pin.src = '/assets/icons8-round-pushpin-36.png';
    const divLocation = document.createElement('div');
    divLocation.classList.add('location');
    const h4 = document.createElement('h4');
    h4.textContent = object.location;
    divLocation.append(h4);

    const divImg = document.createElement('div');
    divImg.classList.add('img');
    const img = document.createElement('img');
    img.src = object.img;
    divImg.append(img);

    const divDescription = document.createElement('div');
    divDescription.classList.add('description');
    const pText = document.createElement('p');
    pText.textContent = object.description;
    const pName = document.createElement('p');
    pName.textContent = `-${object.name}`;

    divDescription.append(pText, pName);

    divP.append(pin, divLocation, divImg, divDescription);


    return (divP);
}