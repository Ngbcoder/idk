let Seled = 0
input.onButtonPressed(Button.A, function () {
    Seled += 1
})
input.onButtonPressed(Button.B, function () {
    Seled += -1
})
basic.forever(function () {
    if (Seled == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (Seled == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
basic.forever(function () {
    if (Seled == 3) {
        Seled = 1
    }
})
