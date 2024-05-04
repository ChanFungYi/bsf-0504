input.onButtonPressed(Button.A, function () {
    N = 0
})
function Temp__humid (text: string) {
    naturalScience.requstdata()
    naturalScience.setOLEDShowString(1, 16, 3, "TEMP: " + naturalScience.getBME(BME.TEMP) + "C")
    naturalScience.setOLEDShowString(1, 16, 4, "HUMD: " + naturalScience.getBME(BME.HUM) + "%")
    naturalScience.microIoT_SendMessage("TEMP: " + naturalScience.getBME(BME.TEMP) + "C", naturalScience.TOPIC.topic_0)
    naturalScience.microIoT_SendMessage("HUMD: " + naturalScience.getBME(BME.HUM) + "%", naturalScience.TOPIC.topic_0)
}
function CO2 (text: string) {
    naturalScience.requstdata()
    naturalScience.setOLEDShowString(1, 16, 1, "CO2: " + naturalScience.getTVOC(CT.CO2) + "ppm")
    if (naturalScience.getTVOC(CT.CO2) > 2500) {
        naturalScience.microIoT_setIndexColor(1, 0xff0000)
        basic.showIcon(IconNames.Skull)
    }
    if (naturalScience.getTVOC(CT.CO2) > 1000 || naturalScience.getTVOC(CT.CO2) < 2499) {
        naturalScience.microIoT_setIndexColor(1, 0xff8000)
    }
    if (naturalScience.getTVOC(CT.CO2) > 501 || naturalScience.getTVOC(CT.CO2) < 999) {
        naturalScience.microIoT_setIndexColor(1, 0x00ffff)
    }
    if (naturalScience.getTVOC(CT.CO2) < 500) {
        naturalScience.microIoT_setIndexColor(1, 0x00ff00)
    }
    naturalScience.microIoT_SendMessage("CO2: " + naturalScience.getTVOC(CT.CO2) + "ppm", naturalScience.TOPIC.topic_0)
}
function TVOC (text: string) {
    naturalScience.requstdata()
    naturalScience.setOLEDShowString(1, 16, 2, "TVOC:" + naturalScience.getTVOC(CT.TVOC) + "ppd")
    if (naturalScience.getTVOC(CT.TVOC) > 6001) {
        naturalScience.microIoT_setIndexColor(2, 0xff0000)
        basic.showIcon(IconNames.No)
    }
    if (naturalScience.getTVOC(CT.TVOC) > 750 || naturalScience.getTVOC(CT.CO2) < 6000) {
        naturalScience.microIoT_setIndexColor(2, 0xff8000)
    }
    if (naturalScience.getTVOC(CT.TVOC) > 51 || naturalScience.getTVOC(CT.CO2) < 749) {
        naturalScience.microIoT_setIndexColor(2, 0x00ffff)
    }
    if (naturalScience.getTVOC(CT.TVOC) < 50) {
        naturalScience.microIoT_setIndexColor(2, 0x00ff00)
    }
    naturalScience.microIoT_SendMessage("TVOC:" + naturalScience.getTVOC(CT.TVOC) + "ppd", naturalScience.TOPIC.topic_0)
}
let N = 0
basic.showIcon(IconNames.Heart)
basic.clearScreen()
naturalScience.microIoT_WIFI("ChanFungYi-iPhone", "56781234")
naturalScience.microIoT_MQTT(
"I1fmeufSR",
"",
"CgGZ6XBIR",
naturalScience.SERVERS.English
)
naturalScience.microIoT_setBrightness(10)
naturalScience.setBaseline(33915)
N = 0
basic.forever(function () {
    CO2("CO2")
    TVOC("TVOC")
    Temp__humid("Temp & humid")
})
