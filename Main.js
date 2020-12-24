const URL = "https://www.rprxy.xyz/places/api-get-details?assetId=5940836435"
let ImageURL = "https://t4.rbxcdn.com/3a26edcfbc0cd732fa5bbd85adc6b04d"
const Req = new Request(URL)
const LoadJSONURL = await Req.loadJSON()

if (config.runsInWidget) {
    let Widget = await CreateWidget("Tapping Realms Stats!", `${LoadJSONURL.OnlineCount} Playing!`, `${LoadJSONURL.TotalUpVotes} Total Likes!`, `${LoadJSONURL.FavoritedCount} Total Favorites!`, "#0000000", "https://t4.rbxcdn.com/3a26edcfbc0cd732fa5bbd85adc6b04d")
    
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

async function loadImage(imageURL) {
    let RequestToImage = new Request(imageURL)
    let ImageToFind = await RequestToImage.loadImage()

    if (ImageToFind != null) {
        return ImageToFind
    } else {
        console.log("Well Fuck Something Happened And It Ain't Fuckin Good Cuz!")
    }
}


function CreateWidget(title, playing, likes, favorites, color, image) {
    let Widget = new ListWidget()

    Widget.backgroundColor = new Color(color)

    let TitleText = Widget.addText(title)

    TitleText.textColor = Color.white()
    TitleText.textOpacity = 0.9
    TitleText = Font.systemFont(16)

    Widget.addSpacer(5)

    let PlayingText = Widget.addText(playing)

    PlayingText.textColor = Color.green()
    PlayingText.textOpacity = 0.9
    TitleText = Font.systemFont(16)

    Widget.addSpacer(5)

    let LikedText = Widget.addText(likes)

    LikedText.textColor = Color.red()
    LikedText.textOpacity = 0.9
    LikedText = Font.systemFont(16)

    Widget.addSpacer(5)

    let FavoritedText = Widget.addText(favorites)

    FavoritedText.textColor = Color.blue()
    FavoritedText.textOpacity = 0.9
    FavoritedText = Font.systemFont(16)

    Widget.addSpacer(5)

    let ImageToLoad = await loadImage(ImageURL)

    Widget.backgroundImage = ImageToLoad

    return Widget
}

// OnlineCount, TotalUpVotes, FavoritedCount
