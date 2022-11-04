// Checkbox functionality
export default class check {
  checked(taskarr, index) {
    this.taskarr = taskarr;
    this.taskarr[index - 1].completed = true;
  }

  unchecked(taskarr, index) {
    this.taskarr = taskarr;
    this.taskarr[index - 1].completed = false;
  }
}
