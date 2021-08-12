// getting my season and round from user

let formx = document.querySelector('#queryDataForm')

formx.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_season = document.querySelector('#season');
    let query_round = document.querySelector('#round');
    let season = event.path[0][0].value;
    let round = event.path[0][1].value;
    console.log(event)
    console.log(`This is the data I got from User -- ${query_season.value}, ${query_round.value}`)
    
    let getData = async () => {
        let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    };
    getData()
    
    // const DOM_Elements = {Driver_list: '.Driver-list'};
    console.log(document.getElementsByClassName('.Driver_List'))
    let loadData = async () => {
        const thadata = await getData();
        for (let i = 0; i < 7 ; i++){
            let x = [thadata[i].position, thadata[i].Driver.givenName, thadata[i].Driver.nationality, thadata[i].Constructors[0].name, thadata[i].points];
            console.log(x) 
            console.log(`<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].position}</a>`)
            
            const html = 
                `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].position}</a>`;
                document.getElementsByClassName('.Driver_List').insertAdjacentHTML('beforeend', html)
                // <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].Driver.givenName}</a>
                // <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].Driver.nationality}</a>
                // <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].Constructors[0].name}</a>
                // <a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${i}">${thadata[i].points}</a>`
                // document.getElementsByClassName('.Driver_List').insertAdjacentHTML('beforeend',"<h2>the dude</h2>")
             
            }
        }   
    loadData()   
});   








// store any class/id selectors in an object to quickly reference later on



// Creation of HTML to populate ranger-list with bootstrap list-items



// // Function to Load DAta and Display List
// const loadData = async () => {
//     const Drivers = await getData();

//     // loop through array and create list items for Each Ranger
//     DriverStandings.forEach( Driver => createList(position, Driver.givenName, Driver.nationality, Constructors[0].name, points))
// };

// // Function to Clear Data from .ranger_list (on page)
// const clearData = () => {
//     document.querySelector(DOM_Elements.Driver_list).innerHTML = '';
// }
