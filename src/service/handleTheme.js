export class handleTheme {
  static detectTheme() {
    const darkThemeMatch = window.matchMedia("(prefers-color-scheme:dark)");

    if (darkThemeMatch.matches) {
      return "dark";
    } else {
      return "light";
    }
  }
}
