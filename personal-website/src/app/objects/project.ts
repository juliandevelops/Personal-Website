import Connection from "./connection";

export default class Project {

    projectType: string

    identifier: string

    typeImplemented: string[]

    typeGoal: string[]

    platformsReady: string[]

    platformsGoal: string[]

    languages: string[]

    frameworks: string[]

    name: string

    description: string

    features: string[]

    connection: Connection

    firstVersionReleased: boolean

    activeSupport: boolean

    constructor(
        projectType: string,
        identifier: string,
        typeImplemented: string[],
        typeGoal: string[],
        platformsReady: string[],
        platformsGoal: string[],
        languages: string[],
        frameworks: string[],
        name: string,
        description: string,
        features: string[],
        connection: Connection,
        firstVersionReleased: boolean,
        activeSupport: boolean,
    ) {
        this.projectType = projectType
        this.identifier = identifier;
        this.typeImplemented = typeImplemented;
        this.typeGoal = typeGoal;
        this.platformsReady = platformsReady;
        this.platformsGoal = platformsGoal;
        this.languages = languages;
        this.frameworks = frameworks;
        this.name = name;
        this.description = description;
        this.features = features;
        this.connection = connection;
        this.firstVersionReleased = firstVersionReleased;
        this.activeSupport = activeSupport
    }
}
