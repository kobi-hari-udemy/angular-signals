import { Quiz } from "../models/quiz.model";

export const QUIZES: Quiz[] = [
    {
        id: 'hi01',
        displayName: 'History 01',
        questions: [
            {
                "caption": "When did World War II start?",
                "answers": ["September 1939", "October 1940", "January 1945", "February 1950"],
                "correctAnswer": 0
            },
            {
                "caption": "Who was the British Prime Minister during World War II?",
                "answers": ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"],
                "correctAnswer": 0
            },
            {
                "caption": "When was the United Nations founded?",
                "answers": ["1942", "1945", "1948", "1950"],
                "correctAnswer": 1
            },
            {
                "caption": "What event marked the beginning of the Great Depression?",
                "answers": ["The Stock Market Crash of 1929", "The end of World War I", "The Dust Bowl", "The start of World War II"],
                "correctAnswer": 0
            },
            {
                "caption": "What year did the Berlin Wall fall?",
                "answers": ["1987", "1988", "1989", "1990"],
                "correctAnswer": 2
            },
            {
                "caption": "Which country launched the first artificial satellite, Sputnik, into space?",
                "answers": ["USA", "Soviet Union", "China", "Germany"],
                "correctAnswer": 1
            },
            {
                "caption": "Who was the first person to walk on the moon?",
                "answers": ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "John Glenn"],
                "correctAnswer": 2
            },
            {
                "caption": "What year did the Cuban Missile Crisis occur?",
                "answers": ["1960", "1962", "1964", "1966"],
                "correctAnswer": 1
            },
            {
                "caption": "Which of these countries was NOT a member of the Axis Powers during World War II?",
                "answers": ["Germany", "Italy", "Japan", "France"],
                "correctAnswer": 3
            },
            {
                "caption": "What year did the Titanic sink?",
                "answers": ["1910", "1912", "1914", "1916"],
                "correctAnswer": 1
            }
        ]
    },
    {
        id: 'hi02',
        displayName: 'History 02',
        questions: [
            {
                "caption": "Which treaty marked the end of World War I?",
                "answers": ["Treaty of Versailles", "Treaty of Paris", "Treaty of Vienna", "Treaty of Trianon"],
                "correctAnswer": 0
            },
            {
                "caption": "In which year did India gain independence from British rule?",
                "answers": ["1945", "1946", "1947", "1948"],
                "correctAnswer": 2
            },
            {
                "caption": "What was the name of the first human-made object to reach space?",
                "answers": ["Explorer 1", "Sputnik 1", "Apollo 11", "Vostok 1"],
                "correctAnswer": 1
            },
            {
                "caption": "What was the codename for the Allied invasion of Normandy during World War II?",
                "answers": ["Operation Torch", "Operation Overlord", "Operation Neptune", "Operation Barbarossa"],
                "correctAnswer": 1
            },
            {
                "caption": "Which event directly led to the United States entering World War II?",
                "answers": ["The sinking of the Lusitania", "The attack on Pearl Harbor", "The invasion of Poland", "The Battle of Britain"],
                "correctAnswer": 1
            },
            {
                "caption": "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
                "answers": ["Joseph Stalin", "Leonid Brezhnev", "Nikita Khrushchev", "Mikhail Gorbachev"],
                "correctAnswer": 2
            },
            {
                "caption": "What year did the Russian Revolution of 1917 begin?",
                "answers": ["1905", "1914", "1917", "1922"],
                "correctAnswer": 2
            },
            {
                "caption": "Which battle is often considered the turning point in the Pacific Theater during World War II?",
                "answers": ["Battle of Midway", "Battle of the Coral Sea", "Battle of Guadalcanal", "Battle of Iwo Jima"],
                "correctAnswer": 0
            },
            {
                "caption": "Which country was expelled from the League of Nations in 1939 for invading Finland?",
                "answers": ["Germany", "Italy", "Soviet Union", "Japan"],
                "correctAnswer": 2
            },
            {
                "caption": "Which U.S. president implemented the New Deal during the Great Depression?",
                "answers": ["Herbert Hoover", "Harry S. Truman", "Franklin D. Roosevelt", "Dwight D. Eisenhower"],
                "correctAnswer": 2
            }
        ]
    }, 
    {
        id: 'ch01', 
        displayName: 'Chemestry 01', 
        questions: [
            {
                "caption": "What is the chemical symbol for gold?",
                "answers": ["Au", "Ag", "Gd", "Ga"],
                "correctAnswer": 0
            },
            {
                "caption": "Which element has the atomic number 6?",
                "answers": ["Nitrogen", "Carbon", "Oxygen", "Fluorine"],
                "correctAnswer": 1
            },
            {
                "caption": "Which gas is commonly known as laughing gas?",
                "answers": ["Carbon dioxide", "Nitrous oxide", "Sulfur dioxide", "Ammonia"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the pH of pure water at 25°C?",
                "answers": ["7", "5", "8", "6"],
                "correctAnswer": 0
            },
            {
                "caption": "Which acid is commonly found in car batteries?",
                "answers": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the main component of natural gas?",
                "answers": ["Methane", "Ethane", "Propane", "Butane"],
                "correctAnswer": 0
            },
            {
                "caption": "Which chemical element is used as the primary component in pencil lead?",
                "answers": ["Carbon", "Lead", "Graphite", "Silicon"],
                "correctAnswer": 2
            },
            {
                "caption": "What is the molecular formula for glucose?",
                "answers": ["C6H12O6", "C6H6", "C12H22O11", "CH4"],
                "correctAnswer": 0
            },
            {
                "caption": "Which of the following is a strong acid?",
                "answers": ["Hydrochloric acid", "Acetic acid", "Citric acid", "Phosphoric acid"],
                "correctAnswer": 0
            },
            {
                "caption": "Which element is the most abundant in the Earth's atmosphere?",
                "answers": ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
                "correctAnswer": 2
            },
            {
                "caption": "What is the most electronegative element?",
                "answers": ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
                "correctAnswer": 1
            },
            {
                "caption": "Which law states that pressure and volume of a gas have an inverse relationship at constant temperature?",
                "answers": ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Gay-Lussac's Law"],
                "correctAnswer": 0
            },
            {
                "caption": "What is the common name for the compound H2O2?",
                "answers": ["Water", "Hydrogen peroxide", "Hydrogen sulfide", "Ozone"],
                "correctAnswer": 1
            },
            {
                "caption": "In the periodic table, which element is in Group 1 and Period 2?",
                "answers": ["Lithium", "Sodium", "Potassium", "Beryllium"],
                "correctAnswer": 0
            },
            {
                "caption": "Which type of bond involves the sharing of electron pairs between atoms?",
                "answers": ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the name of the process by which plants convert sunlight into chemical energy?",
                "answers": ["Photosynthesis", "Respiration", "Fermentation", "Oxidation"],
                "correctAnswer": 0
            },
            {
                "caption": "Which of the following compounds is an example of an alkane?",
                "answers": ["Methane", "Ethene", "Propyne", "Butanol"],
                "correctAnswer": 0
            },
            {
                "caption": "Which of the following is the most acidic?",
                "answers": ["Lemon juice", "Vinegar", "Baking soda", "Bleach"],
                "correctAnswer": 0
            },
            {
                "caption": "Which element has the highest melting point?",
                "answers": ["Tungsten", "Iron", "Carbon", "Osmium"],
                "correctAnswer": 0
            },
            {
                "caption": "What is the name of the positively charged electrode in an electrolytic cell?",
                "answers": ["Anode", "Cathode", "Electrolyte", "Salt bridge"],
                "correctAnswer": 0
            }
        ]        
    }, {
        id: 'ch02',
        displayName: 'Chemestry 02', 
        questions: [
            {
                "caption": "Which element is commonly used as a catalyst in the Haber process?",
                "answers": ["Iron", "Platinum", "Nickel", "Copper"],
                "correctAnswer": 0
            },
            {
                "caption": "Which gas law states that the volume of a gas is directly proportional to its temperature at constant pressure?",
                "answers": ["Boyle's Law", "Charles's Law", "Avogadro's Law", "Dalton's Law"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the IUPAC name for the compound with the formula CH3CH2OH?",
                "answers": ["Methanol", "Ethanol", "Propanol", "Butanol"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the bond angle in a molecule of methane (CH4)?",
                "answers": ["90 degrees", "104.5 degrees", "109.5 degrees", "120 degrees"],
                "correctAnswer": 2
            },
            {
                "caption": "Which quantum number determines the shape of an electron's orbital?",
                "answers": ["Principal quantum number (n)", "Azimuthal quantum number (l)", "Magnetic quantum number (m)", "Spin quantum number (s)"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the common name of the compound with the chemical formula NaHCO3?",
                "answers": ["Baking soda", "Washing soda", "Bleaching powder", "Caustic soda"],
                "correctAnswer": 0
            },
            {
                "caption": "Which of the following elements is a lanthanide?",
                "answers": ["Cerium", "Platinum", "Zirconium", "Molybdenum"],
                "correctAnswer": 0
            },
            {
                "caption": "Which molecule is planar?",
                "answers": ["Methane (CH4)", "Ammonia (NH3)", "Benzene (C6H6)", "Water (H2O)"],
                "correctAnswer": 2
            },
            {
                "caption": "In which type of reaction do two compounds exchange ions to form two new compounds?",
                "answers": ["Synthesis reaction", "Decomposition reaction", "Single displacement reaction", "Double displacement reaction"],
                "correctAnswer": 3
            },
            {
                "caption": "What is the most common oxidation state of manganese in potassium permanganate (KMnO4)?",
                "answers": ["+2", "+3", "+5", "+7"],
                "correctAnswer": 3
            }
        ]         
    }, 
    {
        id: 'ci01', 
        displayName: 'Cities in the world', 
        questions: [
            {
                "caption": "What is the capital city of Hungary?",
                "answers": ["Budapest", "Bucharest", "Vienna", "Prague"],
                "correctAnswer": 0
            },
            {
                "caption": "Which city is known as the 'Eternal City'?",
                "answers": ["Athens", "Rome", "Paris", "Istanbul"],
                "correctAnswer": 1
            },
            {
                "caption": "Which city is home to the European Parliament?",
                "answers": ["Brussels", "Strasbourg", "Berlin", "Luxembourg"],
                "correctAnswer": 1
            },
            {
                "caption": "Which European city is known for its canals and is often called the 'Venice of the North'?",
                "answers": ["Amsterdam", "Stockholm", "Bruges", "Copenhagen"],
                "correctAnswer": 0
            },
            {
                "caption": "Which city is the capital of the German state of Bavaria?",
                "answers": ["Berlin", "Frankfurt", "Munich", "Stuttgart"],
                "correctAnswer": 2
            },
            {
                "caption": "Which city is the financial center of Switzerland?",
                "answers": ["Zurich", "Geneva", "Bern", "Basel"],
                "correctAnswer": 0
            },
            {
                "caption": "In which city would you find the Sagrada Familia?",
                "answers": ["Madrid", "Barcelona", "Lisbon", "Milan"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the capital city of Croatia?",
                "answers": ["Zagreb", "Ljubljana", "Sarajevo", "Belgrade"],
                "correctAnswer": 0
            },
            {
                "caption": "Which city is the capital of Latvia?",
                "answers": ["Vilnius", "Tallinn", "Riga", "Helsinki"],
                "correctAnswer": 2
            },
            {
                "caption": "Which city hosted the 1992 Summer Olympics?",
                "answers": ["Barcelona", "Athens", "Rome", "Paris"],
                "correctAnswer": 0
            },
            {
                "caption": "Which European capital city is located on the River Thames?",
                "answers": ["London", "Dublin", "Paris", "Berlin"],
                "correctAnswer": 0
            },
            {
                "caption": "Which city is the largest in terms of population in Europe?",
                "answers": ["Berlin", "Moscow", "London", "Paris"],
                "correctAnswer": 1
            },
            {
                "caption": "What is the capital city of Iceland?",
                "answers": ["Oslo", "Helsinki", "Reykjavik", "Copenhagen"],
                "correctAnswer": 2
            },
            {
                "caption": "Which city is famous for its annual Oktoberfest?",
                "answers": ["Berlin", "Vienna", "Munich", "Hamburg"],
                "correctAnswer": 2
            },
            {
                "caption": "Which city is the capital of the European Union?",
                "answers": ["Brussels", "Luxembourg", "Strasbourg", "Paris"],
                "correctAnswer": 0
            },
            {
                "caption": "In which city would you find the Colosseum?",
                "answers": ["Rome", "Athens", "Florence", "Naples"],
                "correctAnswer": 0
            },
            {
                "caption": "What is the second-largest city in Portugal?",
                "answers": ["Porto", "Lisbon", "Braga", "Coimbra"],
                "correctAnswer": 0
            },
            {
                "caption": "Which city is known for the historic event of the fall of its wall in 1989?",
                "answers": ["Warsaw", "Berlin", "Prague", "Vienna"],
                "correctAnswer": 1
            },
            {
                "caption": "Which city is the capital of Scotland?",
                "answers": ["Glasgow", "Edinburgh", "Aberdeen", "Dundee"],
                "correctAnswer": 1
            },
            {
                "caption": "Which city is famous for the Leaning Tower?",
                "answers": ["Florence", "Venice", "Pisa", "Milan"],
                "correctAnswer": 2
            }
        ]        
    }, 
    {
        id: 'sp01', 
        displayName: 'Sports', 
        questions: [
            {
                "caption": "Which country has won the most FIFA World Cup titles?",
                "answers": ["Germany", "Argentina", "Brazil", "Italy"],
                "correctAnswer": 2
            },
            {
                "caption": "In what year did Roger Federer win his first Wimbledon title?",
                "answers": ["2001", "2003", "2005", "2007"],
                "correctAnswer": 1
            },
            {
                "caption": "Which NBA team won the most championships during the 1990s?",
                "answers": ["Chicago Bulls", "Los Angeles Lakers", "Houston Rockets", "San Antonio Spurs"],
                "correctAnswer": 0
            },
            {
                "caption": "What is the maximum break in snooker?",
                "answers": ["137", "147", "155", "167"],
                "correctAnswer": 1
            },
            {
                "caption": "Which country won the Rugby World Cup in 2019?",
                "answers": ["New Zealand", "England", "South Africa", "Australia"],
                "correctAnswer": 2
            },
            {
                "caption": "Who is the only tennis player to have won each Grand Slam tournament at least twice?",
                "answers": ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Rod Laver"],
                "correctAnswer": 0
            },
            {
                "caption": "Which country has won the most Olympic gold medals in ice hockey?",
                "answers": ["Canada", "Russia", "Sweden", "USA"],
                "correctAnswer": 0
            },
            {
                "caption": "Which athlete holds the record for the most Olympic gold medals?",
                "answers": ["Usain Bolt", "Carl Lewis", "Michael Phelps", "Mark Spitz"],
                "correctAnswer": 2
            },
            {
                "caption": "Which Formula 1 driver has won the most World Championships?",
                "answers": ["Michael Schumacher", "Ayrton Senna", "Lewis Hamilton", "Alain Prost"],
                "correctAnswer": 0
            },
            {
                "caption": "Which country won the first ever FIFA World Cup in 1930?",
                "answers": ["Brazil", "Argentina", "Uruguay", "Italy"],
                "correctAnswer": 2
            },
            {
                "caption": "What is the highest score possible in a single frame of bowling?",
                "answers": ["200", "250", "300", "350"],
                "correctAnswer": 2
            },
            {
                "caption": "Which team won the 2018 FIFA World Cup?",
                "answers": ["Germany", "Brazil", "France", "Croatia"],
                "correctAnswer": 2
            },
            {
                "caption": "Which athlete is known as the 'Lightning Bolt'?",
                "answers": ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Asafa Powell"],
                "correctAnswer": 0
            },
            {
                "caption": "In which sport would you perform a Fosbury Flop?",
                "answers": ["Pole vault", "Long jump", "High jump", "Triple jump"],
                "correctAnswer": 2
            },
            {
                "caption": "Who holds the record for the most goals scored in a single Premier League season?",
                "answers": ["Thierry Henry", "Alan Shearer", "Cristiano Ronaldo", "Mohamed Salah"],
                "correctAnswer": 3
            },
            {
                "caption": "Which country hosted the 2008 Summer Olympics?",
                "answers": ["China", "Greece", "Australia", "Brazil"],
                "correctAnswer": 0
            },
            {
                "caption": "Which golfer is known for winning the 'Tiger Slam'?",
                "answers": ["Jack Nicklaus", "Phil Mickelson", "Tiger Woods", "Rory McIlroy"],
                "correctAnswer": 2
            },
            {
                "caption": "Which country has won the most Cricket World Cups?",
                "answers": ["India", "West Indies", "Australia", "England"],
                "correctAnswer": 2
            },
            {
                "caption": "What is the national sport of Japan?",
                "answers": ["Karate", "Sumo", "Judo", "Baseball"],
                "correctAnswer": 1
            },
            {
                "caption": "Which football club has won the most UEFA Champions League titles?",
                "answers": ["FC Barcelona", "AC Milan", "Real Madrid", "Liverpool"],
                "correctAnswer": 2
            }
        ]        
    }, 
    {
        id: 'fe01', 
        displayName: 'Famous People', 
        questions: [
            {
                "caption": "Who was the first woman to win a Nobel Prize?",
                "answers": ["Marie Curie", "Florence Nightingale", "Jane Austen", "Emmeline Pankhurst"],
                "correctAnswer": 0
            },
            {
                "caption": "Which actor is known for his role as Jack Dawson in the film 'Titanic'?",
                "answers": ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"],
                "correctAnswer": 2
            },
            {
                "caption": "Who was the first President of the United States?",
                "answers": ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
                "correctAnswer": 2
            },
            {
                "caption": "Who is often referred to as the 'Father of Modern Physics'?",
                "answers": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
                "correctAnswer": 0
            },
            {
                "caption": "Which famous composer became deaf later in life?",
                "answers": ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Ludwig van Beethoven", "Frédéric Chopin"],
                "correctAnswer": 2
            },
            {
                "caption": "Who was the first African American to serve as President of the United States?",
                "answers": ["Barack Obama", "Colin Powell", "Jesse Jackson", "Al Sharpton"],
                "correctAnswer": 0
            },
            {
                "caption": "Which artist is known for painting the Mona Lisa?",
                "answers": ["Vincent van Gogh", "Claude Monet", "Leonardo da Vinci", "Pablo Picasso"],
                "correctAnswer": 2
            },
            {
                "caption": "Who was the first person to set foot on the Moon?",
                "answers": ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins", "Neil Armstrong"],
                "correctAnswer": 3
            },
            {
                "caption": "Which famous scientist developed the theory of general relativity?",
                "answers": ["Stephen Hawking", "Albert Einstein", "Max Planck", "Richard Feynman"],
                "correctAnswer": 1
            },
            {
                "caption": "Who is known as the 'Queen of Pop'?",
                "answers": ["Madonna", "Beyoncé", "Lady Gaga", "Britney Spears"],
                "correctAnswer": 0
            },
            {
                "caption": "Who wrote the play 'Romeo and Juliet'?",
                "answers": ["William Shakespeare", "Charles Dickens", "Mark Twain", "George Orwell"],
                "correctAnswer": 0
            },
            {
                "caption": "Which British Prime Minister led the country during World War II?",
                "answers": ["Winston Churchill", "Margaret Thatcher", "Tony Blair", "David Lloyd George"],
                "correctAnswer": 0
            },
            {
                "caption": "Which civil rights leader delivered the famous 'I Have a Dream' speech?",
                "answers": ["Malcolm X", "Rosa Parks", "Martin Luther King Jr.", "Nelson Mandela"],
                "correctAnswer": 2
            },
            {
                "caption": "Who is known as the 'Iron Lady'?",
                "answers": ["Angela Merkel", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
                "correctAnswer": 1
            },
            {
                "caption": "Which famous painter cut off his own ear?",
                "answers": ["Pablo Picasso", "Salvador Dalí", "Vincent van Gogh", "Claude Monet"],
                "correctAnswer": 2
            },
            {
                "caption": "Who is known as the 'King of Rock and Roll'?",
                "answers": ["Elvis Presley", "Michael Jackson", "Johnny Cash", "Bob Dylan"],
                "correctAnswer": 0
            },
            {
                "caption": "Who founded Microsoft?",
                "answers": ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
                "correctAnswer": 1
            },
            {
                "caption": "Which famous author wrote 'The Great Gatsby'?",
                "answers": ["Ernest Hemingway", "F. Scott Fitzgerald", "Mark Twain", "John Steinbeck"],
                "correctAnswer": 1
            },
            {
                "caption": "Who was the first female Prime Minister of the United Kingdom?",
                "answers": ["Theresa May", "Angela Merkel", "Margaret Thatcher", "Indira Gandhi"],
                "correctAnswer": 2
            },
            {
                "caption": "Which physicist is known for his work on black holes and the book 'A Brief History of Time'?",
                "answers": ["Richard Feynman", "Stephen Hawking", "Carl Sagan", "Brian Cox"],
                "correctAnswer": 1
            }
        ]        
    }
]
