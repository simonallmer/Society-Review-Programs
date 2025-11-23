const conflicts = [
    {
        name: "French Wars of Religion",
        year: "1562-1598",
        type: "Internal War", // Inferred
        location: "Europe (France)",
        casualties: "3 000 000"
    },
    {
        name: "Imjin War",
        year: "1592-1598",
        type: "Interstate War", // Inferred
        location: "Asia (Korea)",
        casualties: "1 100 000"
    },
    {
        name: "Transition from Ming to Qing",
        year: "1618-1683",
        type: "Interstate War", // Inferred
        location: "Asia (China, Korea, Mongolia, Russia)",
        casualties: "25 000 000"
    },
    {
        name: "Thirty Years’ War",
        year: "1618-1648",
        type: "Interstate War", // Updated per user request
        location: "Europe",
        casualties: "8 000 000" // Common estimate
    },
    {
        name: "Wars of the Three Kingdoms",
        year: "1639-1651",
        type: "Internal War",
        location: "Europe (British Isles)",
        casualties: "38 000 000"
    },
    {
        name: "Deluge",
        year: "1655-1660",
        type: "Interstate War",
        location: "Europe (Poland-Lithuania)",
        casualties: "3 500 000"
    },
    {
        name: "Deccan Wars",
        year: "1680-1707",
        type: "Interstate War",
        location: "Asia (India)",
        casualties: "5 000 000"
    },
    {
        name: "First Continental War [Nine Years' War]",
        year: "1688-1697",
        type: "Continental War",
        location: "North America, South America, Europe, Asia",
        casualties: "680 000"
    },
    {
        name: "Second Continental War [War of the Spanish Succession]",
        year: "1701-1714",
        type: "Continental War",
        location: "North America, South America, Europe, Africa",
        casualties: "400 000"
    },
    {
        name: "Third Continental War [War of the Austrian Succession]",
        year: "1740-1748",
        type: "Continental War",
        location: "North America, South America, Europe, Asia",
        casualties: "360 000"
    },
    {
        name: "First Global War [Seven Years’ War]",
        year: "1756-1763",
        type: "Global War",
        location: "North America, South America, Europe, Africa, Asia",
        casualties: "1 000 000"
    },
    {
        name: "Tây Sơn Rebellion",
        year: "1771-1802",
        type: "Internal War",
        location: "Asia (Vietnam)",
        casualties: "2 000 000"
    },
    {
        name: "Fourth Continental War [French Revolutionary Wars]",
        year: "1792-1802",
        type: "Continental War",
        location: "Europe, Africa, Asia, Americas",
        casualties: "1 400 000"
    },
    {
        name: "Napoleonic Wars",
        year: "1803-1815",
        type: "Series",
        location: "Various",
        casualties: "5 000 000"
    },
    {
        name: "Peninsular War",
        year: "1808-1814",
        type: "Interstate War",
        location: "Europe (Spain, Portugal)",
        casualties: "1 000 000"
    },
    {
        name: "Lifaqane",
        year: "1815-1840",
        type: "Internal War",
        location: "Africa (Southern)",
        casualties: "1 800 000"
    },
    {
        name: "Taiping Rebellion",
        year: "1850-1864",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "30 000 000"
    },
    {
        name: "Miao Rebellion",
        year: "1854-1873",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "4 900 000"
    },
    {
        name: "Punti-Hakka Clan Wars",
        year: "1855-1867",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "1 000 000"
    },
    {
        name: "Panthay Rebellion",
        year: "1856-1873",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "3 000 000"
    },
    {
        name: "Dungan Revolt",
        year: "1862-1877",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "21 000 000"
    },
    {
        name: "Circassian Genocide",
        year: "1863-1878",
        type: "Genocide",
        location: "Asia (Russia)",
        casualties: "2 000 000"
    },
    {
        name: "Hazara Genocide",
        year: "1888-1893",
        type: "Genocide",
        location: "Asia (Afghanistan)",
        casualties: "1 000 000"
    },
    {
        name: "Mexican Revolution",
        year: "1911-1920",
        type: "Internal War",
        location: "North America (Mexico)",
        casualties: "1 700 000"
    },
    {
        name: "Second Global War [World War I]",
        year: "1914-1918",
        type: "Global War",
        location: "North America, South America, Europe, Africa, Asia, Australia",
        casualties: "20 000 000"
    },
    {
        name: "Russian Civil War",
        year: "1917-1922",
        type: "Internal War",
        location: "Europe/Asia (Russia)",
        casualties: "10 000 000"
    },
    {
        name: "First Phase of the Chinese Civil War",
        year: "1927-1937",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "7 000 000"
    },
    {
        name: "Asharshylyk",
        year: "1930-1933",
        type: "Genocide", // Or Politicide/Famine
        location: "Asia (Kazakhstan)",
        casualties: "2 000 000"
    },
    {
        name: "Holodomor",
        year: "1932-1933",
        type: "Genocide",
        location: "Europe (Ukraine)",
        casualties: "6 000 000"
    },
    {
        name: "Third Global War [World War II]",
        year: "1939-1945",
        type: "Global War",
        location: "North America, South America, Europe, Africa, Asia, Australia",
        casualties: "50 000 000"
    },
    {
        name: "Second Phase of the Chinese Civil War",
        year: "1945-1949",
        type: "Internal War",
        location: "Asia (China)",
        casualties: "1 300 000"
    },
    {
        name: "Korean War",
        year: "1950-1953",
        type: "Frozen Conflict", // As per text
        location: "Asia (Korea)",
        casualties: "3 000 000"
    },
    {
        name: "First Sudanese Civil War",
        year: "1955-1972",
        type: "Internal War",
        location: "Africa (Sudan)",
        casualties: "1 000 000"
    },
    {
        name: "Vietnam War",
        year: "1955-1975",
        type: "Interstate War",
        location: "Asia (Vietnam)",
        casualties: "3 595 000"
    },
    {
        name: "Nigerian Civil War",
        year: "1967-1970",
        type: "Internal War",
        location: "Africa (Nigeria)",
        casualties: "3 000 000"
    },
    {
        name: "Bangladesh Genocide",
        year: "1971",
        type: "Genocide",
        location: "Asia (Bangladesh)",
        casualties: "3 000 000"
    },
    {
        name: "Cambodian Genocide",
        year: "1975-1979",
        type: "Genocide",
        location: "Asia (Cambodia)",
        casualties: "2 500 000"
    },
    {
        name: "Soviet-Afghan War",
        year: "1979-1989",
        type: "Interstate War",
        location: "Asia (Afghanistan)",
        casualties: "3 000 000"
    },
    {
        name: "Second Sudanese Civil War",
        year: "1983-2005",
        type: "Internal War",
        location: "Africa (Sudan)",
        casualties: "2 000 000"
    },
    {
        name: "Tutsi Genocide",
        year: "1994",
        type: "Genocide",
        location: "Africa (Rwanda, Burundi)",
        casualties: "800 000"
    },
    {
        name: "Congo Wars",
        year: "1996-2003",
        type: "Interstate War",
        location: "Africa (DRC)",
        casualties: "5 425 000"
    },
    {
        name: "Russia-Ukraine War",
        year: "2022-Present",
        type: "Interstate War",
        location: "Europe (Ukraine)",
        casualties: "1 000 000"
    }
];
