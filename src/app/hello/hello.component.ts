import { Component } from "@angular/core";

@Component ({
    selector: 'hello',
    template: `
        <h2>
        Hello {{nome}}
    `
})

export class HelloComponent {
nome = 'Maria'
}