const typeOfColor = (color) => {
    switch (color) {
        case 'pink' || 'yellow' || 'orange':
            return 'light color';
          break;
          
          case 'blue' || 'purple' || 'brown':
            return 'dark color';
          break;

        default:
            return 'Unknown color';
    }

}
console.log(typeOfColor('pink'));