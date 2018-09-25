var matrix = [
    [1, 2 , 3],
    [4, 5 , 6],
    [7 , 8 , 9]
  ];

  function Border() {
    resetCells();
    for( var i = 0 ; i < matrix.length ; i++ ) {
        for( var j = 0 ; j < matrix.length ; j++ ) {
            if (i == 0 || i == (matrix.length - 1) || j == 0 || j == (matrix.length - 1)) {
                changeColor(i,j);
            }
        }
    }
  }

  function UpperPart() {
    resetCells();
    for( var i = 0 ; i < matrix.length ; i++ ) {
        for( var j = 0 ; j < matrix.length ; j++ ) {
            if (i < j || i == j) {
                changeColor(i,j);
            }
        }
    }
  }

  function Diagonals() {
    resetCells();
    for( var i = 0 ; i < matrix.length ; i++ ) {
        for( var j = 0 ; j < matrix.length ; j++ ) {
            if (i == j || (i + j) == (matrix.length - 1)) {
                changeColor(i,j);
            }
        }
    }
  }

  function DownPart() {
    resetCells();
    for( var i = 0 ; i < matrix.length ; i++ ) {
        for( var j = 0 ; j < matrix.length ; j++ ) {
            if (i > j || i == j) {
                changeColor(i,j);
            }
        }
    }
  }

  function changeColor(row ,column) {
      
      if (row == 0) {
        num = column + row;
        str = "cell" + num;
      }

      if (row == 1) {
        num = column + row + 2;
        str = "cell" + num;
      }

      if (row == 2) {
        num = column + row + 4;
        str = "cell" + num;
      }

      document.getElementById(str).style.backgroundColor = "lightblue";
  }

  function resetCells() {
      str = "cell"
      for (var i = 0 ; i <= 8 ; i ++) {
          var cellName = str + i;
          document.getElementById(cellName).style.backgroundColor = "white";
      }
  }