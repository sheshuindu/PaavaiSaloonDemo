document.getElementById('State').onchange = () => {
    clearcities()
    clearcenters()
    const state = document.getElementById('State').value
    if (state === 'tn') {
        const cities = ` 
        <select id="city" class="location" style="background-color: black;color: white;width:33%">
        <option>Select City</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        </select>
         `
        document.getElementById('dropdown').insertAdjacentHTML('beforeend', cities);
    }
    else if (state === 'kl') {
        const cities = ` 
        <select id="city" name="state name"  class="location" style="background-color: black;color: white;width:33%">
        <option value="Cochin">Cochin</option>
        <option value="Tvm"> Thiruvananthapuram</option>
        </select>
         `
        document.getElementById('dropdown').insertAdjacentHTML('beforeend', cities);
    }
    else if (state === 'ap') {
        const cities = ` 
        <select id="city" class="location" style="background-color: black;color: white;width:33%">
        <option value="vijayavada">Vijayawada</option>
        <option value="kurnool">Kurnool</option>
        </select>
         `
        document.getElementById('dropdown').insertAdjacentHTML('beforeend', cities);
    }

    document.getElementById('city').onchange = function () {

        const city = document.getElementById('city').value
        clearcenters()
        if (city === 'Chennai') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option value="Mogappair">Mogappair</option>
           <option value="Adyar">Adyar</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }
        else if (city === 'Coimbatore') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option>Peelamedu</option>
           <option>Gandhi Nagar</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }
        else if (city === 'Cochin') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option>Cherai Beach</option>
           <option>Palluruthy</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }
        else if (city === 'Tvm') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option>Thampanoor</option>
           <option>Kesavadasapuram</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }
        else if (city === 'vijayawada') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option>Gunadala</option>
           <option>Patamata</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }
        else if (city === 'kurnool') {
            const centers = `
            <select id="center" class="location" style="background-color: black;color: white;width:33%">
            <option>Select Center</option>
            <option>Kallur</option>
           <option>Baker katta</option>
        </select>`
            document.getElementById('dropdown').insertAdjacentHTML('beforeend', centers)
        }

        document.getElementById('center').onchange = () => {
            clearmaps()
            const center = document.getElementById('center').value
            console.log(center)
            if (center === 'Mogappair') {
                const map = `
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.16102830874!2d80.16698697782238!3d13.080781952547904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526156f02a6b05%3A0xf6eac26bb35272c5!2sMogappair%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1593596153219!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                `
                document.getElementById('maps').insertAdjacentHTML('beforeend', map)
            }
            else if(center === 'Adyar'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31099.63250364745!2d80.24177587157119!3d13.006731463291503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ed15c41681%3A0x6569ce967a249e83!2sAdyar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1593599816136!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Peelamedu'){
                const map = `
                <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31328.432021376306!2d76.99805067032557!3d11.034575297377643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85824c7646fcb%3A0x3cbee12a8c82fcb9!2sPeelamedu%2C%20Maheshwari%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1593596453806!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Gandhi Nagar'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.721424702371!2d76.99139722750117!3d11.043848424245319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8581960a334c1%3A0xf4fa34a4eddf4f60!2sGandhimaa%20Nagar%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1593596691300!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Cherai Beach'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.91426546403!2d76.16930182737597!3d10.141698984064698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0817552b4c321d%3A0xbfe741cde4dcdd33!2sCherai%20Beach!5e0!3m2!1sen!2sin!4v1593596748412!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Palluruthy'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155376.11672280857!2d76.40080560756236!3d9.930127240839818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087279a4e92d23%3A0xc177e4ac9a2666b0!2sPalluruthy%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1593596961120!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Thampanoor' ){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7892.1899861832635!2d76.94900072424142!3d8.490144475583007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bba5e411a9e9%3A0xd91a25e733df7162!2sThampanoor%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1593597095669!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Kesavadasapuram'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.772865530214!2d76.93095402717859!3d8.529135401896493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9592bc45daf%3A0x4c7f346f86585282!2sKesavadasapuram%2C%20Thiruvananthapuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1593597167336!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Gunadala' ){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30601.02190828772!2d80.64740317428537!3d16.5196475706463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e52c1c8d733b%3A0x385df9cc705174f6!2sGunadala%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1593597284414!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Patamata' ){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15302.675141501866!2d80.65546937847937!3d16.492300567931018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fadcdb23934b%3A0x6b8d8f5d50706842!2sPatamata%2C%20Benz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1593597479950!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Kallur'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15514.546128326356!2d78.98935302790534!3d13.557874447569644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb29614e81bf39b%3A0x945731c44913822e!2sKallur%2C%20Andhra%20Pradesh%20517113!5e0!3m2!1sen!2sin!4v1593597525725!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:10;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
            else if(center === 'Bakar katta'){
                const map = `<iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61421.60607421614!2d78.0047824647898!3d15.811841394238858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ddf506b7c6c9%3A0x19a7ac74f858d6f2!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1593597763632!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`
                document.getElementById('maps').insertAdjacentHTML('beforeend',map)
            }
        }
    }
}


const clearcities = () => {
    const cities = document.getElementById('city');
    if (cities) {
        cities.parentElement.removeChild(cities)
    }
}

const clearmaps = () => {
    const cities = document.getElementById('map');
    if (cities) {
        cities.parentElement.removeChild(cities)
    }
}


const clearcenters = () => {
    const centers = document.getElementById('center');
    if (centers) {
        centers.parentElement.removeChild(centers)
    }
}




