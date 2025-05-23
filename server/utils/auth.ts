import type { H3Event } from 'h3';

export function getUserFromEvent(event: H3Event) {
  const userJsonString = getCookie(event, '_user');

  console.log('userJsonString: ', userJsonString);

  if (!userJsonString) {
    return null;
  }

  const user = JSON.parse(userJsonString);
  return user;
}
