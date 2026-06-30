/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?: string): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  const personIsKnown = `One for ${name}, one for me.`;
  const unknownPerson = `One for you, one for me.`
  // ^
  // allows the tests to import this function and call it
  // <-- Your code goes here. You may remove all the commentary in this file.
  if (!name) {
    return unknownPerson
  } else {
    return personIsKnown
  }
}
