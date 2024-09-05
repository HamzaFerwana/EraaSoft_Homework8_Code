let shape = () => {
    let shape = prompt('ENTER THE XO GAME FINAL SHAPE (SEPARATED BY COMMA ",")');
    let shapeArr = shape.split(',');

    if (shapeArr.length == 9) {
        
        if (shapeArr[0] == shapeArr[1] && shapeArr[1] == shapeArr[2]) {
            console.log(shapeArr[0] + ' wins.');
        } else if (shapeArr[3] == shapeArr[4] && shapeArr[4] == shapeArr[5]) {

            console.log(shapeArr[3] + ' wins.');

        } else if (shapeArr[6] == shapeArr[7] && shapeArr[7] == shapeArr[8]) {

            console.log(shapeArr[6] + ' wins.');

        } else if (shapeArr[0] == shapeArr[4] && shapeArr[4] == shapeArr[8]) {

            console.log(shapeArr[0] + ' wins.');

        } else if (shapeArr[2] == shapeArr[4] && shapeArr[4] == shapeArr[6]) {

            console.log(shapeArr[2] + ' wins.');

        }
        else if (shapeArr[0] == shapeArr[3] && shapeArr[3] == shapeArr[6]) {

        console.log(shapeArr[0] + ' wins.');

    } else if (shapeArr[1] == shapeArr[4] && shapeArr[4] == shapeArr[7]) {

        console.log(shapeArr[1] + ' wins.');

    }
    else if (shapeArr[2] == shapeArr[5] && shapeArr[4] == shapeArr[8]) {

        console.log(shapeArr[2] + ' wins.');

    }
    else {

        console.log('tie.');

    }

} 

}
