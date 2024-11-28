// Function for the Scuber Greeting
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';  // Free for rides <= 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';  // Charges 20 for rides between 400 and 2000 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';  // Charges 30 for rides between 2000 and 2500 feet
  } else {
    return 'No can do.';  // Does not allow rides over 2500 feet
  }
}

// Function for checking the city
function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';  // Checks if the city is NYC
}

 function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";

  }
 }
