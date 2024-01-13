input.onButtonPressed(Button.A, function () {
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 23)
    Kitronik_Move_Motor.writeAnalogPin(Kitronik_Move_Motor.PinSelection.P15, 1023)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `)
})
basic.showArrow(ArrowNames.East)
basic.forever(function () {
	
})
