import EMAIL_TMPL from './email';

const TD_NAME_PLACEHOLDER = "[Insert TD's Name]";
const AREA_PLACEHOLDER = '[Insert local area name]';
const EMAIL_SUBJECT = 'Call for review on Ireland-China relateions';

export function getAddresses(tds) {
  return tds.map(td => td.email);
}

function getNames(tds) {
  const names = tds.map(td => td.name);
  names.sort();
  return names;
}

export function getEmailContent(tds) {
  const names = tds.length > 0 ? getNames(tds).join(', ') : TD_NAME_PLACEHOLDER;
  const area = tds.length > 0 ? tds[0].area : AREA_PLACEHOLDER;
  return EMAIL_TMPL.replace('%%TD_NAMES%%', names).replace('%%AREA%%', area);
}

export function getMailToLink(tds) {
  const address = getAddresses(tds).join(';\n');
  const body = encodeURIComponent(
    `${getEmailContent(tds)}\n\nReference: https://d4hk.ie`
  );
  return `mailto:${address}?subject=${EMAIL_SUBJECT}&body=${body}`;
}
