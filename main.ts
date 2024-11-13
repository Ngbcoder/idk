let Seled = 0
input.onButtonPressed(Button.A, function () {
    Seled += 1
})
basic.forever(function () {
    if (Seled == 3) {
        Seled = 1
    }
})
