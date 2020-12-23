const URL = "https://www.rprxy.xyz/places/api-get-details?assetId=5940836435"
const Req = new Request(URL)
const LoadJSONURL = await Req.loadJSON()

if (config.runsInWidget) {
    let Widget = CreateWidget("Tapping Realms Stats!", "#53d769")
    
    Script.setWidget(Widget)
    Script.complete()
} else {
    let Table = new UITable()
    // let Row = new UITableRow()

    // Row.isHeader = true
    // Row.addText(`Tapping Realms Stats!`)
    // Table.addRow(Row)

    Table.addRow(CreateRow("Online Players", LoadJSONURL.OnlineCount))
    Table.addRow(CreateRow("Total Likes", LoadJSONURL.TotalUpVotes))
    Table.addRow(CreateRow("Total Favorites", LoadJSONURL.FavoritedCount))

    if (config.runsWithSiri)
        Speech.speak(`There Are ${LoadJSONURL.OnlineCount} Stupid Fucks Playing Your Game!`)

    Table.present()
}

function CreateRow(title, number) {
    let Row = new UITableRow()

    Row.addText(title)
    Row.addText(number.toString()).rightAligned()

    return Row
}

function CreateWidget(pretitle, color) {
    let Widget = new ListWidget()

    Widget.backgroundColor = new Color(color)

    let PreText = Widget.addText(pretitle)

    PreText.textColor = Color.white()
    PreText.textOpacity = 0.9
    PreText = Font.systemFont(16)

    Widget.addSpacer(5)

    return Widget
}

// OnlineCount, TotalUpVotes, FavoritedCount
