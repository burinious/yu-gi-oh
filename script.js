var output = [];

function yugioh() {

    for (var count = 1; count <= 100; count++) {
        if (count % 2 === 0 && count % 3 === 0 && count % 5 === 0) {
            output.push("yu-gi-oh");
        } else if (count % 2 === 0 && count % 3 === 0) {
            output.push("yu-gi");
        } else if (count % 2 === 0 && count % 5 === 0) {
            output.push("yu-oh");
        } else if (count % 3 === 0 && count % 5 === 0) {
            output.push("gi-oh");
        }
        else if (count % 2 === 0) {
            output.push("yu");
        } else if (count % 3 === 0) {
            output.push("gi");
        } else if (count % 5 === 0) {
            output.push("oh");
        } else {
            output.push(count);
        }
    }
    return output;
}
    