function isPalindrome(x) {
    let str = x.toString();
    let n = str.length;

    for (let i = 0; i < n; i++) {
        if (str[i] !== str[n - 1 - i]) {
            return false;
        }
    }

    return true;
}
