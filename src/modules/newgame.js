const newGame = async (gameName, url) => {
  const request = new Request(url);
  const data = { name: gameName };

  const response = await fetch(request, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const output = await response.json();
  return output.result;
};

export { newGame as default };