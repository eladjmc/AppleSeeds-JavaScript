const languageRanks = (language) => {
    let description = '';
    switch (language) {
        case 'mandarin':
            description = "MOST number of native speakers!'"
          break;

        case 'Spanish':
            description = "2nd place in a number of native speakers"
          break;

        case 'English':
            description = "3rd place most spoken language"
          break;

        case 'Hindi':
            description = "4th most spoken language"
          break;

        case 'Arabic':
            description = "5th most spoken language"
          break;

        default:
            description="Not in the top 5"
          break;
      }

      console.log(`${language} Is ${description}`);
}  

languageRanks('Hebrew');