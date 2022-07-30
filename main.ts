basic.pause(200)
radio.setGroup(101)
radio.setTransmitPower(6)
led.enable(false)
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        radio.sendValue("U", 0)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        radio.sendValue("D", 0)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        0,
        hackbitmotors.Motors.M1A,
        150
        )
    }
    if (input.isGesture(Gesture.TiltRight)) {
        hackbitmotors.MotorRunDual(
        hackbitmotors.Motors.M1A,
        150,
        hackbitmotors.Motors.M1A,
        0
        )
    }
})
