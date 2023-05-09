const URL_GOOGLE_SCRIPT =
  'https://script.google.com/macros/s/AKfycbzPH4Q87Mm8C4jhesbm5MTNND0DhfHmBN1JyZ-KyUhutHWe4Mfzy8781ydpd43DCvURIw/exec';

const postToGoogleScript = (data: any) => {
  console.log('About to send', data);

  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  console.log('formData', formData);

  fetch(URL_GOOGLE_SCRIPT, {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  });
};

export default { postToGoogleScript };
