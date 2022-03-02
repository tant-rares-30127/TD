function getFibonacci(n) {
  if ((n < 1) | (n > 10)) return "not allowed";
  else {
    if (n == 1) return [1];
    else {
      var v = [1, 1];
      for (var i = 1; i < n - 1; i++) {
        v.push(v[i] + v[i - 1]);
      }
      return v;
    }
  }
}
