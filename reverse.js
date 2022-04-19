function reverseString(st) {
    var o = '';
    for (var i = st.length - 1; i >= 0; i--)
      o += st[i];
    return o;
  }
  
console.log(reverseString('hello'));

function reverseString(st) {
    var o = [];
    for (var i = 0, len = st.length; i <= len; i++)
        o.push(st.charAt(len - i));
    return o.join('');
}

console.log(reverseString('hello'));

function reverseString(st) {
    var i = st.length,
        o = '';
    while (i > 0) {
      o += st.substring(i - 1, i);
      i--;
    }
    return o;
  }

console.log(reverseString('hello'));

function reverseString(st) {
    return (st === '') ? '' : reverseString((st).substr(1)) + st.charAt(0);
  }
  
console.log(reverseString('hello'));

function reverseString(st) {
    st = st.split('');
    var len = st.length,
        halfIndex = Math.floor(len / 2) - 1,
        tmp;
    for (var i = 0; i <= halfIndex; i++) {
      tmp = st[len - i - 1];
      st[len - i - 1] = st[i];
      st[i] = tmp;
    }
    return st.join('');
  }

console.log(reverseString('hello'));

function reverseString5(st) {
    return [...st].reduceRight((accumulator, current) => accumulator + current);
  }

console.log(reverseString('hello'));

function reverseString6(st) {
    return st.split('').reverse().join('');
  }

console.log(reverseString('hello'));