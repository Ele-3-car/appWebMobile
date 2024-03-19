

export const sample_spots: any[] = [
    {
        id: "1",
        city: "London",
        name: "Best view of London",
        description: "beautiful view of London, we can see the Big Ben from here, and the Thames river",
        latitude: 0,
        longitude: 0,   
        image: "../src/../assets/images/londra.jpg",
        favorite: true,
        stars: 5,
        visited:["London Eye", "posto 2", "posto 3", "posto 4"],
        toEat: ["ristorante 1", "ristorante 2", "ristorante 3", "ristorante 4"],
        duration: 3,
        shortDescription:"Ormai amo cosi tanto londra che ci vado ogni anno! Prova questo itinerario di 3 giorni"

    },
    {
        id: "2",
        city: "Paris",
        name: "City of love",
        description: "beautiful view of Paris, we can see the Eiffel Tower from here, and the Seine river",
        latitude: 0,
        longitude: 0,
        image: "../src/../assets/images/parigi.jpg",
        favorite: false,
        stars: 3.5,
        visited:["posto1", "posto 2", "posto 3", "posto 4"],
        toEat: ["ristorante 1", "ristorante 2", "ristorante 3", "ristorante 4"],
        duration: 5,
        shortDescription:"Se non vuoi spendere troppo, non devi perderti questo spot!"
    },
    {
        id: "3",
        city: "Naples",
        name: "Napulè mia",
        description: "Sono appena tornato da un incredibile viaggio a Napoli!\n Ho esplorato i vicoli affollati del centro storico, visitato i monumenti storici e assaporato la deliziosa cucina locale. \n La mia prima giornata è iniziata con la visita al maestoso Castel dell'Ovo, da cui ho goduto di una vista mozzafiato sul Golfo di Napoli.\n Nel pomeriggio mi sono persa tra i vicoli di Spaccanapoli, alla scoperta di autentici tesori nascosti e colorate botteghe artigiane. \nPer cena mi sono avventurato in un'accogliente trattoria locale. Ho assaggiato la vera pizza napoletana, con crosta croccante e ingredienti freschissimi. Un'esperienza indimenticabile!",
        latitude: 0,
        longitude: 0,
        image: "../src/../assets/images/naples.jpg",
        favorite: true,
        stars: 5,
        visited:["Castel dell'Ovo", "Spaccanapoli", "Piazza del Plebiscito"],
        toEat: ["trattoria Locale", "Ristorante dell'hotel", "Bar"],
        duration:3,
        shortDescription: "È stato fantastico, dovete assolutamente provare!"
    },
    {
        id: "4",
        city: "Rome",
        name: "Ave cesare",
        description: "beautiful view of Rome, we can see the Colosseum from here, and the Tiber river",
        latitude: 0,
        longitude: 0,
        image: "../src/../assets/images/roma.jpg",
        favorite: false,
        stars: 4,
        visited:["posto1", "posto 2", "posto 3", "posto 4"],
        toEat: ["ristorante 1", "ristorante 2", "ristorante 3", "ristorante 4"],
        duration: 4,
        shortDescription: "Bellissima vista di Roma, si può vedere il Colosseo da qui, e il fiume Tevere, itinerario di 4 giorni da provare!"
    },
    {
        id: "5",
        city: "Japan",
        name: "Best intinearary ever",
        description: "beautiful view of Japan, we can see the Fuji mountain from here, and the sea",
        latitude: 0,
        longitude: 0,
        image: "../src/../assets/images/japan.jpg",
        favorite: true,
        stars: 5,
        visited:["posto1", "posto 2", "posto 3", "posto 4"],
        toEat: ["ristorante 1", "ristorante 2", "ristorante 3", "ristorante 4"],
        duration: 7,
        shortDescription: "I migliori posti da visitare e i migliori ristoranti da provare in Giappone per un viaggio di 3 giorni, segui questo itinerario!"

    },
   
]

export const sample_users: any[] = [
    {
        name: "Mario",
        email:"mario.giacomi@gmail.com",
        password: "1234",
        isAdmin: false,
    },
    {
        name: "Antonio",
        email:"antonio.avola@gmail.com",
        password: "1234",
        isAdmin: true,
    },
    {
        name: "matteo",
        email:"matteo.fefe@gmail.com",
        password: "1234",
        isAdmin: false,
    }
]