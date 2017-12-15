import { Component, OnInit, OnDestroy } from '@angular/core';
import { <%= classify(name) %>Filter } from '../<%=dasherize(name)%>-filter';
import { <%= classify(name) %>Service } from '../<%=dasherize(name)%>.service';
import { <%= classify(name) %> } from '../<%=dasherize(name)%>';

@Component({
    selector: 'app-<%=dasherize(name)%>',
    templateUrl: '<%=dasherize(name)%>-list.component.html'
})
export class <%= classify(name) %>ListComponent implements OnInit, OnDestroy {

    filter = new <%= classify(name) %>Filter();
    selected<%=classify(name)%>: <%= classify(name) %>;

    get <%=camelize(name)%>List(): <%= classify(name) %>[] {
        return this.<%=camelize(name)%>Service.<%=camelize(name)%>List;
    }

    constructor(private <%=camelize(name)%>Service: <%= classify(name) %>Service) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    search(): void {
        this.<%=camelize(name)%>Service.load(this.filter);
    }

    select(selected: <%= classify(name) %>): void {
        this.selected<%= classify(name) %> = selected;
    }

}
