import { <%= classify(name) %> } from './<%=dasherize(name)%>';
import { <%= classify(name) %>Filter } from './<%=dasherize(name)%>-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {getFilterFields} from '../../../utils/crud-model-utils';

@Injectable()
export class <%= classify(name) %>Service {

    afsPath: string;

    constructor(private afs: AngularFirestore) {
        this.afsPath = <%=camelize(name)%>;
    }

    findById(id: string): AngularFirestoreDocument<<%= classify(name) %>> {
        return this.afs.doc(`${this.afsPath}/${id}`);
}

    load(): AngularFirestoreCollection<<%= classify(name) %>> {
        return this.afs.collection(this.afsPath, ref => ref.orderBy('<%= model.indexOn %>'));
}

    find(filter: <%= classify(name) %>Filter): Observable<<%= classify(name) %>[]> {
        return this.afs.collection(this.afsPath, ref => {
            <%
            let fields = getFilterFields(model);
            if (fields) {
                for (let field of fields) {
                %>
                    ref = ref.where('<%=field.name%>', '==', 'filter.<%=field.name%>');
                <%
                }
            }
        %>
        });
}

    create(entity: <%= classify(name) %>): Promise<any> {
        const key = this.afs.createId();

    return this.afs.doc(`${this.afsPath}/${key}`).set(entity);
}

    update(key: string, entity: <%= classify(name) %>): Promise<any> {
        return this.afs.doc(`${this.afsPath}/${key}`).update(entity);
}

    remove(key: string): Promise<any> {
        return this.afs.doc(`${this.afsPath}/${key}`).delete();
}
}
