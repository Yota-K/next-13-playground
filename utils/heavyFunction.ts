export function heavyFunction() {
  let i = 0;

  while (i < 1000000000) {
    i++;
  }
  console.log('重い処理を実行');
}
