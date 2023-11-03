window.onload = function(){
    // The data that will be used in the game
    const countries = [
        { name: 'Afghanistan', capital: 'Kabul' }, 
        { name: 'Albania', capital: 'Tirana' }, 
        { name: 'Andorra', capital: 'Andorra la Vella' },
        { name: 'Angola', capital: 'Luanda' },
        { name: 'Antigua and Barbuda', capital: 'Saint John\'s' },
        { name: 'Argentina', capital: 'Buenos Aires' },
        { name: 'Armenia', capital: 'Yerevan' },
        { name: 'Australia', capital: 'Canberra' },
        { name: 'Austria', capital: 'Vienna' },
        { name: 'Azerbaijan', capital: 'Baku' },
        { name: 'Bahamas', capital: 'Nassau' },
        { name: 'Bahrain', capital: 'Manama' },
        { name: 'Bangladesh', capital: 'Dhaka' },
        { name: 'Barbados', capital: 'Bridgetown' },
        { name: 'Belarus', capital: 'Minsk' },
        { name: 'Belgium', capital: 'Brussels' },
        { name: 'Belize', capital: 'Belmopan' },
        { name: 'Benin', capital: 'Porto-Novo' },
        { name: 'Bhutan', capital: 'Thimphu' },
        { name: 'Bolivia', capital: 'Sucre' },
        { name: 'Bosnia and Herzegovina', capital: 'Sarajevo' },
        { name: 'Botswana', capital: 'Gaborone' },
        { name: 'Brazil', capital: 'Brasília' },
        { name: 'Brunei', capital: 'Bandar Seri Begawan' },
        { name: 'Bulgaria', capital: 'Sofia' },
        { name: 'Burkina Faso', capital: 'Ouagadougou' },
        { name: 'Burundi', capital: 'Bujumbura' },
        { name: 'Cabo Verde', capital: 'Praia' },
        { name: 'Cambodia', capital: 'Phnom Penh' },
        { name: 'Cameroon', capital: 'Yaoundé' },
        { name: 'Canada', capital: 'Ottawa' },
        { name: 'Central African Republic', capital: 'Bangui' },
        { name: 'Chad', capital: 'N\'Djamena' },
        { name: 'Chile', capital: 'Santiago' },
        { name: 'China', capital: 'Beijing' },
        { name: 'Colombia', capital: 'Bogotá' },
        { name: 'Comoros', capital: 'Moroni' },
        { name: 'Congo', capital: 'Brazzaville' },
        { name: 'Costa Rica', capital: 'San José' }, 
        { name: 'Croatia', capital: 'Zagreb' },
        { name: 'Cuba', capital: 'Havana' },
        { name: 'Cyprus', capital: 'Nicosia' },
        { name: 'Czechia', capital: 'Prague' },
        { name: 'Côte d\'Ivoire', capital: 'Yamoussoukro' },
        { name: 'Democratic Republic of the Congo', capital: 'Kinshasa' },
        { name: 'Denmark', capital: 'Copenhagen' },
        { name: 'Djibouti', capital: 'Djibouti' },
        { name: 'Dominica', capital: 'Roseau' },
        { name: 'Dominican Republic', capital: 'Santo Domingo' },
        { name: 'Ecuador', capital: 'Quito' },
        { name: 'Egypt', capital: 'Cairo' },
        { name: 'El Salvador', capital: 'San Salvador' },
        { name: 'Equatorial Guinea', capital: 'Malabo' },
        { name: 'Eritrea', capital: 'Asmara' },
        { name: 'Estonia', capital: 'Tallinn' },
        { name: 'Eswatini (fmr. "Swaziland")', capital: 'Mbabane' },
        { name: 'Ethiopia', capital: 'Addis Ababa' },
        { name: 'Fiji', capital: 'Suva' },
        { name: 'Finland', capital: 'Helsinki' },
        { name: 'France', capital: 'Paris' },
        { name: 'Gabon', capital: 'Libreville' },
        { name: 'Gambia', capital: 'Banjul' },
        { name: 'Georgia', capital: 'Tbilisi' },
        { name: 'Germany', capital: 'Berlin' },
        { name: 'Ghana', capital: 'Accra' },
        { name: 'Greece', capital: 'Athens' },
        { name: 'Grenada', capital: 'Saint George\'s' },
        { name: 'Guatemala', capital: 'Guatemala City' },
        { name: 'Guinea', capital: 'Conakry' },
        { name: 'Guinea-Bissau', capital: 'Bissau' },
        { name: 'Guyana', capital: 'Georgetown' },
        { name: 'Haiti', capital: 'Port-au-Prince' },
        { name: 'Holy See', capital: 'Vatican City' },
        { name: 'Honduras', capital: 'Tegucigalpa' },
        { name: 'Hungary', capital: 'Budapest' },
        { name: 'Iceland', capital: 'Reykjavik' },
        { name: 'India', capital: 'New Delhi' },
        { name: 'Indonesia', capital: 'Jakarta' },
        { name: 'Iran', capital: 'Tehran' },
        { name: 'Iraq', capital: 'Baghdad' },
        { name: 'Ireland', capital: 'Dublin' },
        { name: 'Israel', capital: 'Jerusalem' },
        { name: 'Italy', capital: 'Rome' },
        { name: 'Jamaica', capital: 'Kingston' },
        { name: 'Japan', capital: 'Tokyo' },
        { name: 'Jordan', capital: 'Amman' },
        { name: 'Kazakhstan', capital: 'Nur-Sultan' },
        { name: 'Kenya', capital: 'Nairobi' },
        { name: 'Kiribati', capital: 'Tarawa' },
        { name: 'Kuwait', capital: 'Kuwait City' },
        { name: 'Kyrgyzstan', capital: 'Bishkek' },
        { name: 'Laos', capital: 'Vientiane' },
        { name: 'Latvia', capital: 'Riga' },
        { name: 'Lebanon', capital: 'Beirut' },
        { name: 'Lesotho', capital: 'Maseru' },
        { name: 'Liberia', capital: 'Monrovia' },
        { name: 'Libya', capital: 'Tripoli' },
        { name: 'Liechtenstein', capital: 'Vaduz' },
        { name: 'Lithuania', capital: 'Vilnius' },
        { name: 'Luxembourg', capital: 'Luxembourg City' },
        { name: 'Madagascar', capital: 'Antananarivo' },
        { name: 'Malawi', capital: 'Lilongwe' },
        { name: 'Malaysia', capital: 'Kuala Lumpur' },
        { name: 'Maldives', capital: 'Malé' },
        { name: 'Mali', capital: 'Bamako' },
        { name: 'Malta', capital: 'Valletta' },
        { name: 'Marshall Islands', capital: 'Majuro' },
        { name: 'Mauritania', capital: 'Nouakchott' },
        { name: 'Mauritius', capital: 'Port Louis' },
        { name: 'Mexico', capital: 'Mexico City' },
        { name: 'Micronesia', capital: 'Palikir' },
        { name: 'Moldova', capital: 'Chisinau' },
        { name: 'Monaco', capital: 'Monaco' },
        { name: 'Mongolia', capital: 'Ulaanbaatar' },
        { name: 'Montenegro', capital: 'Podgorica' },
        { name: 'Morocco', capital: 'Rabat' },
        { name: 'Mozambique', capital: 'Maputo' },
        { name: 'Myanmar (formerly Burma)', capital: 'Naypyidaw' },
        { name: 'Namibia', capital: 'Windhoek' },
        { name: 'Nauru', capital: 'Yaren' },
        { name: 'Nepal', capital: 'Kathmandu' },
        { name: 'Netherlands', capital: 'Amsterdam' },
        { name: 'New Zealand', capital: 'Wellington' },
        { name: 'Nicaragua', capital: 'Managua' },
        { name: 'Niger', capital: 'Niamey' },
        { name: 'Nigeria', capital: 'Abuja' },
        { name: 'North Korea', capital: 'Pyongyang' },
        { name: 'North Macedonia', capital: 'Skopje' },
        { name: 'Norway', capital: 'Oslo' },
        { name: 'Oman', capital: 'Muscat' },
        { name: 'Pakistan', capital: 'Islamabad' },
        { name: 'Palau', capital: 'Ngerulmud' },
        { name: 'Palestine State', capital: 'Jerusalem' },
        { name: 'Panama', capital: 'Panama City' },
        { name: 'Papua New Guinea', capital: 'Port Moresby' },
        { name: 'Paraguay', capital: 'Asunción' },
        { name: 'Peru', capital: 'Lima' },
        { name: 'Philippines', capital: 'Manila' },
        { name: 'Poland', capital: 'Warsaw' },
        { name: 'Portugal', capital: 'Lisbon' },
        { name: 'Qatar', capital: 'Doha' },
        { name: 'Romania', capital: 'Bucharest' },
        { name: 'Russia', capital: 'Moscow' },
        { name: 'Rwanda', capital: 'Kigali' },
        { name: 'Saint Kitts and Nevis', capital: 'Basseterre' },
        { name: 'Saint Lucia', capital: 'Castries' },
        { name: 'Saint Vincent and the Grenadines', capital: 'Kingstown' },
        { name: 'Samoa', capital: 'Apia' },
        { name: 'San Marino', capital: 'San Marino' },
        { name: 'Sao Tome and Principe', capital: 'São Tomé' },
        { name: 'Saudi Arabia', capital: 'Riyadh' },
        { name: 'Senegal', capital: 'Dakar' },
        { name: 'Serbia', capital: 'Belgrade' },
        { name: 'Seychelles', capital: 'Victoria' },
        { name: 'Sierra Leone', capital: 'Freetown' },
        { name: 'Singapore', capital: 'Singapore' },
        { name: 'Slovakia', capital: 'Bratislava' },
        { name: 'Slovenia', capital: 'Ljubljana' },
        { name: 'Solomon Islands', capital: 'Honiara' }
    ];

    let currentIndex = 0; // A variable to keep track of the current question
    // Select elements from the DOM
    const countryEl = document.getElementById('country');
    const capitalEl = document.getElementById('capital');
    const resultEl = document.getElementById('result');
    const submitButton = document.getElementById('submit');
    const skipButton = document.getElementById('skip');

    /**
     * TODO:
     * 
     * Create a function called checkAnswer() that does the following:
     * > Use an if statement to check whether the entered capital matches the current country's capital from the above array
     * > If the entered capital matches the current country's capital:
     *      - Set the text content of the result element to 'Correct!'
     *      - Call the nextQuestion() function
     * > Otherwise:
     *    - Set the text content of the result element to 'Incorrect, try again.'
     * 
     * > Reset the value of the capital input field
     * 
     * Reference (if...else): https://www.w3schools.com/js/js_if_else.asp
     * Reference (textContent): https://www.w3schools.com/jsref/prop_node_textcontent.asp
     */
    function checkAnswer(){
        // If the entered capital matches the courrent country's capital        if (capitalEl.value == countries[countryEl]){
        if (capitalEl.value === countries[currentIndex].capital){
            resultEl.textContent = "Correct!";
            nextQuestion();
        } else{
            resultEl.textContent = "Incorrect, try again.";
        }
        capitalEl.value = ""; // Reset the input field  
    }

    /**
     * TODO:
     * 
     * > Create a function called nextQuestion() that does the following:
     *      - Increment the currentIndex variable by 1
     *      - If the currentIndex is equal to the length of the countries array, set the currentIndex to 0
     *      - Set the value of the country input field to the name of the country at the currentIndex position in the countries array
     * 
     * Reference (if...else): https://www.w3schools.com/js/js_if_else.asp
    */
    // YOUR CODE STARTS HERE
    function nextQuestion(){
    currentIndex++;
    // If we have reached the end of the array, wrap around to the start
    if (currentIndex === countries.length){
        currentIndex = 0;
        };
        // Update the country name
        countryEl.value = countries[currentIndex].name;
    }
    // YOUR CODE ENDS HERE

    // Add event listeners to the buttons
    submitButton.addEventListener('click', checkAnswer);
    skipButton.addEventListener('click', nextQuestion);

    // Start the game
    countryEl.value = countries[0].name;


}