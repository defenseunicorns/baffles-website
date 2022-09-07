import { FormQuery } from './types';
import { stringify } from 'query-string';

const FORM_URL =
  'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfbhLRoEGgd6VIQOOl8b-uUAjdXiqfsFVPAZgFf1yZlNRmliw/formResponse?';

export function clearQuery(): FormQuery {
  return {
    name: '',
    email: '',
    organization: '',
  };
}

export function createQueryString(query: FormQuery): string {
  return stringify({
    // G-form name field id
    'entry.1414165667': query.name,
    // G-form email field id
    'entry.201202286': query.email,
    // G-form organization field id
    'entry.435380398': query.organization,
  });
}

export async function postEnterpriseSupportForm(
  formQuery: FormQuery,
  successHandler?: () => void,
  errorHandler?: () => void,
): Promise<void> {
  try {
    await fetch(FORM_URL + createQueryString(formQuery), {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
    successHandler && successHandler();
  } catch {
    errorHandler && errorHandler();
  }
}
