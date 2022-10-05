export const BASE_URL = 'https://hookb.in/eK160jgYJ6UlaRPldJ1P';

const request = ({method = 'POST', body}) => {
  const config = {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    ...!!body && {body: JSON.stringify(body)},
  }
  return fetch(BASE_URL, config)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(response.status);
  })
}

export const requestAuth = (
  car_coast,
  initail_payment,
  initail_payment_percent,
  lease_term,
  total_sum,
  monthly_payment_from,
  ) => {
  return request({
    body: {
      car_coast,
      initail_payment,
      initail_payment_percent,
      lease_term,
      total_sum,
      monthly_payment_from,
    },
  })
}
