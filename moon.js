/**
 * Create permalink
 * @param text
 * @returns {string}
 */
function createPermalink(text) {
  if (typeof text === 'string') {
    text = text.replace(new RegExp('Ç', 'g'), 'c');
    text = text.replace(new RegExp('ç', 'g'), 'c');
    text = text.replace(new RegExp('Ğ', 'g'), 'g');
    text = text.replace(new RegExp('ğ', 'g'), 'g');
    text = text.replace(new RegExp('I', 'g'), 'i');
    text = text.replace(new RegExp('ı', 'g'), 'i');
    text = text.replace(new RegExp('İ', 'g'), 'i');
    text = text.replace(new RegExp('Ö', 'g'), 'o');
    text = text.replace(new RegExp('ö', 'g'), 'o');
    text = text.replace(new RegExp('Ş', 'g'), 's');
    text = text.replace(new RegExp('ş', 'g'), 's');
    text = text.replace(new RegExp('Ü', 'g'), 'u');
    text = text.replace(new RegExp('ü', 'g'), 'u');
    text = text.replace(new RegExp(' ', 'g'), '-');
  }

  return text.toLowerCase();
}

/**
 * Check if value has turkish dependent character (It's useful for an alternate search)
 * @param value
 * @returns {boolean}
 */
function isContainTurkishDependentCharacter(value) {
  const regex = /[cCçÇgGğĞıIiİoOöÖsSşŞuUüÜ]/;
  return regex.test(value);
}