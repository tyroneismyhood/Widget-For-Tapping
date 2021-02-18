const MinecraftAPIURL = "https://api.mcsrvstat.us/2/play.kastia.us"
const DiscordAPIURL = "https://p217-bot.glitch.me/api/kastiamembercount"
const Req = new Request(MinecraftAPIURL)
const Req2 = new Request(DiscordAPIURL)
const LoadMinecraftJSONURL = await Req.loadJSON()
const LoadDiscordJSONURL = await Req2.loadJSON()

let AbbreviatedMemberCount = AbbreviateNumber(LoadDiscordJSONURL.memberCount)
let TitleName = "Test"

function AbbreviateNumber(Value) {
    let NewValue = Value;

    const Suffixes = [
        "", 
        "K", 
        "M", 
        "B",
        "T"
    ];

    let SuffixNumber = 0;

    while (NewValue < 1000) {
        return Value;
    }

    while (NewValue >= 1000) {
        NewValue /= 1000;
        SuffixNumber++;
    }
  
    NewValue = NewValue.toPrecision(3);
    NewValue += Suffixes[SuffixNumber];

    return NewValue;
  }

if (config.runsInWidget) {
    let Widget = await CreateWidget(TitleName, `${AbbreviatedMemberCount} Discord Members`)
    
    Script.setWidget(Widget)
    Script.complete()
} else {
    let Table = new UITable()
    let Row = new UITableRow()

    Row.isHeader = true
    Row.addText(TitleName)
    Table.addRow(Row)

    Table.addRow(CreateRow("Discord members", AbbreviatedMemberCount))

    if (config.runsWithSiri)
        Speech.speak("Here's your stats fag!")

    Table.present()
}

function CreateRow(title, number) {
    let Row = new UITableRow()

    Row.addText(title)
    Row.addText(number.toString()).rightAligned()

    return Row
}

function CreateWidget(title, members) {
    let Widget = new ListWidget()

    let TitleText = Widget.addText(title)

    TitleText.textColor = new Color("#48db27")
    TitleText.textOpacity = 0.9
    TitleText = Font.systemFont(16)

    Widget.addSpacer(5)

    let DiscordMemberText = Widget.addText(members)

    DiscordMemberText.textColor = Color.blue()
    DiscordMemberText.textOpacity = 0.9
    DiscordMemberText = Font.systemFont(16)

    Widget.addSpacer(5)

    let StartColor = new Color("#000428")
    let EndColor = new Color("#004e92")
    let Gradient = new LinearGradient()

    Gradient.colors = [StartColor, EndColor]
    Gradient.locations = [0.0, 1]

    Widget.backgroundGradient = Gradient

    return Widget
}
