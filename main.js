model = {
    numbers:[]
};

view = {
    render: function(numbers){ // numbers passed from controller so view doesn't know the model
        console.log(numbers);
    },
    fakeUserInput: function(i){
        controller.addNum(i);
    }
}

controller = {
    addNum: function(i){
        model.numbers.push(i);
        view.render(model.numbers); // all controller functions end by triggering render in view        
    }    
}

// initialising
function main(){
    for(let i = 0; i < 10; i++) {
        console.log(i)
        view.fakeUserInput(i)
    }
}

main();