async function isWinner(country) {
  try {
    const Data = await db.getWinner(country);
    if (Data.continent !== "Europe") {
      return `${country} is not what we are looking for because of the continent`;
    }
    const wins = await db.getResults(Data.id);
    if (wins.length < 3) {
      return `${country} is not what we are looking for because of the number of times it was champion`;
    }
    const years = wins.map((win) => win.year).join(", ");
    const scores = wins.map((win) => win.score).join(", ");

    return `${country} won the FIFA World Cup in ${years} winning by ${scores}`;
  } catch  {
    return `${country} never was a winner`;
  }
}
