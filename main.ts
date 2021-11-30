input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.analogSetPitchPin(AnalogPin.P1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
})
radio.onReceivedString(function (receivedString) {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.SmallSquare)
    }
})
