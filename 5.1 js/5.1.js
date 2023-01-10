const countryToLiveIn = (language, isIsland, population, country) =>
  language === "English" && !isIsland && population < 50
    ? `You should live in ${country}`
    : `${country} does not meet your criteria`;

    console.log(countryToLiveIn('English', false, 39, 'Neverland'));
    
    console.log(countryToLiveIn('English', false, 77, 'Everland'));