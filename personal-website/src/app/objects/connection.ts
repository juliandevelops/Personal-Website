export default class Connection {
    repo: string

    playstore: string

    appstore: string

    fdroid: string

    pubdev: string

    youtrack: string

    constructor(repo: string, playstore: string, appstore: string, fdroid: string, pubdev: string, youtrack: string) {
        this.repo = repo
        this.playstore = playstore
        this.appstore = appstore
        this.fdroid = fdroid
        this.pubdev = pubdev
        this.youtrack = youtrack
    }

    public getActive(): Map<string, string> {
        let result: Map<string, string> = new Map()
        if (this.appstore != null && this.appstore.length > 0) {
            result.set('App Store', this.appstore)
        }
        if (this.repo != null && this.repo.length > 0) {
            result.set('Repository', this.repo)
        }
        if (this.playstore != null && this.playstore.length > 0) {
            result.set('Play Store', this.playstore)
        }
        if (this.fdroid != null && this.fdroid.length > 0) {
            result.set('F-Droid', this.fdroid)
        }
        if (this.pubdev != null && this.pubdev.length > 0) {
            result.set('Pub.dev', this.pubdev)
        }
        if (this.youtrack != null && this.youtrack.length > 0) {
            result.set('YouTrack', this.youtrack)
        }
        return result

    }
}
