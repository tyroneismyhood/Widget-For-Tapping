let Alert = new Alert()

Alert.title = "Horny Hour!"
Alert.addTextField("It's Horny Hour Mf!")
Alert.addTextField("Time To Pull Out The Horse Porn And Your Small Ass Cock And Jerk off!")
Alert.addAction("Accept")

if (await Alert.present() == 0) {
    const EntryOne = Alert.textFieldValue(0)
    
    console.log(EntryOne)

    const EntryTwo = Alert.textFieldValue(1)

    console.log(EntryTwo)
}
