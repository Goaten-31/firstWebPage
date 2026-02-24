function increment(){
    let count = 0;

    function addToCount(){
        count++;
        console.log(count);
    }

    return {addToCount};
}

const counter = increment();

counter.addToCount();
counter.addToCount();