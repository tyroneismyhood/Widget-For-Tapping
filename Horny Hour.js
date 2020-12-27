async function CreateNotification() {
    notif = new Notification()
    notif.title = "Horny Hour!"
    notif.body = "Time For Horse Porn!"
    notif.threadIdentifier = Script.name()

    // notif.setTriggerDate(1)
    await notif.schedule()
}

await CreateNotification()
