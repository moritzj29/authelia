import BluebirdPromise = require("bluebird");
import Sinon = require("sinon");
import { ICollection } from "../../../../../src/server/lib/storage/ICollection";
import { ICollectionFactory } from "../../../../../src/server/lib/storage/ICollectionFactory";

export class CollectionFactoryStub implements ICollectionFactory {
    buildStub: Sinon.SinonStub;

    constructor() {
        this.buildStub = Sinon.stub();
    }

    build(collectionName: string): ICollection {
        return this.buildStub(collectionName);
    }
}
