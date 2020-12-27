async function CreateNotification() {
    notif = new Notification()
    notif.title = "Horny Hour!"
    notif.body = "Time For Horse Porn!"
    notif.threadIdentifier = Script.name()

    Notification.setTriggerDate(1)
    await Notification.schedule()
}

await CreateNotification()
