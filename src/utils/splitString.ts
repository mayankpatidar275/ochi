function splitStringByRegex(inputString: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  //   The loop proceeds to the next iteration because regex.exec() remembers its position in the string due to the g flag. Each call advances the internal pointer of the regex engine to search for the next match, ensuring all characters in the string are processed sequentially.

  while ((match = regex.exec(inputString)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

export default splitStringByRegex;
