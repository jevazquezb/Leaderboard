import Body from './body_class.js';

const sendScore = async (user, score, url) => {
  const requestURL = url;
  const request = new Request(requestURL);
  const data = new Body(user, score);

  const response = await fetch(request, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const output = await response.json();
  return output.result;
}

const retrieveScore = async (url) => {
  const requestURL = url;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const output = await response.json();
  return output.result;
}

export { sendScore, retrieveScore };
