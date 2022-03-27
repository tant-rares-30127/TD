var app = new Vue({
  el: "#hamming-encoder",
  data: {
    dataBits: [],
    status: "",
    numberOfDataBits: 4,
  },
  created: function () {
    this.initDataBits(4);
  },
  methods: {
    initDataBits: function () {
      this.dataBits = [];

      for (var i = 0; i < this.numberOfDataBits; i++) {
        var bit = { data: null };
        this.dataBits.push(bit);
      }
    },
    send: function () {
      if (this.validate(this.dataBits) === true) {
        var encodedMessage = this.encode(this.dataBits);

        return axios
          .put("http://localhost:3000/message", { bits: encodedMessage })
          .then((response) => (this.status = response.data));
      } else {
        this.status =
          "Input is not valid . Please use 0 or 1 as data bit values ";
      }
    },
    encode: function (bits) {
      // This function must be changed to allow anynumber of data bits
      // Right now it only works for 4 data bits
      // Number of control bits
      var k = 0;
      var m = bits.length;

      if (m === 1) k = 2;
      else {
        if (m === 2) k = 3;
        else {
          for (var i = 2; i <= m; i++) {
            if (Math.pow(2, i) >= m + i + 1) {
              k = i;
            }
            if (k != 0) break;
          }
        }
      }
      var H = [];
      for (var i = 0; i < k; i++) {
        H[i] = [];
        for (var j = 0; j < k + m; j++) {
          H[i][j] = 0;
        }
      }

      for (var i = 0; i < k + m; i++) {
        var j = k - 1;
        var x = i + 1;
        while (x > 0) {
          H[j][i] = x % 2;
          x = Math.floor(x / 2);
          j = j - 1;
        }
      }
      console.table(H);

      var cbits = [];
      for (var i = 0; i < k; i++) {
        var n = 0;
        var s = 0;
        var pow = 0;
        for (var j = 0; j < k + m; j++) {
          if (Math.pow(2, pow) != j + 1) {
            s = s + H[i][j] * bits[n].data;
            n = n + 1;
          } else {
            pow = pow + 1;
          }
        }
        console.log(" ");
        cbits.push(this.parity(s));
      }
      console.log(cbits.reverse());
      return [
        // c1,
        // c2,
        // parseInt(bits[0].data),
        // c4,
        // parseInt(bits[1].data),
        // parseInt(bits[2].data),
        // parseInt(bits[3].data),
        // c8,
        // parseInt(bits[4].data),
        // parseInt(bits[5].data),
        // parseInt(bits[6].data),
        // parseInt(bits[7].data),
      ];
    },
    parity: function (number) {
      return number % 2;
    },
    validate: function (bits) {
      for (var i = 0; i < bits.length; i++) {
        if (this.validateBit(bits[i].data) === false) return false;
      }
      return true;
    },
    validateBit: function (character) {
      if (character === null) return false;
      return parseInt(character) === 0 || parseInt(character) === 1;
    },
  },
});
