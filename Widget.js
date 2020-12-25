const URL = "https://www.rprxy.xyz/places/api-get-details?assetId=5940836435"
const Req = new Request(URL)
const LoadJSONURL = await Req.loadJSON()

let AbbreviatedOnlineCount = AbbreviateNumber(LoadJSONURL.OnlineCount)

function AbbreviateNumber(Value) {
    var NewValue = Value

    if (Value >= 1000) {
        var Suffixes = ["", "K", "M", "B", "T"]
        var SuffixNumber = Math.floor( ("" + Value).length / 3)
        var ShortValue = ""

        for (var Precision = 2; Precision >= 1; Precision--) {
            ShortValue = parseFloat( (SuffixNumber != 0 ? (Value / Math.pow(1000, SuffixNumber) ) : Value).toPrecision(Precision))

            var LessShortValue = (ShortValue + "").replace(/[^a-zA-Z 0-9]+/g, "")

            if (LessShortValue.length <= 2) {
                break
            }

            if (ShortValue % 1 != 0)

            ShortValue = ShortValue.toFixed(1)
            NewValue = ShortValue + Suffixes[SuffixNumber]
        }

        return NewValue
    }
}

if (config.runsInWidget) {
    let Widget = await CreateWidget("Tapping Realms Stats!", `${AbbreviatedOnlineCount} Playing!`, `${LoadJSONURL.TotalUpVotes} Total Likes!`, `${LoadJSONURL.FavoritedCount} Total Favorites!`, `${LoadJSONURL.VisitedCount} Total Visits!`)
    
    Script.setWidget(Widget)
    Script.complete()
} else {
    let Table = new UITable()
    let Row = new UITableRow()

    Row.isHeader = true
    Row.addText(`Tapping Realms Stats!`)
    Table.addRow(Row)

    Table.addRow(CreateRow("Online Players", LoadJSONURL.OnlineCount))
    Table.addRow(CreateRow("Total Likes", LoadJSONURL.TotalUpVotes))
    Table.addRow(CreateRow("Total Favorites", LoadJSONURL.FavoritedCount))
    Table.addRow(CreateRow("Total Visits", LoadJSONURL.VisitedCount))

    if (config.runsWithSiri)
        Speech.speak("Go fuck yourself you did this shit wrong you fucker!")

    Table.present()
}

function CreateRow(title, number) {
    let Row = new UITableRow()

    Row.addText(title)
    Row.addText(number.toString()).rightAligned()

    return Row
}

function CreateWidget(title, playing, likes, favorites, visits) {
    let Widget = new ListWidget()

    let TitleText = Widget.addText(title)

    TitleText.textColor = new Color("#48db27")
    TitleText.textOpacity = 0.9
    TitleText = Font.systemFont(16)

    Widget.addSpacer(5)

    let PlayingText = Widget.addText(playing)

    PlayingText.textColor = Color.blue()
    PlayingText.textOpacity = 0.9
    TitleText = Font.systemFont(16)

    Widget.addSpacer(5)

    let LikedText = Widget.addText(likes)

    LikedText.textColor = Color.blue()
    LikedText.textOpacity = 0.9
    LikedText = Font.systemFont(16)

    Widget.addSpacer(5)

    let FavoritedText = Widget.addText(favorites)

    FavoritedText.textColor = Color.blue()
    FavoritedText.textOpacity = 0.9
    FavoritedText = Font.systemFont(16)

    Widget.addSpacer(5)
    
    let VisitedText = Widget.addText(visits)

    VisitedText.textColor = Color.blue()
    VisitedText.textOpacity = 0.9
    VisitedText = Font.systemFont(16)

    Widget.addSpacer(5)

    let StartColor = new Color("#000428")
    let EndColor = new Color("#004e92")
    let Gradient = new LinearGradient()

    Gradient.colors = [StartColor, EndColor]
    Gradient.locations = [0.0, 1]

    Widget.backgroundGradient = Gradient

    return Widget
}
