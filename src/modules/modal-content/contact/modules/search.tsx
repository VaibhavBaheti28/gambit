function boyerMooreSearch(text: string, pattern: string): number[] {
  const NO_OF_CHARS = 256;

  function max(a: number, b: number): number {
    return a > b ? a : b;
  }

  function badCharHeuristic(
    str: string,
    size: number,
    badchar: number[]
  ): void {
    for (let i = 0; i < NO_OF_CHARS; i++) {
      badchar[i] = -1;
    }

    for (let i = 0; i < size; i++) {
      badchar[str.charCodeAt(i)] = i;
    }
  }

  const m = pattern.length;
  const n = text.length;

  const badchar: number[] = new Array(NO_OF_CHARS);
  const positions: number[] = [];

  badCharHeuristic(pattern, m, badchar);

  let s = 0; // s is the shift of the pattern with respect to the text

  while (s <= n - m) {
    let j = m - 1;

    while (j >= 0 && pattern[j] === text[s + j]) {
      j--;
    }

    if (j < 0) {
      positions.push(s);
      s += s + m < n ? m - badchar[text.charCodeAt(s + m)] : 1;
    } else {
      s += max(1, j - badchar[text.charCodeAt(s + j)]);
    }
  }

  return positions;
}

/* Driver program to test the above function */
export const searchText = (text: string, pattern: string) => {
  const positions: number[] = boyerMooreSearch(text, pattern);

  if (positions.length > 0) {
    return true;
  } else {
    return false;
  }
};
