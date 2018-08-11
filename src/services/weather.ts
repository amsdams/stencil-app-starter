import { WeatherRequest } from './model/weather-request';
const SERVICE_PATH: string = 'weather';
const BASE_PATH: string = 'http://api.openweathermap.org/data/2.5/';
const API_KEY: string = 'f982b1e209b0cc2b618a3e5066001104';
export function getQuery(request: WeatherRequest): string {
  const query = Object.keys(request)
    .map(k => escape(k) + '=' + escape(request[k]))
    .join('&');
  console.log(query);
  return query;
}
export function getResponse(query: string) {
  let url: string = BASE_PATH + SERVICE_PATH + '?' + query;
  url = url += '&appid=' + API_KEY;
  console.log(url);
  return fetch(url)
    .then((response: any) => {
      if (response.status != 200) {
        console.warn(response.status);
      }
      return response.json();
    })
    .catch(e => {
      console.log(e);
      return [];
    });
}
export function getRequest(q?: string, id?: string, lat?: string, lon?: string, zip?: string, units?: string, lang?: string, mode?: string): WeatherRequest {
  let request: WeatherRequest = {};
  if (q !== undefined && q !== null) {
    request.q = q;
  }
  if (id !== undefined && id !== null) {
    request.id = id;
  }
  if (lat !== undefined && lat !== null) {
    request.lat = lat;
  }
  if (lon !== undefined && lon !== null) {
    request.lon = lon;
  }
  if (zip !== undefined && zip !== null) {
    request.zip = zip;
  }
  if (units !== undefined && units !== null) {
    request.units = units;
  }
  if (lang !== undefined && lang !== null) {
    request.lang = lang;
  }
  if (mode !== undefined && mode !== null) {
    request.mode = mode;
  }
  console.log(request);
  return request;
}
