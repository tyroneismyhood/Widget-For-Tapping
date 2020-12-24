let notif

async function createNotification() {
    notif = new Notification()
    notif.title = "Test"
    notif.body = "Test2"
    notif.openURL = "https://github.com/YTDylan2/Widget-For-Tapping/tree-save/main/Notification.js"
    notif.scriptName = Script.name()
    notif.threadIdentifier = Script.name()    
}

await createNotification()
