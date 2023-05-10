const URL_GOOGLE_SCRIPT =
  'https://script.google.com/macros/s/AKfycbzehoVVqi5AnZHbLoIvNZUoL17DeCqem95mQtxhWYekrWovAepLlg2QXrhV7hV-k5kJ/exec';

const postToGoogleScript = (data: any) => {
  console.log('About to send', data);

  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  console.log('formData', formData);

  return fetch(URL_GOOGLE_SCRIPT, {
    method: 'POST',
    body: formData,
    mode: 'no-cors',
  });
};

export default { postToGoogleScript };
