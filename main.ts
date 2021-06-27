input.onButtonPressed(Button.A, function () {
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "api.thingspeak.com",
    80,
    "/update?api_key=M69ZVWEMWTMK9HHK&filed1=" + Dice
    )
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Dice = randint(1, 6)
    basic.showNumber(Dice)
})
let Dice = 0
WiFiBit.connectToWiFiBit()
WiFiBit.connectToWiFiNetwork("XHsc40000", "ncc1701a")
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
